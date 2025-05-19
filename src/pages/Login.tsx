
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Mock authentication - in real app, this would call the backend API
    setTimeout(() => {
      // Get all users from localStorage to find a match
      const allUsers = [];
      let matchedUser = null;
      
      // Look for the temporary user data
      const tempUserData = localStorage.getItem('medicareUserTemp');
      if (tempUserData) {
        const tempUser = JSON.parse(tempUserData);
        if (tempUser.email === email) {
          allUsers.push(tempUser);
        }
      }
      
      // Check for any fully registered users
      const userData = localStorage.getItem('medicareUser');
      if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email) {
          allUsers.push(user);
          if (user.isAuthenticated) {
            matchedUser = user; // If we find an authenticated user with this email, use it
          }
        }
      }
      
      // Special test case from our demo credentials
      if (email === "test@example.com" && password === "password") {
        matchedUser = {
          name: "Test User",
          email: email,
          isAuthenticated: true
        };
      }

      if (matchedUser) {
        // Save user data to localStorage (in a real app, would use JWT)
        localStorage.setItem('medicareUser', JSON.stringify(matchedUser));
        
        toast({
          title: "Success",
          description: "Login successful!",
          variant: "default"
        });
        
        navigate('/dashboard');
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation - with glassmorphism */}
      <header className="w-full py-4 px-6 bg-white/70 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Login Form - with glassmorphism */}
      <div className="container mx-auto px-6 py-12 flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fade-in-up border border-white/30">
          <div className="flex justify-center mb-6">
            <MedicareLogo />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-6">Welcome Back</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
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
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type="password"
                id="password"
                className="medicare-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full medicare-button"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-medicare-blue hover:underline">
                Sign up
              </Link>
            </div>
          </form>
          
          {/* Demo credentials */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center mb-1">Demo credentials:</p>
            <p className="text-sm text-gray-500 text-center">Email: test@example.com / Password: password</p>
          </div>
        </div>
      </div>
      
      {/* Footer - with updated Medicare AI text */}
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

export default Login;
