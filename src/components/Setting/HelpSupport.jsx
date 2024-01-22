
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const HelpSupportContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #ecf229;
  color: #333;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
`;

const FAQList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`;

const FAQItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const BackButton = styled.button`
  background-color: #ecf229;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: auto; // Pushes the button to the bottom
  cursor: pointer;

  &:hover {
    background-color: #d4c221;
  }
`;

// Component
const HelpSupport = () => {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <HelpSupportContainer>
      <Header>Help & Support</Header>
      <h2>FAQ</h2>
      <FAQList>
        <FAQItem>What is this project? <span>&#9660;</span></FAQItem>
        <FAQItem>What is this project? <span>&#9660;</span></FAQItem>
        <FAQItem>What is this project? <span>&#9660;</span></FAQItem>
        <FAQItem>What is this project? <span>&#9660;</span></FAQItem>
      </FAQList>
      <BackButton onClick={goBack}>&larr; Back</BackButton>
    </HelpSupportContainer>
  );
};

export default HelpSupport;
