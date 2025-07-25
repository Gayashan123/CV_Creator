// components/HeroSection.jsx
import React from "react";
import Cv from "../assets/cv-preview.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCreateCV = () => {
    navigate("/cvoption");
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-600">
              Professional CV
            </span>{" "}
            Made Effortless
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Build a stunning, ATS-friendly resume in minutes with our intuitive online builder. Stand out from the crowd and land more interviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleCreateCV}
              className="px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Create Your CV Now
            </button>
            <a
              href="#features"
              className="px-6 py-3 sm:py-4 bg-white text-gray-800 border-2 border-blue-100 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No signup required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free templates
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Download as PDF
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <img
              src={Cv}
              alt="Professional CV Preview"
              className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300"
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-200 rounded-full opacity-20 -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
