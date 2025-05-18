
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage: 'blue-wave' | 'heartbeat' | 'doctor' | 'medical-tech' | 'ai-health' | 'heart-hand' | 'ai-hand';
  className?: string;
}

const PageLayout = ({ children, backgroundImage, className = "" }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with enhanced styling */}
      <div className={`page-background bg-${backgroundImage} bg-cover bg-center bg-fixed`}></div>
      <div className="page-overlay bg-gradient-to-br from-medicare-darkBlue/40 to-black/40 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className={`relative z-10 min-h-screen w-full ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
