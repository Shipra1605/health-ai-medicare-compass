
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
      technologies: "React.js, Tailwind CSS, TypeScript, Vite"
    },
    {
      category: "Backend",
      technologies: "Node.js, Express, MySQL"
    },
    {
      category: "ML Models",
      technologies: "ClinicalBERT, XGBoost"
    },
    {
      category: "UI Components",
      technologies: "Shadcn UI, Lucide Icons"
    },
    {
      category: "AI Layer",
      technologies: "SHAP for explainability, React Query for state management"
    }
  ];

  return (
    <PageLayout backgroundImage="ai-health">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="medicare-card mb-10">
          <h1 className="text-3xl font-bold text-center mb-8 border-b pb-4">About MediCare AI</h1>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-center">
              MediCare AI harnesses cutting-edge ML and AI to deliver accurate medical recommendations in real-time.
            </p>
            
            <p className="text-center">
              Our dual-model approach combines ClinicalBERT for natural language understanding with XGBoost for structured data analysis.
            </p>
            
            <p className="text-center">
              We process both structured metrics and unstructured narratives to create comprehensive patient profiles.
            </p>
            
            <p className="text-center">
              SHAP values provide transparent explanations for every recommendation, ensuring trust and understanding.
            </p>
            
            <p className="text-center">
              Our personalized treatment plans consider medical history, symptoms, and genetic predispositions for optimal care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="medicare-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl">
                🧠
              </div>
              <h2 className="text-xl font-semibold">AI-Powered Analysis</h2>
            </div>
            <p className="text-gray-700">
              MediCare AI integrates advanced machine learning models including ClinicalBERT for natural language processing of medical texts and XGBoost for classification of structured patient data. This dual approach enables a comprehensive analysis of both medical history narratives and specific health metrics.
            </p>
          </div>

          <div className="medicare-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl">
                💾
              </div>
              <h2 className="text-xl font-semibold">Comprehensive Data Processing</h2>
            </div>
            <p className="text-gray-700">
              Our system processes both structured and unstructured medical data, converting complex patient information into actionable insights. The platform handles everything from laboratory test results to doctor's notes, creating a holistic view of each patient's unique health profile.
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="medicare-card mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="p-4 border rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{objective.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{objective.title}</h3>
                <p className="text-sm text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="medicare-card">
          <h2 className="text-2xl font-bold text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-medicare-blue mb-2">{tech.category}</h3>
                <p className="text-gray-700 text-sm">{tech.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-medicare-darkBlue text-white py-4 mt-auto">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo className="text-white" />
            <span className="ml-2 text-sm text-white/70">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-white/70">
            Your trusted AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default About;
