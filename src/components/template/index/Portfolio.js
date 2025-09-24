'use client';
import AnimatedTiltElement from '@/components/animation/AnimatedTiltElement';
import AnimatedElement from '@/components/animation/AnimatedElement';

export default function PortfolioSection({sectionContent, portfolioItems}) {
    return (
        <section className="tc-portfolio">
            <div className="container">
                <div className="tc-portfolio__inner">
                    <div className="row">
                        {/* Premier élément */}
                        <div className="col-lg-6 col-md-6 col-12">
                            <AnimatedTiltElement
                                animation="slideUp"
                                delay={portfolioItems[0].delay}
                                className="tc-portfolio__item item-1 hobble"
                                enableTilt
                                tiltMaxRotation={10}
                                tiltPerspective={800}
                            >
                                <div className="tc-portfolio__cover">
                                    <div className="tc-portfolio__img">
                                        <img src={portfolioItems[0].image} alt="portfolio-img" />
                                    </div>
                                    <div className="tc-portfolio__category">
                                        {portfolioItems[0].tags.map((tag, i) => (
                                            <a key={i} href="portfolio-details.html">{tag}</a>
                                        ))}
                                    </div>
                                    <a href="portfolio-details.html" className="tc-portfolio__btn">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedTiltElement>
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

                        {/* Section titre + deuxième élément */}
                        <div className="col-lg-6 col-md-6 col-12 order-class">
                            <AnimatedElement animation="slideUp" className="tc-sec-head">
                                <p className="tc-sec-head__sm-title">
                                    <span className="dot"></span>
                                    {sectionContent.header.smallTitle}
                                </p>
                                <h3
                                    className="tc-sec-head__title has_word_anim"
                                    dangerouslySetInnerHTML={{ __html: sectionContent.header.title }}
                                />
                            </AnimatedElement>

                            <AnimatedTiltElement
                                animation="slideUp"
                                delay={portfolioItems[1].delay}
                                className="tc-portfolio__item item-2 hobble"
                                enableTilt
                                tiltMaxRotation={10}
                                tiltPerspective={800}
                            >
                                <div className="tc-portfolio__cover">
                                    <div className="tc-portfolio__img">
                                        <img src={portfolioItems[1].image} alt="portfolio-img" />
                                    </div>
                                    <div className="tc-portfolio__category">
                                        {portfolioItems[1].tags.map((tag, i) => (
                                            <a key={i} href="portfolio-details.html">{tag}</a>
                                        ))}
                                    </div>
                                    <a href="portfolio-details.html" className="tc-portfolio__btn">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedTiltElement>
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

                        {/* Éléments 3 à 6 */}
                        {portfolioItems.slice(2).map((item) => (
                            <div key={item.id} className="col-lg-6 col-md-6 col-12">
                                <AnimatedTiltElement
                                    animation="slideUp"
                                    delay={item.delay}
                                    className={`tc-portfolio__item ${item.id} hobble`}
                                    enableTilt
                                    tiltMaxRotation={10}
                                    tiltPerspective={800}
                                >
                                    <div className="tc-portfolio__cover">
                                        <div className="tc-portfolio__img">
                                            <img src={item.image} alt="portfolio-img" />
                                        </div>
                                        <div className="tc-portfolio__category">
                                            {item.tags.map((tag, i) => (
                                                <a key={i} href="portfolio-details.html">{tag}</a>
                                            ))}
                                        </div>
                                        <a href="portfolio-details.html" className="tc-portfolio__btn">
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.3008 30.1748L30.3008 10.1748M30.3008 10.1748H15.3008M30.3008 10.1748V25.1748" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </AnimatedTiltElement>
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
                        ))}

                        {/* CTA Section */}
                        <div className="col-lg-6 col-12">
                            <AnimatedElement
                                animation="slideUp"
                                delay={300}
                                className="tc-portfolio-cta bg-img"
                                style={{
                                    backgroundImage: `url('${sectionContent.cta.background}')`,
                                }}
                            >
                                <div className="tc-portfolio-cta__cont">
                                    <h4 className="tc-portfolio-cta__title">
                                        {sectionContent.cta.title}
                                    </h4>
                                    <p className="tc-portfolio-cta__text">
                                        {sectionContent.cta.text}
                                    </p>
                                    <div className="tc-portfolio-cta__btn">
                                        <a href={sectionContent.cta.button.link} className="theme-btn">
                                            {sectionContent.cta.button.label}
                                        </a>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
