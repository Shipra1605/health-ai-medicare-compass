
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <PageLayout backgroundImage="ai-health">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-12 glassmorphism">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <MedicareLogo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Home</Link>
            <Link to="/about" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors font-semibold">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Health Facts</Link>
            <Link to="/team" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Our Team</Link>
            <Link to="/login">
              <Button variant="outline" className="border-medicare-blue text-medicare-blue hover:bg-medicare-blue hover:text-white">
                Login
              </Button>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-medicare-darkBlue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* About Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="medicare-card mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-medicare-darkBlue mb-6">About MediCare AI</h1>
            <p className="text-gray-700 mb-6">
              MediCare AI was founded with a vision to revolutionize healthcare through the power of artificial intelligence and precision medicine. We believe that every individual deserves healthcare solutions tailored to their unique medical history, genetic makeup, and current health conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Our platform leverages cutting-edge machine learning algorithms to analyze patient data and create personalized treatment plans that maximize effectiveness while minimizing side effects. By considering the complex interplay between various factors affecting a person's health, we enable truly personalized medicine for everyone.
            </p>
            <p className="text-gray-700">
              The MediCare AI team consists of healthcare professionals, data scientists, AI researchers, and software engineers working together to build a future where healthcare is proactive, personalized, and accessible to all.
            </p>
          </div>

          <div className="medicare-card mb-12">
            <h2 className="text-2xl font-bold text-medicare-darkBlue mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To transform healthcare by creating AI-powered solutions that deliver personalized treatment plans, improving patient outcomes and satisfaction while reducing healthcare costs.
            </p>
            
            <h2 className="text-2xl font-bold text-medicare-darkBlue mb-4">Our Vision</h2>
            <p className="text-gray-700">
              A world where precision medicine is accessible to everyone, leading to better health outcomes, reduced healthcare disparities, and improved quality of life for all people.
            </p>
          </div>

          <div className="medicare-card">
            <h2 className="text-2xl font-bold text-medicare-darkBlue mb-6">How MediCare AI Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-medicare-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-medicare-blue">1</span>
                </div>
                <h3 className="text-lg font-semibold text-medicare-darkBlue mb-2">Data Collection</h3>
                <p className="text-gray-600">Securely gather medical history, current symptoms, and health metrics from patients.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-medicare-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-medicare-blue">2</span>
                </div>
                <h3 className="text-lg font-semibold text-medicare-darkBlue mb-2">AI Analysis</h3>
                <p className="text-gray-600">Our ML models analyze the data to identify patterns and optimal treatment approaches.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-medicare-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-medicare-blue">3</span>
                </div>
                <h3 className="text-lg font-semibold text-medicare-darkBlue mb-2">Personalized Plan</h3>
                <p className="text-gray-600">Generate customized treatment recommendations and health insights for each patient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 mb-16">
        <div className="bg-gradient-to-r from-medicare-darkBlue to-medicare-blue rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Personalized Healthcare?</h2>
            <p className="text-white/90 mb-8 max-w-2xl">
              Join MediCare AI today and discover healthcare tailored specifically for you.
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-medicare-blue hover:bg-white/90">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-medicare-darkBlue text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} MediCare AI. All rights reserved.</p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default About;
