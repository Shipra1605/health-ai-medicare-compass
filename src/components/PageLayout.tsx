
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage: 'blue-wave' | 'heartbeat' | 'doctor' | 'medical-tech' | 'ai-health' | 'heart-hand' | 'ai-hand';
  className?: string;
}

const PageLayout = ({ children, backgroundImage, className = "" }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background Image with proper styling */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/${getBackgroundImageUrl(backgroundImage)}')` }}
      ></div>
      
      {/* Very light glassmorphism overlay effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-medicare-darkBlue/5 to-black/5 backdrop-blur-[1px] -z-10"></div>
      
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
    'blue-wave': 'dda7863b-b790-420a-b1c3-0d52fec05084.png', // Image 3 - Blue wave
    'heartbeat': 'c087d4bd-226f-4054-88b9-d8a1f1e60b79.png', // Image 2 - Heartbeat
    'doctor': 'adbd7cb8-01be-4d37-a587-3577aba68140.png',    // Image 4 - Doctor
    'medical-tech': '98f2c9ea-b23f-45bd-a71d-ba4db4d40ce5.png', // Image 5 - Medical tech
    'ai-health': '659deeb1-7ebb-40bf-b626-6f18cedeb066.png', // Image 6 - AI health
    'heart-hand': '7d2262df-ce65-461d-b63d-e76a5a54e91d.png', // Image 7 - Heart hand
    'ai-hand': 'ac959dd7-1802-468e-ad99-89d52fce8f88.png'    // Image 1 - AI hand
  };
  
  return imageMap[key] || 'dda7863b-b790-420a-b1c3-0d52fec05084.png'; // Default to blue wave if not found
}

export default PageLayout;
