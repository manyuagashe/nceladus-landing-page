
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-nceladus-dark p-6">
      <div className="glass-card p-8 max-w-md w-full text-center animate-fade-in">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-nceladus-light/10 animate-pulse"></div>
          <div className="absolute inset-3 rounded-full bg-nceladus-light/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <span className="text-4xl font-garamond font-bold">404</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-garamond font-bold mb-4">Page Not Found</h1>
        <p className="text-white/70 mb-6">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        
        <a href="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
