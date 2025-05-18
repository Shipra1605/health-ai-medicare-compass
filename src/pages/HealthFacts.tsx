
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const HealthFacts = () => {
  const healthFacts = [
    {
      title: "Precision Medicine",
      description: "Precision medicine takes into account individual variability in genes, environment, and lifestyle for each person. It allows doctors to predict more accurately which treatment strategies will work best for specific patients.",
      facts: [
        "15-30% of patients respond differently to medications due to genetic variations.",
        "Genetic testing can identify which patients will benefit from certain treatments.",
        "Precision medicine has improved survival rates for several cancer types by over 30%."
      ]
    },
    {
      title: "AI in Healthcare",
      description: "Artificial intelligence is transforming healthcare by analyzing vast amounts of data to identify patterns and make predictions that help improve patient care.",
      facts: [
        "AI systems can detect certain cancers from medical images with 95% accuracy.",
        "Machine learning models can predict hospital readmissions with 80% accuracy.",
        "AI-powered tools can reduce diagnostic errors by up to 85% in some specialties."
      ]
    },
    {
      title: "Preventive Healthcare",
      description: "Proactive approaches to health management can prevent diseases before they develop or catch them at early stages when treatment is most effective.",
      facts: [
        "Regular screenings can reduce cancer mortality by up to 20%.",
        "Lifestyle modifications can prevent up to 80% of cardiovascular diseases.",
        "Early intervention programs can reduce chronic disease management costs by 27%."
      ]
    },
    {
      title: "Digital Health",
      description: "The use of information and communication technologies in healthcare is improving access, efficiency, and quality of care worldwide.",
      facts: [
        "Telehealth visits increased by over 4000% during the COVID-19 pandemic.",
        "Remote patient monitoring can reduce hospital readmissions by up to 50%.",
        "Digital health tools can improve medication adherence by 10-30%."
      ]
    }
  ];

  return (
    <PageLayout backgroundImage="blue-wave">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-12 glassmorphism">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <MedicareLogo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Home</Link>
            <Link to="/about" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors font-semibold">Health Facts</Link>
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

      {/* Health Facts Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Health Facts</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Stay informed with the latest research and breakthroughs in healthcare, AI technology, and precision medicine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthFacts.map((section, index) => (
              <Card key={index} className="medicare-card">
                <CardHeader>
                  <CardTitle className="text-xl text-medicare-darkBlue">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.facts.map((fact, factIndex) => (
                      <li key={factIndex} className="flex">
                        <Check className="h-5 w-5 text-medicare-blue mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-medicare-darkBlue mb-4">Did You Know?</h2>
            <p className="text-gray-700 mb-8">
              Studies show that personalized treatment plans generated using AI technology can improve treatment effectiveness by up to 40% compared to standard approaches.
            </p>
            <Link to="/signup">
              <Button className="medicare-button">
                Experience Personalized Healthcare
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-medicare-darkBlue text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} MediCare AI. All rights reserved.</p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default HealthFacts;
