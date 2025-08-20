import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpa, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 px-4 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 max-w-md w-full text-center border border-white/20 relative z-10 transform hover:scale-105 transition-all duration-300">
        
        {/* Logo / Icon with glow effect */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/30 rounded-full blur-xl scale-150"></div>
            <FaSpa className="text-green-500 text-6xl relative z-10 drop-shadow-lg animate-pulse" />
          </div>
        </div>

        {/* Title with enhanced styling */}
        <h1 className="text-4xl font-black text-gray-800 mb-4 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Wellness App
          </span>
        </h1>

        {/* Subtitle with better spacing */}
        <p className="text-gray-600 text-base mb-8 leading-relaxed font-medium">
          Your journey to a healthier mind and body starts here.{' '}
          <br className="hidden sm:block" />
          Join sessions, learn from mentors, and share your own expertise.
        </p>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col gap-4">
          <Link to="/login">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full transform hover:-translate-y-1 active:translate-y-0">
              <FaSignInAlt className="group-hover:scale-110 transition-transform duration-200" />
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full transform hover:-translate-y-1 active:translate-y-0">
              <FaUserPlus className="group-hover:scale-110 transition-transform duration-200" />
              Register
            </button>
          </Link>
        </div>

        {/* Additional decorative element */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;