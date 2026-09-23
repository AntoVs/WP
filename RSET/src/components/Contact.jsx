import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-stars"></div>

        <div className="contact-hero-content">
          <span className="contact-badge">Contact Us</span>

          <h1>Get In Touch</h1>

          <p>
            Have a question, feedback, or need assistance?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Form */}
          <div className="contact-form-card">

            <span className="form-label">CONTACT US</span>

            <h2>
              If You Have Any Query,
              <br />
              Please Contact Us
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been submitted.");
              }}
            >
              <div className="form-row">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                placeholder="Your Message"
                rows="7"
                required
              ></textarea>

              <button type="submit">
                Send Message →
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="contact-map">

            <iframe
              title="Rajagiri School of Engineering & Technology Location"
              src="https://www.google.com/maps?q=Rajagiri+School+of+Engineering+%26+Technology,+Rajagiri+Valley,+Kakkanad,+Kochi,+Kerala&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <div className="details-container">

          <div className="detail-item">
            <span className="detail-number">01</span>

            <h3>Visit Us</h3>

            <p>
              Rajagiri Valley,
              <br />
              Kakkanad, Kochi,
              <br />
              Kerala, India
            </p>
          </div>

          <div className="detail-item">
            <span className="detail-number">02</span>

            <h3>Email Us</h3>

            <p>
              info@rset.edu.in
              <br />
              admissions@rset.edu.in
            </p>
          </div>

          <div className="detail-item">
            <span className="detail-number">03</span>

            <h3>Call Us</h3>

            <p>
              +91 484 266 0999
              <br />
              +91 98765 43210
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;