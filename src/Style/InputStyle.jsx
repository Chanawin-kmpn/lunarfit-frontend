import styled from "styled-components";
import { FloatingLabel } from "flowbite-react";
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 21px;
  padding: 2rem 1rem;
`;

const Input = styled(FloatingLabel)`
  font-size: 1.25rem;
  margin: 0;
`;
export { InputWrapper, Input };
