'use client'
import NavigationTopBar from '@/shared/NavigationTopBar';
import { MenuHeader } from './ui/MenuHeader';
import { MenuSection } from './ui/MenuSection';
import { useEffect, useState } from 'react';

function SidebarMenu({ activeItem, setActiveItem }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const menuItemClass = (itemName) =>
    `flex items-center ${activeItem === itemName 
      ? 'bg-[#4880FF] text-white' 
      : 'hover:bg-[#4880FF] hover:text-white'}`;

  const mainItems = [
    { name: 'Dashboard', icon: 'IoSpeedometerOutline' },
    { name: 'Products', icon: 'MdOutlineWindow' },
    { name: 'Favorites', icon: 'CiHeart' },
    { name: 'Inbox', icon: 'IoChatbubblesOutline' },
    { name: 'Order Lists', icon: 'FaListCheck' },
    { name: 'Product Stock', icon: 'MdOutlineSensorDoor' },
  ];

  const pagesItems = [
    { name: 'Pricing', icon: 'IoPricetagsOutline' },
    { name: 'Calendar', icon: 'MdOutlineCalendarToday' },
    { name: 'To-Do', icon: 'IoIosDocument' },
    { name: 'Contact', icon: 'MdOutlineContactMail' },
    { name: 'Invoice', icon: 'RiFileList2Line' },
    { name: 'UI Elements', icon: 'MdOutlineWindow' },
    { name: 'Team', icon: 'FaUsers' },
    { name: 'Table', icon: 'FaTable' },
  ];

  const settingsItems = [
    { name: 'Settings', icon: 'CiSettings' },
    { name: 'Logout', icon: null },
  ];

  // Обеспечиваем, чтобы drawer-side имел высокий z-index и блокировал скролл
  useEffect(() => {
    const drawerSide = document.querySelector('.drawer-side');
    const drawerCheckbox = document.getElementById('my-drawer');
    
    if (drawerSide) {
      drawerSide.style.zIndex = '999';
    }
    
    // Обработчик изменения состояния drawer для блокировки скролла
    const handleDrawerChange = () => {
      if (drawerCheckbox && drawerCheckbox.checked) {
        document.body.style.overflow = 'hidden';
        // Добавляем класс для скрытия всех скроллбаров
        document.documentElement.classList.add('hide-scrollbars');
      } else {
        document.body.style.overflow = '';
        // Удаляем класс для скрытия всех скроллбаров
        document.documentElement.classList.remove('hide-scrollbars');
      }
    };
    
    if (drawerCheckbox) {
      drawerCheckbox.addEventListener('change', handleDrawerChange);
      // Проверяем начальное состояние
      if (drawerCheckbox.checked) {
        document.body.style.overflow = 'hidden';
        document.documentElement.classList.add('hide-scrollbars');
      }
    }
    
    return () => {
      if (drawerCheckbox) {
        drawerCheckbox.removeEventListener('change', handleDrawerChange);
      }
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavigationTopBar />
      </div>
      <div className="drawer-side" style={{ zIndex: 999 }}>
        <label htmlFor="my-drawer" aria-label="Close sidebar" className="drawer-overlay" style={{ zIndex: 998 }}></label>
        <ul className={`menu ${isMobile ? 'w-full' : 'w-[240px]'} min-h-full bg-white`} style={{ zIndex: 999, overflowY: 'hidden' }}>
          <MenuHeader />
          <div className="overflow-y-auto max-h-[calc(100vh-80px)]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <MenuSection items={mainItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
            <div className="divider my-2 md:my-4 border-gray-200"></div>
            <div className="px-4 mb-1 md:mb-2 text-gray-500 text-xs md:text-sm font-semibold">PAGES</div>
            <MenuSection items={pagesItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
            <div className="divider my-2 md:my-4 border-gray-200"></div>
            <MenuSection items={settingsItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;