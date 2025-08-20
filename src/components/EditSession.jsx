import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../config";

const EditSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    date: "",
    mentor: "",
    status: "draft",
  });

  const [loading, setLoading] = useState(true);

  // Fetch session details
  useEffect(() => {
  const fetchSession = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/my-sessions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const session = res.data;

      if (session) {
        setForm({
          ...session,
          date: session.date ? session.date.slice(0, 10) : "",
        });
      } else {
        toast.error("❌ Session not found");
      }
    } catch (err) {
      toast.error("❌ Failed to load session");
    } finally {
      setLoading(false);
    }
  };
  fetchSession();
}, [id]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`${BASE_URL}/my-sessions/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Session updated successfully!");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      toast.error("❌ Error updating session");
    }
  };

  if (loading)
    return (
      <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Loading session details...</p>
        </div>
      </div>
    );

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-6 flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3 shadow-lg">
            <span className="text-xl">✏️</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Wellness Session
          </h2>
          <p className="text-gray-600">Update your session details and preferences</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 flex-1 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex-shrink-0 rounded-t-2xl">
            <h3 className="text-lg font-semibold text-white">Session Information</h3>
            <p className="text-blue-100 text-sm">Fill in the details below to update your session</p>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Session Title */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">📝</span>
                    Session Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter session title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-gray-300"
                  />
                </div>

                {/* Duration */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">⏱️</span>
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    placeholder="e.g., 45 mins, 1 hour, 90 minutes"
                    value={form.duration}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-gray-300"
                  />
                </div>

                {/* Date */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">📅</span>
                    Session Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 group-hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Mentor */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">👨‍🏫</span>
                    Mentor Name
                  </label>
                  <input
                    type="text"
                    name="mentor"
                    placeholder="Enter mentor's name"
                    value={form.mentor}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-400 group-hover:border-gray-300"
                  />
                </div>

                {/* Status */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">🏷️</span>
                    Status
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 bg-white group-hover:border-gray-300"
                  >
                    <option value="draft">📝 Draft</option>
                    <option value="published">✅ Published</option>
                  </select>
                </div>

                {/* Description */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <span className="mr-2">📄</span>
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe your wellness session..."
                    value={form.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none group-hover:border-gray-300"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">←</span>
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">💾</span>
                Update Session
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center flex-shrink-0">
          <p className="text-sm text-gray-500">
            💡 <strong>Tip:</strong> Make sure all required fields are filled before updating your session
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditSession;
