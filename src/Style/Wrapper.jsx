import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 26.875rem; */
  min-height: 100vh;
  height: 100%;

  padding: 4rem 2rem 0;

  @media (min-width: 1280px) {
    padding: 4rem;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const SectionWrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    position: relative;
  }
`;

const ContentWrapper = styled.section`
  border-radius: 10px;
  background: #ffffff;
  padding: 2rem 1rem;
`;

export { Wrapper, SectionWrapper, ContentWrapper };
