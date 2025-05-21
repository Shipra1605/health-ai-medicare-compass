
import React, { useEffect, useRef } from 'react';

interface MedicareLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const MedicareLogo: React.FC<MedicareLogoProps> = ({ className = '', size = 'medium' }) => {
  const heartbeatRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (heartbeatRef.current) {
      const animate = () => {
        const path = heartbeatRef.current;
        if (!path) return;

        const keyframes = [
          { strokeDashoffset: '100', opacity: 0.3 },
          { strokeDashoffset: '0', opacity: 1 },
          { strokeDashoffset: '-100', opacity: 0.3 }
        ];

        const timing = {
          duration: 1500,
          iterations: Infinity,
          easing: 'ease-in-out'
        };

        path.animate(keyframes, timing);
      };

      animate();
    }
  }, []);

  const sizeClass = {
    small: 'h-6',
    medium: 'h-8',
    large: 'h-12',
  }[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative transform-gpu ${sizeClass} aspect-square drop-shadow-xl`}>
        {/* 3D styled heart logo with hands */}
        <svg 
          viewBox="0 0 120 120" 
          className={`w-full h-full filter drop-shadow-lg`}
          style={{ 
            transform: 'perspective(400px) rotateY(-10deg) rotateX(5deg)',
            transformStyle: 'preserve-3d'  
          }}
        >
          {/* Background glow */}
          <circle cx="60" cy="60" r="50" fill="rgba(255, 100, 100, 0.2)" filter="blur(10px)" />
          
          {/* Left Hand */}
          <path 
            d="M30 65 C20 55, 25 35, 45 45 C55 50, 60 55, 60 60" 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="filter drop-shadow-md"
            style={{ 
              filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))',
              transform: 'translateZ(5px)'
            }} 
          />

          {/* Right Hand */}
          <path 
            d="M90 65 C100 55, 95 35, 75 45 C65 50, 60 55, 60 60" 
            fill="none" 
            stroke="#3B82F6" 
            strokeWidth="8" 
            strokeLinecap="round"
            className="filter drop-shadow-md"
            style={{ 
              filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))',
              transform: 'translateZ(5px)'  
            }} 
          />

          {/* Heart */}
          <path 
            d="M60 90 C30 65, 20 30, 60 45 C100 30, 90 65, 60 90 Z" 
            fill="#F43F5E" 
            stroke="#E11D48" 
            strokeWidth="2"
            className="filter drop-shadow-lg"
            style={{ 
              filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))',
              transform: 'translateZ(10px)'  
            }} 
          />

          {/* Heartbeat line */}
          <path 
            ref={heartbeatRef}
            d="M40 62 L50 62 L55 52 L65 72 L70 62 L80 62" 
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="0"
            className="filter drop-shadow-md"
            style={{ 
              filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.8))',
              transform: 'translateZ(15px)' 
            }}
          />
        </svg>
      </div>

      <div className="font-bold text-medicare-darkBlue flex flex-col leading-tight transform-gpu" 
        style={{ 
          textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25)',
          transform: 'perspective(400px) rotateY(-5deg)'
        }}>
        <span className={size === 'large' ? 'text-xl' : 'text-lg'}>Medicare</span>
        <span className={`text-medicare-blue ${size === 'large' ? 'text-lg' : 'text-base'}`}>AI</span>
      </div>
    </div>
  );
};

export default MedicareLogo;
