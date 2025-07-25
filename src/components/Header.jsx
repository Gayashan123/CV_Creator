import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu after click
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer"
          >
            <div className="bg-blue-500/10 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">
              ProCV
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/cvoption")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Create CV
            </button>
            <button
              onClick={() => handleScrollTo("features")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollTo("testimonials")}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Testimonials
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/cvoption")}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Conditionally Rendered */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                navigate("/");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("/cvoption");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Create CV
            </button>
            <button
              onClick={() => handleScrollTo("features")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollTo("testimonials")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Testimonials
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
