'use client';
import { useEffect, useState } from 'react';
import SearchIcon from "@/assets/icons/search.svg";

const SearchBar: React.FC = () => {
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
    <div className={`relative ${isMobile ? 'w-full max-w-[200px]' : 'grow shrink-0 basis-0 w-fit'}`}>
      <input
        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl border border-solid bg-blend-normal bg-slate-100 border-neutral-300 text-neutral-800"
        placeholder={isMobile ? "Поиск" : "Search"}
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
    </div>
  );
};

export default SearchBar;
