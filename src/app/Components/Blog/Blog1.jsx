import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {
  return (
    <section className="blog-section section-padding fix">
      <div className="container">
        <div className="blog-wrapper style1">
          <div className="section-title text-center mxw-685 mx-auto">
            <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
              RC Techbox Blog{" "}
              <Image
                src="/assets/images/icon/fireIcon.svg"
                alt="img"
                width={16}
                height={17}
              />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              Latest Insights on ERP & Website Solutions for Businesses
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
                    ERP Solutions
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      How ERP Boosts Efficiency in Businesses
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
                      <span className="text">By RC Techbox</span>
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
                      <span className="text">Sep 30, 2025</span>
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
                    Website Development
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      Why a Modern Website is Essential for Business Growth
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
                      <span className="text">By RC Techbox</span>
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
                      <span className="text">Oct 05, 2025</span>
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
                    ERP & Web Tips
                  </div>
                  <h3>
                    <Link href="/blog/blog-details">
                      Top Tips for ERP Implementation
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
                      <span className="text">By RC Techbox</span>
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
                      <span className="text">Oct 10, 2025</span>
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
