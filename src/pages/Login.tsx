
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
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

      {/* Login Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <MedicareLogo />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-6">MediCare AI</h1>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="medicare-input"
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
              />
            </div>
            
            <Button className="w-full medicare-button">
              Sign In
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-medicare-blue hover:underline">
                Sign up
              </Link>
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
            Your trusted AI healthcare companion.
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Login;
