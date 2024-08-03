import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFour from "@/layout/footers/footer-4";
import React from "react";
import Brand from "../../about/brand";
// import ServiceArea from "../../service/service-area";
import ContactArea2 from "../../homes/home/contact-area2";
import ServiceArea2 from "../../homes/home-2/service-area";
import ContactArea from "../../homes/home/contact-area";
import BlogArea from "../../homes/home/blog-area";
import FaqArea from "../../homes/home/faq-area";
import TestimonialArea from "../../homes/home/testimonial-area-1";
import ProjectArea from "../../homes/home/project-area";
import PaymentMethodArea from "../../homes/home/payment-method-area";
import HeaderSix from "@/layout/headers/header-6";
import ThumbArea from "@/components/project-details/thumb-area";
import RankArea from "@/components/homes/home/rank-area";
import AboutArea from "../../../common/about-area";
import PaymentArea from "@/components/homes/home-2/payment-area";
import ProjectDetailsArea from "@/components/project-details/project-details-area";
import CounterArea from "@/components/homes/home-3/counter-area";
import OpenAccountArea from "@/components/homes/home-2/open-account-area";
import ServiceArea from "@/components/homes/home-2/service-area";
import SalesArea from "../../../common/sales-area";

const HyggeBikes = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight/>
            <ThumbArea />
            <ProjectDetailsArea />
            <RankArea/>
            <AboutArea/>
            <PaymentArea />
            <CounterArea/>
            <OpenAccountArea />
            <SalesArea />
            <ServiceArea />
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

export default HyggeBikes;