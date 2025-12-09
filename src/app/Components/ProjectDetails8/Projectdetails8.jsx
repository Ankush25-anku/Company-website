"use client";
import Slider from "react-slick";
import data from "../../Data/project15.json";
import Image from "next/image";

const ProjectDetails8 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="project-details-section section-padding fix">
      <div className="project-details-container-wrapper">
        <div className="container">
          <div className="project-details-wapper">
            <div className="row">
              {/* Main Hero Image */}
              <div className="col-12">
                <div className="main-thumb">
                  <img
                    src="/assets/images/project/jyothsna-main.png"
                    alt="Jyothsna & Associates"
                  />
                </div>
              </div>

              {/* Feature Boxes */}
              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Professional Expertise</h5>
                    <p className="text">
                      More than 13 years of extensive experience in Accounting,
                      Audit, Taxation, and Corporate Compliances.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_2.svg"
                      alt="icon"
                      width={49}
                      height={49}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Trusted Compliance Support</h5>
                    <p className="text">
                      Expertise in Direct & Indirect Taxation, Secretarial
                      Compliance, PF, ESI, and Regulatory Filings.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_1.svg"
                      alt="icon"
                      width={37}
                      height={54}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Diverse Audit Experience</h5>
                    <p className="text">
                      Experienced in Statutory, Tax, Internal, Special &
                      Concurrent Audits of Companies, LLPs, Trusts, Banks, and
                      PSUs.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_3.svg"
                      alt="icon"
                      width={50}
                      height={42}
                    />
                  </div>
                </div>
              </div>

              {/* About Us Section */}
              <div className="single-desc">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">About Us</h3>

                    <p className="text1">
                      We, <strong>Jyothsna & Associates</strong>, Chartered
                      Accountants firm located at Seegehalli near Kadugodi,
                      Bengaluru, Karnataka, were established by
                      <strong> CA Jyothsna B</strong>, Fellow Chartered
                      Accountant with over 13 years of experience.
                    </p>

                    <p className="text2">
                      We specialize in providing comprehensive services in
                      Accounting, Statutory Audit, Tax Audit, Internal Audit,
                      Direct & Indirect Tax Consultancy, Payroll Processing, and
                      Secretarial Compliance.
                    </p>

                    <p className="text2">
                      Our firm has gained extensive experience working with
                      Companies, LLPs, Trusts, Societies, PSUs, and various
                      Private & Public Limited Companies. Additionally, we have
                      vast experience in handling Concurrent, Special &
                      Statutory Audits of Banks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial / Whats New */}
              <div className="testimonial-wrap">
                <div className="row gy-5">
                  <div className="col-xl-12">
                    <div className="testimonial-card">
                      <div className="tesimonial-content">
                        <div className="icon">
                          <svg
                            width="53"
                            height="38"
                            viewBox="0 0 53 38"
                            fill="none"
                          >
                            <path
                              d="M52.5 23.4375C52.5 31.207..."
                              fill="#7444FD"
                            />
                          </svg>
                        </div>
                        <p className="text3">
                          “Our editors select the most important updates and
                          share them with you through What's New.”
                        </p>
                      </div>
                      <div className="testimonial-author">
                        – Jyothsna & Associates
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event & Career Section */}
              <div className="single-desc2">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">What’s New</h3>

                    <p className="text1">
                      Our editors highlight key updates and important regulatory
                      notifications to help clients stay informed.
                    </p>

                    <h3 className="single-desc-title mt-4">Event Calendar</h3>

                    <p className="text2">
                      Summary Return cum Payment of Tax for Aug by taxpayers
                      with turnover up to 5 crores in Chhattisgarh, Madhya
                      Pradesh and other states.
                    </p>

                    <h3 className="single-desc-title mt-4">Career</h3>

                    <p className="text2">
                      We nurture talent, encourage leadership, and provide
                      growth-oriented opportunities for young professionals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="single-desc2">
                <h3 className="single-desc-title">Our Services</h3>

                <p className="text2">
                  • Management Services • Direct Tax Service • Indirect Tax
                  Service • Accounting Services • Payroll Processing
                </p>

                <p className="text1">
                  <strong>Management Services:</strong>
                  <br />
                  Incorporation of companies under Companies Act 2013, and
                  Registrations under Karnataka VAT, Profession Tax, Shops &
                  Establishments Act, PF, ESI, Service Tax, Central Excise and
                  MSME Registration.
                </p>
              </div>

              {/* Slider */}
              <div className="slider-area projectSliderThree">
                <div className="swiper gt-slider" id="projectSliderThree">
                  <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                      {data.map((item, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="project-thumb">
                            <img src={item.img} alt="thumb" />
                          </div>
                        </div>
                      ))}
                    </Slider>
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

export default ProjectDetails8;
