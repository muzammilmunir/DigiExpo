import React from "react";
import SEO from "../common/seo";
import MobileApp from "../components/mobileApp";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <MobileApp />
    </Wrapper>
  );
};

export default index;