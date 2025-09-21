"use client";

export default function TextMoveSection({ textItems }) {

  // Dupliquer les items pour le défilement continu
  const duplicatedItems = [...textItems, ...textItems];

  return (
    <section className="tc-text-move">
      <div className="tc-text-move__wrapper overflow-hidden">
        <div className="tc-text-move__slider">
          <div className="tc-text-move__track animate-scroll-left">
            {duplicatedItems.map((text, index) => (
              <div key={index} className="tc-text-slide">
                <span className="tc-text-slide__title">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tc-text-move__track {
          display: flex;
          width: max-content;
          gap: 2.5rem; /* espace régulier entre chaque texte+star */
        }

        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tc-text-slide {
          display: flex;
          align-items: center;
          white-space: nowrap;
          position: relative;
        }

        /* Ajoute une étoile après CHAQUE texte, sauf le dernier */
        .tc-text-slide::after {
          content: url("/assets/images/icons/black-star.svg");
          display: inline-block;
          margin-left: 1rem;
          margin-right: 1rem;
          transform: translateY(2px);
        }
      `}</style>
    </section>
  );
}
