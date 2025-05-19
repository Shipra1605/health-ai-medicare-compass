
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
        className={`fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat`} 
        style={{ backgroundImage: `url('/lovable-uploads/${getBackgroundImageUrl(backgroundImage)}')` }}
      ></div>
      
      {/* Glassmorphism overlay effect - lighter and more transparent */}
      <div className="fixed inset-0 bg-gradient-to-br from-medicare-darkBlue/10 to-black/10 backdrop-blur-[1px] -z-10"></div>
      
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
    'blue-wave': 'c9e108e7-c348-41a6-bbaf-3907b45a19e7.png', // Updated to new wave image
    'heartbeat': 'c6ce4eb6-27f2-4b4e-9ed7-809c21bf1aba.png', // Updated to new heartbeat image
    'doctor': 'fe2690d1-7a76-4475-9fb2-07a3be88f737.png', // Updated to new doctor image
    'medical-tech': '63e49c0b-d661-4b63-8ab8-418939d44f15.png', // Updated to new tech image
    'ai-health': 'aef9c64e-5d02-4e64-a60e-73a60e76f861.png', // Updated to new AI health image
    'heart-hand': '01c42de6-10a3-4b48-9213-bce95b3198de.png', // Updated to new heart-hand image
    'ai-hand': '62f7cc5b-4b7e-4350-a2d1-8b4c83c013a0.png' // Updated to new AI hand image
  };
  
  return imageMap[key] || 'c9e108e7-c348-41a6-bbaf-3907b45a19e7.png'; // Default to blue wave if not found
}

export default PageLayout;
