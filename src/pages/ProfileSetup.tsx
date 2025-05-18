
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import MedicareLogo from '@/components/MedicareLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const ProfileSetup = () => {
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

      {/* Profile Setup Form */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center text-medicare-darkBlue mb-2">Complete Your Profile</h1>
          <p className="text-center text-gray-600 mb-6">Tell us a bit more about yourself.</p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="medicare-input"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age (Years)
                </label>
                <Input
                  type="number"
                  id="age"
                  placeholder="30"
                  className="medicare-input"
                />
              </div>
              
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  className="medicare-input"
                  defaultValue=""
                >
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                  Height (cm)
                </label>
                <Input
                  type="number"
                  id="height"
                  placeholder="175"
                  className="medicare-input"
                />
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (kg)
                </label>
                <Input
                  type="number"
                  id="weight"
                  placeholder="70"
                  className="medicare-input"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                Existing Medical Conditions (comma-separated)
              </label>
              <Textarea
                id="medicalConditions"
                placeholder="e.g., Asthma, Diabetes, None"
                className="medicare-input"
              />
            </div>
            
            <Button className="w-full medicare-button">
              Save Profile
            </Button>
            
            <p className="text-center text-xs text-gray-500">
              You can update this information later from your dashboard.
            </p>
          </div>
        </div>
      </div>
      
      {/* Notification */}
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold">Account Created!</h3>
        <p className="text-sm">Please complete your profile to continue.</p>
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

export default ProfileSetup;
