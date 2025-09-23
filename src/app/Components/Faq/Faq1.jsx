"use client";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { useState, useEffect } from "react";
import data from "../../Data/faq1.json";
import Image from "next/image";

const Faq1 = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const FaqContent = {
    Content:
      "RC Techbox IT Solution provides ERP and website solutions that streamline business processes, improve productivity, and enhance collaboration across teams.",
    img1: "/assets/images/faq/faqThumb1_2.webp",
    img2: "/assets/images/faq/faqThumb1_1.webp",
  };

  return (
    <section className="faq-section section-padding fix">
      <div className="container">
        <div className="faq-wrapper style1">
          <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
            <div className="col-xl-6">
              <div className="faq-content style1">
                <div className="section-title">
                  <SectionTitle
                    SubTitle="FAQs"
                    Title="Frequently Ask Questions"
                  />
                  <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                    {FaqContent.Content}
                  </p>
                </div>
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {data.slice(0, 3).map((item, index) => (
                      // Updated the FAQ titles and descriptions here
                      <div
                        key={index}
                        className={`accordion-item mb-3 wow fadeInUp ${
                          index === openItemIndex ? "active" : ""
                        }`}
                        data-wow-delay=".3s"
                      >
                        <h5
                          onClick={() => handleItemClick(index)}
                          className="accordion-header"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                            aria-expanded="true"
                            aria-controls="faq1"
                          >
                            {item.title ===
                            "Looking for a solution to boost productivity?"
                              ? "How can RC Techbox boost my business productivity?"
                              : item.title ===
                                "Need an easy way to manage your projects?"
                              ? "Can I manage projects easily with RC Techbox?"
                              : item.title ===
                                "Seeking a user-friendly solution for your team?"
                              ? "Is RC Techbox easy for my team to use?"
                              : item.title}
                          </button>
                        </h5>
                        <div
                          ref={accordionContentRef}
                          id="faq1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordion"
                        >
                          <div className="accordion-body">
                            {item.desc ===
                            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly"
                              ? "RC Techbox offers intuitive ERP and website solutions to simplify your workflows, manage data efficiently, and enhance team collaboration."
                              : item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-thumb">
                <Image
                  className="main-thumb wow fadeInUp"
                  src={FaqContent.img1}
                  alt="img"
                  width={791}
                  height={679}
                />
                <div className="absolute-thumb float-bob-x">
                  <Image
                    src={FaqContent.img2}
                    alt="img"
                    width={236}
                    height={474}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;
