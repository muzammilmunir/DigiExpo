import FooterFour from "@/layout/footers/footer-4";
import HeaderThree from "@/layout/headers/header-3";
import React from "react";
import HeroArea from "./hero-area";
import Brand from "../about/brand";
import ServicesArea from "./services-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea from "./service-area";
import FunFactArea from "../homes/home-5/fun-fact-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import ProjectArea from "../homes/home/project-area";
import TestimonialArea from "../homes/home/testimonial-area";
import AboutArea from "../homes/home/about-area";
import FaqArea from "./faq-area";
import BlogArea from "../homes/home/blog-area";
import ContactArea from "../homes/home/contact-area";

const WebDevelopment = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      <Brand />
      <ServicesArea/>
      <ContactArea2 />
      <ServiceArea />
      <FunFactArea />
      <PaymentMethodArea />
      <ProjectArea />
      <TestimonialArea />
      <AboutArea />
      <FaqArea />
      <BlogArea />
      <ContactArea />
      <FooterFour />
    </>
  );
};

export default WebDevelopment;