'use client';
import { useEffect, useState } from 'react';
import More from "@/assets/icons/More.svg"

interface UserProfileProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatarUrl }) => {
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
    <div className={`flex ${isMobile ? 'gap-2' : 'gap-6'} items-center`}>
      <div className={`flex ${isMobile ? 'gap-2' : 'gap-5'}`}>
        <img
          src={avatarUrl}
          alt={`${name || 'User'}'s avatar`}
          className={`object-contain shrink-0 ${isMobile ? 'w-8' : 'w-11'} aspect-square`}
        />
        {!isMobile && name && role && (
          <div className="flex flex-col my-auto">
            <h3 className="text-sm font-bold text-neutral-700">{name}</h3>
            <p className="self-start text-xs font-semibold text-neutral-600">{role}</p>
          </div>
        )}
      </div>
      {!isMobile && (
        <div>
          <button>
            <More/>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
