
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
      <div className={`relative z-10 min-h-screen w-full ${className}`}>
        {children}
      </div>
    </div>
  );
};

// Helper function to get the background image URL based on the provided key
function getBackgroundImageUrl(key: string): string {
  const imageMap: Record<string, string> = {
    'blue-wave': '0b88a087-2647-4254-9610-2466637be08d.png',
    'heartbeat': '4f8a40bc-3375-40fa-bfbb-b8934753d785.png',
    'doctor': '28e2d54f-801f-44d1-a150-aec136fecf0b.png',
    'medical-tech': '23b73638-2d81-4497-93f1-32e738fbc6ba.png',
    'ai-health': 'b2d8314a-b05d-430a-b828-1dae6a466918.png',
    'heart-hand': '23589923-2764-470c-971e-228e583fd33a.png',
    'ai-hand': '096d8650-30e3-4dc6-8bfa-f9e2d621abe8.png'
  };
  
  return imageMap[key] || '0b88a087-2647-4254-9610-2466637be08d.png';
}

export default PageLayout;
