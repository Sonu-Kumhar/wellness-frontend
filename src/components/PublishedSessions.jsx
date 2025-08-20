import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

const PublishedSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPublishedSessions = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/sessions`);
      setSessions(res.data);
    } catch (err) {
      toast.error("❌ Failed to load published sessions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublishedSessions();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-100">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-4 animate-spin">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-gray-700 animate-pulse">
            Loading published sessions...
          </p>
          <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest content</p>
        </div>
      </div>
    );

  return (
    <div className="relative min-h-screen px-4 py-10 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-100 overflow-hidden">
      
      {/* Enhanced Gradient Background with animated elements */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto my-4">
        {/* Enhanced header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl mb-6 shadow-2xl">
            <span className="text-3xl">🌍</span>
          </div>
          <h2 className="text-5xl font-black text-gray-800 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Published Wellness Sessions
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Discover and explore wellness sessions shared by our amazing community
          </p>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 shadow-lg">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-600 mb-2">No sessions available</p>
            <p className="text-gray-500">Check back later for new wellness sessions from our community</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((sesh) => (
              <div
                key={sesh._id}
                className="group bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between transform hover:-translate-y-2 overflow-hidden relative"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative corner element */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors leading-tight">
                    {sesh.title}
                  </h3>

                  {/* Enhanced status badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      PUBLISHED
                    </span>
                  </div>

                  {/* Description with better styling */}
                  <p className="text-gray-600 text-base mb-8 line-clamp-3 leading-relaxed">
                    {sesh.description || "No description provided."}
                  </p>
                </div>

                {/* Enhanced session details */}
                <div className="relative z-10 mt-auto space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                      <span className="text-sm">📅</span>
                    </div>
                    <span className="font-medium">{sesh.date ? sesh.date.slice(0, 10) : "No date"}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
                      <span className="text-sm">⏳</span>
                    </div>
                    <span className="font-medium">{sesh.duration || "N/A"}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg">
                      <span className="text-sm">🧑‍🏫</span>
                    </div>
                    <span className="font-medium">{sesh.mentor || "Unknown mentor"}</span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional info section */}
        {sessions.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">{sessions.length} Active Sessions</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Community Verified</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishedSessions;
