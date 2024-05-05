import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

export const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Bikes</title>
    </Helmet>
  );
};
