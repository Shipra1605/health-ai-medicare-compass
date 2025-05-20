
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
      backgroundImage="robot-human-chip" 
      secondaryBackgroundImage="digital-doctor-hologram-blue"
      overlayOpacity="bg-gradient-to-br from-medicare-darkBlue/15 to-black/20"
    >
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <nav className="flex items-center gap-4">
            <Link to="/about" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors font-medium text-shadow-xs">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors font-medium text-shadow-xs">Health Facts</Link>
            <Link to="/team" className="text-medicare-darkBlue hover:text-medicare-blue transition-colors font-medium text-shadow-xs">Meet the Team</Link>
            <Link to="/login">
              <Button variant="outline" className="border-medicare-blue text-medicare-blue hover:bg-medicare-blue hover:text-white shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:translate-y-[-3px]">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-medicare-blue text-white hover:bg-medicare-blue/90 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:translate-y-[-3px]">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="glass-card p-8 max-w-3xl mx-auto text-center animate-fade-in-up shadow-2xl border border-white/50 hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg text-medicare-darkBlue">
            Welcome to Your Personal <span className="text-medicare-blue">AI</span> <span className="text-purple-500">Doctor</span>
          </h1>
          <p className="text-gray-800 mb-8 text-lg font-medium">
            Transforming Healthcare with AI: Your Virtual Medical Expert for personalized insights and guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button className="w-full medicare-button transform hover:scale-105 transition-transform shadow-xl hover:shadow-2xl hover:translate-y-[-3px]">
                Create New Account
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full medicare-button-outline transform hover:scale-105 transition-transform shadow-xl hover:shadow-2xl hover:translate-y-[-3px]">
                Existing User Login
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 flex justify-center">
            <MedicareLogo className="animate-float" />
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
              className="bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-6 transition-all duration-300 border border-white/40 hover:shadow-xl hover:translate-y-[-5px] transform hover:bg-white/80"
            >
              <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-medicare-darkBlue text-shadow-xs">{service.title}</h3>
              <p className="text-gray-700 font-medium">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Models Section */}
      <div className="container mx-auto px-6 py-12 mb-12">
        <div className="glass-card p-8 shadow-2xl border border-white/50 hover:shadow-[0_15px_30px_-5px_rgba(14,165,233,0.25)]">
          <h2 className="text-2xl font-bold text-center mb-8 text-medicare-darkBlue text-shadow-md">Powered By Advanced AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg text-center transform hover:scale-[1.03] transition-transform duration-300 bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl hover:translate-y-[-5px]" 
              >
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{model.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-medicare-darkBlue text-shadow-xs">{model.title}</h3>
                <p className="text-gray-700 text-sm font-medium">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer with improved visibility */}
      <footer className="bg-white/80 backdrop-blur-md py-4 mt-auto border-t border-white/40 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo />
            <span className="ml-2 text-sm text-medicare-darkBlue font-medium">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-medicare-darkBlue font-semibold">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
