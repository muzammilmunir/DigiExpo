import React from "react";
import SEO from "../../common/seo";
import DigitalMarketingBlog from "../../components/blogs/digital-marketing-blog";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <DigitalMarketingBlog />
    </Wrapper>
  );
};

export default index;