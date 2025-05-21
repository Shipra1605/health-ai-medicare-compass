
import React from 'react';
import { Link } from 'react-router-dom';
import MedicareLogo from '@/components/MedicareLogo';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { MonitorHeart, Brain, Video, BarChart3 } from 'lucide-react';

const FutureEnhancements = () => {
  const enhancements = [
    {
      icon: <MonitorHeart size={48} className="text-blue-500" />,
      title: "Smart Health Monitoring",
      content: "Medicare AI seamlessly integrates with wearable devices to enable real-time tracking of vital health parameters such as blood pressure, heart rate, ECG, blood oxygen levels, glucose levels, sleep quality, and physical activity. Users receive automated alerts for abnormal readings, while historical data is visualized through intuitive graphs and trend analysis, supporting early detection and proactive health management."
    },
    {
      icon: <Brain size={48} className="text-purple-500" />,
      title: "Intelligent Wellness Assistant",
      content: "The platform offers a personalized health assistant that supports daily wellness through medication reminders, condition-specific exercise suggestions, dietary tracking, hydration alerts, and custom health goals. Users can monitor their progress, complete wellness tasks, and stay engaged through achievement tracking—all tailored to individual health needs and routines."
    },
    {
      icon: <Video size={48} className="text-cyan-500" />,
      title: "Connected Care & Telemedicine",
      content: "Medicare AI bridges the gap between users and healthcare professionals with features such as real-time chat, secure video consultations, digital prescriptions, and medical file sharing. Emergency care coordination, mental health support, and location-based services—including nearby facility search, live wait times, and appointment bookings—further enhance accessibility and continuity of care."
    },
    {
      icon: <BarChart3 size={48} className="text-emerald-500" />,
      title: "Predictive Insights & Accessibility",
      content: "Powered by AI, the system offers predictive health analytics, risk assessments, and early warnings for potential issues. Users receive personalized health insights, preventive care schedules, and monthly health reports. The platform ensures inclusivity with multilingual support, voice command integration, caregiver access, and customizable, accessible dashboards—all designed with data security and compliance in mind."
    }
  ];

  return (
    <PageLayout 
      customBackgroundImage="/lovable-uploads/db74ec0f-63fd-4b25-ad71-5eda9148d30a.png"
      overlayOpacity="bg-gradient-to-br from-blue-900/30 to-black/30"
    >
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/50 backdrop-blur-md border-b border-white/40">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          <Link to="/" className="medicare-button-outline">
            Back to Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="glass-card mb-10 text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-white text-shadow-md">Future Enhancements</h1>
          <p className="text-white mb-6 font-medium text-shadow-sm max-w-3xl mx-auto">
            Medicare AI is an independently developed project by an MCA student specializing in 
            Artificial Intelligence and Machine Learning. The project reflects a strong commitment 
            to innovation in healthcare, driven by focused effort, technical expertise, and 
            a passion for impactful solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {enhancements.map((enhancement, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-lg border border-white/50 rounded-xl p-6 transform hover:scale-[1.01] transition-all duration-300 card-3d"
            >
              <div className="flex justify-center mb-4 transform-gpu" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform hover:scale-110 transition-transform duration-300" style={{ transform: 'translateZ(20px)' }}>
                  {enhancement.icon}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mb-3 text-white text-shadow-md">{enhancement.title}</h2>
              <p className="text-white/90 text-shadow-sm">{enhancement.content}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-md py-4 mt-auto border-t border-white/40 text-medicare-darkBlue">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo />
            <span className="ml-2 text-sm font-medium">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm font-semibold">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default FutureEnhancements;
