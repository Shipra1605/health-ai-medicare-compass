
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MedicareLogo from "@/components/MedicareLogo";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout backgroundImage="blue-wave">
      <header className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline">
            Homepage
          </Link>
        </div>
      </header>

      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6">
        <div className="medicare-card max-w-md w-full text-center p-8">
          <h1 className="text-6xl font-bold text-medicare-blue mb-2">404</h1>
          <p className="text-2xl text-medicare-darkBlue mb-6">Oops! Page not found</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="medicare-button">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
