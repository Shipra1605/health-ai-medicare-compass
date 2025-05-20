
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        {/* New logo based on the heart in hands design */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-md">
          {/* Hand outlines */}
          <path d="M20,55 C15,50 15,40 20,35 C25,30 35,35 35,40 L35,55 L20,55 Z" fill="#0c4a6e" />
          <path d="M80,55 C85,50 85,40 80,35 C75,30 65,35 65,40 L65,55 L80,55 Z" fill="#0c4a6e" />
          
          {/* Hands holding */}
          <path d="M30,50 C35,45 40,45 45,50 L50,55 L55,50 C60,45 65,45 70,50 L65,60 C60,65 55,67 50,70 C45,67 40,65 35,60 L30,50 Z" fill="#0ea5e9" />
          
          {/* Heart shape */}
          <path d="M50,65 C45,60 35,50 35,45 C35,40 40,35 45,35 C48,35 50,37 50,40 C50,37 52,35 55,35 C60,35 65,40 65,45 C65,50 55,60 50,65 Z" fill="#0ea5e9" />
          
          {/* Heartbeat waveform */}
          <polyline points="35,50 40,50 42,45 45,55 48,45 50,50 52,45 55,55 58,45 60,50 65,50" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-pulse" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg leading-tight">
          <span className="text-medicare-darkBlue">Medicare</span>
          <span className="text-medicare-blue"> AI</span>
        </h1>
        <p className="text-xs text-medicare-darkBlue/70 -mt-0.5">Healthcare Intelligence</p>
      </div>
    </div>
  );
};

export default MedicareLogo;
