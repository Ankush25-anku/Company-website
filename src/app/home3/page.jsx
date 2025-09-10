import React from "react";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import Feature4 from "../Components/Feature/Feature4";
import Feature5 from "../Components/Feature/Feature5";
import Feature6 from "../Components/Feature/Feature6";
import HowWork3 from "../Components/HowWork/HowWork3";
import Pricing3 from "../Components/Pricing/Pricing3";
import Counter1 from "../Components/Counter/Counter1";
import About3 from "../Components/About/About3";
import Brand3 from "../Components/Brand/Brand3";
import Testimonial3 from "../Components/Testimonial/Testimonial3";
import Blog1 from "../Components/Blog/Blog1";

const page = () => {
  return (
    <div>
      <HeroBanner3
        bgimg="/assets/images/hero/hero-bg.jpg"
        subtitle="Transforming School Management"
        title="Manage, Track, and Streamline <span>School Operations</span>"
        content="Our School ERP simplifies administration, attendance, and academics, ensuring teachers, students, and parents stay connected efficiently."
        btnname="Get Started Now"
        btnurl="/contact"
        btnname2="Learn More"
        btnurl2="/about"
        img1="/assets/images/hero/01.png"
        img2="/assets/images/hero/mobile.png"
      ></HeroBanner3>
      <Feature4
        img="/assets/images/about/01.png"
        subtitle="Our Features"
        title="Empowering Schools with Smart Solutions"
        content="Our School ERP offers comprehensive tools to manage academics, attendance, exams, and communication, making school administration seamless and efficient."
        FeatureList={[
          "<b>User-Friendly Interface :</b> <span> Intuitive design for teachers, students, and parents</span>",
          "<b>Secure & Reliable :</b> <span> Protects sensitive student and staff data</span>",
          "<b>24/7 Support :</b> <span> Assistance anytime for smooth operations</span>",
          "<b>Scalable for Schools :</b> <span> Adapts to institutions of all sizes</span>",
        ]}
        btnname="Learn More"
        btnurl="/about"
      ></Feature4>
      <Feature5></Feature5>
      <Feature6></Feature6>
      <HowWork3></HowWork3>
      <Pricing3></Pricing3>
      <Counter1></Counter1>
      <About3
        img1="/assets/images/what-do.png"
        subtitle="What We Do"
        title="We provide a complete School ERP solution."
        content="Our platform helps schools manage academics, attendance, exams, fees, and communication seamlessly, empowering teachers, students, and parents."
        boxtitle1="Comprehensive School Management"
        boxcontent1="Manage students, teachers, classes, timetables, and attendance efficiently in a single platform."
        boxtitle2="Advanced Academic & Administrative Tools"
        boxcontent2="Streamline exams, grades, fees, library, transport, and communication with intuitive, easy-to-use tools."
      ></About3>
      <Brand3></Brand3>
      <Testimonial3></Testimonial3>
      <Blog1></Blog1>
    </div>
  );
};

export default page;
