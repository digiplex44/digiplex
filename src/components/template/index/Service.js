import AnimatedElement from "@/components/animation/AnimatedElement";

export default function ServiceSection({ header, services }) {
    return (
        <section className="tc-service bg-black section-gap">
            <div className="container">
                <div className="tc-service__inner">
                    <div className="tc-sec-head">
                        <AnimatedElement as="div" className="tc-sec-head__main" animation="slideLeft">
                            <p className="tc-sec-head__sm-title text-white"><span className="dot white"></span>{header.smallTitle}</p>
                            <h3 className="tc-sec-head__title text-white has_word_anim">{header.title}</h3>
                        </AnimatedElement>

                        <AnimatedElement as="div" animation="slideLeft" className="tc-sec-head__text has_word_anim">
                            {header.description[0]} <b>{header.description[1]}</b> {header.description[2]}
                        </AnimatedElement>

                        <AnimatedElement as="a" href={header.button.link} className="tc-sec-head__btn theme-btn border-btn wow fadeInUp">
                            {header.button.label}
                            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.0262 5.38325C12.2702 5.13918 12.666 5.13918 12.91 5.38325L17.91 10.3833C18.1541 10.6273 18.1541 11.0231 17.91 11.2671L12.91 16.2671C12.666 16.5112 12.2702 16.5112 12.0262 16.2671C11.7821 16.0231 11.7821 15.6273 12.0262 15.3833L15.9592 11.4502H4.13477C3.78959 11.4502 3.50977 11.1704 3.50977 10.8252C3.50977 10.48 3.78959 10.2002 4.13477 10.2002H15.9592L12.0262 6.26714C11.7821 6.02306 11.7821 5.62733 12.0262 5.38325Z"
                                    fill="white"
                                />
                            </svg>
                        </AnimatedElement>
                    </div>

                    <div className="tc-service__wrapper">
                        {/* Service Items avec délai progressif */}
                        {services.map((service, index) => (
                            <AnimatedElement
                                as="div"
                                key={index}
                                className="tc-service__item hobble"
                                animation="slideUp"
                                delay={index * 200}
                                duration={0.6}
                            >
                                <div className="tc-service__item-inner">
                                    <div className="tc-service__item-info info-1">
                                        <div className="tc-service__item-img">
                                            <img src={`assets/images/service/${service.img}`} alt="service-img" />
                                        </div>
                                        <div className="tc-service__item-content">
                                            <span className="tc-service__item-number">{service.num}</span>
                                            <h4 className="tc-service__item-title">{service.title}</h4>
                                        </div>
                                    </div>
                                    <div className="tc-service__item-info info-2">
                                        <p className="tc-service__item-desc">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="tc-service__item-action">
                                    <a href={service.link} className="tc-service__item-btn hover-layer-2">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8008 30.8252L30.8008 10.8252M30.8008 10.8252H15.8008M30.8008 10.8252V25.8252" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}