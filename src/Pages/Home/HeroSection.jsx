export default function HeroSection() {
  return (
    <section id="heroSectoin" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Austin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            hero section description.
            <br /> hero section description after line break.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="hero section img" />
      </div>
    </section>
  );
}
