import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaClock, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { BASE_URL } from '../config';

const MySessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchSessions = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${BASE_URL}/my-sessions`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSessions(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load sessions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this session?")) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/my-sessions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSessions(prev => prev.filter(s => s._id !== id));
    } catch (err) {
      alert('Failed to delete session');
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 animate-spin">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading your sessions...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we fetch your content</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-red-600 mb-2">Error Loading Sessions</p>
        <p className="text-gray-600">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden">
      
      {/* Enhanced Gradient Background with animated elements */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto pt-6">
        
        {/* Header and Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
          
          {/* Main Header */}
          <div className="text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-5xl font-black text-gray-800 mb-2 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                My Sessions
              </span>
            </h2>
            <p className="text-gray-600 font-medium text-xl">Manage and organize your wellness sessions</p>
          </div>

          {/* Enhanced Stats Cards - Top Right */}
          {sessions.length >= 0 && (
            <div className="flex flex-wrap gap-3 lg:flex-col lg:gap-2">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 flex items-center gap-3 min-w-[160px] hover:bg-white/90 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{sessions.filter(s => s.status === 'published').length}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Published</div>
                  <div className="text-xs text-gray-500">Live Sessions</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 flex items-center gap-3 min-w-[160px] hover:bg-white/90 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{sessions.filter(s => s.status === 'draft').length}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Drafts</div>
                  <div className="text-xs text-gray-500">In Progress</div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/30 flex items-center gap-3 min-w-[160px] hover:bg-white/90 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">{sessions.length}</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Total</div>
                  <div className="text-xs text-gray-500">All Sessions</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6 shadow-lg">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-700 mb-4">No Sessions Yet</p>
            <p className="text-gray-500 mb-8">Start creating your wellness sessions to see them here</p>
            <button
              onClick={() => navigate('/dashboard/create-session')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Create Your First Session
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
            {sessions.map((sesh) => (
              <div
                key={sesh._id}
                className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status badge with enhanced styling */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${
                    sesh.status === 'published' 
                      ? 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700' 
                      : 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700'
                  }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      sesh.status === 'published' ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}></div>
                    {sesh.status.toUpperCase()}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors leading-tight pr-20">
                    {sesh.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-base">
                    {sesh.description}
                  </p>
                </div>

                {/* Enhanced session details */}
                <div className="relative z-10 mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                      <FaClock className="text-blue-500" />
                    </div>
                    <span className="font-medium">{sesh.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg">
                      <FaCalendarAlt className="text-green-500" />
                    </div>
                    <span className="font-medium">{sesh.date?.slice(0, 10)}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg">
                      <FaUser className="text-purple-500" />
                    </div>
                    <span className="font-medium">{sesh.mentor}</span>
                  </div>
                </div>

                {/* Enhanced action buttons */}
                <div className="relative z-10 flex gap-4">
                  <button
                    onClick={() => navigate(`/dashboard/edit-session/${sesh._id}`)}
                    className="group/btn flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FaEdit className="group-hover/btn:scale-110 transition-transform duration-200" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(sesh._id)}
                    className="group/btn flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FaTrash className="group-hover/btn:scale-110 transition-transform duration-200" />
                    Delete
                  </button>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-lg group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MySessions;