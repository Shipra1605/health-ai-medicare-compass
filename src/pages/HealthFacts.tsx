import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Heart, Brain, Stethoscope, Pill, Activity, Award, Footprints, Apple, Coffee } from 'lucide-react';

const HealthFacts = () => {
  const [activeTab, setActiveTab] = useState('facts');
  const [currentFact, setCurrentFact] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  // Expanded to 30 health facts with icons
  const healthFacts = [
    {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Hydration Enhances Brain Function",
      content: "Even mild dehydration—as little as 2% fluid loss—can affect your mood, energy level, and cognitive function. Research shows that staying properly hydrated improves brain performance by up to 30%, enhancing concentration, alertness, and short-term memory."
    },
    {
      icon: <Activity className="text-blue-500" size={24} />,
      title: "Regular Exercise Reduces Heart Disease Risk",
      content: "Just 150 minutes of moderate exercise per week can reduce your risk of heart disease by up to 30%. Physical activity helps lower blood pressure, improves cholesterol levels, and strengthens the heart muscle."
    },
    {
      icon: <Brain className="text-purple-500" size={24} />,
      title: "Sleep Affects Immune Function",
      content: "Adults who sleep less than 7 hours per night are 3 times more likely to catch a cold. During sleep, your immune system releases proteins called cytokines that help fight infection and inflammation."
    },
    {
      icon: <Pill className="text-green-500" size={24} />,
      title: "Gut Health Impacts Mental Health",
      content: "Your gut produces about 95% of your body's serotonin, often called the 'happiness hormone.' This creates a strong connection between digestive health and mental well-being, explaining why digestive issues often correlate with anxiety and depression."
    },
    {
      icon: <Award className="text-yellow-500" size={24} />,
      title: "Meditation Changes Brain Structure",
      content: "Regular meditation practice can physically change your brain in as little as 8 weeks. MRI scans show increased gray matter density in brain regions associated with learning, memory, self-awareness, compassion, and introspection."
    },
    {
      icon: <Footprints className="text-cyan-500" size={24} />,
      title: "Blue Light Affects Eye Health",
      content: "Prolonged exposure to blue light from digital screens can contribute to digital eye strain and may damage retinal cells. The 20-20-20 rule helps protect your eyes: every 20 minutes, look at something 20 feet away for at least 20 seconds."
    },
    {
      icon: <Stethoscope className="text-teal-500" size={24} />,
      title: "Weight-Bearing Exercise Builds Bone Density",
      content: "Activities like walking, running, and resistance training stimulate bone formation. People who regularly perform weight-bearing exercises have higher bone density and a lower risk of osteoporosis as they age."
    },
    {
      icon: <Apple className="text-red-400" size={24} />,
      title: "Deep Breathing Reduces Stress",
      content: "Slow, deep breathing activates your parasympathetic nervous system, which controls your body's rest and digest functions. Just 5 minutes of deep breathing can significantly reduce cortisol levels and blood pressure."
    },
    {
      icon: <Coffee className="text-brown-500" size={24} />,
      title: "Vitamin C Boosts Collagen Production",
      content: "Vitamin C is essential for the synthesis of collagen, a protein that provides structure to your skin, bones, and connective tissues. Without adequate vitamin C, collagen production decreases, which can lead to joint pain and skin problems."
    },
    {
      icon: <Heart className="text-pink-500" size={24} />,
      title: "Sunlight Regulates Sleep Patterns",
      content: "Morning sunlight exposure helps regulate your circadian rhythm by suppressing melatonin production. Just 15-30 minutes of natural light exposure each morning can improve sleep quality and make it easier to wake up early."
    },
    {
      icon: <Brain className="text-indigo-500" size={24} />,
      title: "Music Impacts Cognitive Function",
      content: "Listening to music can activate almost all brain regions and improve cognitive performance. Studies show that learning to play an instrument can enhance verbal memory, spatial reasoning, and literacy skills."
    },
    {
      icon: <Activity className="text-emerald-500" size={24} />,
      title: "Laughter Boosts Immune System",
      content: "Laughter increases immune cells and infection-fighting antibodies, improving your resistance to disease. It also triggers the release of endorphins, promoting an overall sense of well-being and temporarily relieving pain."
    },
    {
      icon: <Apple className="text-green-600" size={24} />,
      title: "Fiber Promotes Heart Health",
      content: "For every 7 grams of fiber consumed daily, your risk of heart disease drops by 9%. Soluble fiber found in oats, beans, and fruits can help lower cholesterol and regulate blood sugar levels."
    },
    {
      icon: <Footprints className="text-orange-500" size={24} />,
      title: "Nature Exposure Lowers Stress Hormones",
      content: "Spending just 20 minutes in nature significantly lowers stress hormone levels. Studies show that forest bathing (walking among trees) reduces blood pressure, anxiety, and depression while boosting mood and immune function."
    },
    {
      icon: <Pill className="text-amber-500" size={24} />,
      title: "Omega-3 Fats Support Brain Health",
      content: "Omega-3 fatty acids are essential for brain function and development. Regular consumption of omega-3-rich foods like fatty fish, walnuts, and flaxseeds has been linked to reduced risk of cognitive decline, depression, and ADHD."
    },
    {
      icon: <Coffee className="text-slate-700" size={24} />,
      title: "Coffee May Extend Lifespan",
      content: "Moderate coffee consumption (3-5 cups daily) has been associated with a lower risk of several diseases, including type 2 diabetes, heart disease, Parkinson's disease, and certain cancers. The antioxidants in coffee may help reduce inflammation and improve longevity."
    },
    {
      icon: <Heart className="text-rose-500" size={24} />,
      title: "Gratitude Improves Heart Health",
      content: "Practicing gratitude reduces inflammatory biomarkers associated with heart health. People who regularly express gratitude have lower blood pressure, better sleep quality, and reduced symptoms of depression and anxiety."
    },
    {
      icon: <Award className="text-amber-400" size={24} />,
      title: "Social Connections Boost Longevity",
      content: "Strong social relationships can increase your chances of survival by 50%. Social isolation, on the other hand, poses health risks comparable to smoking 15 cigarettes a day and exceeds the risks of obesity."
    },
    {
      icon: <Stethoscope className="text-blue-400" size={24} />,
      title: "Singing Improves Respiratory Health",
      content: "Regular singing strengthens your diaphragm and increases lung capacity. It also boosts immune function by increasing immunoglobulin A, an antibody that serves as the body's first line of defense against respiratory infections."
    },
    {
      icon: <Brain className="text-violet-500" size={24} />,
      title: "Bilingualism Delays Dementia",
      content: "People who speak two or more languages regularly can delay the onset of dementia by up to 5 years. Switching between languages exercises the brain and builds cognitive reserve, which helps compensate for age-related brain changes."
    },
    {
      icon: <Activity className="text-sky-500" size={24} />,
      title: "Posture Affects Hormone Levels",
      content: "Adopting power postures (expansive, open positions) for just two minutes can increase testosterone by up to 20% and decrease cortisol by 25%. Better posture also improves breathing, digestion, and reduces muscle tension."
    },
    {
      icon: <Pill className="text-fuchsia-500" size={24} />,
      title: "Spices Have Medicinal Properties",
      content: "Many common spices have powerful health benefits. Turmeric contains curcumin, which has strong anti-inflammatory properties. Cinnamon helps regulate blood sugar, ginger reduces nausea, and garlic supports heart health."
    },
    {
      icon: <Coffee className="text-stone-500" size={24} />,
      title: "Tea Contains Protective Compounds",
      content: "Both green and black tea contain catechins and flavonoids that have antioxidant, anti-inflammatory, and neuroprotective effects. Regular tea consumption has been linked to reduced risk of heart disease, stroke, and certain types of cancer."
    },
    {
      icon: <Footprints className="text-lime-500" size={24} />,
      title: "Walking Barefoot Has Benefits",
      content: "Walking barefoot on natural surfaces (known as 'earthing' or 'grounding') has been shown to reduce inflammation, improve sleep, normalize cortisol patterns, and enhance wound healing by connecting with the Earth's electrical field."
    },
    {
      icon: <Apple className="text-red-500" size={24} />,
      title: "Intermittent Fasting Promotes Cellular Repair",
      content: "Periods of fasting trigger cellular repair processes, including autophagy—where cells remove damaged components. Research suggests intermittent fasting may extend lifespan, improve metabolic health, and protect against disease."
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: "Cold Exposure Strengthens Immunity",
      content: "Regular exposure to cold temperatures, through practices like cold showers or winter swimming, increases brown fat activation, strengthens immune response, reduces inflammation, and may improve metabolism and mood."
    },
    {
      icon: <Award className="text-orange-400" size={24} />,
      title: "Handwriting Enhances Learning",
      content: "Taking notes by hand leads to better concept comprehension and retention than typing. The physical act of writing engages more areas of the brain and forces more efficient processing and summarization of information."
    },
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: "Probiotics Impact Brain Function",
      content: "The gut-brain axis allows gut bacteria to influence your brain health and behavior. Certain probiotic strains have been shown to reduce symptoms of depression, anxiety, and stress by modulating neurotransmitter production."
    },
    {
      icon: <Activity className="text-teal-600" size={24} />,
      title: "Gentle Movement Relieves Joint Pain",
      content: "Regular, gentle movement lubricates joints and strengthens surrounding muscles, reducing stiffness and pain. Low-impact exercises like swimming, cycling, and tai chi are particularly beneficial for those with arthritis or joint issues."
    },
    {
      icon: <Stethoscope className="text-cyan-600" size={24} />,
      title: "Indoor Plants Improve Air Quality",
      content: "Certain houseplants can remove volatile organic compounds (VOCs) from indoor air. Spider plants, peace lilies, and snake plants are particularly effective at absorbing pollutants and increasing oxygen levels in your home."
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
            Back to Homepage
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/50 text-center">
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
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-blue-500 text-2xl mb-4 transform hover:scale-110 transition-transform duration-300 shadow-lg">
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
