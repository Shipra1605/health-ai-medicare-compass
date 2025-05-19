
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-medicare-blue rounded-md flex items-center justify-center text-white relative shadow-lg animate-pulse-subtle transform hover:scale-110 transition-transform">
        {/* Hands holding heart with heartbeat waveform */}
        <div className="relative w-8 h-8">
          {/* Two hands holding */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M7.5,16.5c-1.1,0-2.1-0.8-2.1-2.1c0-0.2,0-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.4,0C6.1,14.1,6.2,14.3,6.2,14.5c0,0.6,0.5,1.1,1.1,1.1
              c0.2,0,0.3,0.1,0.3,0.3C7.6,16.1,7.7,16.2,7.5,16.5z" fill="#004d40" />
            <path d="M6.9,14c-0.9-0.2-1.8-0.5-2.3-1.3C4,11.8,3.9,10.6,4.1,9.5C4.3,8.5,5,7.6,5.9,7.3C6.6,7,7.5,7.1,8.1,7.6
              C8.6,7.9,8.9,8.4,9.3,8.8c0.3,0.4,0.6,0.7,0.9,1c0.3-0.3,0.6-0.6,0.9-1c0.4-0.4,0.7-0.9,1.2-1.2c0.6-0.5,1.5-0.6,2.2-0.3
              c0.9,0.3,1.6,1.2,1.8,2.2c0.2,1.1,0.1,2.3-0.5,3.2c-0.5,0.8-1.4,1.1-2.3,1.3" fill="none" stroke="#004d40" strokeWidth="1.5" />
              
            {/* Heart in middle */}
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
