import React from "react";
import SEO from "../common/seo";
import WebDevelopment from "../components/webDevelopment";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"web design and development agency | web development services"} />
      <WebDevelopment />
    </Wrapper>
  );
};

export default index;