"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // ne déclenche qu’une fois
          }
        });
      },
      { threshold: 0.2 } // déclenche quand 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`tc-video ${isVisible ? "slide-up" : ""}`}
    >
      <div className="container">
        <div
          className="tc-video__inner bg-img"
          style={{
            backgroundImage: "url('assets/images/video/video-bg.png')",
          }}
        >
          <div className="tc-video__content">
            <img
              className="text-bg"
              src="assets/images/video/text-bg.png"
              alt="text-bg"
            />
            <h3 className="tc-video-title">
              <span>
                <svg
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_505_2455)">
                    <path
                      d="M0.212891 7.24996C0.212891 3.38923 2.97398 1.09287 4.69653 0.0346882C4.91471 -0.0994936 5.15034 0.179779 4.98235 0.375052C4.30437 1.16119 3.76838 2.05932 3.39834 3.02923C4.28302 2.77701 5.22459 2.80917 6.08999 3.12115C6.9554 3.43313 7.7009 4.00916 8.22114 4.76785C8.74138 5.52655 9.01006 6.42954 8.98922 7.34923C8.96837 8.26892 8.65906 9.15881 8.10498 9.89315C7.5509 10.6275 6.78007 11.1692 5.90142 11.4416C5.02277 11.7141 4.08071 11.7035 3.20837 11.4115C2.33603 11.1195 1.57751 10.5607 1.04 9.81412C0.502487 9.06756 0.213156 8.16989 0.212891 7.24996ZM9.98198 7.24996C9.98198 3.38923 12.7431 1.09287 14.4656 0.0357791C14.6838 -0.0984027 14.9194 0.179779 14.7525 0.373961C14.0737 1.16026 13.5369 2.05878 13.1663 3.02923C14.051 2.77701 14.9926 2.80917 15.858 3.12115C16.7234 3.43313 17.4689 4.00916 17.9891 4.76785C18.5094 5.52655 18.7781 6.42954 18.7572 7.34923C18.7364 8.26892 18.4271 9.15881 17.873 9.89315C17.3189 10.6275 16.5481 11.1692 15.6694 11.4416C14.7908 11.7141 13.8487 11.7035 12.9764 11.4115C12.104 11.1195 11.3455 10.5607 10.808 9.81412C10.2705 9.06756 9.98116 8.17098 9.98089 7.25105L9.98198 7.24996Z"
                      fill="#1A55F9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_505_2455">
                      <rect
                        width="18.5455"
                        height="12"
                        fill="white"
                        transform="translate(0.212891)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Hulo created
              </span>
              something better than I ever <br />
              could have imagined
            </h3>
          </div>

          <div className="tc-video-action">
            <a
              href="https://www.youtube.com/watch?v=gyGsPlt06bo"
              className="tc-video-btn popup-video"
            >
              <img
                src="assets/images/video/video-btn-img.png"
                alt="video-btn-img"
              />
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_506_3001)">
                  <path
                    d="M12.8008 8.8252L0.800781 1.8252V15.8252L12.8008 8.8252Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_506_3001">
                    <rect
                      width="12"
                      height="16"
                      fill="white"
                      transform="translate(0.800781 0.825195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div className="tc-video-btn__info">
              <h5>Hear from Andy</h5>
              <p>Co-Founder of Hulo Agency</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Avant animation */
        .tc-video {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        /* Quand visible */
        .tc-video.slide-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
