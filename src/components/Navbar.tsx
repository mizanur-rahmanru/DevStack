function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Mobile Menu */}
        <button className="menu-btn">
          ☰
        </button>

        {/* Logo */}
        <a href="#" className="brand">
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;