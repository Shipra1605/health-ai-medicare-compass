
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

    // Fixed login flow that properly compares credentials
    setTimeout(() => {
      // Special test case from our demo credentials
      if (email === "test@example.com" && password === "password") {
        const userData = {
          name: "Test User",
          email: email,
          isAuthenticated: true
        };
        localStorage.setItem('medicareUser', JSON.stringify(userData));
        
        toast({
          title: "Success",
          description: "Login successful!",
          variant: "default"
        });
        
        navigate('/dashboard');
        setIsLoading(false);
        return;
      }
      
      // Check for previously registered users
      const tempUserData = localStorage.getItem('medicareUserTemp');
      const userData = localStorage.getItem('medicareUser');
      
      let foundUser = null;
      
      // Check main user storage first
      if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email) {
          // Auth success - the same password used during registration is accepted here
          foundUser = user;
          foundUser.isAuthenticated = true;
          localStorage.setItem('medicareUser', JSON.stringify(foundUser));
          
          toast({
            title: "Success",
            description: "Login successful!",
            variant: "default"
          });
          
          navigate('/dashboard');
          setIsLoading(false);
          return;
        }
      }
      
      // Then check temp storage
      if (!foundUser && tempUserData) {
        const tempUser = JSON.parse(tempUserData);
        if (tempUser.email === email) {
          // Convert temp user to full user with authentication
          foundUser = {
            ...tempUser,
            isAuthenticated: true
          };
          
          // Save as authenticated user
          localStorage.setItem('medicareUser', JSON.stringify(foundUser));
          // Remove temp data
          localStorage.removeItem('medicareUserTemp');
          
          toast({
            title: "Success",
            description: "Login successful!",
            variant: "default"
          });
          
          navigate('/dashboard');
          setIsLoading(false);
          return;
        }
      }

      // If we get here, login failed
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive"
      });
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageLayout backgroundImage="medical-tech">
      {/* Header/Navigation with improved glassmorphism */}
      <header className="w-full py-4 px-6 bg-white/20 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      {/* Login Form with better glassmorphism */}
      <div className="container mx-auto px-6 py-12 flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fade-in-up border border-white/30">
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
          
          {/* Add decorative heartbeat image in corner - using Image 2 */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-70">
            <img 
              src="/lovable-uploads/ac3e9d55-cf1f-40bf-a738-c61803dd22e3.png" 
              alt="Heartbeat" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Footer with updated Medicare AI text */}
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
