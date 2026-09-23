import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p>RAJAGIRI SCHOOL OF ENGINEERING & TECHNOLOGY</p>
          <h1>About Us</h1>
          <span></span>
        </div>
      </section>

      {/* Introduction with Semi-Transparent Glass Card */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-card">

            <div className="about-image">
              <img
                src="/images/campus.jpg"
                alt="RSET Campus"
              />
            </div>

            <div className="about-content">
              <p className="section-label">WHO WE ARE</p>

              <h2>
                Engineering Education
                <br />
                With a Purpose
              </h2>

              <div className="gold-line"></div>

              <p>
                Rajagiri School of Engineering & Technology is presented
                through this website as an academic institution focused
                on engineering education, innovation and student
                development.
              </p>

              <p>
                The institution provides an environment where students
                can develop technical knowledge, explore new ideas and
                participate in academic and extracurricular activities.
              </p>

              <p>
                This website provides a central place to explore the
                institution, its programmes, activities, events and
                resources.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="vision-section">
        <div className="about-container">

          <div className="vision-grid">

            <div className="vision-card">
              <span className="card-number">01</span>

              <p className="section-label">OUR VISION</p>

              <h3>Excellence Through Learning</h3>

              <p>
                To create an environment that encourages learning,
                innovation, creativity and responsible development.
              </p>
            </div>

            <div className="vision-card dark">
              <span className="card-number">02</span>

              <p className="section-label">OUR MISSION</p>

              <h3>Knowledge Into Action</h3>

              <p>
                To provide students with opportunities to develop
                technical knowledge, practical skills and a spirit
                of innovation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="about-container">

          <div className="values-heading">
            <p className="section-label">WHAT WE VALUE</p>

            <h2>Our Core Values</h2>

            <div className="gold-line"></div>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <div className="value-icon">01</div>
              <h3>Excellence</h3>
              <p>
                Encouraging high standards in learning, teaching
                and personal development.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">02</div>
              <h3>Innovation</h3>
              <p>
                Creating opportunities to explore ideas,
                technology and new approaches.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">03</div>
              <h3>Integrity</h3>
              <p>
                Building a culture based on responsibility,
                honesty and respect.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">04</div>
              <h3>Community</h3>
              <p>
                Developing collaboration and meaningful
                connections within the campus community.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;