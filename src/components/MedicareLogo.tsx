
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const MedicareLogo = ({ className = "", showText = true, size = 'md' }: LogoProps) => {
  const sizes = {
    sm: { logo: 'w-8 h-8', text: 'text-lg' },
    md: { logo: 'w-12 h-12', text: 'text-xl' },
    lg: { logo: 'w-16 h-16', text: 'text-2xl' },
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizes[size].logo}`}>
        {/* Main Heart Image */}
        <img 
          src="/lovable-uploads/e2d129d5-b7f2-430f-bf83-bbdc192e2ab3.png" 
          alt="MediCare AI Logo" 
          className="w-full h-full object-contain"
        />
        
        {/* Heart beat overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 30" className="w-3/4 h-1/3 stroke-white fill-none stroke-[4]">
            <polyline points="0,15 20,15 30,5 40,25 50,15 60,15 70,5 80,25 100,15" />
          </svg>
        </div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-bold text-medicare-darkBlue ${sizes[size].text}`}>
            MediCare <span className="text-medicare-blue">AI</span>
          </h1>
          <p className="text-xs text-medicare-teal -mt-1">Precision Health Compass</p>
        </div>
      )}
    </div>
  );
};

export default MedicareLogo;
