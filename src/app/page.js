'use client'
import Image from "next/image";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Hero></Hero>
    </Router>

  );
}
