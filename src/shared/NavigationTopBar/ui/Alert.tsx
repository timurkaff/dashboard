'use client';
import Image from 'next/image';

const Alert: React.FC = () => {
    return (
      <div className="flex gap-4 my-auto text-sm font-semibold whitespace-nowrap text-stone-500">
        <Image
            src="https://cdn.builder.io/api/v1/image/assets/11e212f66dda423c87c8bf9f23d05ab2/10e979154341b45c46b50b173ae861fd71e62008454da40efab25900f86c2ca0?placeholderIfAbsent=true"
            alt="Language Icon 1"
            width={30}
            height={32}
            className="object-contain shrink-0 rounded-none"
        />
      </div>
    );
  };
  
  export default Alert;
  