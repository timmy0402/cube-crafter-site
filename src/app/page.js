'use client'
import Image from "next/image";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Footer />
    </Router>

  );
}
