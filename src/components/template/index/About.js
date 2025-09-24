"use client";

import AnimatedElement from "@/components/animation/AnimatedElement";
import AnimatedText from "@/components/animation/AnimatedText";
import AnimatedCounter from "@/components/animation/AnimatedCounter";

export default function AboutSection({
  sectionSubtitle,
  sectionTitle,
  counterText,
  description,
  buttonLabel,
  buttonLink
}) {
  return (
    <section className="tc-about section-gap">
      <div className="container">
        <div className="tc-sec-head">
          <AnimatedElement
            as="p"
            className="tc-sec-head__sm-title mb-0"
            animation="fadeIn"
            duration={0.6}
          >
            <span className="dot"></span>
            {sectionSubtitle}
          </AnimatedElement>

          <AnimatedText
            as="h3"
            className="tc-sec-head__title"
            text={sectionTitle}
            wordDelay={100}
            threshold={0.1}
          />
        </div>

        <div className="tc-about__inner">
          <AnimatedElement
            className="tc-about-bubble"
            animation="scaleIn"
            duration={1}
            delay={200}
          >
            <img
              className="spinner-ani"
              src="assets/images/about/bubble.svg"
              alt="bubble"
            />
          </AnimatedElement>

          <div className="tc-about-cont">
            {/* Bloc compteur */}
            <AnimatedElement
              className="tc-about-cont__widget"
              animation="slideUp"
              duration={0.8}
              delay={300}
              threshold={0.5}
            >
              <div className="tc-about-number">
                <h2 className="big-number">
                  <AnimatedCounter
                    start={0}
                    end={50}
                    duration={1000}
                    suffix=""
                    threshold={0.5}
                    className="counter"
                  />
                </h2>
                <AnimatedElement
                  as="p"
                  className="number-text"
                  animation="slideUp"
                  duration={0.8}
                  delay={800}
                  threshold={0.5}
                >
                  {counterText}
                </AnimatedElement>
              </div>
            </AnimatedElement>

            <div className="seperator-line"></div>

            {/* Bloc description */}
            <AnimatedElement
              className="tc-about-cont__widget"
              animation="slideUp"
              duration={0.8}
              delay={400}
              threshold={0.5}
            >
              <div className="tc-about-desc">
                <AnimatedElement
                  as="p"
                  className="desc-text"
                  animation="slideUp"
                  duration={0.8}
                  delay={500}
                >
                  {description}
                </AnimatedElement>
                <AnimatedElement
                  className="tc-about-btn"
                  animation="slideUp"
                  duration={0.8}
                  delay={700}
                >
                  <a href={buttonLink} className="theme-btn">
                    {buttonLabel}
                  </a>
                </AnimatedElement>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
