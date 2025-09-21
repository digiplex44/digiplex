'use client';

import { useEffect, useRef, useState } from 'react';

export default function PortfolioSection() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        // Créer l'observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = entry.target.getAttribute('data-item-id');
                        setVisibleItems(prev => new Set([...prev, itemId]));
                        // Arrêter d'observer cet élément une fois qu'il est visible
                        observerRef.current?.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Déclencher quand 10% de l'élément est visible
                rootMargin: '0px 0px -50px 0px' // Déclencher un peu avant que l'élément soit complètement visible
            }
        );

        // Observer tous les éléments avec la classe d'animation
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observerRef.current?.observe(el));

        const initTiltEffect = () => {
            const tiltElements = document.querySelectorAll('.hover-layer-1');

            tiltElements.forEach(element => {
                const handleMouseMove = (e) => {
                    const rect = element.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / centerY) * -10; // Maximum 10 degrés
                    const rotateY = ((x - centerX) / centerX) * 10;   // Maximum 10 degrés

                    element.style.transform = `perspective(800px) translate3d(0px, 0px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    element.style.transition = 'transform 0.1s ease-out';
                };

                const handleMouseLeave = () => {
                    element.style.transform = 'perspective(800px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)';
                    element.style.transition = 'transform 0.3s ease-out';
                };

                element.addEventListener('mousemove', handleMouseMove);
                element.addEventListener('mouseleave', handleMouseLeave);

                // Cleanup function pour cet élément
                element._tiltCleanup = () => {
                    element.removeEventListener('mousemove', handleMouseMove);
                    element.removeEventListener('mouseleave', handleMouseLeave);
                };
            });
        };

        // Initialiser l'effet après un court délai pour s'assurer que le DOM est prêt
        const timer = setTimeout(initTiltEffect, 100);

        // Cleanup
        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }

            // Nettoyer les event listeners du tilt
            const tiltElements = document.querySelectorAll('.hover-layer-1');
            tiltElements.forEach(element => {
                if (element._tiltCleanup) {
                    element._tiltCleanup();
                }
            });
        };
    }, []);

    const portfolioItems = [
        {
            id: 'item-1',
            image: 'assets/images/portfolio/portfolio-1.png',
            year: '2026',
            author: 'Gary Neville',
            title: 'Refreshing Gary Neville\'s Digital Presence',
            delay: 0.3
        },
        {
            id: 'item-2',
            image: 'assets/images/portfolio/portfolio-2.png',
            year: '2026',
            author: 'Gary Neville',
            title: 'Brand Identity Design for Startup',
            delay: 0.5
        },
        {
            id: 'item-3',
            image: 'assets/images/portfolio/portfolio-3.png',
            year: '2026',
            author: 'Zenifer Lofez',
            title: 'Packaging Mockup for Startup',
            delay: 0.3
        },
        {
            id: 'item-4',
            image: 'assets/images/portfolio/portfolio-4.png',
            year: '2026',
            author: 'Terio Zemip',
            title: 'Crafted Payment Gateway',
            delay: 0.5
        },
        {
            id: 'item-5',
            image: 'assets/images/portfolio/portfolio-5.png',
            year: '2025',
            author: 'Andrio Gethary',
            title: 'Reimagining the built environment',
            delay: 0.3
        },
        {
            id: 'item-6',
            image: 'assets/images/portfolio/portfolio-6.png',
            year: '2025',
            author: 'Mellar Pitter',
            title: 'Forma bringing architectural ideas to life',
            delay: 0.5
        }
    ];

    return (
        <section className="tc-portfolio">
            <div className="container">
                <div className="tc-portfolio__inner">
                    <div className="row">
                        {/* Premier élément */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <div
                                className={`tc-portfolio__item item-1 hobble fade-in-up delay-300 animate-on-scroll ${visibleItems.has('item-1') ? 'visible' : ''
                                    }`}
                                data-item-id="item-1"
                            >
                                <div className="tc-portfolio__cover hover-layer-1">
                                    <div className="tc-portfolio__img">
                                        <img
                                            src={portfolioItems[0].image}
                                            alt="portfolio-img"
                                        />
                                    </div>

                                    <div className="tc-portfolio__category">
                                        <a href="portfolio-details.html">Experiment</a>
                                        <a href="portfolio-details.html">Technology</a>
                                    </div>

                                    <a href="portfolio-details.html" className="tc-portfolio__btn">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="tc-portfolio__content">
                                    <ul className="tc-portfolio__meta">
                                        <li>{portfolioItems[0].year}</li>
                                        <li>{portfolioItems[0].author}</li>
                                    </ul>
                                    <a href="portfolio-details.html" className="tc-portfolio__title">
                                        {portfolioItems[0].title}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Section titre avec deuxième élément */}
                        <div className="col-lg-6 col-md-6 col-12 order-class">
                            <div className={`tc-sec-head fade-in-up animate-on-scroll ${visibleItems.has('section-title') ? 'visible' : ''
                                }`}
                                data-item-id="section-title">
                                <p className="tc-sec-head__sm-title">
                                    <span className="dot"></span>Our Work
                                </p>
                                <h3 className="tc-sec-head__title has_word_anim">
                                    Take a look at <br />
                                    our projects
                                </h3>
                            </div>

                            <div
                                className={`tc-portfolio__item item-2 hobble fade-in-up delay-500 animate-on-scroll ${visibleItems.has('item-2') ? 'visible' : ''
                                    }`}
                                data-item-id="item-2"
                            >
                                <div className="tc-portfolio__cover hover-layer-1">
                                    <div className="tc-portfolio__img">
                                        <img
                                            src={portfolioItems[1].image}
                                            alt="portfolio-img"
                                        />
                                    </div>

                                    <div className="tc-portfolio__category">
                                        <a href="portfolio-details.html">Experiment</a>
                                        <a href="portfolio-details.html">Technology</a>
                                    </div>

                                    <a href="portfolio-details.html" className="tc-portfolio__btn">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="tc-portfolio__content">
                                    <ul className="tc-portfolio__meta">
                                        <li>{portfolioItems[1].year}</li>
                                        <li>{portfolioItems[1].author}</li>
                                    </ul>
                                    <a href="portfolio-details.html" className="tc-portfolio__title">
                                        {portfolioItems[1].title}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Éléments 3 à 6 */}
                        {portfolioItems.slice(2).map((item, index) => (
                            <div key={item.id} className="col-lg-6 col-md-6 col-12">
                                <div
                                    className={`tc-portfolio__item ${item.id} hobble fade-in-up ${item.delay === 0.3 ? 'delay-300' : 'delay-500'
                                        } animate-on-scroll ${visibleItems.has(item.id) ? 'visible' : ''
                                        }`}
                                    data-item-id={item.id}
                                >
                                    <div className="tc-portfolio__cover hover-layer-1">
                                        <div className="tc-portfolio__img">
                                            <img
                                                src={item.image}
                                                alt="portfolio-img"
                                            />
                                        </div>

                                        <div className="tc-portfolio__category">
                                            <a href="portfolio-details.html">Experiment</a>
                                            <a href="portfolio-details.html">Technology</a>
                                        </div>

                                        <a href="portfolio-details.html" className="tc-portfolio__btn">
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="tc-portfolio__content">
                                        <ul className="tc-portfolio__meta">
                                            <li>{item.year}</li>
                                            <li>{item.author}</li>
                                        </ul>
                                        <a href="portfolio-details.html" className="tc-portfolio__title">
                                            {item.title}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* CTA Section */}
                        <div className="col-lg-6 col-12">
                            <div
                                className={`tc-portfolio-cta bg-img fade-in-up delay-300 animate-on-scroll ${visibleItems.has('cta-section') ? 'visible' : ''
                                    }`}
                                data-item-id="cta-section"
                                style={{
                                    backgroundImage: "url('assets/images/cta/cta-bg.png')"
                                }}
                            >
                                <div className="tc-portfolio-cta__cont">
                                    <h4 className="tc-portfolio-cta__title">
                                        Like what you see?
                                    </h4>
                                    <p className="tc-portfolio-cta__text">
                                        Connect with us & let's build something cool together
                                    </p>
                                    <div className="tc-portfolio-cta__btn">
                                        <a href="contact.html" className="theme-btn">
                                            Contact With Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}