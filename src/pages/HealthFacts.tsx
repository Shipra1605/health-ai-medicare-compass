
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
    },
    {
      icon: "👁️",
      title: "Blue Light Affects Eye Health",
      content: "Prolonged exposure to blue light from digital screens can contribute to digital eye strain and may damage retinal cells. The 20-20-20 rule helps protect your eyes: every 20 minutes, look at something 20 feet away for at least 20 seconds."
    },
    {
      icon: "🦴",
      title: "Weight-Bearing Exercise Builds Bone Density",
      content: "Activities like walking, running, and resistance training stimulate bone formation. People who regularly perform weight-bearing exercises have higher bone density and a lower risk of osteoporosis as they age."
    },
    {
      icon: "🫁",
      title: "Deep Breathing Reduces Stress",
      content: "Slow, deep breathing activates your parasympathetic nervous system, which controls your body's rest and digest functions. Just 5 minutes of deep breathing can significantly reduce cortisol levels and blood pressure."
    },
    {
      icon: "🍊",
      title: "Vitamin C Boosts Collagen Production",
      content: "Vitamin C is essential for the synthesis of collagen, a protein that provides structure to your skin, bones, and connective tissues. Without adequate vitamin C, collagen production decreases, which can lead to joint pain and skin problems."
    },
    {
      icon: "🔆",
      title: "Sunlight Regulates Sleep Patterns",
      content: "Morning sunlight exposure helps regulate your circadian rhythm by suppressing melatonin production. Just 15-30 minutes of natural light exposure each morning can improve sleep quality and make it easier to wake up early."
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
    },
    {
      icon: "🩺",
      title: "Schedule Regular Health Check-ups",
      content: "Don't wait until you're sick to see a doctor. Regular preventive check-ups can detect potential health issues before they become serious. Annual physicals, dental cleanings, and age-appropriate screenings are essential for long-term health."
    },
    {
      icon: "☀️",
      title: "Protect Your Skin",
      content: "Apply broad-spectrum sunscreen with SPF 30+ daily, even on cloudy days. UV damage is cumulative and can lead to premature aging and skin cancer. Reapply every two hours when outdoors and wear protective clothing when possible."
    },
    {
      icon: "🧪",
      title: "Monitor Key Health Metrics",
      content: "Keep track of vital health numbers like blood pressure, cholesterol, blood sugar, and body mass index. Understanding your baseline values helps you notice concerning changes and gives you concrete goals for improvement."
    },
    {
      icon: "💊",
      title: "Take Medications as Prescribed",
      content: "Follow your doctor's instructions for all medications. Don't stop taking prescriptions without consulting your healthcare provider, even if symptoms improve. Use pill organizers or digital reminders to maintain consistency."
    },
    {
      icon: "🧬",
      title: "Know Your Family Health History",
      content: "Create a detailed record of health conditions that run in your family. This information helps your healthcare providers assess your risk factors and recommend appropriate preventive measures or early screening tests."
    }
  ];

  const handleNextFact = () => {
    setCurrentFact((prev) => (prev + 1) % healthFacts.length);
  };

  const handleNextTip = () => {
    setCurrentTip((prev) => (prev + 1) % preventionTips.length);
  };

  return (
    <PageLayout 
      backgroundImage="robot-human-heart"
      overlayOpacity="bg-gradient-to-br from-medicare-darkBlue/10 to-black/10"
    >
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/50 backdrop-blur-md border-b border-white/40 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="medicare-card mb-10 text-center shadow-xl border border-white/50">
          <h1 className="text-3xl font-bold mb-4 text-medicare-darkBlue text-shadow-sm">Health Knowledge Center</h1>
          <p className="text-gray-800 mb-6 font-medium">
            Discover important health facts and prevention tips to help you improve your day-to-day wellbeing
          </p>
          
          {/* Tabs */}
          <div className="flex border-b mb-8 justify-center gap-4">
            <button 
              className={activeTab === 'facts' ? 'tab-button-active shadow-md transform hover:scale-105 transition-transform' : 'tab-button shadow-sm transform hover:scale-105 transition-transform'} 
              onClick={() => setActiveTab('facts')}
            >
              Health Facts
            </button>
            <button 
              className={activeTab === 'tips' ? 'tab-button-active shadow-md transform hover:scale-105 transition-transform' : 'tab-button shadow-sm transform hover:scale-105 transition-transform'} 
              onClick={() => setActiveTab('tips')}
            >
              Prevention Tips
            </button>
          </div>
          
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {activeTab === 'facts' ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-500 text-2xl mb-4 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                  {healthFacts[currentFact].icon}
                </div>
                <h2 className="text-xl font-semibold mb-4 text-medicare-darkBlue text-shadow-sm">{healthFacts[currentFact].title}</h2>
                <p className="text-gray-800 mb-8 font-medium">{healthFacts[currentFact].content}</p>
                <Button 
                  className="medicare-button mx-auto transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                  onClick={handleNextFact}
                >
                  Next Fact <span className="ml-2">→</span>
                </Button>
                <p className="mt-4 text-sm text-gray-600 font-medium">Fact {currentFact + 1} of {healthFacts.length}</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-500 text-2xl mb-4 transform hover:scale-110 transition-transform duration-300 shadow-lg">
                  {preventionTips[currentTip].icon}
                </div>
                <h2 className="text-xl font-semibold mb-4 text-medicare-darkBlue text-shadow-sm">{preventionTips[currentTip].title}</h2>
                <p className="text-gray-800 mb-8 font-medium">{preventionTips[currentTip].content}</p>
                <Button 
                  className="medicare-button mx-auto transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                  onClick={handleNextTip}
                >
                  Next Tip <span className="ml-2">→</span>
                </Button>
                <p className="mt-4 text-sm text-gray-600 font-medium">Tip {currentTip + 1} of {preventionTips.length}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-md py-4 mt-auto border-t border-white/40 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo />
            <span className="ml-2 text-sm text-medicare-darkBlue font-medium">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm text-medicare-darkBlue font-medium">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default HealthFacts;
