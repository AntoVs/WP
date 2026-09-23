import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AcademicPrograms from "./components/AcademicPrograms";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <AcademicPrograms />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;