import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>contentful CMS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ullam, autem nulla odit cupiditate optio omnis. Culpa animi mollitia
            voluptates doloribus officia neque odit quidem rerum assumenda
            reiciendis? Optio, error!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
