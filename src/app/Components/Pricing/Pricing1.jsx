"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="pricing-section section-padding pt-0 fix">
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
          <h2 className="title">Choose the Plan That Fits Your Business</h2>
          <p className="text">
            RC Techbox IT Solution provides ERP and website plans designed to
            streamline your operations and enhance productivity.
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
                  content="ERP & website plan for small teams And Solutions."
                  FeatureList={[
                    "7 days trial",
                    "Up to 5 users",
                    "1GB cloud storage",
                    "Manage 50 tasks/week",
                    "1 Year updates",
                  ]}
                  btnname="Get Free Plan"
                  btnurl="/pricing"
                />

                <PricingCard
                  name="Standard Plan"
                  price="$19.99"
                  monthly="Per Month"
                  content="Perfect for growing businesses with more features."
                  FeatureList={[
                    "14 days trial",
                    "Up to 10 users",
                    "5GB cloud storage",
                    "Manage 100 tasks/week",
                    "1 Year updates",
                  ]}
                  btnname="Get Plan"
                  btnurl="/pricing"
                />

                <PricingCard
                  name="Premium Plan"
                  price="$24.99"
                  monthly="Per Month"
                  content="Full-featured ERP and website solution for enterprises."
                  FeatureList={[
                    "30 days trial",
                    "Unlimited users",
                    "20GB cloud storage",
                    "Unlimited tasks",
                    "2 Years updates",
                  ]}
                  btnname="Get Premium"
                  btnurl="/pricing"
                />
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
                  monthly="Per Year"
                  content="ERP & website plan for small teams And Solutions."
                  FeatureList={[
                    "7 days trial",
                    "Up to 5 users",
                    "1GB cloud storage",
                    "Manage 50 tasks/week",
                    "1 Year updates",
                  ]}
                  btnname="Get Free Plan"
                  btnurl="/pricing"
                />

                <PricingCard
                  name="Standard Plan"
                  price="$64.99"
                  monthly="Per Year"
                  content="Perfect for growing businesses with more features."
                  FeatureList={[
                    "14 days trial",
                    "Up to 10 users",
                    "5GB cloud storage",
                    "Manage 100 tasks/week",
                    "1 Year updates",
                  ]}
                  btnname="Get Plan"
                  btnurl="/pricing"
                />

                <PricingCard
                  name="Premium Plan"
                  price="$84.99"
                  monthly="Per Year"
                  content="Full-featured ERP and website solution for enterprises."
                  FeatureList={[
                    "30 days trial",
                    "Unlimited users",
                    "20GB cloud storage",
                    "Unlimited tasks",
                    "2 Years updates",
                  ]}
                  btnname="Get Premium"
                  btnurl="/pricing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
