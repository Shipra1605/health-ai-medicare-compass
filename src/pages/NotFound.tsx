
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
    <PageLayout 
      backgroundImage="robot-human-heart"
      overlayOpacity="bg-gradient-to-br from-medicare-darkBlue/15 to-black/15"
    >
      <header className="w-full py-4 px-6 bg-white/50 backdrop-blur-md border-b border-white/40 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <MedicareLogo />
          
          <Link to="/" className="medicare-button-outline shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Homepage
          </Link>
        </div>
      </header>

      <div className="min-h-screen w-full flex flex-col items-center justify-center p-6">
        <div className="glass-card max-w-md w-full text-center p-8 shadow-xl border border-white/50">
          <h1 className="text-6xl font-bold text-medicare-blue mb-2 text-shadow-md">404</h1>
          <p className="text-2xl text-medicare-darkBlue mb-6 font-semibold">Oops! Page not found</p>
          <p className="text-gray-700 mb-8 font-medium">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="medicare-button shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
