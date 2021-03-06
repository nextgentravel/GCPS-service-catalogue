import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, lang, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            titleEnglish
            titleFrench
            descriptionEnglish
            descriptionFrench
            authorEnglish
            authorFrench
            dateIssued
            dateModified
            subjectEnglish
            subjectFrench
            keywordsEnglish
            keywordsFrench
          }
        }
      }
    `
  );
  const metaTitle =
    lang === "en"
      ? `${title} - GCPS service catalogue - GCintranet - PSPC`
      : `${title} - GCPS catalogue de service - GCintranet - SPAC`;

  const metaDescription =
    description || lang === "en"
      ? site.siteMetadata.descriptionEnglish
      : site.siteMetadata.descriptionFrench;

  return (
    <Helmet
      title={metaTitle}
      htmlAttributes={{ lang: lang }}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `dcterms.issued`,
          content: "2021-11-01",
          title: "W3CDTF",
        },
        {
          name: `dcterms.modified`,
          content: site.siteMetadata.dateModified,
          title: "W3CDTF",
        },
        {
          name: `dcterms.subject`,
          title: `gccore`,
          content:
            lang === "en"
              ? site.siteMetadata.subjectEnglish
              : site.siteMetadata.subjectFrench,
        },
        {
          name: `dcterms.title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `dcterms.description`,
          content: metaDescription,
        },
        {
          name: `dcterms.creator`,
          content:
            lang === "en"
              ? site.siteMetadata.authorEnglish
              : site.siteMetadata.authorFrench,
        },
        {
          name: `keywords`,
          content:
            lang === "en"
              ? site.siteMetadata.keywordsEnglish
              : site.siteMetadata.keywordsFrench,
        },
        {
          name: `dcterms.language`,
          content: lang === "en" ? "eng" : "fra",
          title: "ISO639-2",
        },
        {
          property: `og:title`,
          content: `${title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content:
            lang === "en"
              ? site.siteMetadata.authorEnglish
              : site.siteMetadata.authorFrench,
        },
        {
          name: `twitter:title`,
          content: `${title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    ></Helmet>
  );
};

export default SEO;
