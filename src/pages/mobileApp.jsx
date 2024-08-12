import React from "react";
import SEO from "../common/seo";
import MobileApp from "../components/mobileApp";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"mobile app development company in uae | app development services"} />
      <MobileApp />
    </Wrapper>
  );
};

export default index;