import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MySessions from './components/Mysessions';
import PublishedSessions from './components/PublishedSessions';
import EditSession from './components/EditSession';
import CreateSession from './components/CreateSession';
import Navbar from './components/Navbar';
import { useEffect } from 'react'; 
import "react-cool-cursors/dist/style.css";

function AppContent() {
  const location = useLocation();

  // Hide navbar on these pages
  const hideNavbarRoutes = ['/', '/login', '/register'];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Navbar/>
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
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
