import React from "react";
import SEO from "../common/seo";
import DesignPage from "../components/designPage";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <DesignPage />
    </Wrapper>
  );
};

export default index;