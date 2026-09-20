function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-small-title">BUILD YOUR TECH STACK</p>

          <h1>
            Build Smarter.
            <br />
            <span>Build with Dev Stack.</span>
          </h1>

          <p className="hero-description">
            Discover the technologies you need to build modern, scalable,
            and powerful applications. Create your own technology stack
            and start building smarter.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Technologies
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/src/assets/banner-stack.png"
            alt="Dev Stack technology illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;