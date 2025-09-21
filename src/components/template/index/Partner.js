"use client";
import { useEffect, useRef, useState } from "react";

export default function PartnerSection() {
  const textRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (textRef.current) observer.observe(textRef.current);
  }, []);

  const logos = [1, 2, 3, 4, 5, 6, 7];

  // Dupliquer pour slider infini
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="tc-partner section-gap-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="tc-sec-head text-center" ref={textRef}>
              <h3 className={`tc-sec-head__title ${textVisible ? "slide-right" : ""}`}>
                Worlds Most Popular Companies Trust Us
              </h3>
              <p className={`tc-sec-head__text ${textVisible ? "slide-right delay-1" : ""}`}>
                Connect with us & let's build something cool together
              </p>
            </div>
          </div>
        </div>

        <div className="tc-partner__inner">
          <div className="tc-partner__slider-wrapper">
            <div className="tc-partner__slider-track">
              {duplicatedLogos.map((num, idx) => (
                <div key={idx} className="tc-partner__slide">
                  <img src={`assets/images/partners/partner-${num}.svg`} alt="partner" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Texte droite->gauche */
        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          animation: slideRight 0.8s forwards;
        }
        .slide-right.delay-1 {
          animation-delay: 0.3s;
        }
        @keyframes slideRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Slider infini */
        .tc-partner__slider-wrapper {
          overflow: hidden;
          position: relative;
          margin-top: 2rem;
        }
        .tc-partner__slider-track {
          display: flex;
          gap: 2rem;
          animation: scrollLeft 20s linear infinite;
        }
        .tc-partner__slide {
          flex: 0 0 auto;
          filter: blur(0);
          transition: filter 0.3s;
        }
        .tc-partner__slider-track .tc-partner__slide:first-child,
        .tc-partner__slider-track .tc-partner__slide:last-child {
          filter: blur(2px);
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
