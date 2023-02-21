import { DEFAULT_META_TITLE } from "lib/constants";
import React from "react";
import { Helmet } from "react-helmet-async";

type MetaTagsProps = {
  title?: string;
  children?: React.ReactNode;
};

export const MetaTags: React.FunctionComponent<MetaTagsProps> = (props) => {
  const { title, children } = props;

  const metaTitle = title
    ? `${title} - ${DEFAULT_META_TITLE}`
    : DEFAULT_META_TITLE;

  return (
    <Helmet prioritizeSeoTags>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta property="og:title" content={metaTitle} />
      <meta property="twitter:title" content={metaTitle} />
      {children}
    </Helmet>
  );
};
