
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-medicare-blue rounded-md flex items-center justify-center text-white relative shadow-lg animate-pulse-subtle">
        {/* Hands holding heart with heartbeat waveform */}
        <div className="relative w-8 h-8">
          {/* Heart in hands */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" fill="#0ea5e9" />
          </svg>
          
          {/* Heartbeat line */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4">
            <polyline points="3,6 7,6 9,2 11,10 13,0 15,6 19,6" />
          </svg>
        </div>
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
