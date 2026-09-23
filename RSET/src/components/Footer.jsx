import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column footer-about">
          <img
            src="/images/rset.jpg"
            alt="RSET"
            className="footer-logo"
          />

          <h3>Rajagiri School of Engineering & Technology</h3>

          <p>
            A centre for engineering education, innovation,
            creativity and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/reports">Reports</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>

          <a href="#events">Events</a>
          <a href="#news">Announcements</a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            RSMS
          </a>

          <a href="#campus">Campus</a>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>

          <p>
            Rajagiri Valley, Kakkanad
            <br />
            Kochi, Kerala
          </p>

          <a href="mailto:info@rset.ac.in">
            info@rset.ac.in
          </a>

          <a href="tel:+914842660999">
            +91 484 266 0999
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Rajagiri School of Engineering & Technology
        </p>

        <p>
          Designed by group 6
        </p>
      </div>

    </footer>
  );
}

export default Footer;