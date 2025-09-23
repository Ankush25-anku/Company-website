import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto mb-5">
            <SectionTitle
              SubTitle="How We Work"
              Title="Our Process to Build ERP & Websites That Empower Your Business"
            ></SectionTitle>
          </div>

          <div className="row text-center">
            {/* Step 01 */}
            <div className="col-md-4 mb-4">
              <div
                className="work-process-box style1 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="step">STEP - 01</div>
                <div className="title">Requirement Analysis</div>
                <div className="text">
                  We understand your business needs and gather requirements to
                  design the right ERP or website solution.
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="col-md-4 mb-4">
              <div
                className="work-process-box style1 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="step">STEP - 02</div>
                <div className="title">Design & Development</div>
                <div className="text">
                  Our team builds scalable ERP systems and responsive websites
                  tailored to streamline your operations.
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="col-md-4 mb-4">
              <div
                className="work-process-box style1 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="step">STEP - 03</div>
                <div className="title">Implementation & Support</div>
                <div className="text">
                  We deploy the solution, ensure smooth integration, and provide
                  ongoing support for long-term success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
