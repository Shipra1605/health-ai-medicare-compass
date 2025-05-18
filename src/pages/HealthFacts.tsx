
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';

const HealthFacts = () => {
  const [activeTab, setActiveTab] = useState('facts');
  const [currentFact, setCurrentFact] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  const healthFacts = [
    {
      icon: "🧠",
      title: "Hydration Enhances Brain Function",
      content: "Even mild dehydration—as little as 2% fluid loss—can affect your mood, energy level, and cognitive function. Research shows that staying properly hydrated improves brain performance by up to 30%, enhancing concentration, alertness, and short-term memory."
    },
    {
      icon: "❤️",
      title: "Regular Exercise Reduces Heart Disease Risk",
      content: "Just 150 minutes of moderate exercise per week can reduce your risk of heart disease by up to 30%. Physical activity helps lower blood pressure, improves cholesterol levels, and strengthens the heart muscle."
    },
    {
      icon: "😴",
      title: "Sleep Affects Immune Function",
      content: "Adults who sleep less than 7 hours per night are 3 times more likely to catch a cold. During sleep, your immune system releases proteins called cytokines that help fight infection and inflammation."
    },
    {
      icon: "🥗",
      title: "Gut Health Impacts Mental Health",
      content: "Your gut produces about 95% of your body's serotonin, often called the 'happiness hormone.' This creates a strong connection between digestive health and mental well-being, explaining why digestive issues often correlate with anxiety and depression."
    },
    {
      icon: "🧘",
      title: "Meditation Changes Brain Structure",
      content: "Regular meditation practice can physically change your brain in as little as 8 weeks. MRI scans show increased gray matter density in brain regions associated with learning, memory, self-awareness, compassion, and introspection."
    }
  ];

  const preventionTips = [
    {
      icon: "💧",
      title: "Stay Hydrated Throughout the Day",
      content: "Drink at least 8-10 glasses of water daily. Set reminders if needed and carry a reusable water bottle. Proper hydration supports immune function, cognitive performance, and helps remove toxins from the body."
    },
    {
      icon: "🚶",
      title: "Take Movement Breaks",
      content: "Stand up and move for at least 5 minutes every hour during your workday. Extended sitting increases health risks, while regular movement breaks improve circulation, muscle activity, and overall metabolic health."
    },
    {
      icon: "🥦",
      title: "Eat a Rainbow Daily",
      content: "Consume at least 5 different colored fruits and vegetables each day. Different colored produce contains different phytonutrients that protect your cells from oxidative stress and reduce inflammation."
    },
    {
      icon: "😴",
      title: "Prioritize Sleep",
      content: "Establish a consistent sleep schedule with 7-9 hours of quality sleep. Create a relaxing bedtime routine and avoid screens 1 hour before sleeping. Quality sleep is essential for cellular repair, immune function, and mental clarity."
    },
    {
      icon: "🧠",
      title: "Practice Mindfulness Daily",
      content: "Spend at least 10 minutes each day in mindful practice. This could be meditation, deep breathing, or simply focusing on your present surroundings. Mindfulness reduces stress hormones, lowers inflammation, and improves emotional regulation."
    }
  ];

  const handleNextFact = () => {
    setCurrentFact((prev) => (prev + 1) % healthFacts.length);
  };

  const handleNextTip = () => {
    setCurrentTip((prev) => (prev + 1) % preventionTips.length);
  };

  return (
    <PageLayout backgroundImage="blue-wave">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="medicare-card mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Health Knowledge Center</h1>
          <p className="text-gray-700 mb-6">
            Discover important health facts and prevention tips to help you make informed decisions about your wellbeing
          </p>
          
          {/* Tabs */}
          <div className="flex border-b mb-8 justify-center gap-4">
            <button 
              className={activeTab === 'facts' ? 'tab-button-active' : 'tab-button'} 
              onClick={() => setActiveTab('facts')}
            >
              Health Facts
            </button>
            <button 
              className={activeTab === 'tips' ? 'tab-button-active' : 'tab-button'} 
              onClick={() => setActiveTab('tips')}
            >
              Prevention Tips
            </button>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {activeTab === 'facts' ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-500 text-2xl mb-4">
                  {healthFacts[currentFact].icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{healthFacts[currentFact].title}</h2>
                <p className="text-gray-700 mb-8">{healthFacts[currentFact].content}</p>
                <Button 
                  className="medicare-button mx-auto"
                  onClick={handleNextFact}
                >
                  Next Fact <span className="ml-2">→</span>
                </Button>
                <p className="mt-4 text-sm text-gray-500">Fact {currentFact + 1} of {healthFacts.length}</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-500 text-2xl mb-4">
                  {preventionTips[currentTip].icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{preventionTips[currentTip].title}</h2>
                <p className="text-gray-700 mb-8">{preventionTips[currentTip].content}</p>
                <Button 
                  className="medicare-button mx-auto"
                  onClick={handleNextTip}
                >
                  Next Tip <span className="ml-2">→</span>
                </Button>
                <p className="mt-4 text-sm text-gray-500">Tip {currentTip + 1} of {preventionTips.length}</p>
              </div>
            )}
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

export default HealthFacts;
