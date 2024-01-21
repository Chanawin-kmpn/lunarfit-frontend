import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => {
  return (
    <MessageWrapper>
      {children}{" "}
      <span>
        <img src="/src/assets/images/icon/error-icon.svg" alt="" />
      </span>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  /* Receive prop to check error? if error display none */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b31b1b;
  font-size: 1rem;
  font-weight: bold;
  background: #fef2f2;
  border: 1px solid #b31b1b;
  border-radius: 10px;
  padding: 0.5rem 2rem;
`;
export default ErrorMessage;
