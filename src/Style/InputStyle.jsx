import styled from "styled-components";
import { FloatingLabel } from "flowbite-react";
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  border-radius: 21px;
  padding: 2rem 1rem;

  @media (min-width: 1280px) {
    gap: 2rem;
    padding: 4rem 7rem;
    min-width: 37.5rem;
  }
`;

const Input = styled(FloatingLabel)`
  font-size: 1.25rem;
  margin: 0;
`;
export { InputWrapper, Input };
