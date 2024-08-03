import React from "react";
import HeroArea from "../homes/home-4/hero-area";
import Brand from "../about/brand";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";
import FooterFour from "@/layout/footers/footer-4";
import FaqArea from "../homes/home/faq-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea from "../service/service-area";
import ServiceArea2 from "../homes/home-2/service-area";
import HeaderSix from "@/layout/headers/header-6";

const Ecommerce = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroArea />
            <Brand />
            <ServiceArea />
            <ContactArea2 />
            <ServiceArea2 />
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

export default Ecommerce;