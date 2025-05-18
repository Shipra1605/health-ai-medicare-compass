
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-medicare-blue rounded-md flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 .5 1h6.28"></path>
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-medicare-darkBlue">
          MediCare <span className="text-medicare-blue">AI</span>
        </h1>
      </div>
    </div>
  );
};

export default MedicareLogo;
