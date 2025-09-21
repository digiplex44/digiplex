export default function ServiceSection() {
    return (
        <section className="tc-service bg-black section-gap">
            <div className="container">
                <div className="tc-service__inner">
                    <div className="tc-sec-head">
                        <div className="tc-sec-head__main">
                            <p className="tc-sec-head__sm-title text-white"><span className="dot white"></span>Our Services</p>
                            <h3 className="tc-sec-head__title text-white has_word_anim">What we offer</h3>
                        </div>
                        <p className="tc-sec-head__text has_word_anim">
                            With every single one of our clients we bring forth a deep passion for
                            <b> creative problem solving innovations</b> forward thinking brands boundaries
                        </p>
                        <a href="service.html" className="tc-sec-head__btn theme-btn border-btn wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            Explore All
                            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.0262 5.38325C12.2702 5.13918 12.666 5.13918 12.91 5.38325L17.91 10.3833C18.1541 10.6273 18.1541 11.0231 17.91 11.2671L12.91 16.2671C12.666 16.5112 12.2702 16.5112 12.0262 16.2671C11.7821 16.0231 11.7821 15.6273 12.0262 15.3833L15.9592 11.4502H4.13477C3.78959 11.4502 3.50977 11.1704 3.50977 10.8252C3.50977 10.48 3.78959 10.2002 4.13477 10.2002H15.9592L12.0262 6.26714C11.7821 6.02306 11.7821 5.62733 12.0262 5.38325Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="tc-service__wrapper">
                        {/* Service Items */}
                        {[
                            { num: '01', title: 'Search Engine Optimization', img: 'service-1.png' },
                            { num: '02', title: 'Email Marketing', img: 'service-2.png' },
                            { num: '03', title: 'Digital Marketing', img: 'service-3.png' },
                            { num: '04', title: 'Brand Marketing', img: 'service-4.png' }
                        ].map((service, index) => (
                            <div key={index} className="tc-service__item hobble wow fadeInUp" data-wow-delay={`.${3 + index * 2}s`} data-wow-duration="1s">
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
                                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                                        </p>
                                    </div>
                                </div>
                                <div className="tc-service__item-action">
                                    <a href="service-details.html" className="tc-service__item-btn hover-layer-2">
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
        </section>
    );
}