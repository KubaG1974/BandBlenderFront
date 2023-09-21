import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AuthProvider />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        <AuthProvider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
