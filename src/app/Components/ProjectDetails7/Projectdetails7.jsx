"use client";
import Slider from "react-slick";
import data from "../../Data/project9.json";
import Image from "next/image";

const ProjectDetails7 = () => {
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
              {/* --- Hero Image --- */}
              <div className="col-12">
                <div className="main-thumb">
                  <img
                    src="/assets/images/project/inverter-main.png"
                    alt="thumb"
                  />
                </div>
              </div>

              {/* --- Service Boxes --- */}
              <div className="col-xl-4 col-md-6">
                <div className="fancy-box style4">
                  <div className="content">
                    <h5>Dedicated Services</h5>
                    <p className="text">
                      We provide professional inverter and battery services
                      backed by expert technicians.
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
                    <h5>Quality Products</h5>
                    <p className="text">
                      We offer only trusted inverter & battery brands ensuring
                      long-lasting performance.
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
                    <h5>Expert Advice</h5>
                    <p className="text">
                      Get personalized recommendations and detailed guidance for
                      your power needs.
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

              {/* --- About Us Section --- */}
              <div className="single-desc">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">About Us</h3>

                    <p className="text1">
                      <strong>Sri Nitya Power Solutions</strong> specializes in
                      providing high-quality inverter and battery solutions for
                      both residential and commercial clients. Our dedicated
                      team ensures exceptional service from consultation to
                      installation and ongoing support.
                    </p>

                    <p className="text2">
                      We offer a wide selection of reliable products and
                      eco-friendly solutions to meet diverse energy needs.
                      Backed by expert technicians and quality materials, we
                      ensure efficient and safe installations.
                    </p>

                    <p className="text2">
                      Our team is committed to delivering top-tier power
                      solutions with a focus on customer satisfaction and
                      long-term value.
                    </p>
                  </div>
                </div>
              </div>

              {/* --- Why Us --- */}
              <div className="testimonial-wrap why-us">
                <div className="row gy-5">
                  <div className="col-xl-12">
                    <div className="testimonial-card">
                      <div className="tesimonial-content">
                        <div className="icon">
                          <svg width="53" height="38" fill="#7444FD">
                            <path d="M52.5 23.4375C52.5 31.207..." />
                          </svg>
                        </div>
                        <p className="text3">
                          “We provide reliable, cost-effective, and long-lasting
                          inverter & battery solutions you can trust.”
                        </p>
                      </div>
                      <div className="testimonial-author">
                        – Sri Nitya Power Solutions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Result Section --- */}
              <div className="single-desc2">
                <div className="row gy-5">
                  <div className="col-12">
                    <h3 className="single-desc-title">Why Choose Us?</h3>

                    <p className="text1">
                      We offer a wide range of high-quality inverter and battery
                      solutions that ensure reliable power backup for homes and
                      businesses.
                    </p>

                    <p className="text2">
                      <strong>Wide Selection:</strong> Batteries for every
                      need—electronics, vehicles, or renewable systems.
                      <br />
                      <strong>Quality Assurance:</strong> We partner with top
                      manufacturers for long-lasting performance.
                      <br />
                      <strong>Competitive Pricing:</strong> Best value on
                      premium products.
                      <br />
                      <strong>Fast Shipping:</strong> Quick delivery and
                      hassle-free service.
                    </p>
                  </div>
                </div>
              </div>

              {/* --- Slider Section --- */}
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

              {/* --- Contact Section --- */}
              <div className="contact-section mt-5">
                <h3 className="single-desc-title">Contact Us</h3>

                <p className="text1">
                  If you have any query or requirement, feel free to reach out
                  to us.
                </p>

                <div className="row gy-4">
                  <div className="col-xl-6">
                    <img
                      src="/assets/images/project/inverter-contact.png"
                      alt="contact"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-xl-6">
                    <h5>Our Office</h5>
                    <p>
                      8/2, FCI Main Road Near Maremma Temple Channsandra Circle,
                      Kadugodi, Bengaluru, Karnataka 560067
                    </p>

                    <h5>Call Us</h5>
                    <p>+91 9844123366</p>

                    <h5>Mail Us</h5>
                    <p>srinityapowersolutions@gmail.com</p>
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

export default ProjectDetails7;
