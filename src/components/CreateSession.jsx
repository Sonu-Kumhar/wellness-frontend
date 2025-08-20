import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../config';

const CreateSession = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    duration: '',
    date: '',
    mentor: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (status) => {
    try {
      const token = localStorage.getItem('token');
      const endpoint = status === 'draft' ? 'save-draft' : 'publish';
      const res = await axios.post(
        `${BASE_URL}/my-sessions/${endpoint}`,
        { ...form, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message || 'Session saved!', {
        position: 'top-right',
        autoClose: 2000,
      });

      setForm({ title: '', description: '', duration: '', date: '', mentor: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error saving session', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-cyan-50 p-2 relative overflow-hidden">
      
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-violet-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-violet-200/40 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-violet-400/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-40 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-indigo-400/60 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto h-full flex flex-col">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl border border-white/30 relative z-10 flex-1 flex flex-col overflow-hidden">
          
          {/* Enhanced Compact Header */}
          <div className="text-center pt-2 pb-2 px-6 flex-shrink-0 bg-gradient-to-r from-violet-50/80 to-cyan-50/80 border-b border-violet-100/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-2xl mb-3 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">🧘</span>
            </div>
            <h2 className="text-3xl font-black text-gray-800 mb-2 leading-tight">
              Create{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Wellness Session
              </span>
            </h2>
            <p className="text-gray-600 text-sm font-medium">Design and share your wellness expertise</p>
          </div>

          {/* Form Container with Scroll */}
          <div className="flex-1 px-6 py-2 overflow-auto">
            <form className="space-y-5 max-w-3xl mx-auto">
              
              {/* Title Input - Enhanced */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mr-2"></span>
                  Session Title
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter an engaging session title"
                    className="w-full px-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm transition-all duration-300 hover:border-violet-300 font-medium placeholder-gray-400 group-hover:shadow-md"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </div>
              </div>

              {/* Description Textarea - Enhanced */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-2"></span>
                  Description
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <textarea
                    name="description"
                    placeholder="Describe what participants will learn and experience..."
                    className="w-full px-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm transition-all duration-300 hover:border-indigo-300 font-medium placeholder-gray-400 resize-none group-hover:shadow-md"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </div>
              </div>

              {/* Duration and Date Row - Enhanced */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2"></span>
                    Duration
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="text"
                      name="duration"
                      placeholder="e.g., 30 minutes"
                      className="w-full px-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 font-medium placeholder-gray-400 group-hover:shadow-md"
                      value={form.duration}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mr-2"></span>
                    Session Date
                  </label>
                  <div className="relative overflow-hidden rounded-xl">
                    <input
                      type="date"
                      name="date"
                      className="w-full px-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm transition-all duration-300 hover:border-rose-300 font-medium group-hover:shadow-md"
                      value={form.date}
                      onChange={handleChange}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Mentor Input - Enhanced */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-2"></span>
                  Mentor Name
                </label>
                <div className="relative overflow-hidden rounded-xl">
                  <input
                    type="text"
                    name="mentor"
                    placeholder="Who will be leading this session?"
                    className="w-full px-4 py-3.5 border-2 border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm transition-all duration-300 hover:border-amber-300 font-medium placeholder-gray-400 group-hover:shadow-md"
                    value={form.mentor}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
                </div>
              </div>
            </form>
          </div>

          {/* Enhanced Action Buttons - Fixed at bottom */}
          <div className="flex-shrink-0 px-6 py-4 bg-gradient-to-r from-gray-50/80 to-white/80 border-t border-gray-100">
            <div className="flex gap-4 justify-center max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => handleSubmit('draft')}
                className="group flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden min-w-[140px] justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">💾</span>
                  Save Draft
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                type="button"
                onClick={() => handleSubmit('published')}
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-600 hover:via-green-600 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden min-w-[140px] justify-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  Publish
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-200/20 via-purple-200/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-200/20 via-teal-200/20 to-transparent rounded-tr-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateSession;