import React from "react";
import { MediumTitle, PageTitleWrapper } from "../Style/TitleStyles";

const TitleComponent = ({ title }) => {
  return (
    <PageTitleWrapper>
      <MediumTitle>{title}</MediumTitle>
    </PageTitleWrapper>
  );
};

export default TitleComponent;
