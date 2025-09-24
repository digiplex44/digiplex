"use client";

import AnimatedElement from "@/components/animation/AnimatedElement";
import AnimatedText from "@/components/animation/AnimatedText";

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
            <AnimatedElement
              as="h1"
              className="tc-hero-cont__title"
              animation="slideLeft"
              duration={1}
              delay={0}
            >
              <AnimatedText 
                text={title}
                wordDelay={150}
              />
              <div
                className="border-line"
                data-fade-from="right"
                data-duration="3"
              ></div>
            </AnimatedElement>

            <AnimatedElement
              as="p"
              className="tc-hero-cont__text"
              animation="slideLeft"
              duration={0.8}
              delay={300}
            >
              {text}
            </AnimatedElement>

            <AnimatedElement
              className="tc-hero-cont__btn"
              animation="slideLeft"
              duration={0.8}
              delay={600}
            >
              <a href={buttonLink} className="theme-btn">
                {buttonText}
              </a>
            </AnimatedElement>
          </div>

          {/* Images */}
          <div className="tc-hero-image">
            <AnimatedElement
              className="h-main-img"
              animation="fadeIn"
              duration={1.2}
              delay={200}
            >
              <img src={mainImage} alt="hero-img" />
            </AnimatedElement>

            <AnimatedElement
              className="circle-ball"
              animation="scaleIn"
              duration={1}
              delay={400}
            >
              <img className="text spinner-ani" src={circleTextImage} alt="circle-text" />
              <img className="ball" src={circleBallImage} alt="circle-ball" />
            </AnimatedElement>

            <AnimatedElement
              className="rectangle-shape"
              animation="rotateIn"
              duration={1}
              delay={600}
            >
              <img
                className="ball element-move"
                src={rectangleShapeImage}
                alt="rectangle-shape"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}