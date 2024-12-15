import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Good Guy House Buyer</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              to="/info"
              className={`${
                isActive('/info') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              Info
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-600 hover:text-primary'
              } transition-colors duration-200`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};