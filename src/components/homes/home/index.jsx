import ScrollToTop from "@/hooks/scroll-to-top";
// import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import React from "react";
// import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import PriceArea from "./price-area";
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
import TestimonialArea from "./testimonial-area";
import TestimonialArea1 from "./testimonial-area-1";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import BusinessBox from "./business-box";
import AboutArea from "./about-area";
import FunFactArea from "./fun-fact-area";
import FaqArea from "./faq-area";
import ContactArea from "./contact-area";
import Footer from "@/layout/footers/footer";
import Portfolio from "./portfolio";
import BlogArea from "./blog-area";
import Brand from "../../about/brand";
import FooterFour from "@/layout/footers/footer-4";
import ContactArea2 from "./contact-area2";
import StickyIcons from "@/common/sticky-icons";

const HomeOne = () => {
	return (
		<>
			<Header />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main className="fix">
						<StickyIcons/>
						<HeroSlider />
						<Brand />
						<ServiceArea />
						<ContactArea2 />
						<PaymentMethodArea/>
						<BusinessBox />
						<ProjectArea />
						<TestimonialArea />
						<AboutArea />
						<FunFactArea />
						<FaqArea />
						<BlogArea />
						<ContactArea />
					</main>
					<FooterFour />
					<ScrollToTop />
				</div>
			</div>
		</>
	);
};

export default HomeOne;
