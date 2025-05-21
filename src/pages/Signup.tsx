
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

    // Check if email already exists
    const existingUser = localStorage.getItem('medicareUser');
    const tempUser = localStorage.getItem('medicareUserTemp');
    
    let emailExists = false;
    
    if (existingUser) {
      const user = JSON.parse(existingUser);
      if (user.email === email) {
        emailExists = true;
      }
    }
    
    if (tempUser && !emailExists) {
      const user = JSON.parse(tempUser);
      if (user.email === email) {
        emailExists = true;
      }
    }
    
    if (emailExists) {
      toast({
        title: "Error",
        description: "This email is already registered",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Mock signup - in a real app, this would call the backend API
    setTimeout(() => {
      // Save user data to localStorage (in a real app, would use JWT)
      localStorage.setItem('medicareUserTemp', JSON.stringify({
        name: name,
        email: email,
        password: password, // In a real app, this would be hashed
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
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          {/* Removed homepage button as requested */}
        </div>
      </header>

      {/* Signup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 animate-fade-in-up">
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
