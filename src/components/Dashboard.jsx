import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaListUl, FaGlobe } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Create Session",
      description: "Plan and add a new wellness session.",
      icon: <FaPlusCircle className="text-4xl text-blue-600 mb-3" />,
      action: () => navigate("/dashboard/create-session"),
    },
    {
      title: "My Sessions",
      description: "View and manage your created sessions.",
      icon: <FaListUl className="text-4xl text-green-600 mb-3" />,
      action: () => navigate("/dashboard/my-sessions"),
    },
    {
      title: "Published Sessions",
      description: "Explore sessions shared by all users.",
      icon: <FaGlobe className="text-4xl text-purple-600 mb-3" />,
      action: () => navigate("/dashboard/published-sessions"),
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 overflow-hidden">
      
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-green-200/30 to-cyan-200/30 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Dashboard content */}
      <div className="relative max-w-6xl w-full">
        {/* Enhanced header section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-6 shadow-2xl">
            <span className="text-3xl">🌿</span>
          </div>
          <h1 className="text-5xl font-black text-gray-800 mb-4 leading-tight">
            Welcome to Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Wellness Dashboard
            </span>
          </h1>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
            Discover, create, and manage your wellness journey with our comprehensive suite of tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onClick={card.action}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 overflow-hidden"
            >
              {/* Card background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container with enhanced styling */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {React.cloneElement(card.icon, {
                    className: `text-4xl ${
                      idx === 0 ? 'text-blue-600' :
                      idx === 1 ? 'text-green-600' : 'text-purple-600'
                    } group-hover:scale-110 transition-transform duration-200`
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                  {card.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  Click to continue
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className={`absolute -top-2 -right-2 w-16 h-16 ${
                idx === 0 ? 'bg-gradient-to-br from-blue-200/30 to-cyan-200/30' :
                idx === 1 ? 'bg-gradient-to-br from-green-200/30 to-emerald-200/30' : 
                'bg-gradient-to-br from-purple-200/30 to-pink-200/30'
              } rounded-full blur-xl group-hover:scale-150 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional info section with dark neon theme */}
        <div className="mt-16 relative">
          {/* Dark neon container */}
          <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 relative overflow-hidden">
            
            {/* Neon glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-32 h-32 bg-gradient-to-bl from-emerald-400/20 via-teal-400/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-4 left-8 w-28 h-28 bg-gradient-to-tr from-cyan-400/20 via-blue-400/10 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Section header with neon styling */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-teal-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Platform <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-black">Highlights</span>
              </h3>
              <p className="text-gray-300 text-sm">What makes our wellness platform extraordinary</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center relative z-10">
              {/* 24/7 Support Card */}
              <div className="group/card bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:bg-emerald-500/15">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-xl mb-4 shadow-xl group-hover/card:shadow-emerald-400/50 group-hover/card:scale-110 transition-all duration-300">
                  <span className="text-white font-black text-lg drop-shadow-lg">24/7</span>
                </div>
                <div className="text-emerald-400 font-bold text-sm mb-1 group-hover/card:text-emerald-300 transition-colors">Available Support</div>
                <div className="text-gray-400 text-xs group-hover/card:text-gray-300 transition-colors">Round the clock assistance</div>
                
              
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-green-400/5 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group/card bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:bg-teal-500/15">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 rounded-xl mb-4 shadow-xl group-hover/card:shadow-teal-400/50 group-hover/card:scale-110 transition-all duration-300">
                  <span className="text-white font-black text-xl drop-shadow-lg">∞</span>
                </div>
                <div className="text-teal-400 font-bold text-sm mb-1 group-hover/card:text-teal-300 transition-colors">Wellness Possibilities</div>
                <div className="text-gray-400 text-xs group-hover/card:text-gray-300 transition-colors">Unlimited creative potential</div>
                
            
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            
              <div className="group/card bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:bg-cyan-500/15">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-xl mb-4 shadow-xl group-hover/card:shadow-cyan-400/50 group-hover/card:scale-110 transition-all duration-300">
                  <span className="text-white font-black text-lg drop-shadow-lg">100%</span>
                </div>
                <div className="text-cyan-400 font-bold text-sm mb-1 group-hover/card:text-cyan-300 transition-colors">Personalized Experience</div>
                <div className="text-gray-400 text-xs group-hover/card:text-gray-300 transition-colors">Tailored to your unique needs</div>
             
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-6 flex justify-center relative z-10">
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;