
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
      
      {/* Light glassmorphism overlay effect */}
      <div className="fixed inset-0 bg-white/10 backdrop-blur-[2px] -z-10"></div>
      
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
    'blue-wave': '10a2b3e4-d5cc-4660-9965-c20d573a50bc.png', // Blue wave background
    'heartbeat': 'ac3e9d55-cf1f-40bf-a738-c61803dd22e3.png', // Heartbeat background
    'doctor': 'da1aa9a6-810d-4d75-af14-7ee85001979e.png',    // Doctor background
    'medical-tech': '52e39081-afac-4ab7-b86a-ee23afffe541.png', // Medical tech background
    'ai-health': 'bdce3bd1-0ee7-4a5c-9b73-7398f6acf649.png', // AI health background
    'heart-hand': 'ce0f25af-085c-4ae6-b353-9fb3d603ba19.png', // Heart hand background
    'ai-hand': '58e80d30-0778-4ff9-8a72-7f660e841b80.png'    // AI hand background (image 1)
  };
  
  return imageMap[key] || '10a2b3e4-d5cc-4660-9965-c20d573a50bc.png'; // Default to blue wave if not found
}

export default PageLayout;
