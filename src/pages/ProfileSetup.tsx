
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

const ProfileSetup = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [city, setCity] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
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

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          const imageUrl = event.target.result as string;
          setProfileImage(imageUrl);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!fullName || !gender || !height || !weight || !city) {
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
            gender,
            height: `${height} ${heightUnit}`,
            weight: `${weight} ${weightUnit}`,
            city,
            profileImage
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
      <header className="w-full py-4 px-6 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo size="large" />
        </div>
      </header>

      {/* Profile Setup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        {!showSuccess ? (
          <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fade-in-up border border-white/30">
            <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-2 drop-shadow-md">Complete Your Profile</h1>
            <p className="text-center text-gray-600 mb-6">Tell us a bit more about yourself.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile Image Upload */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-gray-200 mb-2 overflow-hidden relative shadow-md border-4 border-white/60">
                  {profileImage ? (
                    <img 
                      src={profileImage}
                      alt="Profile"
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
                <label className="block">
                  <span className="medicare-button-outline text-sm py-1 px-3 cursor-pointer shadow-md hover:shadow-lg transition-shadow">
                    Upload Picture
                  </span>
                  <input
                    type="file" 
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfileImageChange}
                  />
                </label>
              </div>
              
              {/* Full Name */}
              <div className="bg-white/70 rounded-lg p-3">
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
              
              {/* Height with dropdown for unit */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 bg-white/70 rounded-lg p-3">
                  <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                    Height
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
                <div className="bg-white/70 rounded-lg p-3">
                  <label htmlFor="heightUnit" className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <Select value={heightUnit} onValueChange={setHeightUnit}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="feet">feet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Weight with dropdown for unit */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 bg-white/70 rounded-lg p-3">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                    Weight
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
                <div className="bg-white/70 rounded-lg p-3">
                  <label htmlFor="weightUnit" className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <Select value={weightUnit} onValueChange={setWeightUnit}>
                    <SelectTrigger className="medicare-input">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="pounds">pounds</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Gender */}
              <div className="bg-white/70 rounded-lg p-3">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="medicare-input">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* City */}
              <div className="bg-white/70 rounded-lg p-3">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <Input
                  type="text"
                  id="city"
                  placeholder="New York"
                  className="medicare-input"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full medicare-button shadow-lg hover:shadow-xl transition-shadow py-6"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Profile"}
              </Button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-lg shadow-xl p-8 animate-fade-in-up border border-white/30">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-medicare-darkBlue mb-4 drop-shadow-md">
                Welcome New User! Account Successfully Created
              </h2>
              
              <p className="text-gray-600 mb-8 text-center">
                Your account has been created successfully and your profile has been saved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button className="medicare-button w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                    Login
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button variant="outline" className="medicare-button-outline w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
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

export default ProfileSetup;
