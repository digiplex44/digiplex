"use client"

export const Footer = () => {
  return (
    <footer className="tc-footer">
      <div className="tc-footer__inner bg-black">
        <div className="container">
          <div className="tc-footer__top">
            <div className="row">
              <div className="col-lg-4 col-xl-4 col-md-6 col-12">
                <div className="tc-footer__widget about">
                  <a href="index.html" className="tc-footer__logo">
                    <img src="assets/images/white-logo.svg" alt="logo" />
                  </a>

                  <div className="tc-footer__desc">
                    <h4 className="tc-footer__desc-title">
                      Do you like what you see?
                    </h4>
                    <p className="tc-footer__desc-text">
                      Do you like what you see?
                    </p>

                    <a href="blog-grid-2column.html" className="tc-footer__desc-btn transparent-btn">
                      Let’s Talk
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5 5.625C7.15482 5.625 6.875 5.34518 6.875 5C6.875 4.65482 7.15482 4.375 7.5 4.375H15C15.3452 4.375 15.625 4.65482 15.625 5V12.5C15.625 12.8452 15.3452 13.125 15 13.125C14.6548 13.125 14.375 12.8452 14.375 12.5V6.50888L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L13.4911 5.625H7.5Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-xl-2 offset-xl-1 col-md-3 col-12">
                <div className="tc-footer__widget useful-links">
                  <h3 className="tc-footer__widget-title">Useful Links</h3>
                  <ul className="tc-footer__widget-links">
                    <li><a href="contact.html">Documentation</a></li>
                    <li><a href="contact.html">Download Pro Update</a></li>
                    <li><a href="blog-single-grid.html">Blog</a></li>
                    <li><a href="contact.html">Update Logs</a></li>
                    <li><a href="contact.html">License</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-xl-2 col-md-3 col-12">
                <div className="tc-footer__widget about-links">
                  <h3 className="tc-footer__widget-title">About</h3>
                  <ul className="tc-footer__widget-links">
                    <li><a href="contact.html">Privacy Policy</a></li>
                    <li><a href="contact.html">Refund Policy</a></li>
                    <li><a href="contact.html">Community</a></li>
                    <li><a href="contact.html">Support</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-xl-3 col-md-6 col-12">
                <div className="tc-footer__widget contact">
                  <h3 className="tc-footer__widget-title">Get In Touch</h3>
                  <p className="tc-footer__widget-text">
                    Contact with us via out socials
                  </p>
                  <ul className="tc-footer__widget-social">
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_584_209)">
                            <path
                              d="M16.5 1.87512H1.49609C0.808594 1.87512 0.25 2.44153 0.25 3.13684V18.1134C0.25 18.8087 0.808594 19.3751 1.49609 19.3751H16.5C17.1875 19.3751 17.75 18.8087 17.75 18.1134V3.13684C17.75 2.44153 17.1875 1.87512 16.5 1.87512ZM5.53906 16.8751H2.94531V8.52356H5.54297V16.8751H5.53906ZM4.24219 7.38293C3.41016 7.38293 2.73828 6.70715 2.73828 5.87903C2.73828 5.0509 3.41016 4.37512 4.24219 4.37512C5.07031 4.37512 5.74609 5.0509 5.74609 5.87903C5.74609 6.71106 5.07422 7.38293 4.24219 7.38293ZM15.2617 16.8751H12.668V12.8126C12.668 11.8439 12.6484 10.5978 11.3203 10.5978C9.96875 10.5978 9.76172 11.6525 9.76172 12.7423V16.8751H7.16797V8.52356H9.65625V9.66418H9.69141C10.0391 9.00793 10.8867 8.31653 12.1484 8.31653C14.7734 8.31653 15.2617 10.047 15.2617 12.297V16.8751Z"
                              fill="white"
                              fillOpacity="0.5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_584_209">
                              <rect width="17.5" height="20" fill="white" fillOpacity="0.5" transform="translate(0.25 0.625122)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2543 21L10.7137 14.5283L5.02972 21H2.625L9.64691 13.0073L2.625 3H8.79896L13.0783 9.09956L18.44 3H20.8448L14.1487 10.6226L21.4281 21H15.2543ZM17.9321 19.1755H16.3132L6.06817 4.82456H7.68735L11.7906 10.5708L12.5001 11.5679L17.9321 19.1755Z"
                            fill="white"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="https://www.behance.net/" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.8125 11.2676C11.0547 10.6738 11.7031 9.77539 11.7031 8.37695C11.7031 5.61914 9.64844 4.94727 7.27734 4.94727H0.75V18.791H7.46094C9.97656 18.791 12.3398 17.584 12.3398 14.7715C12.3398 13.0332 11.5156 11.748 9.8125 11.2676ZM3.79297 7.31055H6.64844C7.74609 7.31055 8.73438 7.61914 8.73438 8.89258C8.73438 10.0684 7.96484 10.541 6.87891 10.541H3.79297V7.31055ZM7.04688 16.4395H3.79297V12.627H7.10938C8.44922 12.627 9.29688 13.1855 9.29688 14.6035C9.29688 16.002 8.28516 16.4395 7.04688 16.4395ZM21.0508 7.03711H15.4375V5.67383H21.0508V7.03711ZM23.25 13.9238C23.25 10.959 21.5156 8.48633 18.3711 8.48633C15.3164 8.48633 13.2422 10.7832 13.2422 13.791C13.2422 16.9121 15.207 19.0527 18.3711 19.0527C20.7656 19.0527 22.3164 17.9746 23.0625 15.6816H20.6328C20.3711 16.5371 19.293 16.9902 18.457 16.9902C16.8438 16.9902 15.9961 16.0449 15.9961 14.4395H23.2266C23.2383 14.2754 23.25 14.0996 23.25 13.9238ZM16 12.7051C16.0898 11.3887 16.9648 10.5645 18.2852 10.5645C19.668 10.5645 20.3633 11.377 20.4805 12.7051H16Z"
                            fill="white"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tc-footer__bottom">
            <h3 className="tc-footer__big-text">Hulo Agency</h3>
            <p className="tc-footer__copyright">© All Right Reserved by <a href="index.html">Hulo Agency</a> - 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};