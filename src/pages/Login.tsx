
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

    // Check for user in localStorage
    setTimeout(() => {
      const userData = localStorage.getItem('medicareUser');
      
      if (userData) {
        const user = JSON.parse(userData);
        if (user.email === email && user.password === password) {
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
      <header className="w-full py-4 px-6 bg-white/40 backdrop-blur-md border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo size="large" />
        </div>
      </header>

      {/* Login Form with better glassmorphism */}
      <div className="container mx-auto px-6 py-12 flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fade-in-up border border-white/30">
          <div className="flex justify-center mb-6">
            <MedicareLogo size="large" />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-6 drop-shadow-md">Welcome Back</h1>
          
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
        </div>
      </div>
      
      {/* Footer with updated Medicare AI text */}
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

export default Login;
