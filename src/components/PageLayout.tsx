
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
    'blue-wave': '991eddcd-19d9-401d-8234-b80eb4037710.png', // Updated to the new wave image
    'heartbeat': 'c2f01002-a6bc-4f7e-9288-5ab1282c8e2e.png', // Updated to the new heartbeat image
    'doctor': '3311cbf1-a3f6-49be-ba2f-5b4a0ebad524.png', // Updated to the new doctor wireframe
    'medical-tech': '82a3c212-9c4f-424b-af23-756093424a68.png', // Updated to the new tech image
    'ai-health': '34b16420-6f0e-42c8-bfef-eecbb679a42f.png', // Updated to the new AI health image
    'heart-hand': '9d744497-4f97-4bdc-94b1-01c3217c77a8.png', // Updated to the new heart-hand image
    'ai-hand': '9d744497-4f97-4bdc-94b1-01c3217c77a8.png' // Using the robot hand with heart image
  };
  
  return imageMap[key] || '991eddcd-19d9-401d-8234-b80eb4037710.png'; // Default to blue wave if not found
}

export default PageLayout;
