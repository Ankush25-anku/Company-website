"use client";
import Image from "next/image";
import Link from "next/link";

const Feature2 = () => {
  return (
    <section className="feature-section section-padding fix">
      <div className="container">
        <div className="feature-wrapper style1">
          <div className="row gy-5 gx-134">
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="feature-content">
                <div className="section-title">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Our Features{" "}
                    <Image
                      src="/assets/images/icon/fireIcon.svg"
                      alt="img"
                      width={16}
                      height={17}
                    />
                  </div>
                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    Features to enhance your business with ERP & Websites
                  </h2>
                  <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                    RC Techbox IT Solution offers ERP and website solutions to
                    streamline processes, manage data, and grow your business
                    efficiently.
                  </p>
                </div>
                <Link
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".2s"
                  href="/contact"
                >
                  Start Collaborator
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_91_29)">
                      <path
                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_91_29">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              <div className="feature-box-wrapper">
                <div className="feature-box style1 child1">
                  <div
                    className="feature-box-header wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="content">
                      <h5>Software Development</h5>
                      <p className="text">ERP & Website Solutions</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="feature-box-footer wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="content">
                      <span className="day">Today</span>
                      <span className="time">07:02 AM</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div className="feature-box style1 child2">
                  <div
                    className="feature-box-header wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="content">
                      <h5>Data & Analytics</h5>
                      <p className="text">Insightful ERP Reports</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="feature-box-footer wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="content">
                      <span className="day">Today</span>
                      <span className="time">07:02 AM</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="feature-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="feature-box-header">
                    <div className="content">
                      <h5>Dedicated Support</h5>
                      <p className="text">24/7 ERP & Website Assistance</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="feature-box-footer">
                    <div className="content">
                      <span className="day">Today</span>
                      <span className="time">07:02 AM</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
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
};

export default Feature2;
