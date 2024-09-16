'use client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Features from "../pages/features";
import Policy from "../pages/policy"
import Terms from "../pages/terms"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>

  );
}
