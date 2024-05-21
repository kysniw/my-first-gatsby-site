import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Seo = ({ title }) => {
  const siteTitle = useSiteMetadata();

  return (
    <title>
      {title} | {siteTitle}
    </title>
  );
};

export default Seo;
