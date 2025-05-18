
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      bio: "Board-certified physician with over 15 years of experience in internal medicine and a passion for medical technology innovation.",
      imageUrl: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Rodriguez, PhD",
      role: "AI Research Director",
      bio: "Machine learning expert with a PhD from Stanford University and 10+ years experience developing healthcare AI solutions.",
      imageUrl: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Clinical Research Lead",
      bio: "Specializes in designing clinical validation studies for AI healthcare applications with a focus on diverse patient populations.",
      imageUrl: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      name: "David Kim",
      role: "Lead Software Engineer",
      bio: "Full-stack developer with expertise in secure healthcare applications and HIPAA-compliant data infrastructure.",
      imageUrl: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Dr. James Wilson",
      role: "Data Science Lead",
      bio: "PhD in Bioinformatics with specialization in genomic data analysis and predictive modeling for healthcare applications.",
      imageUrl: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Emma Johnson",
      role: "UX/UI Designer",
      bio: "Award-winning designer focused on creating accessible and intuitive interfaces for healthcare applications.",
      imageUrl: "https://randomuser.me/api/portraits/women/17.jpg"
    },
  ];

  return (
    <PageLayout backgroundImage="doctor">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-12 glassmorphism">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <MedicareLogo />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Home</Link>
            <Link to="/about" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">About</Link>
            <Link to="/health-facts" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors">Health Facts</Link>
            <Link to="/team" className="text-medicare-darkBlue font-medium hover:text-medicare-blue transition-colors font-semibold">Our Team</Link>
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

      {/* Team Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our diverse team of experts is dedicated to revolutionizing healthcare through innovative AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col medicare-card hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex-grow bg-white/90 backdrop-blur-md">
                <h3 className="text-xl font-bold text-medicare-darkBlue">{member.name}</h3>
                <p className="text-medicare-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
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

export default Team;
