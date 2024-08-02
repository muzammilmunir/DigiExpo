import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFour from "@/layout/footers/footer-4";
import Header from "@/layout/headers/header";
import React from "react";
import Brand from "../about/brand";
import ServiceArea from "../service/service-area";
import ContactArea2 from "../homes/home/contact-area2";
import ServiceArea2 from "../homes/home-2/service-area";
import ContactArea from "../homes/home/contact-area";
import BlogArea from "../homes/home/blog-area";
import FaqArea from "../homes/home/faq-area";
import TestimonialArea from "../homes/home/testimonial-area-1";
import ProjectArea from "../homes/home/project-area";
import PaymentMethodArea from "../homes/home/payment-method-area";
import AboutArea from "../homes/home/about-area";

const DesignPage = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Web Design" innertitle="Help Desk Service Details" />
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
          <FooterFour/>
        </div>
      </div>
    </>
  );
};

export default DesignPage;