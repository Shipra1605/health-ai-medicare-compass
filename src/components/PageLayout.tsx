
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage: 'blue-wave' | 'heartbeat' | 'doctor' | 'medical-tech' | 'ai-health' | 'heart-hand' | 'ai-hand' | 'robot-hand' | 'digital-doctor' | 'robot-human-hand' | 'digital-doctor-blue' | 'robot-human-heart' | 'digital-doctor-hologram';
  secondaryBackgroundImage?: 'blue-wave' | 'heartbeat' | 'doctor' | 'medical-tech' | 'ai-health' | 'heart-hand' | 'ai-hand' | 'robot-hand' | 'digital-doctor' | 'robot-human-hand' | 'digital-doctor-blue' | 'robot-human-heart' | 'digital-doctor-hologram';
  className?: string;
  overlayOpacity?: string;
}

const PageLayout = ({ 
  children, 
  backgroundImage, 
  secondaryBackgroundImage,
  className = "",
  overlayOpacity = "bg-gradient-to-br from-medicare-darkBlue/5 to-black/5" 
}: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Primary Background Image with proper styling */}
      <div 
        className="fixed inset-0 w-full h-1/2 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url('/lovable-uploads/${getBackgroundImageUrl(backgroundImage)}')` }}
      ></div>
      
      {/* Secondary Background Image (if provided) */}
      {secondaryBackgroundImage && (
        <div 
          className="fixed inset-0 top-1/2 w-full h-1/2 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url('/lovable-uploads/${getBackgroundImageUrl(secondaryBackgroundImage)}')` }}
        ></div>
      )}
      
      {/* Very light glassmorphism overlay effect */}
      <div className={`fixed inset-0 ${overlayOpacity} backdrop-blur-[2px] -z-10`}></div>
      
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
    'blue-wave': 'dda7863b-b790-420a-b1c3-0d52fec05084.png', // Original blue wave
    'heartbeat': 'c087d4bd-226f-4054-88b9-d8a1f1e60b79.png', // Original heartbeat
    'doctor': 'adbd7cb8-01be-4d37-a587-3577aba68140.png',    // Original doctor
    'medical-tech': '98f2c9ea-b23f-45bd-a71d-ba4db4d40ce5.png', // Original medical tech
    'ai-health': '659deeb1-7ebb-40bf-b626-6f18cedeb066.png', // Original AI health
    'heart-hand': '7d2262df-ce65-461d-b63d-e76a5a54e91d.png', // Original heart hand
    'ai-hand': 'ac959dd7-1802-468e-ad99-89d52fce8f88.png',   // Original AI hand
    'robot-hand': 'c9d90c56-bfa3-4073-b4fa-603aa947a533.png', // Robot hand image
    'digital-doctor': '0218ee44-98fd-4765-95b0-e4c9fed62d60.png', // Digital doctor image
    'robot-human-hand': '6a5c90ab-aa8c-4989-b945-783e5ca14512.png', // Original robot-human hand image
    'digital-doctor-blue': 'b5e237af-3920-4177-b871-596ae11d5d11.png', // Original digital doctor blue image
    'robot-human-heart': '588093dc-dd20-4c3a-9d61-ff1862086164.png', // New robot-human heart image
    'digital-doctor-hologram': 'f6402c1f-0793-4323-9c36-abec6b19c843.png', // New digital doctor hologram image
  };
  
  return imageMap[key] || 'dda7863b-b790-420a-b1c3-0d52fec05084.png'; // Default to blue wave if not found
}

export default PageLayout;
