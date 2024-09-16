'use client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Features from "../pages/features";
import Commands from "../pages/commands";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}
