import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from '@/components/ui/progress';

// Symptom dropdown options
const symptomOptions = [
  'Fever, Cough',
  'Headache, Fatigue',
  'Shortness of breath',
  'Nausea, Vomiting',
  'Sore Throat',
  'Joint Pain, Fatigue',
  'Chest Pain, Dizziness',
  'Itching, Redness',
  'Abdominal Pain, Bloating',
  'Fatigue, Sadness',
  'Fever, Muscle Aches',
  'Cough, Sneezing',
  'Nausea, Dizziness',
  'Headache, Blurred Vision',
  'Stomach Pain, Diarrhea',
  'Joint Pain, Swelling',
  'Fever, Sore Throat',
  'Back Pain, Numbness',
  'Fatigue, Weakness',
  'Anxiety, Rapid Heartbeat',
  'Skin Rash, Itching',
  'Cough, Fever',
  'Dizziness, Fatigue',
  'Headache, Sensitivity',
  'Abdominal Pain, Bloating O',
  'Nausea, Cramps',
  'Chest Pain, Shortness of breath',
  'Fatigue, Difficulty breathing',
  'Fever, Chills',
  'Cough, Shortness of breath',
  'Muscle Pain, Fatigue',
  'Anxiety, Palpitations',
  'Cough, Shortness of breat',
  'Chest Pain, Shortness',
  'of breath',
  ' Anxiety, Rapid Heartbeat',
  ' Skin Rash, Itching',
  'Cough, Shortness of brea',
  'e Itching, Redness',
  ' Nausea, Vomiting',
  ' Back Pain, Numbness',
  ' Fatigue, Weakness',
  ' Anxiety, Palpitations',
  'e Joint Pain, Swelling',
  'e Fatigue, Weakness',
  'e Cough, Shortness of brea',
  'e Nausea, Vomiting',
  'e Back Pain, Numbness',
  'e Anxiety, Palpitations',
  'Sore Throat, Cough',
  'Fatigue, Difficulty',
  'eathing',
  'Chest Pain, Shortnessof breath'
];

// Allergies dropdown options (previously "Existing conditions")
const allergyOptions = [
  'Viral Infection',
  'Stress',
  'Pollution',
  'Food Poisoning',
  'Bacterial Infection',
  'Rheumatoid Arthritis',
  'High Blood Pressure',
  'Allergies',
  'Poor Diet',
  'Depression',
  'Cold Weather',
  'Motion Sickness',
  'Smoking',
  'Migraine Triggers',
  'Spicy Food',
  'Autoimmune Response',
  'Herniated Disc',
  'Pregnancy',
  'Anemia',
  'Obesity',
  'Osteoarthritis',
  'Dehydration',
  'Tension',
  'vereating            ',
  'Menstrual Cycle',
  'Heart Disease',
  'Hypothyroidism',
  'Hypothyroidism',
  'Infection',
  'COVID-19 Exposure',
  'Overexertion',
  'Eye Strain',
  'Sciatica',
  'Chronic Fatigue Syndrome',
  'Physical Exertion',
  'Rheumatoid Arthriti',
  'h  COVID-19 Exposure',
  'Overeating',
  'th  COVID-19 Exposure',
  'Rheumatoid Arthrit',
  'Chronic Fatigue',
  'Syndrome',
  ' COVID-19 Exposure',
  'h COVID-19 Exposure',
  'Chronic FatigueSyndrome',
  'Bacterial Infection ',
  'Anemia              ',
  'Stress              ',
  'Obesity             ',
  'Allergies           ',
  'Viral Infection     ',
  'Rheumatoid Arthritis ',
  'Dehydration         ',
  'Tension             ',
  'Overeating          ',
  'Menstrual Cycle    ',
  'Heart Disease       ',
  'Hypothyroidism      ',
  'Infection           ',
  'COVID-19 Exposure   ',
  'Overexertion        ',
  'Food Poisoning  ',
  'Eye Strain          '
];

