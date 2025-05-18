
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage: 'blue-wave' | 'heartbeat' | 'doctor' | 'medical-tech' | 'ai-health' | 'heart-hand' | 'ai-hand';
  className?: string;
}

const PageLayout = ({ children, backgroundImage, className = "" }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with proper styling */}
      <div className={`fixed inset-0 w-full h-full -z-10 bg-${backgroundImage} bg-cover bg-center bg-no-repeat`}></div>
      <div className="fixed inset-0 bg-gradient-to-br from-medicare-darkBlue/40 to-black/30 backdrop-blur-sm -z-10"></div>
      
      {/* Content */}
      <div className={`relative z-10 min-h-screen w-full ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
