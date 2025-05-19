
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ProfileSetup = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get the user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('medicareUserTemp');
    if (userData) {
      const { name } = JSON.parse(userData);
      setFullName(name);
    } else {
      // If no user data, redirect to signup
      navigate('/signup');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!fullName || !age || !gender || !height || !weight) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Mock profile setup - in real app, this would call the backend API
    setTimeout(() => {
      const userData = localStorage.getItem('medicareUserTemp');
      if (userData) {
        const user = JSON.parse(userData);
        
        // Save complete user data to localStorage
        localStorage.setItem('medicareUser', JSON.stringify({
          ...user,
          isAuthenticated: true,
          profile: {
            fullName,
            age,
            gender,
            height,
            weight,
            medicalConditions,
          }
        }));
        
        // Clear temporary user data
        localStorage.removeItem('medicareUserTemp');
        
        // Show success message
        setShowSuccess(true);
      } else {
        toast({
          title: "Error",
          description: "User data not found",
          variant: "destructive"
        });
        navigate('/signup');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Profile Setup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        {!showSuccess ? (
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in-up">
            <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-2">Complete Your Profile</h1>
            <p className="text-center text-gray-600 mb-6">Tell us a bit more about yourself.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="medicare-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age (Years)
                  </label>
                  <Input
                    type="number"
                    id="age"
                    placeholder="30"
                    className="medicare-input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="medicare-input"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Height (cm)
                  </label>
                  <Input
                    type="number"
                    id="height"
                    placeholder="175"
                    className="medicare-input"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (kg)
                  </label>
                  <Input
                    type="number"
                    id="weight"
                    placeholder="70"
                    className="medicare-input"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                  Existing Medical Conditions (comma-separated)
                </label>
                <Textarea
                  id="medicalConditions"
                  placeholder="e.g., Asthma, Diabetes, None"
                  className="medicare-input"
                  value={medicalConditions}
                  onChange={(e) => setMedicalConditions(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full medicare-button"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Profile"}
              </Button>
              
              <p className="text-center text-xs text-gray-500">
                You can update this information later from your dashboard.
              </p>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in-up">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-medicare-darkBlue mb-4">
                Welcome New User! Account Successfully Created
              </h2>
              
              <p className="text-gray-600 mb-6 text-center">
                Your account has been created successfully and your profile has been saved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button className="medicare-button w-full sm:w-auto">
                    Login
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button variant="outline" className="medicare-button-outline w-full sm:w-auto">
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
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

export default ProfileSetup;
