"use client";
import Slider from "react-slick";
import data from "../../Data/project8.json";
import Image from "next/image";

const ProjectDetails6 = () => {
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
                  <img src="/assets/images/project/meta2.png" alt="thumb" />
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Quality</h5>
                    <p className="text">
                      We deliver only the best through our trained staff,
                      advanced technology, and top-quality materials.
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
                    <h5>Service</h5>
                    <p className="text">
                      Our team goes beyond routine tasks, providing tailored
                      solutions that exceed customer expectations.
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
                    <h5>Value</h5>
                    <p className="text">
                      We combine efficiency, reliability, and eco-conscious
                      practices to provide long-lasting value.
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
              <div className="single-desc">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">About Us</h3>
                    <p className="text1">
                      <strong>Meta Biz Solutions & Services</strong> is an
                      organization built on the core values of{" "}
                      <strong>Quality, Service, and Value</strong>. Formerly
                      known as Ample Management Services since 2012, we have
                      evolved into a leading integrated facility management
                      company specializing in a wide range of soft and technical
                      products, services, and solutions.
                    </p>

                    <p className="text2">
                      Our highly trained and experienced staff, supported by
                      modern technology and quality materials, ensures every
                      project is executed with precision and efficiency. We are
                      committed to exceeding client expectations by delivering
                      tailored solutions with exceptional service. Our employees
                      not only bring expertise but also a deep understanding of
                      our clients’ unique needs.
                    </p>

                    <p className="text2">
                      Dedicated to sustainability, we integrate eco-friendly
                      practices throughout our operations. By choosing Meta Biz
                      Solutions & Services, you opt for reliable, high-quality,
                      and environmentally responsible facility management
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
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
                          “Reliable, eco-conscious, and value-driven – we build
                          trust with every solution we deliver.”
                        </p>
                      </div>
                      <div className="testimonial-author">
                        – Meta Biz Solutions & Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-desc2">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">The Result</h3>
                    <p className="text1">
                      By integrating innovation, technology, and sustainability,
                      Meta Biz Solutions & Services ensures every project
                      delivers value, reliability, and environmental
                      responsibility.
                    </p>

                    <p className="text2">
                      Our showcase website has been developed using{" "}
                      <strong>
                        Next.js, React, HTML, CSS, JavaScript, and Bootstrap
                      </strong>
                      , ensuring a seamless, fast, and engaging experience for
                      our clients and partners.
                    </p>
                  </div>
                </div>
              </div>

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

export default ProjectDetails6;
