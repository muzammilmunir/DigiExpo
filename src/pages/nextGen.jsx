import React from "react";
import SEO from "../common/seo";
import NextGen from "../components/nextGen";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <NextGen />
    </Wrapper>
  );
};

export default index;