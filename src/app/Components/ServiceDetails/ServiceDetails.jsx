import Image from "next/image";

const ServiceDetails = () => {
  return (
    <div className="service-details-section">
      <div className="service-details-container-wrapper section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            {/* MAIN BANNER IMAGE */}
            <div
              className="main-thumb img-custom-anim-right wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src="/assets/images/services/servicesDetailsThumb1_1.jpg"
                alt="img"
                width={1410}
                height={646}
              />
            </div>

            {/* TITLE */}
            <h2 className="title wow fadeInUp" data-wow-delay=".3s">
              Leading ERP, Web & Mobile App Development Company
            </h2>

            {/* TAGS */}
            <div className="tagcloud">
              <div className="tag">
                <a href="#">ERP Solutions</a>
              </div>
              <div className="tag">
                <a href="#">Web Development</a>
              </div>
              <div className="tag">
                <a href="#">Business Automation</a>
              </div>
              <div className="tag">
                <a href="#">Digital Transformation</a>
              </div>
            </div>

            {/* SERVICE OVERVIEW */}
            <div className="details-box1">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Service Overview
              </h3>

              <div className="row gy-3">
                <div className="col-xl-7">
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    RC ERP TECHNOLOGIES PVT LTD specializes in creating robust
                    ERP platforms, modern web applications, and custom digital
                    solutions tailored to your business needs. Our systems are
                    designed to streamline operations, enhance workflow
                    efficiency, and support data-driven decision-making. We work
                    closely with organizations across industries to build
                    scalable, secure, and high-performance digital solutions.
                  </p>
                </div>

                <div className="col-xl-5">
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    Whether you're looking to automate business processes,
                    develop a custom CRM, or build a responsive website or
                    mobile app, our experienced development team ensures
                    seamless implementation and future-ready technology
                    solutions that help your business grow faster.
                  </p>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="details-box2">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Benefits With Our Service
              </h3>

              <div className="row gy-3">
                <div className="col-xl-6">
                  <div
                    className="feature-wrapper wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <ul className="feature">
                      <li>
                        Custom-built ERP systems tailored for your business
                      </li>
                      <li>
                        Enhanced workflow automation & business optimization
                      </li>
                      <li>Fast, secure, and scalable digital platforms</li>
                    </ul>

                    <ul className="feature">
                      <li>Modern UI/UX for websites & mobile apps</li>
                      <li>
                        Improved operational efficiency across departments
                      </li>
                      <li>Advanced reporting & real-time business insights</li>
                    </ul>
                  </div>
                </div>

                {/* PROGRESS BARS */}
                <div className="col-xl-6">
                  <div className="progress-wrap">
                    <div className="progress-meta">
                      <div className="title">ERP Development</div>
                      <div className="percentage">95%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar"></div>
                    </div>
                  </div>

                  <div className="progress-wrap mb-0">
                    <div className="progress-meta">
                      <div className="title">Business Automation</div>
                      <div className="percentage">95%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADDITIONAL IMAGES */}
              <div className="thumb-wrapper">
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_2.jpg"
                        alt="img"
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_3.jpg"
                        alt="img"
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                At RC ERP TECHNOLOGIES PVT LTD, we deliver advanced ERP systems
                designed to simplify complex business processes. Our platforms
                help companies manage sales, finance, HR, inventory, attendance,
                reporting, and workflow automation with ease. We ensure smooth
                integration, scalability, and long-term reliability for
                enterprises of all sizes.
              </p>

              <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                With a dedicated team of experienced developers, designers, and
                consultants, we build digital solutions that empower businesses
                to grow faster, operate efficiently, and stay ahead in a
                competitive marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
