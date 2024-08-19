import React from "react";
import SEO from "../common/seo";
import DesignPage from "../components/designPage";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Best Web Design Company in Dubai | UI UX Design Services Company"} />
      <DesignPage />
    </Wrapper>
  );
};

export default index;