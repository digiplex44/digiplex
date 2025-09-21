"use client";
import { useEffect, useRef } from "react";

export default function FeaturesSection({ items }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".tc-feature__item");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`;
            entry.target.classList.add("slide-up");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tc-features bg-black section-gap-2 bg-img"
      style={{
        backgroundImage: 'url("/assets/images/features/bg-dotted-shape.png")',
      }}
    >
      <div className="container">
        <div className="tc-features__wrapper">
          {items.map((item, index) => (
            <div key={index} className="tc-feature__item">
              <h3 className="tc-feature__title">{item.title}</h3>
              <p className="tc-feature__text">{item.text}</p>
              <a href={item.link} className="tc-feature__btn">
                Start Here
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.30078 5.625C7.9556 5.625 7.67578 5.34518 7.67578 5C7.67578 4.65482 7.9556 4.375 8.30078 4.375H15.8008C16.146 4.375 16.4258 4.65482 16.4258 5V12.5C16.4258 12.8452 16.146 13.125 15.8008 13.125C15.4556 13.125 15.1758 12.8452 15.1758 12.5V6.50888L6.24272 15.4419C5.99865 15.686 5.60292 15.686 5.35884 15.4419C5.11476 15.1979 5.11476 14.8021 5.35884 14.5581L14.2919 5.625H8.30078Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tc-feature__item {
          opacity: 0;
          transform: translateY(40px);
        }

        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
