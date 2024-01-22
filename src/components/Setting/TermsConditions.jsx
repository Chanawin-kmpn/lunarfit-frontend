import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TermsContainer = styled.div`
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
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  align-self: flex-start; 
`;

const ListItem = styled.div`
  background: #ffffff;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Label = styled.span`
  flex-grow: 1;
`;

const Action = styled.span`
`;

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <TermsContainer>
      <Header>Terms & Conditions</Header>
      <BackButton onClick={() => navigate(-1)}>&larr; Back</BackButton>
      <h3>Personal Information</h3>
      <ListItem>
        <Icon>⚖️</Icon>
        <Label>Weight</Label>
      </ListItem>
      <ListItem>
        <Icon>📏</Icon>
        <Label>Height</Label>
      </ListItem>
      {/* ... other list items */}
      <ListItem>
        <Icon>🗑️</Icon>
        <Label>Delete Account</Label>
      </ListItem>
    </TermsContainer>
  );
};

export default TermsConditions;

