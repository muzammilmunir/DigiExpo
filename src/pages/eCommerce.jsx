import React from "react";
import SEO from "../common/seo";
import ECommerce from "../components/eCommerce";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <ECommerce />
    </Wrapper>
  );
};

export default index;