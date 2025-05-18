
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const Dashboard = () => {
  const recommendations = [
    {
      symptom: "Cough",
      date: "May 18, 2025 - 05:58 AM",
    },
    {
      symptom: "Fever",
      date: "May 18, 2025 - 05:58 AM",
    }
  ];

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Button className="medicare-button-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Profile Section */}
          <div>
            <div className="medicare-card mb-6">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Patient Profile</h2>
              </div>
              <p className="text-gray-600 text-sm mb-6">Your personal health summary.</p>

              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Shipra Nayal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-medicare-blue text-white rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-medicare-darkBlue">Shipra Nayal</h3>
                <p className="text-gray-600 text-sm">shipra.nayal98@gmail.com</p>
              </div>

              <div className="border-t pt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-gray-500">AGE</p>
                  <p className="font-medium">22 years</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">GENDER</p>
                  <p className="font-medium">Female</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">HEIGHT</p>
                  <p className="font-medium">165 cm</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">WEIGHT</p>
                  <p className="font-medium">55 kg</p>
                </div>
              </div>
            </div>

            {/* Medical Records Section */}
            <div className="medicare-card">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Medical Records</h2>
              </div>

              <Button className="w-full medicare-button-outline mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload New Record
              </Button>

              <div className="border rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Sem - 4 fees.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">5/18/2025</span>
                  <button className="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Symptom Analysis Section */}
            <div className="medicare-card">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Symptom Analysis</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">Please describe your current health symptoms or conditions you're experiencing today.</p>

              <Textarea 
                className="medicare-input mb-4"
                placeholder="e.g., Persistent cough and mild fever for 2 days, feeling fatigued, occasional headache..."
                rows={6}
              />

              <Button className="w-full medicare-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Analyze My Symptoms
              </Button>
            </div>

            {/* Previous Recommendations Section */}
            <div className="medicare-card">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Previous Recommendations</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">Review your past AI-generated health advice.</p>

              {recommendations.map((rec, index) => (
                <div key={index} className="border-b last:border-b-0 py-4">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-medium">Symptoms: {rec.symptom}</p>
                    <button className="text-medicare-blue text-sm hover:underline">View Details</button>
                  </div>
                  <p className="text-sm text-gray-500">{rec.date}</p>
                </div>
              ))}
            </div>

            {/* Personalized Treatment Section */}
            <div className="medicare-card">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Get Your Personalized Medical Treatment</h2>
              </div>

              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-center">
                  Your personalized treatment insights will appear here after analyzing your symptoms or new medical records.
                </p>
              </div>
            </div>
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

export default Dashboard;
