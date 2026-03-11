import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Membership from './Pages/Membership';
import Programs from './Pages/Programs';
import Trainers from './Pages/Trainers';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </Router>
  );
}