"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 3;
    const end = 15;
    const duration = 1500; // ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="tc-about section-gap">
      <div className="container">
        <div className="tc-sec-head">
          <p className="tc-sec-head__sm-title mb-0">
            <span className="dot"></span>Who we are
          </p>

          {/* Titre ligne par ligne */}
          <h3 className="tc-sec-head__title">
            {"We provide brilliant idea to grow the startup — agency with your sharp brand."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className={`word ${isVisible ? "slide-in" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
          </h3>
        </div>

        <div className="tc-about__inner">
          <div className="tc-about-bubble">
            <img
              className="spinner-ani"
              src="assets/images/about/bubble.svg"
              alt="bubble"
            />
          </div>

          <div className="tc-about-cont">
            {/* Bloc compteur */}
            <div className="tc-about-cont__widget">
              <div className="tc-about-number">
                <h2 className="big-number">
                  <span className="counter">{count}</span>
                  <small>M</small>
                </h2>
                <p className={`number-text ${isVisible ? "slide-up" : ""}`}>
                  We helped to get companies with $15M+ funding
                </p>
              </div>
            </div>

            <div className="seperator-line"></div>

            {/* Bloc description */}
            <div className="tc-about-cont__widget">
              <div className={`tc-about-desc ${isVisible ? "slide-up" : ""}`}>
                <p className="desc-text">
                  Consumers today rely heavily on digital means to research
                  products. We research a brand of blend engaging with it,
                  according to the meanwhile, 51% of consumers
                </p>
                <div className="tc-about-btn">
                  <a href="about.html" className="theme-btn">
                    Explore Us More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .word {
          display: inline-block;
          opacity: 0;
          transform: translateX(40px);
        }
        .word.slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .counter {
          display: inline-block;
        }

        .number-text,
        .tc-about-desc {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .number-text.slide-up,
        .tc-about-desc.slide-up {
          opacity: 1;
          transform: translateY(0);
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
