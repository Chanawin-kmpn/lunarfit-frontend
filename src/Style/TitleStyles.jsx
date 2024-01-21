import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleStyle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  flex-grow: 1;
`;

const LargeTitle = styled(TitleStyle)`
  font-size: 2.5rem;
`;

const MediumTitle = styled(TitleStyle)`
  font-size: 2.25rem;
`;

const PageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ecf229;
  border-radius: 10px;
  text-align: center;
  padding-inline: 1rem;
`;

export { TitleWrapper, LargeTitle, PageTitleWrapper, MediumTitle };
