import React from "react";
import SEO from "../../common/seo";
import SocialMediaMarketingBlog from "../../components/blogs/social-media-marketing-blog";
import Wrapper from "../../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <SocialMediaMarketingBlog />
    </Wrapper>
  );
};

export default index;