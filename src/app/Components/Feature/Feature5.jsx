import Image from "next/image";

const Feature5 = () => {
  return (
    <section className="feature-section fix section-padding pt-0">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="feature-box-items">
              <div className="icon">
                <Image
                  src="/assets/images/icon/01.svg"
                  alt="img"
                  width={40}
                  height={40}
                />
              </div>
              <div className="content">
                <h3>Manage Academics</h3>
                <p>
                  Easily create and organize classes, subjects, and schedules
                  for smooth academic operations.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="feature-box-items">
              <div className="icon">
                <Image
                  src="/assets/images/icon/02.svg"
                  alt="img"
                  width={40}
                  height={40}
                />
              </div>
              <div className="content">
                <h3>Track Attendance</h3>
                <p>
                  Monitor student and staff attendance efficiently with
                  automated tracking and reports.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="feature-box-items">
              <div className="icon">
                <Image
                  src="/assets/images/icon/03.svg"
                  alt="img"
                  width={40}
                  height={40}
                />
              </div>
              <div className="content">
                <h3>Streamline Communication</h3>
                <p>
                  Keep teachers, students, and parents connected through
                  announcements, notifications, and messages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature5;
