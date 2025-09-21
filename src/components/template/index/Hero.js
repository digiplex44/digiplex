"use client";

export default function HeroSection({
  title,
  text,
  buttonText = "Know More About Us",
  buttonLink = "#",
  mainImage = "/assets/images/hero/main-img.png",
  bgPattern = "/assets/images/hero/bg-pattern.png",
  circleTextImage = "/assets/images/hero/circle-text.svg",
  circleBallImage = "/assets/images/hero/circle-ball.svg",
  rectangleShapeImage = "/assets/images/hero/rectangle-shape.svg",
}) {
  return (
    <section className="tc-hero">
      <div className="hero-bg-pattern">
        <img src={bgPattern} alt="bg-pattern" />
      </div>
      <div className="container">
        <div className="tc-hero__inner">
          {/* Texte */}
          <div className="tc-hero-cont">
            <h1 className="tc-hero-cont__title slide-in">
              {title}
              <div
                className="border-line"
                data-fade-from="right"
                data-duration="3"
              ></div>
            </h1>
            <p className="tc-hero-cont__text slide-in delay-1">{text}</p>
            <div
              className="tc-hero-cont__btn slide-in delay-2"
            >
              <a href={buttonLink} className="theme-btn">
                {buttonText}
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="tc-hero-image">
            <div className="h-main-img">
              <img src={mainImage} alt="hero-img" />
            </div>
            <div className="circle-ball">
              <img className="text spinner-ani" src={circleTextImage} alt="circle-text" />
              <img className="ball" src={circleBallImage} alt="circle-ball" />
            </div>
            <div className="rectangle-shape">
              <img
                className="ball element-move"
                src={rectangleShapeImage}
                alt="rectangle-shape"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Animation "slide-in" */
        .slide-in {
          opacity: 0;
          transform: translateX(40px);
          animation: slideIn 1s ease-out forwards;
        }

        .slide-in.delay-1 {
          animation-delay: 0.3s;
        }

        .slide-in.delay-2 {
          animation-delay: 0.6s;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
