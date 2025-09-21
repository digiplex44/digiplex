"use client";

export default function TextMove2() {
    // Créer un tableau de texte pour la duplication
    const textItems = ["Let's work together.", "Let's work together.", "Let's work together.", "Let's work together."];
    
    // Dupliquer les items pour le défilement continu
    const duplicatedItems = [...textItems, ...textItems];

    return (
        <section className="tc-text-move tc-text-move--style2 bg-white">
            <div className="tc-text-move__wrapper overflow-hidden">
                <div className="tc-text-move__slider--style2">
                    <div className="tc-text-move__track animate-scroll-left">
                        {duplicatedItems.map((text, index) => (
                            <div key={index} className="tc-text-slide hobble">
                                <span className="tc-text-slide__title">{text}</span>
                                <div className="tc-text-slide__action">
                                    <a href="contact.html" className="tc-text-slide__btn hover-layer-2">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8008 30.8252L30.8008 10.8252M30.8008 10.8252H15.8008M30.8008 10.8252V25.8252" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Deuxième ligne qui défile dans le sens inverse */}
                <div className="tc-text-move__slider-reverse">
                    <div className="tc-text-move__track animate-scroll-right">
                        {duplicatedItems.map((text, index) => (
                            <div key={index} className="tc-text-slide hobble">
                                <span className="tc-text-slide__title">{text}</span>
                                <div className="tc-text-slide__action">
                                    <a href="contact.html" className="tc-text-slide__btn hover-layer-2">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8008 30.8252L30.8008 10.8252M30.8008 10.8252H15.8008M30.8008 10.8252V25.8252" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .tc-text-move__track {
                    display: flex;
                    width: max-content
                }

                .animate-scroll-left {
                    animation: scrollLeft 20s linear infinite;
                }

                .animate-scroll-right {
                    animation: scrollRight 20s linear infinite;
                }

                @keyframes scrollLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scrollRight {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .tc-text-slide {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    position: relative;
                }
            `}</style>
        </section>
    );
}