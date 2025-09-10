"use client";
import { useEffect, useState } from "react";
import PricingCard from "../Card/PricingCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Pricing3 = () => {
  const [isActive, setIsActive] = useState("monthly");

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="pricing-section-3 section-padding fix"
      data-background="/assets/images/pricing-bg.jpg"
    >
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <div className="subtitle">
            Our Plans{" "}
            <Image
              src="/assets/images/icon/fireIcon.svg"
              alt="img"
              width={16}
              height={17}
            />
          </div>
          <h2 className="title">
            Choose the School ERP Plan That Suits Your Institution!
          </h2>
          <p className="text">
            Flexible and affordable plans designed to streamline school
            administration, academics, and communication.
          </p>
        </div>
        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li
                className={`nav-item ${isActive === "monthly" ? "active" : ""}`}
                onClick={() => setIsActive("monthly")}
                role="presentation"
              >
                <button
                  className="nav-link active"
                  id="pills-monthly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monthly"
                  type="button"
                  role="tab"
                  aria-controls="pills-monthly"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li
                className={`nav-item ${isActive === "yearly" ? "active" : ""}`}
                onClick={() => setIsActive("yearly")}
                role="presentation"
              >
                <button
                  className="nav-link"
                  id="pills-yearly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-yearly"
                  type="button"
                  role="tab"
                  aria-controls="pills-yearly"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
              id="pills-monthly"
              role="tabpanel"
              aria-labelledby="pills-monthly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$29.99"
                  monthly="Per Month"
                  content="Ideal for small schools starting with basic ERP features."
                  FeatureList={[
                    "Student & Staff Management",
                    "Class & Timetable Setup",
                    "Basic Attendance Tracking",
                    "Parent Notifications",
                    "1 Year Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$49.99"
                  monthly="Per Month"
                  content="Perfect for medium-sized schools needing advanced features."
                  FeatureList={[
                    "Everything in Basic",
                    "Exam & Grade Management",
                    "Advanced Attendance Reports",
                    "SMS & Email Notifications",
                    "2 Years Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan"
                  price="$79.99"
                  monthly="Per Month"
                  content="Designed for large institutions with comprehensive ERP requirements."
                  FeatureList={[
                    "Everything in Standard",
                    "Fee & Payment Management",
                    "Library & Transport Management",
                    "Custom Reports & Analytics",
                    "Unlimited Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>
              </div>
            </div>
            <div
              className={`tab-pane ${isActive === "yearly" ? "active" : ""}`}
              id="pills-yearly"
              role="tabpanel"
              aria-labelledby="pills-yearly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$299.99"
                  monthly="Per Year"
                  content="Ideal for small schools starting with basic ERP features."
                  FeatureList={[
                    "Student & Staff Management",
                    "Class & Timetable Setup",
                    "Basic Attendance Tracking",
                    "Parent Notifications",
                    "1 Year Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$499.99"
                  monthly="Per Year"
                  content="Perfect for medium-sized schools needing advanced features."
                  FeatureList={[
                    "Everything in Basic",
                    "Exam & Grade Management",
                    "Advanced Attendance Reports",
                    "SMS & Email Notifications",
                    "2 Years Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan"
                  price="$799.99"
                  monthly="Per Year"
                  content="Designed for large institutions with comprehensive ERP requirements."
                  FeatureList={[
                    "Everything in Standard",
                    "Fee & Payment Management",
                    "Library & Transport Management",
                    "Custom Reports & Analytics",
                    "Unlimited Support",
                  ]}
                  btnname="Get Started"
                  btnurl="/pricing"
                ></PricingCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing3;
