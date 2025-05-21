
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Heart, FileText, Upload, History, FilePlus2, FileX2, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [medicalRecords, setMedicalRecords] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [processingAnalysis, setProcessingAnalysis] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [currentSymptoms, setCurrentSymptoms] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Current symptoms list
  const symptomsList = [
    'Fever, Cough', 'Headache, Fatigue', 'Shortness of breath', 'Nausea, Vomiting',
    'Sore Throat', 'Joint Pain, Fatigue', 'Chest Pain, Dizziness', 'Itching, Redness',
    'Abdominal Pain, Bloating', 'Fatigue, Sadness', 'Fever, Muscle Aches', 'Cough, Sneezing',
    'Nausea, Dizziness', 'Headache, Blurred Vision', 'Stomach Pain, Diarrhea',
    'Joint Pain, Swelling', 'Fever, Sore Throat', 'Back Pain, Numbness',
    'Fatigue, Weakness', 'Anxiety, Rapid Heartbeat', 'Skin Rash, Itching',
    'Cough, Fever', 'Dizziness, Fatigue', 'Headache, Sensitivity',
    'Abdominal Pain, Bloating O', 'Nausea, Cramps', 'Chest Pain, Shortness of breath',
    'Fatigue, Difficulty breathing', 'Fever, Chills', 'Cough, Shortness of breath',
    'Muscle Pain, Fatigue', 'Anxiety, Palpitations', 'Cough, Shortness of breat',
    'Chest Pain, Shortness', 'of breath', ' Anxiety, Rapid Heartbeat',
    ' Skin Rash, Itching', 'Cough, Shortness of brea', 'e Itching, Redness',
    ' Nausea, Vomiting', ' Back Pain, Numbness', ' Fatigue, Weakness',
    ' Anxiety, Palpitations', 'e Joint Pain, Swelling', 'e Fatigue, Weakness',
    'e Cough, Shortness of brea', 'e Nausea, Vomiting', 'e Back Pain, Numbness',
    'e Anxiety, Palpitations', 'Sore Throat, Cough', 'Fatigue, Difficulty',
    'eathing', 'Chest Pain, Shortnessof breath'
  ];
  
  // Allergies list
  const allergiesList = [
    'Viral Infection', 'Stress', 'Pollution', 'Food Poisoning', 'Bacterial Infection',
    'Rheumatoid Arthritis', 'High Blood Pressure', 'Allergies', 'Poor Diet',
    'Depression', 'Cold Weather', 'Motion Sickness', 'Smoking', 'Migraine Triggers',
    'Spicy Food', 'Autoimmune Response', 'Herniated Disc', 'Pregnancy',
    'Anemia', 'Obesity', 'Osteoarthritis', 'Dehydration', 'Tension',
    'vereating            ', 'Menstrual Cycle', 'Heart Disease', 'Hypothyroidism',
    'Hypothyroidism', 'Infection', 'COVID-19 Exposure', 'Overexertion',
    'Eye Strain', 'Sciatica', 'Chronic Fatigue Syndrome', 'Physical Exertion',
    'Rheumatoid Arthriti', 'h  COVID-19 Exposure', 'Overeating',
    'th  COVID-19 Exposure', 'Rheumatoid Arthrit', 'Chronic Fatigue',
    'Syndrome', ' COVID-19 Exposure', 'h COVID-19 Exposure', 'Chronic FatigueSyndrome',
    'Bacterial Infection ', 'Anemia              ', 'Stress              ',
    'Obesity             ', 'Allergies           ', 'Viral Infection     ',
    'Rheumatoid Arthritis ', 'Dehydration         ', 'Tension             ',
    'Overeating          ', 'Menstrual Cycle    ', 'Heart Disease       ',
    'Hypothyroidism      ', 'Infection           ', 'COVID-19 Exposure   ',
    'Overexertion        ', 'Food Poisoning  ', 'Eye Strain          '
  ];
  
  // Medical conditions list
  const medicalConditionsList = [
    'Common Cold', 'Migraine', 'Asthma', 'Gastroenteritis', 'Strep Throat',
    'Arthritis', 'Hypertension', 'Allergic Reaction', 'Indigestion',
    'Major Depressive', 'Influenza', 'Motion Sickness', 'Chronic Bronchitis',
    'Gastritis', 'Rheumatoid Arthritis', 'Tonsillitis', 'Sciatica',
    'Morning Sickness', 'Iron Deficiency', 'Panic Disorder', 'Sleep Apnea',
    'Dermatitis', 'Respiratory infection', 'Heat Exhaustion', 'Tension Headache',
    'Menstrual Cramps', 'Coronary ArteryDisease', 'Thyroid Disorder',
    'Pneumonia', 'COVID-19', 'Muscle Strain', 'Vision Fatigue',
    'Herniated Disc', 'Chronic Fatigue Syndrome', 'Anxiety Disorder',
    'Muscle Overuse', 's  Arthritis', 'Major Depressive Disorder',
    'Allergic Reacti', 'Chronic Fatigue', 'Syndrome', ' Arthritis',
    'RespiratoryInfection', 'Coronary Artery', 'is  Arthritis',
    'Respiratory Infection', 'Coronary Artery Disease', 'Respiratory',
    'Infection', 'Disease', 'Strep Throat     ', 'Iron Deficiency ',
    'Panic Disorder  ', 'Sleep Apnea     ', 'Dermatitis      ',
    'Respiratory     AntiInfection', 'Arthritis     ', 'Heat Exhaustion Hydr',
    'Tension Headache Rel', 'Indigestion     Anta', 'Menstrual Cramps Pai',
    'Coronary Artery Disease   ', '      ', 'Disease         ',
    'Pheumonia      ', 'COVID-19      ', 'Allergic Reaction An',
    'Muscle Strain  '
  ];

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('medicareUser');
    if (!userData) {
      navigate('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Load user's medical records from localStorage
      const recordsData = localStorage.getItem(`medicareRecords_${parsedUser.email}`);
      if (recordsData) {
        setMedicalRecords(JSON.parse(recordsData));
      }
      
      // Load previous recommendations
      const recommendationsData = localStorage.getItem(`medicareRecommendations_${parsedUser.email}`);
      if (recommendationsData) {
        setRecommendations(JSON.parse(recommendationsData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // localStorage.removeItem('medicareUser');
    navigate('/');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploadingFile(true);
    
    // Simulate file upload
    setTimeout(() => {
      const newRecord = {
        id: Date.now(),
        name: file.name,
        type: file.type,
        size: (file.size / 1024).toFixed(2) + ' KB',
        uploadDate: new Date().toLocaleDateString()
      };
      
      const updatedRecords = [...medicalRecords, newRecord];
      setMedicalRecords(updatedRecords);
      
      // Save to localStorage
      if (user?.email) {
        localStorage.setItem(`medicareRecords_${user.email}`, JSON.stringify(updatedRecords));
      }
      
      setUploadingFile(false);
      
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`
      });
    }, 1500);
  };

  const handleDeleteRecord = (recordId: number) => {
    const updatedRecords = medicalRecords.filter(record => record.id !== recordId);
    setMedicalRecords(updatedRecords);
    
    // Save to localStorage
    if (user?.email) {
      localStorage.setItem(`medicareRecords_${user.email}`, JSON.stringify(updatedRecords));
    }
    
    toast({
      title: "Record deleted",
      description: "The medical record has been removed."
    });
  };

  const handleAnalyzeSymptoms = () => {
    // Validate inputs
    if (!age || !gender || !currentSymptoms || !allergies || !medicalConditions) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields for the symptom analysis.",
        variant: "destructive"
      });
      return;
    }
    
    setProcessingAnalysis(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Generate a semi-random treatment plan based on inputs
      const treatments = [
        `Based on your symptoms of ${currentSymptoms}, we recommend rest and hydration. Consider over-the-counter pain relievers as needed.`,
        `Your symptoms (${currentSymptoms}) combined with your medical history suggest a possible ${medicalConditions} condition. Consider consulting with a healthcare provider.`,
        `With your current symptoms and allergies, we recommend avoiding potential triggers and taking antihistamines if appropriate.`,
        `Rest, hydration, and proper nutrition are recommended. Monitor your symptoms and seek medical attention if they worsen.`
      ];
      
      const randomIndex = Math.floor(Math.random() * treatments.length);
      const newRecommendation = {
        id: Date.now(),
        symptoms: currentSymptoms,
        date: new Date().toLocaleDateString(),
        treatment: treatments[randomIndex],
        followUp: "Schedule a follow-up with your healthcare provider if symptoms persist for more than 5 days."
      };
      
      const updatedRecommendations = [newRecommendation, ...recommendations];
      setRecommendations(updatedRecommendations);
      
      // Save to localStorage with unique key for each user
      if (user?.email) {
        localStorage.setItem(`medicareRecommendations_${user.email}`, JSON.stringify(updatedRecommendations));
      }
      
      setProcessingAnalysis(false);
      
      toast({
        title: "Analysis complete",
        description: "Your personalized treatment plan is ready."
      });
    }, 2000);
  };

  if (!user) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-medicare-blue/90 text-white flex flex-col">
        <div className="p-4 border-b border-blue-600">
          <MedicareLogo className="text-white mx-auto" />
        </div>
        
        <div className="p-4 border-b border-blue-600">
          <p className="text-sm opacity-80">Patient Dashboard</p>
          <h2 className="font-semibold text-lg">Welcome</h2>
        </div>
        
        <div className="flex-1 p-4">
          <h3 className="font-medium mb-2 text-sm uppercase tracking-wider opacity-80">Navigation</h3>
          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors">
              <Heart size={18} />
              <span>Home</span>
            </Link>
            <Link to="/health-facts" className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 transition-colors">
              <FileText size={18} />
              <span>Health Facts</span>
            </Link>
          </nav>
        </div>
        
        <div className="p-4 mt-auto border-t border-blue-600">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white hover:bg-blue-700 hover:text-white"
            onClick={handleLogout}
          >
            Sign out
          </Button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50">
        {/* Header */}
        <header className="bg-white p-4 shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-bold text-medicare-darkBlue">
            Welcome Back, {user.name}!
          </h1>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline">Back to Homepage</Button>
            </Link>
          </div>
        </header>
        
        {/* Content */}
        <div className="p-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile" className="text-lg py-3">Patient Profile</TabsTrigger>
              <TabsTrigger value="records" className="text-lg py-3">Medical Records</TabsTrigger>
              <TabsTrigger value="symptoms" className="text-lg py-3">Symptom Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-4">
              <Card className="shadow-lg border-t-4 border-t-medicare-blue">
                <CardHeader>
                  <CardTitle className="text-xl text-medicare-darkBlue flex items-center gap-2">
                    <Heart className="text-medicare-blue" /> Patient Information
                  </CardTitle>
                  <CardDescription>Your personal profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name</Label>
                      <div className="font-semibold text-lg">{user.name}</div>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <div className="font-semibold text-lg">{user.email}</div>
                    </div>
                    <div>
                      <Label>Height</Label>
                      <div className="font-semibold text-lg">{user.height || "Not provided"}</div>
                    </div>
                    <div>
                      <Label>Weight</Label>
                      <div className="font-semibold text-lg">{user.weight || "Not provided"}</div>
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <div className="font-semibold text-lg">{user.gender || "Not provided"}</div>
                    </div>
                    <div>
                      <Label>City</Label>
                      <div className="font-semibold text-lg">{user.city || "Not provided"}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="records" className="space-y-4">
              <Card className="shadow-lg border-t-4 border-t-medicare-blue">
                <CardHeader>
                  <CardTitle className="text-xl text-medicare-darkBlue flex items-center gap-2">
                    <Upload className="text-medicare-blue" /> Medical Records
                  </CardTitle>
                  <CardDescription>Upload and manage your medical documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-1">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          id="medicalRecord"
                          className="hidden"
                          onChange={handleFileUpload}
                          disabled={uploadingFile}
                        />
                        <Label htmlFor="medicalRecord" className="inline-flex items-center gap-2 cursor-pointer bg-medicare-blue text-white px-4 py-2 rounded-md hover:bg-medicare-blue/90 transition-colors">
                          {uploadingFile ? (
                            <>
                              <Loader2 className="animate-spin" size={18} />
                              <span>Uploading...</span>
                            </>
                          ) : (
                            <>
                              <FilePlus2 size={18} />
                              <span>Upload Medical Records</span>
                            </>
                          )}
                        </Label>
                      </div>
                      <div className="text-sm text-gray-500">
                        Accepted formats: PDF, DOC
                      </div>
                    </div>
                    
                    {medicalRecords.length > 0 ? (
                      <div className="border rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Date</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {medicalRecords.map((record) => (
                              <tr key={record.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.size}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.uploadDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    className="inline-flex items-center gap-1"
                                    onClick={() => handleDeleteRecord(record.id)}
                                  >
                                    <FileX2 size={16} /> Delete
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500">No medical records uploaded</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="symptoms" className="space-y-4">
              <Card className="shadow-lg border-t-4 border-t-medicare-blue">
                <CardHeader>
                  <CardTitle className="text-xl text-medicare-darkBlue flex items-center gap-2">
                    <Heart className="text-medicare-blue" /> Symptom Analysis
                  </CardTitle>
                  <CardDescription>Get AI-powered health recommendations based on your symptoms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          className="medicare-input"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          placeholder="Enter your age"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={gender} onValueChange={setGender}>
                          <SelectTrigger className="medicare-input">
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="Male">Male</SelectItem>
                              <SelectItem value="Female">Female</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="symptoms">Current Symptoms</Label>
                        <Select value={currentSymptoms} onValueChange={setCurrentSymptoms}>
                          <SelectTrigger className="medicare-input">
                            <SelectValue placeholder="Select your symptoms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {symptomsList.map((symptom, index) => (
                                <SelectItem key={index} value={symptom}>
                                  {symptom}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="allergies">Allergies</Label>
                        <Select value={allergies} onValueChange={setAllergies}>
                          <SelectTrigger className="medicare-input">
                            <SelectValue placeholder="Select allergies if any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {allergiesList.map((allergy, index) => (
                                <SelectItem key={index} value={allergy}>
                                  {allergy}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="conditions">Existing Medical Conditions</Label>
                        <Select value={medicalConditions} onValueChange={setMedicalConditions}>
                          <SelectTrigger className="medicare-input">
                            <SelectValue placeholder="Select existing conditions if any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {medicalConditionsList.map((condition, index) => (
                                <SelectItem key={index} value={condition}>
                                  {condition}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button 
                        onClick={handleAnalyzeSymptoms} 
                        disabled={processingAnalysis}
                        className="medicare-button w-full mt-6"
                      >
                        {processingAnalysis ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing Symptoms...
                          </>
                        ) : (
                          <>Get Your Personalized Treatment Plan</>
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Previous Recommendations */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <History size={20} className="text-medicare-blue" /> Previous Recommendations
                    </h3>
                    
                    {recommendations.length > 0 ? (
                      <div className="space-y-4">
                        {recommendations.map((recommendation) => (
                          <div key={recommendation.id} className="p-4 border rounded-lg bg-white shadow-sm">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-medicare-blue">Symptoms: {recommendation.symptoms}</span>
                              <span className="text-sm text-gray-500">{recommendation.date}</span>
                            </div>
                            <p className="mb-2">{recommendation.treatment}</p>
                            <p className="text-sm text-gray-600 italic">{recommendation.followUp}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        No previous recommendations found. Get your first personalized treatment plan above.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
