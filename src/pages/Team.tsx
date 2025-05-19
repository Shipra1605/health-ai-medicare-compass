
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';

const Team = () => {
  const teamMembers = [
    {
      name: "Shipra Nayal",
      role: "Team Lead & Frontend Developer",
      sapId: "800XXXXXX",
      email: "shipra.nayal@example.com",
      linkedin: "#"
    },
    {
      name: "Team Member 2",
      role: "Backend Developer",
      sapId: "800XXXXXX",
      email: "member2@example.com",
      linkedin: "#"
    },
    {
      name: "Team Member 3",
      role: "ML Engineer",
      sapId: "800XXXXXX",
      email: "member3@example.com",
      linkedin: "#"
    },
    {
      name: "Team Member 4",
      role: "Data Scientist",
      sapId: "500XXXXXX",
      email: "member4@example.com",
      linkedin: "#"
    },
    {
      name: "Team Member 5",
      role: "UI/UX Designer",
      sapId: "500XXXXXX",
      email: "member5@example.com",
      linkedin: "#"
    }
  ];

  return (
    <PageLayout backgroundImage="doctor">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Team Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="medicare-card mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            This project MediCare AI is built by a team of MCA students specializing in Artificial Intelligence and Machine Learning. Our Collaborative support and diverse skills, knowledge and understanding of the problem statement has made this project possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="medicare-card hover:shadow-lg transition-all">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${10 + index}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-medicare-darkBlue">{member.name}</h3>
                <p className="text-medicare-blue text-sm">{member.role}</p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                  <span>SAP ID: {member.sapId}</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{member.email}</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a href={member.linkedin} className="text-medicare-blue hover:underline">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-700 font-medium">
          Made in partial fulfillment of Master's in Computer Applications (MCA) with specialization in Machine Learning and Artificial Intelligence under IBM internship program
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

export default Team;
