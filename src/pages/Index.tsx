
import React from 'react';
import { Link } from 'react-router-dom';
import MedicareLogo from '@/components/MedicareLogo';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Calendar, HeartPulse, Hospital, Users } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: 'Personalized Medicine',
      description: 'Get treatment plans tailored to your unique medical history and health conditions.',
      icon: <HeartPulse className="w-10 h-10 text-medicare-blue animate-pulse" />
    },
    {
      title: 'Health Monitoring',
      description: 'Track your health metrics and receive AI-powered insights for better well-being.',
      icon: <Hospital className="w-10 h-10 text-medicare-teal" />
    },
    {
      title: 'Doctor Consultation',
      description: 'Connect with healthcare professionals for expert advice and follow-ups.',
      icon: <Users className="w-10 h-10 text-medicare-cyan" />
    },
    {
      title: 'Appointment Scheduling',
      description: 'Easily book and manage your medical appointments with our intuitive system.',
      icon: <Calendar className="w-10 h-10 text-medicare-blue" />
    }
  ];

  return (
    <PageLayout backgroundImage="heartbeat">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-12 glassmorphism">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Home</Link>
            <Link to="/about" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Health Facts</Link>
            <Link to="/team" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Our Team</Link>
            <Link to="/login">
              <Button variant="outline" className="border-medicare-blue text-medicare-blue hover:bg-medicare-blue hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-medicare-blue text-white hover:bg-medicare-cyan">
                Sign Up
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-medicare-cyan">Precision</span> Medicine <br /> 
            For <span className="text-medicare-blue">Everyone</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
            Personalized treatment plans powered by AI, considering your medical history and current health conditions for more effective healthcare.
          </p>
          <div className="flex gap-4">
            <Link to="/signup">
              <Button size="lg" className="medicare-button text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/lovable-uploads/096d8650-30e3-4dc6-8bfa-f9e2d621abe8.png" 
            alt="AI Healthcare" 
            className="w-full max-w-md object-contain animate-float"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-medicare-darkBlue mb-12">
          Our <span className="text-medicare-blue">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="medicare-card flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-medicare-darkBlue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 my-16">
        <div className="bg-gradient-to-r from-medicare-blue to-medicare-cyan rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready for Personalized Healthcare?</h2>
              <p className="text-white/90 mb-8">
                Join MediCare AI today and experience the future of healthcare with precision medicine tailored to your unique health profile.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-white text-medicare-blue hover:bg-white/90">
                  Sign Up Now
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-medical-tech bg-cover bg-center">
              <div className="h-64 md:h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medicare-darkBlue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <MedicareLogo className="mb-4" />
              <p className="text-white/70 text-sm">
                Revolutionizing healthcare through AI-driven precision medicine for personalized treatment plans.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-medicare-cyan">Home</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-medicare-cyan">About</Link></li>
                <li><Link to="/health-facts" className="text-white/70 hover:text-medicare-cyan">Health Facts</Link></li>
                <li><Link to="/team" className="text-white/70 hover:text-medicare-cyan">Our Team</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-white/70 hover:text-medicare-cyan">Dashboard</Link></li>
                <li><Link to="/login" className="text-white/70 hover:text-medicare-cyan">Login</Link></li>
                <li><Link to="/signup" className="text-white/70 hover:text-medicare-cyan">Sign Up</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-white/70">info@medicare-ai.com</p>
              <p className="text-white/70">+1 (800) 123-4567</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white hover:text-medicare-cyan">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-medicare-cyan">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-medicare-cyan">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} MediCare AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
