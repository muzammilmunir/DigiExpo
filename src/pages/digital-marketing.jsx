import React from "react";
import SEO from "../common/seo";
import DigitalMarketing from "../components/digitalMarketing";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Best digital marketing agency in uae | Digital marketing agency"} />
      <DigitalMarketing />
    </Wrapper>
  );
};

export default index;