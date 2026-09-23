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

    </div>
  );
}

export default Contact;