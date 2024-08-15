import React from "react";
import SEO from "../../common/seo";
import Blog1 from "../../components/blogs/blog-1";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Blog1 />
    </Wrapper>
  );
};

export default index;