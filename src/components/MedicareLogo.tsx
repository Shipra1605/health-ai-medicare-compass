
import React from 'react';

interface LogoProps {
  className?: string;
}

const MedicareLogo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-medicare-blue rounded-md flex items-center justify-center text-white relative shadow-lg transform hover:scale-110 transition-transform">
        {/* Robot hand and human hand with heartbeat symbol - inspired by Image 1 */}
        <div className="w-8 h-8 relative">
          {/* Stylized representation of robotic and human hands */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 absolute top-0 left-0">
            {/* Robot hand outline */}
            <path d="M19,7c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,14H10v-4c0-0.55-0.45-1-1-1H6c-2.21,0-4,1.79-4,4v3h2v-3c0-1.1,0.9-2,2-2 h2v7h5.31l4.63-4.63C17.96,9.91,18,9.71,18,9.5V9h1C19.55,9,20,8.55,20,8V7.5C20,7.22,19.78,7,19.5,7S19,7.22,19,7.5V8h-1V7z" 
                  fill="#0ea5e9" stroke="#ffffff" strokeWidth="0.5"/>
            
            {/* Human hand */}
            <path d="M5,16c0,1.1,0.9,2,2,2h3v-2H7v-2.65L10.48,10H14v4c0,0.55,0.45,1,1,1h3c2.21,0,4-1.79,4-4v-3h-2v3c0,1.1-0.9,2-2,2 h-2V6H11.69L7.06,10.63C6.04,10.09,6,10.29,6,10.5V11H5c-0.55,0-1,0.45-1,1v1.5C4,13.78,4.22,14,4.5,14S5,13.78,5,13.5V13h1V16z" 
                  fill="#f8b195" stroke="#ffffff" strokeWidth="0.5"/>
            
            {/* Heart in middle */}
            <path d="M12,11.5c-0.96-1.3-2.49-2.14-4.22-2.14C5.01,9.36,3,11.37,3,13.85c0,1.19,0.5,2.28,1.3,3.05L12,24l7.7-7.1 c0.8-0.77,1.3-1.86,1.3-3.05c0-2.48-2.01-4.49-4.78-4.49C14.49,9.36,12.96,10.2,12,11.5z" 
                  fill="#0ea5e9" transform="scale(0.45) translate(13, 10)" stroke="#ffffff" strokeWidth="1"/>
          </svg>
          
          {/* Heartbeat line overlaid */}
          <svg viewBox="0 0 24 24" className="w-8 h-8 absolute top-0 left-0">
            <polyline points="2,12 6,12 8,6 12,18 16,10 18,12 22,12" 
                      fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      transform="scale(0.8) translate(2.4, 6)"/>
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
