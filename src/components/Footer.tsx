function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <span className="brand-logo">DS</span>
            <span className="brand-name">Dev Stack</span>
          </a>

          <p>
            Build smarter with the right technologies.
            Discover, organize, and create your perfect
            technology stack.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h4>Product</h4>

          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;