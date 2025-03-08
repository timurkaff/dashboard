'use client'
import NavigationTopBar from '@/shared/NavigationTopBar';
import { MenuHeader } from './ui/MenuHeader';
import { MenuSection } from './ui/MenuSection';
import { useEffect, useState } from 'react';

function SidebarMenu({ activeItem, setActiveItem }) {
  const [isMobile, setIsMobile] = useState(false);

  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем при загрузке
    checkIfMobile();
    
    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', checkIfMobile);
    
    // Очищаем слушатель при размонтировании
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

  // Обеспечиваем, чтобы drawer-side имел высокий z-index
  useEffect(() => {
    const drawerSide = document.querySelector('.drawer-side');
    if (drawerSide) {
      drawerSide.style.zIndex = '999';
    }
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavigationTopBar />
      </div>
      <div className="drawer-side" style={{ zIndex: 999 }}>
        <label htmlFor="my-drawer" aria-label="Close sidebar" className="drawer-overlay" style={{ zIndex: 998 }}></label>
        <ul className={`menu ${isMobile ? 'w-[80%]' : 'w-[240px]'} overflow-auto bg-white`} style={{ zIndex: 999 }}>
          <MenuHeader />
          <MenuSection items={mainItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
          <div className="divider my-2 md:my-4 border-gray-200"></div>
          <div className="px-4 mb-1 md:mb-2 text-gray-500 text-xs md:text-sm font-semibold">PAGES</div>
          <MenuSection items={pagesItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
          <div className="divider my-2 md:my-4 border-gray-200"></div>
          <MenuSection items={settingsItems} menuItemClass={menuItemClass} setActiveItem={setActiveItem} />
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;