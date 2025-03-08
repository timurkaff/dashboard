import { useEffect, useState } from 'react';

export function MenuHeader() {
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
    <div className={`flex ${isMobile ? 'mb-4 mt-4' : 'mb-8 mt-6'} font-semibold ${isMobile ? 'text-lg' : 'text-xl'} justify-center`}>
      <h1 className="text-[#4880FF]">Dash</h1>
      <h1 className="text-black">Stack</h1>
    </div>
  );
}