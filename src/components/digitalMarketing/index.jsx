import HeaderFive from "@/layout/headers/header-5";
import React from "react";
import FeatureArea from "../homes/home-5/feature-area";
import HeroArea from "../homes/home-5/hero-area";
import Brand from "../about/brand";
import ServiceArea from "../service/service-area";
import ContactArea2 from "../homes/home/contact-area2";
import CounterArea from "../homes/home-3/counter-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";
import FooterFour from "@/layout/footers/footer-4";
import FaqArea from "../homes/home/faq-area";


const DigitalMarketing = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <Brand />
            <ServiceArea />
            <ContactArea2 />
            <FeatureArea style_integraton={true} />
            <CounterArea />
            <PaymentMethodArea />
            <ProjectArea />
            <TestimonialArea />
            <AboutArea />
            <FaqArea />
            <BlogArea />
            <ContactArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;