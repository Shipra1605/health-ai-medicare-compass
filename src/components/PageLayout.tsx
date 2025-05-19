
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
      <div className={`fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat`} 
           style={{ backgroundImage: `url('/lovable-uploads/${getBackgroundImageUrl(backgroundImage)}')` }}></div>
      <div className="fixed inset-0 bg-gradient-to-br from-medicare-darkBlue/30 to-black/20 backdrop-blur-[2px] -z-10"></div>
      
      {/* Content */}
      <div className={`relative z-10 min-h-screen w-full flex flex-col ${className}`}>
        {children}
      </div>
    </div>
  );
};

// Helper function to get the background image URL based on the provided key
function getBackgroundImageUrl(key: string): string {
  const imageMap: Record<string, string> = {
    'blue-wave': '4150ee48-6d99-44ea-9fcc-7c08c4e18adf.png', // Healthcare hexagons and wave
    'heartbeat': 'af2414f3-fe4d-4442-be47-1f1bbb4c2795.png', // ECG line
    'doctor': 'b3202aa6-a842-4b38-8c38-80bc5ae8d915.png', // Doctor wireframe
    'medical-tech': 'b71ac128-1941-40b8-a3a0-9a8a4f89abd3.png', // AI doctor with hexagons
    'ai-health': '294bd21d-ad9d-4a6d-8f67-7a303529ac22.png', // Medical cross with tech
    'heart-hand': '694f2925-1ff2-41bf-8ee3-b9f1174e0031.png', // Robotic hand with human hand
    'ai-hand': '5acf27d2-ccca-45cf-a068-4ec0920f4488.png' // Robot hand with heart
  };
  
  return imageMap[key] || '4150ee48-6d99-44ea-9fcc-7c08c4e18adf.png';
}

export default PageLayout;
