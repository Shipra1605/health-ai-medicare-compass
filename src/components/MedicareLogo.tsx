
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-14 h-14 transform hover:scale-110 transition-transform duration-300">
        {/* Enhanced 3D logo with heart in hands design */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300">
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
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.4" />
            </filter>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#0EEFD7" floodOpacity="0.3" result="glow" />
              <feComposite in="glow" in2="blur" operator="in" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Enhanced 3D hands with better shading */}
          <path d="M30,60 C20,60 15,50 20,40 C25,35 35,40 40,50 L50,65 L60,50 C65,40 75,35 80,40 C85,50 80,60 70,60 L50,75 L30,60 Z" 
                fill="url(#handsGradient)" 
                stroke="#064E42" 
                strokeWidth="1.5"
                filter="url(#shadow)" />
          
          {/* Enhanced 3D Heart with better animation */}
          <path d="M50,65 C45,55 35,45 35,40 C35,35 40,30 45,30 C48,30 50,32 50,35 C50,32 52,30 55,30 C60,30 65,35 65,40 C65,45 55,55 50,65 Z" 
                fill="url(#heartGradient)" 
                stroke="#00A89A" 
                strokeWidth="1.5"
                filter="url(#glow)"
                className="animate-pulse" />
          
          {/* Enhanced heartbeat waveform with smoother animation */}
          <polyline points="35,50 40,50 42,45 45,55 48,45 50,50 52,45 55,55 58,45 60,50 65,50" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl leading-tight text-shadow-md">
          <span className="text-medicare-darkBlue">Medicare</span>
          <span className="text-medicare-blue"> AI</span>
        </h1>
        <p className="text-xs text-medicare-darkBlue/90 -mt-0.5 font-medium">Healthcare Intelligence</p>
      </div>
    </div>
  );
};

export default MedicareLogo;
