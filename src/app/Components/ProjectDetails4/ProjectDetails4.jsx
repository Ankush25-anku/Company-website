"use client";
import Slider from "react-slick";
import data from "../../Data/project6.json";
import Image from "next/image";

const ProjectDetails4 = () => {
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
              <div className="col-12">
                <div className="main-thumb">
                  <img src="/assets/images/project/law2.png" alt="thumb" />
                </div>
              </div>

              {/* Highlights Section */}
              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Innovative Legal Solutions</h5>
                    <p className="text">
                      L&amp;C combines Advocates and Company Secretaries to
                      provide comprehensive legal strategies across diverse
                      sectors.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_1.svg"
                      alt="img"
                      width={49}
                      height={49}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Corporate Expertise</h5>
                    <p className="text">
                      From company formation to mergers, insolvency, and data
                      privacy compliance, we ensure effective corporate legal
                      solutions.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_2.svg"
                      alt="img"
                      width={37}
                      height={54}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Commitment to Justice</h5>
                    <p className="text">
                      L&amp;C also undertakes pro bono cases in exceptional
                      circumstances, reinforcing our commitment to social
                      justice.
                    </p>
                  </div>
                  <div className="icon-box style2">
                    <Image
                      src="/assets/images/icon/projectDetailsIcon1_3.svg"
                      alt="img"
                      width={50}
                      height={42}
                    />
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="single-desc">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">About Lawsmith & Co</h3>
                    <p className="text1">
                      <strong>Lawsmith &amp; Co (L&amp;C)</strong> is a boutique
                      law firm offering a unique blend of advocates and company
                      secretaries. We provide tailored legal solutions to a wide
                      range of clients including private individuals,
                      corporations, startups, NGOs, educational institutions,
                      industries, and more.
                    </p>

                    <p className="text2">
                      Our services span corporate formation, data privacy
                      compliance, IT audits, NCLT litigation, due diligence,
                      legal opinions, startup compliances, mergers and
                      acquisitions, insolvency, share capital restructuring,
                      incorporation, and drafting MOA, AOA, and MOUs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="testimonial-wrap">
                <div className="row gy-5">
                  <div className="col-xl-12">
                    <div className="testimonial-card">
                      <div className="tesimonial-content">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="53"
                            height="38"
                            viewBox="0 0 53 38"
                            fill="none"
                          >
                            <path
                              d="M52.5 23.4375C52.5 31.207 46.207 37.5 38.4375 37.5H37.5C35.4258 37.5 33.75 35.8242 33.75 33.75C33.75 31.6758 35.4258 30 37.5 30H38.4375C42.0586 30 45 27.0586 45 23.4375V22.5H37.5C33.3633 22.5 30 19.1367 30 15V7.5C30 3.36328 33.3633 0 37.5 0H45C49.1367 0 52.5 3.36328 52.5 7.5V11.25V15V23.4375ZM22.5 23.4375C22.5 31.207 16.207 37.5 8.4375 37.5H7.5C5.42578 37.5 3.75 35.8242 3.75 33.75C3.75 31.6758 5.42578 30 7.5 30H8.4375C12.0586 30 15 27.0586 15 23.4375V22.5H7.5C3.36328 22.5 0 19.1367 0 15V7.5C0 3.36328 3.36328 0 7.5 0H15C19.1367 0 22.5 3.36328 22.5 7.5V11.25V15V23.4375Z"
                              fill="#7444FD"
                            />
                          </svg>
                        </div>
                        <p className="text3">
                          “Justice with innovation – providing strategic legal
                          solutions for individuals and businesses alike.”
                        </p>
                      </div>
                      <div className="testimonial-author">
                        – Lawsmith &amp; Co
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Section */}
              <div className="single-desc2">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">The Result</h3>
                    <p className="text1">
                      <strong>Abhishek M.R</strong>, founder of Lawsmith &amp;
                      Co, has been practicing law since 2016 with expertise in
                      both civil and criminal matters. He develops
                      result-oriented strategies for effective and timely
                      resolutions.
                    </p>

                    <p className="text2">
                      He holds a B.B.A.LL.B from JSS Law College, Mysuru, a PG
                      Diploma in Cyber Law from NLU Hyderabad, and a Master of
                      Business Law from NLSIU Bangalore. Abhishek is empanelled
                      Advocate for State Bank of India and Mysore Urban
                      Development Authority.
                      <br />
                      The website is built with{" "}
                      <strong>
                        React, Next.js, HTML, CSS, JavaScript, and Bootstrap
                      </strong>{" "}
                      to deliver a professional and user-friendly experience.
                    </p>
                  </div>
                </div>
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

export default ProjectDetails4;
