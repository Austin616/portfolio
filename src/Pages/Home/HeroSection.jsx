export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Austin 👋</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              {" "}
              Computer Science
            </span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section--description">
            I am a rising junior at the University of Texas, Austin
            <br /> hoping to pursue a career in software development with a
            focus
            <br /> on AI and using ML to solve real-world problems.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/austin-tran-57624a284/" target="_blank">
          <button className="btn btn-primary">Get in Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/coverimage.png" alt="hero section img" />
      </div>
    </section>
  );
}
