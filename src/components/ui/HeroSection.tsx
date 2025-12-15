const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Aprende música a tu ritmo</h2>
        <p>
          Desarrolla tu talento musical con clases personalizadas impartidas por
          profesionales.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Ver cursos</button>
          <button className="secondary-btn">Más información</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          alt="Academia de música"
        />
      </div>
    </section>
  );
};

export default HeroSection;
