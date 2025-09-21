"use client"

import { useState, useEffect, useRef } from 'react';

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoplayRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            text: "Our content management system of choice is Craft CMS rather than WordPress, allowing you to manage your website pages with unprecedented flexibility.",
            name: "Sarah Johnson",
            designation: "Assistant Manager",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 2,
            text: "The team's attention to detail and innovative approach transformed our digital presence completely. We couldn't be happier with the results.",
            name: "Michael Chen",
            designation: "Product Director", 
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 3,
            text: "Working with this agency has been a game-changer for our business. Their expertise in modern web technologies is truly exceptional.",
            name: "Emily Rodriguez",
            designation: "Marketing Lead",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 4,
            text: "From concept to launch, every step was handled with professionalism. The final product exceeded our expectations significantly.",
            name: "David Thompson", 
            designation: "CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 5,
            text: "The strategic insights and technical execution were flawless. Our website now performs better than ever with seamless user experience.",
            name: "Lisa Wang",
            designation: "Creative Director",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face", 
            rating: 5
        }
    ];

    // Dupliquer pour carousel infini
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
    const totalSlides = testimonials.length;

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    // Gérer transition infinie
    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                if (currentIndex >= totalSlides * 2) {
                    setCurrentIndex(totalSlides);
                } else if (currentIndex <= -1) {
                    setCurrentIndex(totalSlides - 1);
                }
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isTransitioning, totalSlides]);

    // Autoplay
    useEffect(() => {
        const startAutoplay = () => {
            autoplayRef.current = setInterval(nextSlide, 3000);
        };

        startAutoplay();

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, []);

    const getTransformValue = () => {
        return `translateX(-${(currentIndex + totalSlides) * 50}%)`;
    };

    return (
        <section className="tc-testimonial bg-offwhite section-gap">
            <style jsx>{`
                .carousel-container {
                    overflow: hidden;
                    position: relative;
                }
                
                .carousel-track {
                    display: flex;
                    transition: ${isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'};
                    transform: ${getTransformValue()};
                }
                
                .carousel-slide {
                    flex: 0 0 100%;
                    padding-right: 24px;
                }
                
                @media (min-width: 768px) {
                    .carousel-slide {
                        flex: 0 0 50%;
                    }
                }
            `}</style>

            <div className="container">
                <div className="tc-testimonial__inner">
                    <div className="row position-relative">
                        <div className="col-lg-6 col-12">
                            <div className="tc-sec-head">
                                <p className="tc-sec-head__sm-title"><span className="dot"></span>Testimonials</p>
                                <h3 className="tc-sec-head__title has_word_anim">
                                    What our users <br />
                                    say about us.
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-slider-controls">
                                <div 
                                    className="swiper-button-next tc_next"
                                    onClick={nextSlide}
                                    onMouseEnter={() => {
                                        if (autoplayRef.current) {
                                            clearInterval(autoplayRef.current);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        autoplayRef.current = setInterval(nextSlide, 4000);
                                    }}
                                >
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.13477 10H17.4681M17.4681 10L12.4681 5M17.4681 10L12.4681 15" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div 
                                    className="swiper-button-prev tc_prev"
                                    onClick={prevSlide}
                                    onMouseEnter={() => {
                                        if (autoplayRef.current) {
                                            clearInterval(autoplayRef.current);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        autoplayRef.current = setInterval(nextSlide, 4000);
                                    }}
                                >
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.4681 10H4.13477M4.13477 10L9.13477 5M4.13477 10L9.13477 15" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tc-testimonial__slider">
                        <div className="carousel-container">
                            <div className="carousel-track">
                                {extendedTestimonials.map((testimonial, index) => (
                                    <div key={`${testimonial.id}-${index}`} className="carousel-slide">
                                        <div className="tc-testimonial__item">
                                            <div className="tc-testimonial__top">
                                                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_527_2929)">
                                                        <path d="M0.800781 9.66702C0.800781 4.51938 4.48224 1.45757 6.77896 0.0466578C7.06987 -0.132251 7.38405 0.240112 7.16005 0.500476C6.25609 1.54866 5.54143 2.74616 5.04805 4.03939C6.22762 3.70309 7.48304 3.74596 8.63692 4.16194C9.7908 4.57791 10.7848 5.34596 11.4784 6.35755C12.1721 7.36914 12.5303 8.57312 12.5026 9.79938C12.4748 11.0256 12.0623 12.2121 11.3236 13.1913C10.5848 14.1704 9.55703 14.8926 8.38549 15.2559C7.21395 15.6192 5.95787 15.6051 4.79475 15.2157C3.63163 14.8263 2.62028 14.0813 1.90359 13.0859C1.18691 12.0905 0.801135 10.8936 0.800781 9.66702ZM13.8262 9.66702C13.8262 4.51938 17.5077 1.45757 19.8044 0.0481124C20.0953 -0.130797 20.4095 0.240112 20.187 0.499021C19.2818 1.54743 18.5662 2.74544 18.0721 4.03939C19.2516 3.70309 20.507 3.74596 21.6609 4.16194C22.8148 4.57791 23.8088 5.34596 24.5024 6.35755C25.1961 7.36914 25.5543 8.57312 25.5265 9.79938C25.4988 11.0256 25.0863 12.2121 24.3476 13.1913C23.6088 14.1704 22.581 14.8926 21.4095 15.2559C20.2379 15.6192 18.9819 15.6051 17.8188 15.2157C16.6556 14.8263 15.6443 14.0813 14.9276 13.0859C14.2109 12.0905 13.8251 10.895 13.8248 9.66848L13.8262 9.66702Z" fill="black" />
                                                    </g>
                                                </svg>
                                                <p className="tc-testimonial__text">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                            <div className="tc-testimonial__btm">
                                                <div className="tc-testimonial__author">
                                                    <div className="tc-testimonial__author-img">
                                                        <img src={testimonial.image} alt="testimonial-img" />
                                                    </div>
                                                    <div className="tc-testimonial__info">
                                                        <h5 className="tc-testimonial__name">{testimonial.name}</h5>
                                                        <p className="tc-testimonial__designation">{testimonial.designation}</p>
                                                    </div>
                                                </div>
                                                <div className="tc-testimonial__rattings">
                                                    <ul>
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <li key={star}>
                                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                                </svg>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p className="tc-testimonial__rattings-text">5 Start Rating</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}