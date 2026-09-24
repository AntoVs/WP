import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AcademicPrograms from "./components/AcademicPrograms";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reports from "./components/Reports";
import Particles from "./components/Particles";
import Gallery from "./components/Gallery";
import Events from "./components/Events";

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

      <Particles 
        speed={0.02}
        particleCount={150}
        sizeRandomness={0.5}   
      />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;