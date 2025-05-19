
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Check for existing user with same email
    const existingUserData = localStorage.getItem('medicareUser');
    const tempUserData = localStorage.getItem('medicareUserTemp');
    
    if (existingUserData) {
      const existingUser = JSON.parse(existingUserData);
      if (existingUser.email === email) {
        toast({
          title: "Error",
          description: "Email already in use. Please use a different email or login.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
    }
    
    if (tempUserData) {
      const tempUser = JSON.parse(tempUserData);
      if (tempUser.email === email) {
        toast({
          title: "Error",
          description: "Email already in use. Please use a different email or login.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
    }

    // Mock signup - in real app, this would call the backend API and hash passwords
    setTimeout(() => {
      // Save user data to localStorage
      localStorage.setItem('medicareUserTemp', JSON.stringify({
        name: name,
        email: email,
        password: password, // Note: In a real app, this would be hashed
      }));
      
      toast({
        title: "Success",
        description: "Account created! Please complete your profile.",
        variant: "default"
      });
      
      // Redirect to profile setup
      navigate('/profile-setup');
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-white/20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Signup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fade-in-up border border-white/30">
          <div className="flex justify-center mb-4">
            <MedicareLogo />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-2">Create Account</h1>
          <p className="text-center text-gray-600 mb-6">Start your journey with MediCare AI.</p>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="medicare-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="medicare-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="Choose a strong password"
                className="medicare-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full medicare-button"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-medicare-blue hover:underline">
                Sign in
              </Link>
            </div>
          </form>
          
          {/* Add decorative AI hand image in corner - using Image 1 */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-60">
            <img 
              src="/lovable-uploads/58e80d30-0778-4ff9-8a72-7f660e841b80.png" 
              alt="AI Healthcare" 
              className="w-full h-full object-contain"
            />
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

export default Signup;
