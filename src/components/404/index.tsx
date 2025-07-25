import React from "react";
import { Home } from "lucide-react";
import CompanyLogo from "../../assets/logogreen.png"

const LuxuryNotFoundPage: React.FC = () => {
  const handleHomeClick = () => {
    // In a real app, you would use React Router or Next.js router
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Company Logo */}
      <div className="mb-16">
        <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
          <img
            src={CompanyLogo}
            alt="Lazy Do Software "
            className="w-20 h-20 object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <h1 className="text-lg font-medium text-gray-900">
            Lazy Do Software Solution
          </h1>
        </div>
      </div>

      {/* 404 Content */}
      <div className="text-center max-w-md">
        <h2 className="text-8xl font-light text-gray-900 mb-8 tracking-tight">
          404
        </h2>

        <h3 className="text-3xl font-light text-gray-900 mb-4">
          Page not found
        </h3>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
          The page you're looking for can't be found.
        </p>

        {/* Home Button */}
        <button
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 active:scale-95"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </button>         
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-sm text-gray-400">Error 404</p>
      </div>
    </div>
  );
};

export default LuxuryNotFoundPage;
