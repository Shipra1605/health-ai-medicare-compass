
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12 transform hover:scale-110 transition-transform duration-300">
        {/* 3D logo with heart in hands design based on image 3 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-lg hover:drop-shadow-xl transition-all duration-300">
          {/* Hands holding heart design with 3D effect */}
          <defs>
            <linearGradient id="handsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A6E5C" />
              <stop offset="100%" stopColor="#064E42" />
            </linearGradient>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EEFD7" />
              <stop offset="100%" stopColor="#00C2B1" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
            </filter>
          </defs>
          
          {/* 3D effect for hands */}
          <path d="M30,60 C20,60 15,50 20,40 C25,35 35,40 40,50 L50,65 L60,50 C65,40 75,35 80,40 C85,50 80,60 70,60 L50,75 L30,60 Z" 
                fill="url(#handsGradient)" 
                stroke="#064E42" 
                strokeWidth="1"
                filter="url(#shadow)" />
          
          {/* 3D Heart with animation */}
          <path d="M50,65 C45,55 35,45 35,40 C35,35 40,30 45,30 C48,30 50,32 50,35 C50,32 52,30 55,30 C60,30 65,35 65,40 C65,45 55,55 50,65 Z" 
                fill="url(#heartGradient)" 
                stroke="#00A89A" 
                strokeWidth="1"
                filter="url(#shadow)"
                className="animate-pulse" />
          
          {/* Heartbeat waveform with enhanced animation */}
          <polyline points="35,50 40,50 42,45 45,55 48,45 50,50 52,45 55,55 58,45 60,50 65,50" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-pulse" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg leading-tight text-shadow-sm">
          <span className="text-medicare-darkBlue">Medicare</span>
          <span className="text-medicare-blue"> AI</span>
        </h1>
        <p className="text-xs text-medicare-darkBlue/80 -mt-0.5 font-medium">Healthcare Intelligence</p>
      </div>
    </div>
  );
};

export default MedicareLogo;
