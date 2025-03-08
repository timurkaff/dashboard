'use client'
import { IoSpeedometerOutline, IoChatbubblesOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineWindow, MdOutlineSensorDoor, MdOutlineCalendarToday, MdOutlineContactMail } from "react-icons/md";
import { CiHeart, CiSettings } from "react-icons/ci";
import { FaListCheck, FaUsers, FaTable } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { useEffect, useState } from 'react';

const iconComponents = {
  IoSpeedometerOutline,
  IoChatbubblesOutline,
  IoPricetagsOutline,
  MdOutlineWindow,
  MdOutlineSensorDoor,
  MdOutlineCalendarToday,
  MdOutlineContactMail,
  CiHeart,
  CiSettings,
  FaListCheck,
  FaUsers,
  FaTable,
  RiFileList2Line,
  IoIosDocument
};

export function MenuSection({ items, menuItemClass, setActiveItem }) {
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

  return (
    <>
      {items.map((item) => {
        const Icon = item.icon ? iconComponents[item.icon] : null;
        return (
          <li key={item.name}>
            <a 
              onClick={() => setActiveItem(item.name)} 
              className={`${menuItemClass(item.name)} ${isMobile ? 'text-sm py-2' : 'py-3'}`}
            >
              {Icon && <Icon className={isMobile ? 'text-lg' : 'text-xl'} />}
              <span className={isMobile ? 'text-sm' : ''}>{item.name}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}