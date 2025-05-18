
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  return (
    <PageLayout backgroundImage="medical-tech">
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="max-w-md w-full glassmorphism">
          <CardHeader className="space-y-1 text-center">
            <MedicareLogo className="mx-auto mb-4" />
            <CardTitle className="text-2xl text-medicare-darkBlue">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                placeholder="name@example.com"
                required
                type="email"
                className="medicare-input"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-medicare-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                required
                type="password"
                className="medicare-input"
              />
            </div>
            <Button className="w-full medicare-button">Sign In</Button>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-600 w-full">
              Don't have an account?{" "}
              <Link to="/signup" className="text-medicare-blue hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Login;
