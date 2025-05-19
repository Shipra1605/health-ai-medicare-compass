
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
      icon: "💉",
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
    <PageLayout backgroundImage="blue-wave">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/about" className="text-white hover:text-medicare-blue transition-colors text-shadow-sm">About</Link>
            <Link to="/health-facts" className="text-white hover:text-medicare-blue transition-colors text-shadow-sm">Health Facts</Link>
            <Link to="/team" className="text-white hover:text-medicare-blue transition-colors text-shadow-sm">Meet the Team</Link>
            <Link to="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-medicare-blue text-white hover:bg-medicare-blue/90">
                Sign Up
              </Button>
            </Link>
          </nav>
          
          {/* Mobile navigation - only show buttons */}
          <div className="flex md:hidden items-center gap-2">
            <Link to="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-sm py-1">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-medicare-blue text-white hover:bg-medicare-blue/90 text-sm py-1">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl mx-auto text-center animate-fade-in-up border border-white/30">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shadow-md">
            Welcome to Your Personal <span className="text-medicare-blue">AI</span> <span className="text-purple-500">Doctor</span>
          </h1>
          <p className="text-white text-shadow-sm mb-8 text-lg">
            Transforming Healthcare with AI: Your Virtual Medical Expert for personalized insights and guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button className="w-full medicare-button transform hover:scale-105 transition-transform">
                Create New Account
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full bg-white/20 text-white border-white hover:bg-white/30 transform hover:scale-105 transition-transform">
                Existing User Login
              </Button>
            </Link>
          </div>
          
          <div className="mt-6 flex justify-center">
            <MedicareLogo />
          </div>
          
          {/* Decorative AI hand image */}
          <img 
            src="/lovable-uploads/58e80d30-0778-4ff9-8a72-7f660e841b80.png" 
            alt="AI Healthcare"
            className="w-32 h-32 object-contain mx-auto mt-4 opacity-80"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-white text-shadow-md">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card hover:shadow-lg transform hover:scale-[1.03] transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{service.title}</h3>
              <p className="text-white/90 text-shadow-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Models Section */}
      <div className="container mx-auto px-6 py-12 mb-12">
        <div className="glass-card">
          <h2 className="text-2xl font-bold text-center mb-8 text-white text-shadow-md">Powered By Advanced AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg text-center transform hover:scale-[1.03] transition-transform bg-white/10 backdrop-blur-md border border-white/20" 
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{model.title}</h3>
                <p className="text-white/90 text-sm text-shadow-xs">{model.description}</p>
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
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
