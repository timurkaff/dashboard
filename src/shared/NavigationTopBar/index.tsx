"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./ui/SearchBar";
import LanguageSelector from "./ui/LanguageSelector";
import UserProfile from "./ui/UserProfile";
import Alert from "./ui/Alert";
import Menu from "@/assets/icons/menu.svg"

const NavigationTopBar: React.FC = () => {
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
    <nav className="w-full shadow-sm">
      <div className={`navbar flex justify-between ${isMobile ? 'px-2' : 'px-8'}`}>

        <div className={`flex ${isMobile ? 'gap-2' : 'gap-6'}`}>
          <label className="cursor-pointer" htmlFor="my-drawer">
            <Menu/>
          </label>

          <div className={`flex ${isMobile ? 'gap-2' : 'gap-6'} items-center ${isMobile ? 'w-auto' : 'w-[400px]'}`}>
            <SearchBar />
          </div>
        </div>

        <div className={`flex-none ${isMobile ? 'gap-2' : 'gap-10'}`}>
          {!isMobile && <Alert/>}
          {!isMobile && <LanguageSelector />}
          <UserProfile
            name={isMobile ? "" : "Moni Roy"}
            role={isMobile ? "" : "Admin"}
            avatarUrl="https://cdn.builder.io/api/v1/image/assets/11e212f66dda423c87c8bf9f23d05ab2/e50fd0c5b705644db5c5e28732e518530472a884658f64df941927ba51ba47d9?placeholderIfAbsent=true"
          />
        </div>

      </div>
    </nav>
  );
};

export default NavigationTopBar;
