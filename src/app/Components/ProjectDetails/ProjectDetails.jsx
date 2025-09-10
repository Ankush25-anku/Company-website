"use client";
import Slider from "react-slick";
import data from "../../Data/project2.json";
import Image from "next/image";

const ProjectDetails = () => {
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
                  <img
                    src="/assets/images/project/projecDetailstThumb1_1.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Perfect Planning</h5>
                    <p className="text">
                      Every project is executed with precision, from initial
                      concept to final delivery.
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
                    <h5>Professional Workers</h5>
                    <p className="text">
                      Our skilled workforce brings experience, dedication, and
                      attention to detail.
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
                    <h5>Commitment to Quality</h5>
                    <p className="text">
                      We use premium materials and modern methods to ensure
                      long-lasting results.
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
                    <h3 className="single-desc-title">Project Description</h3>
                    <p className="text1">
                      Welcome to <strong>Sri Balaji Ecstatic Infra LLP</strong>,
                      where innovation meets craftsmanship and excellence is our
                      standard. Since our foundation in 2007, we have been a
                      trusted name in the construction industry, delivering
                      projects that combine durability, safety, and aesthetic
                      appeal.
                    </p>

                    <p className="text2">
                      Our journey began with a vision to build more than just
                      structures – we aim to create lasting relationships
                      founded on trust and respect. Over the years, we have
                      consistently delivered outstanding projects, earning the
                      confidence of our clients and recognition within the
                      industry.
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
                          “Building trust brick by brick – our projects stand as
                          a symbol of quality, safety, and reliability.”
                        </p>
                      </div>
                      <div className="testimonial-author">
                        – Sri Balaji Ecstatic Infra LLP
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
                      Each project we deliver reflects our commitment to
                      precision, planning, and sustainability. From roads and
                      highways to residential and commercial developments, we
                      ensure every outcome enhances communities and supports
                      future growth.
                    </p>

                    <p className="text2">
                      Beyond construction, we also integrate modern technology
                      into our workflows. Our project showcase website has been
                      developed using{" "}
                      <strong>Next.js, React, HTML, CSS, and JavaScript</strong>
                      , ensuring a seamless, fast, and engaging user experience
                      for our clients and partners.
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

export default ProjectDetails;
