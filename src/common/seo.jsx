import Head from "next/head";

const SEO = ({ pageTitle, pageDesc, canonicalUrl }) => {
  return (
    <>
      <Head>
        <title>{pageTitle && `${pageTitle}`}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={pageDesc && `${pageDesc}`} />
        {/* <meta name="robots" content="noindex, follow" /> */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta
          name="google-site-verification"
          content="4OIjRBBSzprqzeFICro6NWDNkOGlWTIWvV_ixDoYCFM"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default SEO;
