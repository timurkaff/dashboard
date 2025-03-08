'use client';
import SidebarMenu from '@/shared/Sidebar_menu';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Обработчик изменения состояния drawer
  const handleDrawerChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
    // Добавляем класс к body для глобального стиля
    if (isOpen) {
      document.body.classList.add('drawer-is-open');
    } else {
      document.body.classList.remove('drawer-is-open');
    }
  };

  // Слушаем изменения чекбокса drawer
  useEffect(() => {
    const drawerCheckbox = document.getElementById('my-drawer') as HTMLInputElement | null;
    
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target) {
        handleDrawerChange(target.checked);
      }
    };
    
    if (drawerCheckbox) {
      drawerCheckbox.addEventListener('change', handleChange);
    }

    return () => {
      if (drawerCheckbox) {
        drawerCheckbox.removeEventListener('change', handleChange);
      }
    };
  }, []);

  return (
    <div className={isDrawerOpen ? 'drawer-open' : ''}>
      <SidebarMenu activeItem={activeItem} setActiveItem={setActiveItem} />
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={(e) => handleDrawerChange(e.target.checked)}
      />
      <main>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{activeItem}</h1>
          <p>Добро пожаловать в {activeItem}</p>
        </div>
      </main>
    </div>
  );
}