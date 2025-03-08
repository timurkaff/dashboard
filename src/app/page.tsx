'use client';
import SidebarMenu from '@/shared/Sidebar_menu';
import { useState, useEffect, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/app/dashboard/ui/Dashboard/Dashboard').then(mod => ({ default: mod.Dashboard })), {
  ssr: false,
  loading: () => <div>Загрузка...</div>
});

const Inbox = dynamic(() => import('@/app/dashboard/ui/indox/Inbox').then(mod => ({ default: mod.Inbox })), {
  ssr: false,
  loading: () => <div>Загрузка...</div>
});

const Products = dynamic(() => import('@/app/dashboard/ui/Products/Products').then(mod => ({ default: mod.Products })), {
  ssr: false,
  loading: () => <div>Загрузка...</div>
});

const Favorites = dynamic(() => import('@/app/dashboard/ui/Favorites/Favorites').then(mod => ({ default: mod.Favorites })), {
  ssr: false,
  loading: () => <div>Загрузка...</div>
});

export default function Home() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerChange = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen);
    if (isOpen) {
      document.body.classList.add('drawer-is-open');
      document.documentElement.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-is-open');
      document.documentElement.classList.remove('drawer-open');
    }
  };

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

  const renderComponent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <Dashboard isDrawerOpen={isDrawerOpen} />;
      case 'Inbox':
        return <Inbox />;
      case 'Products':
        return <Products />;
      case 'Favorites':
        return <Favorites />;
      default:
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{activeItem}</h1>
            <p>Добро пожаловать в {activeItem}</p>
          </div>
        );
    }
  };

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
      <main className="p-0 m-0">
        <Suspense fallback={<div className="p-4">Загрузка...</div>}>
          {renderComponent()}
        </Suspense>
      </main>
    </div>
  );
}