
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ProfileSetup = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get user data from localStorage
  useEffect(() => {
    const tempUserData = localStorage.getItem('medicareUserTemp');
    if (!tempUserData) {
      navigate('/signup');
      return;
    }

    try {
      const userData = JSON.parse(tempUserData);
      setName(userData.name || '');
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/signup');
    }
  }, [navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a preview URL for the image
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!name || !height || !weight || !gender || !city) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Get temp user data
    const tempUserData = localStorage.getItem('medicareUserTemp');
    if (!tempUserData) {
      navigate('/signup');
      return;
    }

    try {
      // Parse existing data
      const userData = JSON.parse(tempUserData);
      
      // Create a complete user object
      const completeUser = {
        ...userData,
        name: name,
        height: `${height} ${heightUnit}`,
        weight: `${weight} ${weightUnit}`,
        gender: gender,
        city: city,
        profileImage: profileImage,
        completedSetup: true
      };
      
      // Store the complete user data
      localStorage.setItem('medicareUser', JSON.stringify(completeUser));
      
      // Clean up temporary data
      localStorage.removeItem('medicareUserTemp');
      
      setTimeout(() => {
        toast({
          title: "Welcome New User!",
          description: "Account successfully created.",
          variant: "default"
        });
        
        navigate('/login');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error saving user data:', error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to save your profile. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo size="large" />
          <Link to="/" className="medicare-button-outline">
            Back to Homepage
          </Link>
        </div>
      </header>

      {/* Profile Setup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="w-full max-w-lg bg-white/50 backdrop-blur-md rounded-lg p-8 animate-fade-in-up border border-white/30">
          <div className="flex justify-center mb-4">
            <MedicareLogo />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-2">Complete Your Profile</h1>
          <p className="text-center text-gray-600 mb-6">Let's set up your health profile to personalize your experience.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center mb-6">
              <div 
                className="w-24 h-24 rounded-full bg-gray-200 mb-2 flex items-center justify-center overflow-hidden border-2 border-medicare-blue"
                style={{ backgroundImage: profileImage ? `url(${profileImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {!profileImage && <span className="text-gray-400 text-4xl">👤</span>}
              </div>
              <label htmlFor="profile-image" className="cursor-pointer text-medicare-blue hover:text-medicare-darkBlue transition-colors">
                Upload Picture
              </label>
              <input 
                id="profile-image" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload}
              />
            </div>
            
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                type="text"
                id="full-name"
                className="medicare-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            {/* Height with unit selection */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  type="number"
                  id="height"
                  className="medicare-input"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="height-unit">Unit</Label>
                <Select value={heightUnit} onValueChange={setHeightUnit}>
                  <SelectTrigger id="height-unit" className="medicare-input">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="feet">feet</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Weight with unit selection */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <Label htmlFor="weight">Weight</Label>
                <Input
                  type="number"
                  id="weight"
                  className="medicare-input"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="weight-unit">Unit</Label>
                <Select value={weightUnit} onValueChange={setWeightUnit}>
                  <SelectTrigger id="weight-unit" className="medicare-input">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="pounds">pounds</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger id="gender" className="medicare-input">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                type="text"
                id="city"
                className="medicare-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full medicare-button"
              disabled={isLoading}
            >
              {isLoading ? "Saving Profile..." : "Save Profile"}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-md py-4 mt-auto border-t border-white/40 text-medicare-darkBlue">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MedicareLogo />
            <span className="ml-2 text-sm font-medium">© {new Date().getFullYear()}</span>
          </div>
          <div className="text-sm font-semibold">
            Your trusted Medicare AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default ProfileSetup;
