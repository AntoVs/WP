import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">
          RAJAGIRI SCHOOL OF ENGINEERING & TECHNOLOGY
        </p>

        <h1>
          Engineering
          <br />
          <span>Excellence</span>
        </h1>

        <p className="hero-description">
          A place for learning, innovation, creativity and excellence.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="hero-btn primary">
            Explore RSET
          </a>

          <a href="#events" className="hero-btn secondary">
            Discover More
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;