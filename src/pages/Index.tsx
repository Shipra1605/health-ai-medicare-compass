
import React from 'react';
import { Link } from 'react-router-dom';
import MedicareLogo from '@/components/MedicareLogo';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const Index = () => {
  const services = [
    {
      icon: "🧠",
      title: "AI Diagnosis",
      description: "AI analysis of your symptoms to provide preliminary insights about potential health conditions."
    },
    {
      icon: "💊",
      title: "Treatment Plans",
      description: "Personalized treatment suggestions based on your symptoms and medical profile."
    },
    {
      icon: "📊",
      title: "Health Tracking",
      description: "Secure storage of your medical data to track patterns and provide better recommendations."
    }
  ];

  const aiModels = [
    {
      icon: "🔬",
      title: "Clinical BERT",
      description: "Our specialized NLP model processes medical terminology to understand complex symptoms."
    },
    {
      icon: "🌲",
      title: "XGBoost",
      description: "Our decision tree algorithm analyzes health data to identify patterns and predict optimal treatments."
    },
    {
      icon: "🛡️",
      title: "SHAP",
      description: "Our explainable AI framework shows how different factors influence our recommendations with transparency."
    }
  ];

  return (
    <PageLayout 
      backgroundImage="robot-human-hand" 
      secondaryBackgroundImage="digital-doctor-blue"
      overlayOpacity="bg-gradient-to-br from-medicare-darkBlue/10 to-black/10"
    >
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <nav className="flex items-center gap-4">
            <Link to="/about" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors">Health Facts</Link>
            <Link to="/team" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors">Meet the Team</Link>
            <Link to="/login">
              <Button variant="outline" className="border-medicare-blue text-medicare-blue hover:bg-medicare-blue hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-medicare-blue text-white hover:bg-medicare-blue/90">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="glass-card p-8 max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
            Welcome to Your Personal <span className="text-medicare-blue">AI</span> <span className="text-purple-500">Doctor</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Transforming Healthcare with AI: Your Virtual Medical Expert for personalized insights and guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button className="w-full medicare-button transform hover:scale-105 transition-transform">
                Create New Account
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full medicare-button-outline transform hover:scale-105 transition-transform">
                Existing User Login
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 flex justify-center">
            <MedicareLogo />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-medicare-darkBlue text-shadow-md">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="medicare-card hover:shadow-lg transform hover:scale-[1.03] transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-medicare-darkBlue">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Models Section */}
      <div className="container mx-auto px-6 py-12 mb-12">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-medicare-darkBlue">Powered By Advanced AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg text-center transform hover:scale-[1.03] transition-transform bg-white/40 backdrop-blur-sm border border-white/30" 
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-medicare-darkBlue">{model.title}</h3>
                <p className="text-gray-600 text-sm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer with improved visibility */}
      <footer className="bg-white/70 backdrop-blur-md py-4 mt-auto border-t border-white/30">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo />
            <span className="ml-2 text-sm text-medicare-darkBlue">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-medicare-darkBlue font-medium">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
