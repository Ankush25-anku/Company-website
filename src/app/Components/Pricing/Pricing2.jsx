"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing2 = () => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="pricing-section fix">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <div className="subtitle">
            Our Pricing{" "}
            <Image
              src="/assets/images/icon/fireIcon.svg"
              alt="img"
              width={16}
              height={17}
            />
          </div>
          <h2 className="title">Choose The School ERP Plan That Fits You</h2>
          <p className="text">
            Flexible and affordable plans designed for schools of all sizes.
            Whether you're a small institution or a large campus, we have the
            right solution.
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
            {/* Monthly Plans */}
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
              id="pills-monthly"
              role="tabpanel"
              aria-labelledby="pills-monthly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$14.99"
                  monthly="Per Month"
                  content="Perfect for small schools just starting with digital management."
                  FeatureList={[
                    "Student & Teacher Profiles",
                    "Attendance Tracking",
                    "Fee Management (Basic)",
                    "Report Generation",
                    "Email Support",
                  ]}
                  btnname="Get Your Free Plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$19.99"
                  monthly="Per Month"
                  content="Ideal for medium-sized schools looking for advanced features."
                  FeatureList={[
                    "All Basic Plan Features",
                    "Exam & Grade Management",
                    "Parent Communication Portal",
                    "Library & Inventory Tracking",
                    "Priority Support",
                  ]}
                  btnname="Get Your Free Plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan"
                  price="$24.99"
                  monthly="Per Month"
                  content="Best for large schools and institutions with multiple branches."
                  FeatureList={[
                    "All Standard Plan Features",
                    "Multi-Branch Management",
                    "Custom Reports & Analytics",
                    "Dedicated Account Manager",
                    "24/7 Premium Support",
                  ]}
                  btnname="Get Your Free Plan"
                  btnurl="/pricing"
                ></PricingCard>
              </div>
            </div>
            {/* Yearly Plans */}
            <div
              className={`tab-pane ${isActive === "yearly" ? "active" : ""}`}
              id="pills-yearly"
              role="tabpanel"
              aria-labelledby="pills-yearly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$34.99"
                  monthly="Per Month"
                  content="Perfect for small schools opting for yearly savings."
                  FeatureList={[
                    "Student & Teacher Profiles",
                    "Attendance Tracking",
                    "Fee Management (Basic)",
                    "Report Generation",
                    "Email Support",
                  ]}
                  btnname="Get Your Free Plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$64.99"
                  monthly="Per Month"
                  content="Ideal for medium schools with advanced ERP needs."
                  FeatureList={[
                    "All Basic Plan Features",
                    "Exam & Grade Management",
                    "Parent Communication Portal",
                    "Library & Inventory Tracking",
                    "Priority Support",
                  ]}
                  btnname="Get Your Free Plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan"
                  price="$84.99"
                  monthly="Per Month"
                  content="Best value for large schools and institutions."
                  FeatureList={[
                    "All Standard Plan Features",
                    "Multi-Branch Management",
                    "Custom Reports & Analytics",
                    "Dedicated Account Manager",
                    "24/7 Premium Support",
                  ]}
                  btnname="Get Your Free Plan"
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

export default Pricing2;
