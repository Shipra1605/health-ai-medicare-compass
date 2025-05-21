
import React from 'react';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GratitudePage = () => {
  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation - with glassmorphism */}
      <header className="w-full py-4 px-6 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo size="large" />
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Button variant="ghost" className="text-medicare-darkBlue hover:text-medicare-blue">
                Home
              </Button>
            </Link>
            <Link to="/health-facts">
              <Button variant="ghost" className="text-medicare-darkBlue hover:text-medicare-blue">
                Health Facts
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-medicare-darkBlue hover:text-medicare-blue">
                About
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Gratitude Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-medicare-darkBlue mb-6 text-center drop-shadow-sm">Gratitude</h1>

          <div className="space-y-6 text-lg text-gray-700">
            <p className="leading-relaxed">
              This project Medicare AI is built by a single MCA student specializing in Artificial Intelligence and Machine Learning. The dedication, hard work, and passion for healthcare innovation has made this project possible.
            </p>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h2 className="text-xl font-semibold text-medicare-darkBlue mb-4">Future Enhancements</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Integration with electronic health record systems</li>
                <li>Advanced symptom analysis using deep learning algorithms</li>
                <li>Real-time consultation with healthcare professionals</li>
                <li>Medication tracking and reminder system</li>
                <li>Personalized health insights based on longitudinal data</li>
                <li>Support for multiple languages to increase accessibility</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h2 className="text-xl font-semibold text-medicare-darkBlue mb-4">Acknowledgments</h2>
              <p className="mb-4">
                I would like to express my sincere gratitude to everyone who supported me throughout this journey:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>My professors and mentors who provided guidance and expertise</li>
                <li>Friends and family for their unwavering support</li>
                <li>The healthcare professionals who provided valuable domain knowledge</li>
                <li>Open-source communities that developed the tools used in this project</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - with updated Medicare AI text */}
      <footer className="bg-medicare-darkBlue text-white py-4 mt-auto">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo className="text-white" />
            <span className="ml-2 text-sm text-white">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-white">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default GratitudePage;
