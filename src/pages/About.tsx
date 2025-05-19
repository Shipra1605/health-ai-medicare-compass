
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';

const About = () => {
  const objectives = [
    {
      icon: "🩺",
      title: "Smart Treatment Recommendations",
      description: "Assist healthcare providers with AI-driven treatment suggestions based on comprehensive patient analysis."
    },
    {
      icon: "📊",
      title: "Advanced Data Processing",
      description: "Process structured and unstructured medical data to extract valuable insights for patient care."
    },
    {
      icon: "🔒",
      title: "Secure Web Experience",
      description: "Maintain a secure, interactive platform that prioritizes patient data privacy and protection."
    },
    {
      icon: "👥",
      title: "Collaborative Development",
      description: "Built collaboratively by MCA students specializing in AI and ML, combining diverse expertise."
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: "React.js, Tailwind CSS, TypeScript, Vite",
      icon: "💻"
    },
    {
      category: "Backend",
      technologies: "Node.js, Express, MySQL",
      icon: "⚙️"
    },
    {
      category: "ML Models",
      technologies: "ClinicalBERT, XGBoost",
      icon: "🧠"
    },
    {
      category: "UI Components",
      technologies: "Shadcn UI, Lucide Icons",
      icon: "🎨"
    },
    {
      category: "AI Layer",
      technologies: "SHAP for explainability, React Query for state management",
      icon: "🤖"
    }
  ];

  return (
    <PageLayout backgroundImage="ai-health">
      {/* Header/Navigation with improved glassmorphism */}
      <header className="w-full py-4 px-6 bg-white/20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white text-shadow-outline">About MediCare AI</h1>
        
        <div className="glass-card mb-8">
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-gray-700">
              MediCare AI harnesses cutting-edge ML and AI to deliver accurate medical recommendations in real-time. Our dual-model approach combines ClinicalBERT for natural language understanding with XGBoost for structured data analysis. We process both structured metrics and unstructured narratives to create comprehensive patient profiles.
            </p>
            
            <p className="text-gray-700">
              SHAP values provide transparent explanations for every recommendation, ensuring trust and understanding. Our personalized treatment plans consider medical history, symptoms, and genetic predispositions for optimal care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card hover:shadow-xl transition-all transform hover:scale-[1.01] card-3d">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl shadow-md">
                <span className="transform hover:scale-110 transition-transform">🧠</span>
              </div>
              <h2 className="text-xl font-semibold text-white text-shadow-md">AI-Powered Analysis</h2>
            </div>
            <p className="text-white text-shadow-sm">
              MediCare AI integrates advanced machine learning models including ClinicalBERT for natural language processing of medical texts and XGBoost for classification of structured patient data. This dual approach enables a comprehensive analysis of both medical history narratives and specific health metrics.
            </p>
          </div>

          <div className="glass-card hover:shadow-xl transition-all transform hover:scale-[1.01] card-3d">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl shadow-md">
                <span className="transform hover:scale-110 transition-transform">💾</span>
              </div>
              <h2 className="text-xl font-semibold text-white text-shadow-md">Comprehensive Data Processing</h2>
            </div>
            <p className="text-white text-shadow-sm">
              Our system processes both structured and unstructured medical data, converting complex patient information into actionable insights. The platform handles everything from laboratory test results to doctor's notes, creating a holistic view of each patient's unique health profile.
            </p>
          </div>
        </div>

        {/* Objectives Section with enhanced 3D effects */}
        <div className="glass-card mb-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-white text-shadow-md">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectives.map((objective, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow transform hover:scale-[1.03] card-3d bg-white/20 backdrop-blur-md"
              >
                <div className="text-4xl mb-3 transform hover:scale-110 transition-transform">{objective.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white text-shadow-sm">{objective.title}</h3>
                <p className="text-sm text-white/90 text-shadow-xs">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack with improved 3D styling */}
        <div className="glass-card">
          <h2 className="text-2xl font-bold text-center mb-6 text-white text-shadow-md">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="p-4 bg-white/20 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-[1.03] card-3d"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl transform hover:scale-110 transition-transform">{tech.icon}</span>
                  <h3 className="font-semibold text-white text-shadow-sm">{tech.category}</h3>
                </div>
                <p className="text-white/90 text-sm text-shadow-xs">{tech.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer with updated Medicare AI text */}
      <footer className="bg-medicare-darkBlue text-white py-4 mt-auto">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo className="text-white" />
            <span className="ml-2 text-sm text-white/70">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-white/70">
            Made in partial fulfillment of Master's in Computer Applications (MCA) with specialization in Machine Learning and Artificial Intelligence under IBM internship program
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default About;