// Medical conditions dropdown options
const medicalConditionOptions = [
  'Common Cold',
  'Migraine',
  'Asthma',
  'Gastroenteritis',
  'Strep Throat',
  'Arthritis',
  'Hypertension',
  'Allergic Reaction',
  'Indigestion',
  'Major Depressive',
  'Influenza',
  'Motion Sickness',
  'Chronic Bronchitis',
  'Gastritis',
  'Rheumatoid Arthritis',
  'Tonsillitis',
  'Sciatica',
  'Morning Sickness',
  'Iron Deficiency',
  'Panic Disorder',
  'Sleep Apnea',
  'Dermatitis',
  'Respiratory infection',
  'Heat Exhaustion',
  'Tension Headache',
  'Menstrual Cramps',
  'Coronary ArteryDisease',
  'Thyroid Disorder',
  'Pneumonia',
  'COVID-19',
  'Muscle Strain',
  'Vision Fatigue',
  'Herniated Disc',
  'Chronic Fatigue Syndrome',
  'Anxiety Disorder',
  'Muscle Overuse',
  's  Arthritis',
  'Major Depressive Disorder',
  'Allergic Reacti',
  'Chronic Fatigue',
  'Syndrome',
  ' Arthritis',
  'RespiratoryInfection',
  'Coronary Artery',
  'is  Arthritis',
  'Respiratory Infection',
  'Coronary Artery Disease',
  'Respiratory',
  'Infection',
  'Disease',
  'Strep Throat     ',
  'Iron Deficiency ',
  'Panic Disorder  ',
  'Sleep Apnea     ',
  'Dermatitis      ',
  'Respiratory     AntiInfection',
  'Arthritis     ',
  'Heat Exhaustion Hydr',
  'Tension Headache Rel',
  'Indigestion     Anta',
  'Menstrual Cramps Pai',
  'Coronary Artery Disease   ',
  '      ',
  'Disease         ',
  'Pheumonia      ',
  'COVID-19      ',
  'Allergic Reaction An',
  'Muscle Strain  '
];

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [age, setAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [selectedAllergy, setSelectedAllergy] = useState("");
  const [selectedMedicalCondition, setSelectedMedicalCondition] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showTreatment, setShowTreatment] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [medicalRecords, setMedicalRecords] = useState<any[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem('medicareUser');
    if (!userData) {
      toast({
        title: "Authentication Required",
        description: "Please login to access the dashboard",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
    
    // Only load recommendations for this specific user
    const userEmail = parsedUser.email;
    const savedRecommendations = localStorage.getItem(`medicareRecommendations_${userEmail}`);
    if (savedRecommendations) {
      setRecommendations(JSON.parse(savedRecommendations));
    }
    
    // Load saved medical records for this specific user
    const savedRecords = localStorage.getItem(`medicareMedicalRecords_${userEmail}`);
    if (savedRecords) {
      setMedicalRecords(JSON.parse(savedRecords));
    }
    
    setLoading(false);
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('medicareUser');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/login');
  };

  const handleSymptomAnalysis = () => {
    if (!age || !selectedGender || !selectedSymptom || !selectedAllergy || !selectedMedicalCondition) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be an API call to the ML model
    // Here we're simulating a response
    setTimeout(() => {
      const userEmail = user.email;
      const newRecommendation = {
        name: user.profile?.fullName || user.name,
        age: age,
        gender: selectedGender,
        symptom: selectedSymptom,
        allergy: selectedAllergy,
        medicalCondition: selectedMedicalCondition,
        date: new Date().toLocaleString(),
        id: Date.now()
      };
      
      const updatedRecommendations = [newRecommendation, ...recommendations];
      setRecommendations(updatedRecommendations);
      
      // Store recommendations specific to this user
      localStorage.setItem(`medicareRecommendations_${userEmail}`, JSON.stringify(updatedRecommendations));
      
      setAge("");
      setSelectedGender("");
      setSelectedSymptom("");
      setSelectedAllergy("");
      setSelectedMedicalCondition("");
      setShowTreatment(true);
      
      toast({
        title: "Analysis Complete",
        description: "Your symptoms have been analyzed successfully",
      });
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would upload the file to the server
    // Here we're just simulating the upload
    const userEmail = user.email;
    const newRecord = {
      name: selectedFile.name,
      date: new Date().toLocaleDateString(),
      id: Date.now()
    };
    
    const updatedRecords = [newRecord, ...medicalRecords];
    setMedicalRecords(updatedRecords);
    
    // Store medical records specific to this user
    localStorage.setItem(`medicareMedicalRecords_${userEmail}`, JSON.stringify(updatedRecords));
    
    setSelectedFile(null);
    
    toast({
      title: "File Uploaded",
      description: `${selectedFile.name} has been uploaded successfully`,
    });
  };

  const handleDeleteRecord = (id: number) => {
    const userEmail = user.email;
    const updatedRecords = medicalRecords.filter(record => record.id !== id);
    setMedicalRecords(updatedRecords);
    localStorage.setItem(`medicareMedicalRecords_${userEmail}`, JSON.stringify(updatedRecords));
    
    toast({
      title: "Record Deleted",
      description: "Medical record has been deleted successfully",
    });
  };

  const handleViewRecommendation = (id: number) => {
    setShowTreatment(true);
    // In a real app, this would fetch the specific recommendation details
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation - with glassmorphism */}
      <header className="w-full py-4 px-6 bg-white/70 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo size="large" />
          
          <Button className="medicare-button-outline" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-8 mt-2 text-center md:text-left bg-medicare-darkBlue/60 p-3 rounded-lg border border-white/30 backdrop-blur-sm inline-block">
          Welcome Back, {user?.name || 'User'}!
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Profile Section - with improved glassmorphism */}
          <div>
            <div className="glass-card mb-6 p-6">
              <div className="flex items-center gap-3 mb-5 border-b pb-3 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Patient Profile</h2>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-gray-200 mb-4 overflow-hidden relative border-4 border-white/50 shadow-lg">
                  {user?.profile?.profileImage ? (
                    <img 
                      src={user.profile.profileImage}
                      alt={user?.profile?.fullName || user?.name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-blue-50 to-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-xl text-medicare-darkBlue">{user?.profile?.fullName || user?.name}</h3>
                <p className="text-gray-600">{user?.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-white/70 rounded-lg p-4 shadow-inner">
                <div className="p-2 bg-white/70 rounded shadow-sm">
                  <p className="text-xs uppercase text-gray-500 font-medium">GENDER</p>
                  <p className="font-medium text-medicare-darkBlue">{user?.profile?.gender || 'N/A'}</p>
                </div>
                <div className="p-2 bg-white/70 rounded shadow-sm">
                  <p className="text-xs uppercase text-gray-500 font-medium">HEIGHT</p>
                  <p className="font-medium text-medicare-darkBlue">{user?.profile?.height || 'N/A'}</p>
                </div>
                <div className="p-2 bg-white/70 rounded shadow-sm">
                  <p className="text-xs uppercase text-gray-500 font-medium">WEIGHT</p>
                  <p className="font-medium text-medicare-darkBlue">{user?.profile?.weight || 'N/A'}</p>
                </div>
                <div className="p-2 bg-white/70 rounded shadow-sm">
                  <p className="text-xs uppercase text-gray-500 font-medium">CITY</p>
                  <p className="font-medium text-medicare-darkBlue">{user?.profile?.city || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Medical Records Section - with improved glassmorphism */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5 border-b pb-3 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Medical Records</h2>
              </div>

              <div className="flex items-center mb-4 space-x-2 bg-white/70 p-3 rounded-lg">
                <Input 
                  type="file"
                  className="flex-1 bg-white"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <Button 
                  className="medicare-button" 
                  onClick={handleFileUpload}
                  disabled={!selectedFile}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload
                </Button>
              </div>

              {medicalRecords.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-auto pr-1">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border rounded-lg p-3 flex items-center justify-between bg-white/80 backdrop-blur-sm shadow hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{record.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{record.date}</span>
                        <button 
                          className="text-red-500 hover:text-red-700 transform hover:scale-110 transition-transform"
                          onClick={() => handleDeleteRecord(record.id)}
                          aria-label="Delete record"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg">
                  No medical records uploaded
                </div>
              )}
            </div>
          </div>

          {/* Main Content - 2/3 width - with improved glassmorphism */}
          <div className="lg:col-span-2 space-y-6">
            {/* Symptom Analysis Section - Redesigned as requested */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5 border-b pb-3 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Symptom Analysis</h2>
              </div>
              <p className="text-gray-600 mb-6 bg-white/50 p-3 rounded-lg">
                Please provide your information to receive a personalized health analysis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Patient Name - Automatically filled */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <Input
                    type="text"
                    value={user?.profile?.fullName || user?.name}
                    className="medicare-input bg-gray-100"
                    readOnly
                  />
                </div>
                
                {/* Age Input - Added as requested */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter your age"
                    className="medicare-input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                {/* Gender Dropdown */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <Select value={selectedGender} onValueChange={setSelectedGender}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Current Symptoms Dropdown */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Symptoms
                  </label>
                  <Select value={selectedSymptom} onValueChange={setSelectedSymptom}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Select your symptoms" />
                    </SelectTrigger>
                    <SelectContent className="h-80">
                      {symptomOptions.map((symptom, index) => (
                        <SelectItem key={index} value={symptom}>
                          {symptom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Allergies Dropdown (renamed from Existing Conditions) */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Allergies
                  </label>
                  <Select value={selectedAllergy} onValueChange={setSelectedAllergy}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Select allergies" />
                    </SelectTrigger>
                    <SelectContent className="h-80">
                      {allergyOptions.map((condition, index) => (
                        <SelectItem key={index} value={condition}>
                          {condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Existing Medical Conditions Dropdown */}
                <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Existing Medical Conditions
                  </label>
                  <Select value={selectedMedicalCondition} onValueChange={setSelectedMedicalCondition}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Select medical condition" />
                    </SelectTrigger>
                    <SelectContent className="h-80">
                      {medicalConditionOptions.map((condition, index) => (
                        <SelectItem key={index} value={condition}>
                          {condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  className="medicare-button w-64 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
                  onClick={handleSymptomAnalysis}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Analyze My Symptoms
                </Button>
              </div>
            </div>

            {/* Personalized Treatment Plan */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5 border-b pb-3 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Get Your Personalized Medical Treatment</h2>
              </div>

              {showTreatment ? (
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-1">Based on symptoms: {recommendations[0]?.symptom || 'Cough, Fever'}</h3>
                    <p className="text-sm text-gray-600">Generated: {recommendations[0]?.date || new Date().toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Patient: {recommendations[0]?.name || user?.name}, Age: {recommendations[0]?.age || '35'}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-semibold text-blue-700">Recommended Action:</h4>
                    </div>
                    <p className="ml-7 text-gray-700">
                      Antibiotic treatment with follow-up in 7 days. Based on your symptoms and history, a bacterial infection is likely requiring antibiotic treatment.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <h4 className="font-semibold">Confidence Score</h4>
                      </div>
                      <span className="font-semibold">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Key Factors:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Symptom severity (weight: 0.45)</li>
                      <li>Medical condition: {recommendations[0]?.medicalCondition || 'Influenza'} (weight: 0.35)</li>
                      <li>Allergies: {recommendations[0]?.allergy || 'Viral Infection'} (weight: 0.20)</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 bg-white/50 rounded-lg">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-center">
                    Your personalized treatment insights will appear here after analyzing your symptoms.
                  </p>
                </div>
              )}
            </div>

            {/* Previous Recommendations Section */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5 border-b pb-3 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Previous Recommendations</h2>
              </div>
              <p className="text-gray-600 mb-4 bg-white/50 p-3 rounded-lg">Review your past AI-generated health advice.</p>

              {recommendations.length > 0 ? (
                <div className="max-h-64 overflow-auto pr-1">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="border-b last:border-b-0 py-4 bg-white/80 backdrop-blur-sm px-4 rounded-lg mb-2 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium">Symptoms: {rec.symptom}</p>
                        <button 
                          className="text-medicare-blue text-sm hover:underline transform hover:scale-105 transition-transform"
                          onClick={() => handleViewRecommendation(rec.id)}
                        >
                          View Details
                        </button>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{rec.date}</p>
                        <p className="text-sm text-gray-500">Age: {rec.age || 'N/A'}</p>
                        <p className="text-sm text-gray-500">Allergies: {rec.allergy || rec.condition}</p>
                        <p className="text-sm text-gray-500">Medical Condition: {rec.medicalCondition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg">
                  No previous recommendations
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer - with more visible text */}
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

export default Dashboard;
