
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Signup = () => {
  return (
    <PageLayout backgroundImage="medical-tech">
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="max-w-md w-full glassmorphism">
          <CardHeader className="space-y-1 text-center">
            <MedicareLogo className="mx-auto mb-4" />
            <CardTitle className="text-2xl text-medicare-darkBlue">Create an account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  className="medicare-input"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last name
                </label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  className="medicare-input"
                />
              </div>
            </div>
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
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                required
                type="password"
                className="medicare-input"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                required
                type="password"
                className="medicare-input"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-medicare-blue focus:ring-medicare-blue"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-medicare-blue hover:underline">
                  terms of service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-medicare-blue hover:underline">
                  privacy policy
                </Link>
              </label>
            </div>
            <Button className="w-full medicare-button">Create Account</Button>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-gray-600 w-full">
              Already have an account?{" "}
              <Link to="/login" className="text-medicare-blue hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Signup;
