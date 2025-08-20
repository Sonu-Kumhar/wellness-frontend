import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MySessions from './components/MySessions';
import PublishedSessions from './components/PublishedSessions';
import EditSession from './components/EditSession';
import CreateSession from './components/CreateSession';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();

  // Always show Navbar on all routes
  const showNavbar = true;

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-session" element={<CreateSession />} />
        <Route path="/dashboard/my-sessions" element={<MySessions />} />
        <Route path="/dashboard/published-sessions" element={<PublishedSessions />} />
        <Route path="/dashboard/edit-session/:id" element={<EditSession />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      {/* Keep only one ToastContainer */}
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
