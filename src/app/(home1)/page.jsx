import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
// import Brand1 from "../Components/Brand/Brand1";
import About1 from "../Components/About/About1";
import HowWork from "../Components/HowWork/HowWork";
import Choose1 from "../Components/Choose/Choose1";
import Feature1 from "../Components/Feature/Feature1";
// import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Testimonial from "../Components/Testimonial/Testimonial";
import Feature2 from "../Components/Feature/Feature2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Cta1 from "../Components/Cta/Cta1";
import Blog1 from "../Components/Blog/Blog1";
import Cta2 from "../Components/Cta/Cta2";
import Services1 from "../Components/Services/Services1";

const page = () => {
  return (
    <div>
      <HeroBanner1
        subtitle="<span>Digital Solutions!</span>Grow Your Business Online"
        title="We Build Stunning Websites, E-Commerce Stores & Mobile Apps"
        content="Helping businesses grow online with cutting-edge digital solutions. From custom websites and online stores to mobile apps, we create powerful digital experiences that drive results."
        btnname="Get a Free Quote"
        btnurl="/contact"
        btntwo="View Our Work"
        btn2url="/portfolio"
        cusimg="/assets/images/intro/introProfileThumb1_1.png"
        cusnumber="500+"
        cuscontent="Projects Delivered"
        rating="5.0/5"
        ratingcon="Client Satisfaction"
        img="/assets/images/intro/thumb1 (1).png"
      ></HeroBanner1>
      {/* <Brand1></Brand1> */}

      <div style={{ height: "60px" }}></div>
      <About1
        img1="/assets/images/about/aboutThumb1_1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="About RC TechBox"
        title="We Build Stunning Websites, E-Commerce Stores & Mobile Apps"
        content="At RC TechBox, we help businesses grow online with cutting-edge digital solutions. From custom websites and online stores to mobile apps, our team creates powerful digital experiences designed to engage customers and deliver measurable results. Our mission is simple: to empower brands with technology that drives growth and innovation."
        FeatureList={[
          "Custom website design with responsive layouts.",
          "ERP solutions and websites building ERP.",
          "Mobile apps for iOS, Android & cross-platform development.",
        ]}
        btnname="Discover More"
        btnurl="/about"
      ></About1>
      <Cta2></Cta2>
      <Services1></Services1>
      <HowWork></HowWork>
      <Choose1
        subtitle="App Advantage"
        title="Get Benefit By Using Trending Apps"
        content="At RC Techbox IT Solution, we specialize in building powerful ERP systems and modern websites tailored to your business needs. Our solutions streamline operations, enhance productivity, and ensure a strong digital presence."
        FeatureList={["Friendly Design", "SEO Optimized"]}
        FeatureList2={["Cloud Storage", "Strong Security"]}
        btnname="Download App"
        btnurl="/about"
      />

      <Feature1></Feature1>
      {/* <Counter1></Counter1> */}
      <Faq1></Faq1>
      <Testimonial></Testimonial>
      <Feature2></Feature2>
      <Pricing1></Pricing1>
      {/* <Cta1
        subtitle="Our App"
        title="Get the RC Techbox ERP & Website App Today!"
        content="Streamline your business operations with our ERP and website solutions. Start your free trial and see the difference it makes."
        btnurl1="https://play.google.com/store"
        btnurl2="https://www.apple.com/store"
        img="/assets/images/cta/ctaThumb1_1.webp"
      /> */}

      {/* <Blog1></Blog1> */}
    </div>
  );
};

export default page;
