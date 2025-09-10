import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
  return (
    <section className="blog-section section-padding fix">
      <div className="container">
        <div className="blog-wrapper style1">
          <div className="section-title text-center mxw-685 mx-auto">
            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
              School ERP Blog{" "}
              <Image
                src="/assets/images/icon/fireIcon.svg"
                alt="img"
                width={16}
                height={17}
              />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              Insights, Updates, and Best Practices for Modern Schools
            </h2>
          </div>
          <div className="row gy-5">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-card style1 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <Image
                    src="/assets/images/blog/blogThumb1_1.webp"
                    alt="img"
                    width={326}
                    height={219}
                  />
                </div>
                <div className="body">
                  <div className="tag-meta">
                    <Image
                      src="/assets/images/icon/FolderIcon.svg"
                      alt="img"
                      width={16}
                      height={12}
                    />
                    School Management
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      How ERP Simplifies Attendance & Exam Management
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <div className="item child1">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/userIcon.svg"
                          alt="img"
                          width={14}
                          height={16}
                        />
                      </span>
                      <span className="text">By Admin</span>
                    </div>
                    <div className="item">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/calendar.svg"
                          alt="img"
                          width={15}
                          height={16}
                        />
                      </span>
                      <span className="text">Sep 30, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="blog-card style1 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="thumb">
                  <Image
                    src="/assets/images/blog/blogThumb1_2.webp"
                    alt="img"
                    width={326}
                    height={219}
                  />
                </div>
                <div className="body">
                  <div className="tag-meta">
                    <Image
                      src="/assets/images/icon/FolderIcon.svg"
                      alt="img"
                      width={16}
                      height={12}
                    />
                    Digital Learning
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      Benefits of Online Portals for Parents & Students
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <div className="item child1">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/userIcon.svg"
                          alt="img"
                          width={14}
                          height={16}
                        />
                      </span>
                      <span className="text">By Admin</span>
                    </div>
                    <div className="item">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/calendar.svg"
                          alt="img"
                          width={15}
                          height={16}
                        />
                      </span>
                      <span className="text">Sep 30, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="blog-card style1 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="thumb">
                  <Image
                    src="/assets/images/blog/blogThumb1_1.webp"
                    alt="img"
                    width={326}
                    height={219}
                  />
                </div>
                <div className="body">
                  <div className="tag-meta">
                    <Image
                      src="/assets/images/icon/FolderIcon.svg"
                      alt="img"
                      width={16}
                      height={12}
                    />
                    Education Technology
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      Why Every School Needs an Integrated ERP Solution
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <div className="item child1">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/userIcon.svg"
                          alt="img"
                          width={14}
                          height={16}
                        />
                      </span>
                      <span className="text">By Admin</span>
                    </div>
                    <div className="item">
                      <span className="icon">
                        <Image
                          src="/assets/images/icon/calendar.svg"
                          alt="img"
                          width={15}
                          height={16}
                        />
                      </span>
                      <span className="text">Oct 05, 2024</span>
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

export default Blog1;
