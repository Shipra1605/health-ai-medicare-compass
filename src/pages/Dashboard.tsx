
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [symptoms, setSymptoms] = useState('');
  const [severityLevel, setSeverityLevel] = useState(5);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showTreatment, setShowTreatment] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [medicalRecords, setMedicalRecords] = useState<any[]>([]);
  const [profileImage, setProfileImage] = useState<string | null>(null);
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
    
    // Load saved recommendations from localStorage (if any)
    const savedRecommendations = localStorage.getItem('medicareRecommendations');
    if (savedRecommendations) {
      setRecommendations(JSON.parse(savedRecommendations));
    }
    
    // Load saved medical records from localStorage (if any)
    const savedRecords = localStorage.getItem('medicareMedicalRecords');
    if (savedRecords) {
      setMedicalRecords(JSON.parse(savedRecords));
    }
    
    // Load profile image from localStorage (if any)
    const savedProfileImage = localStorage.getItem('medicareProfileImage');
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
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
    if (!symptoms.trim()) {
      toast({
        title: "Error",
        description: "Please enter your symptoms",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would be an API call to the ML model
    // Here we're simulating a response
    setTimeout(() => {
      const newRecommendation = {
        symptom: symptoms,
        severity: severityLevel,
        date: new Date().toLocaleString(),
        id: Date.now()
      };
      
      const updatedRecommendations = [newRecommendation, ...recommendations];
      setRecommendations(updatedRecommendations);
      localStorage.setItem('medicareRecommendations', JSON.stringify(updatedRecommendations));
      
      setSymptoms('');
      setSeverityLevel(5);
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
    const newRecord = {
      name: selectedFile.name,
      date: new Date().toLocaleDateString(),
      id: Date.now()
    };
    
    const updatedRecords = [newRecord, ...medicalRecords];
    setMedicalRecords(updatedRecords);
    localStorage.setItem('medicareMedicalRecords', JSON.stringify(updatedRecords));
    
    setSelectedFile(null);
    
    toast({
      title: "File Uploaded",
      description: `${selectedFile.name} has been uploaded successfully`,
    });
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          const imageUrl = event.target.result as string;
          setProfileImage(imageUrl);
          localStorage.setItem('medicareProfileImage', imageUrl);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteRecord = (id: number) => {
    const updatedRecords = medicalRecords.filter(record => record.id !== id);
    setMedicalRecords(updatedRecords);
    localStorage.setItem('medicareMedicalRecords', JSON.stringify(updatedRecords));
    
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
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
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
        <h1 className="text-2xl font-bold text-medicare-darkBlue mb-6">
          Welcome back, {user?.name || 'User'}!
        </h1>
        
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
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden relative">
                  {profileImage ? (
                    <img 
                      src={profileImage}
                      alt={user?.profile?.fullName || user?.name || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <label className="absolute bottom-0 right-0 bg-medicare-blue text-white rounded-full p-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input 
                      type="file" 
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfileImageChange}
                    />
                  </label>
                </div>
                <h3 className="font-semibold text-medicare-darkBlue">{user?.profile?.fullName || user?.name}</h3>
                <p className="text-gray-600 text-sm">{user?.email}</p>
              </div>

              <div className="border-t pt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-gray-500">AGE</p>
                  <p className="font-medium">{user?.profile?.age || 'N/A'} years</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">GENDER</p>
                  <p className="font-medium">{user?.profile?.gender || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">HEIGHT</p>
                  <p className="font-medium">{user?.profile?.height || 'N/A'} cm</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">WEIGHT</p>
                  <p className="font-medium">{user?.profile?.weight || 'N/A'} kg</p>
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

              <div className="flex items-center mb-4 space-x-2">
                <Input 
                  type="file"
                  className="flex-1"
                  onChange={handleFileChange}
                />
                <Button 
                  className="medicare-button-outline" 
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
                <div className="space-y-3">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>{record.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{record.date}</span>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteRecord(record.id)}
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
                <div className="text-center py-4 text-gray-500">
                  No medical records uploaded
                </div>
              )}
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
                rows={4}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity Level: {severityLevel}
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs">1</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={severityLevel}
                    onChange={(e) => setSeverityLevel(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs">10</span>
                </div>
              </div>

              <Button 
                className="w-full medicare-button"
                onClick={handleSymptomAnalysis}
              >
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

              {recommendations.length > 0 ? (
                recommendations.map((rec) => (
                  <div key={rec.id} className="border-b last:border-b-0 py-4">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">Symptoms: {rec.symptom}</p>
                      <button 
                        className="text-medicare-blue text-sm hover:underline"
                        onClick={() => handleViewRecommendation(rec.id)}
                      >
                        View Details
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500">{rec.date}</p>
                      <span className="text-xs text-white bg-blue-500 px-2 py-0.5 rounded-full">
                        Severity: {rec.severity}/10
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No previous recommendations
                </div>
              )}
            </div>

            {/* Personalized Treatment Section */}
            <div className="medicare-card">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-medicare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h2 className="text-xl font-semibold text-medicare-darkBlue">Get Your Personalized Medical Treatment</h2>
              </div>

              {showTreatment ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Based on symptoms: {recommendations[0]?.symptom || 'cough'}</h3>
                    <p className="text-sm text-gray-500">Generated: {recommendations[0]?.date || '5/19/2025, 5:12:50 AM'}</p>
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
                      <li>Past medical condition (weight: 0.35)</li>
                      <li>Duration of symptoms (weight: 0.20)</li>
                    </ul>
                  </div>
                </div>
              ) : (
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
              )}
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
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Dashboard;
