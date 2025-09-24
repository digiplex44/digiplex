"use client";

import AnimatedElement from "@/components/animation/AnimatedElement";

export default function PartnerSection({ 
  title,
  subTitle,
  logos = [1, 2, 3, 4, 5, 6, 7] 
}) {
  // On duplique pour créer l'effet d'infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="tc-partner section-gap-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="tc-sec-head text-center">
              <AnimatedElement as="h3" className="tc-sec-head__title" animation="slideLeft" duration={0.8} threshold={0.2}>
                {title}
              </AnimatedElement>

              <AnimatedElement as="p" className="tc-sec-head__text" animation="slideLeft" duration={0.8} delay={0.3} threshold={0.2}>
                {subTitle}
              </AnimatedElement>
            </div>
          </div>
        </div>

        <div className="tc-partner__inner">
          <div className="tc-partner__slider-wrapper">
            <div className="tc-partner__slider-track">
              {duplicatedLogos.map((num, idx) => (
                <div key={idx} className="tc-partner__slide">
                  <img src={`assets/images/partners/partner-${num}.svg`} alt={`partner-${num}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Slider infini */
        .tc-partner__slider-wrapper {
          overflow: hidden;
          position: relative;
          margin-top: 0rem;
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}