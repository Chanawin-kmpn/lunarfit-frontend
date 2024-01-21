import React from "react";
import { TitleWrapper, LargeTitle } from "../../Style/TitleStyles";
import { BackButton } from "../../Style/ButtonStyles";
const PageTitle = ({ pageTitle }) => {
  return (
    <TitleWrapper className="text-center mb-[40px]">
      <BackButton to="/" className="flex-none">
        <img src="/src/assets/images/icon/back-icon.svg" alt="" />
      </BackButton>
      <LargeTitle>{pageTitle}</LargeTitle>
    </TitleWrapper>
  );
};

export default PageTitle;
