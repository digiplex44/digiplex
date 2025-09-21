export default function BlogSection() {
    return (
        <section className="tc-blog section-gap">
                        <div className="container">
                            <div className="tc-blog__inner">
                                <div className="row">
                                    <div className="col-lg-4 col-12 position-relative">
                                        <div className="tc-sec-head">
                                            <p className="tc-sec-head__sm-title"><span className="dot"></span>Blog</p>
                                            <h3 className="tc-sec-head__title has_word_anim">
                                                The latest blog from us.
                                            </h3>
                                            <a href="blog-grid-2column.html" className="tc-sec-head__btn wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                                Explore All Blog Posts
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.30078 6.36914C7.9556 6.36914 7.67578 6.08932 7.67578 5.74414C7.67578 5.39896 7.9556 5.11914 8.30078 5.11914H15.8008C16.146 5.11914 16.4258 5.39896 16.4258 5.74414V13.2441C16.4258 13.5893 16.146 13.8691 15.8008 13.8691C15.4556 13.8691 15.1758 13.5893 15.1758 13.2441V7.25302L6.24272 16.1861C5.99865 16.4302 5.60292 16.4302 5.35884 16.1861C5.11476 15.942 5.11476 15.5463 5.35884 15.3022L14.2919 6.36914H8.30078Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="blog-slider-controls">
                                            <div className="swiper-button-next blog_control_next">
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.13477 10H17.4681M17.4681 10L12.4681 5M17.4681 10L12.4681 15" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="swiper-button-prev blog_control_prev">
                                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.4681 10H4.13477M4.13477 10L9.13477 5M4.13477 10L9.13477 15" stroke="#54595F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="swiper tc-blog__slider">
                                            <div className="swiper-wrapper">

                                                <div className="swiper-slide tc-blog__item">
                                                    <div className="tc-blog__cover">

                                                        <div className="tc-blog__img">
                                                            <img src="assets/images/blog/blog-1.png" alt="blog-img" />
                                                        </div>


                                                        <div className="tc-blog__author">
                                                            <img src="assets/images/blog/author-1.png" alt="author-img" />
                                                        </div>
                                                    </div>


                                                    <div className="tc-blog__content">
                                                        <span className="tc-blog__meta">10 min read</span>
                                                        <a href="blog-details.html" className="tc-blog__title">Why haven’t we upscaled our web design agency</a>
                                                        <p className="tc-blog__text">
                                                            Lorem ipsum dolor sit amet, consectetur adipisc elit. Sed non pharetra erat.
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="swiper-slide tc-blog__item">
                                                    <div className="tc-blog__cover">

                                                        <div className="tc-blog__img">
                                                            <img src="assets/images/blog/blog-2.png" alt="blog-img" />
                                                        </div>


                                                        <div className="tc-blog__author">
                                                            <img src="assets/images/blog/author-1.png" alt="author-img" />
                                                        </div>
                                                    </div>


                                                    <div className="tc-blog__content">
                                                        <span className="tc-blog__meta">4 min read</span>
                                                        <a href="blog-details.html" className="tc-blog__title">Why haven’t we upscaled our web design agency</a>
                                                        <p className="tc-blog__text">
                                                            Lorem ipsum dolor sit amet, consectetur adipisc elit. Sed non pharetra erat.
                                                        </p>
                                                    </div>
                                                </div>


                                                <div className="swiper-slide tc-blog__item">
                                                    <div className="tc-blog__cover">

                                                        <div className="tc-blog__img">
                                                            <img src="assets/images/blog/blog-1.png" alt="blog-img" />
                                                        </div>


                                                        <div className="tc-blog__author">
                                                            <img src="assets/images/blog/author-1.png" alt="author-img" />
                                                        </div>
                                                    </div>


                                                    <div className="tc-blog__content">
                                                        <span className="tc-blog__meta">10 min read</span>
                                                        <a href="blog-details.html" className="tc-blog__title">Why haven’t we upscaled our web design agency</a>
                                                        <p className="tc-blog__text">
                                                            Lorem ipsum dolor sit amet, consectetur adipisc elit. Sed non pharetra erat.
                                                        </p>
                                                    </div>
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
