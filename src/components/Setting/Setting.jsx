import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Theme from "./Theme";
import TitleComponent from "../TitleComponent";

const SettingContainer = styled.main`
  font-family: "Arial", sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
`;

const SectionTitle = styled.h1`
  color: #333;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
`;

const Section = styled.section`
  margin-top: 20px;
`;

const SectionHeader = styled.h2`
  color: #333;
  padding: 5px 0;
`;

const ButtonLink = styled(Link)`
  display: block;
  color: #000;
  padding: 10px 15px;
  margin: 5px 0;
  background: #fff;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    background: #e7e7e7;
  }
`;

const SignOutButton = styled.button`
  display: block;
  width: 100%;
  color: #fff;
  padding: 10px 15px;
  margin: 20px 0;
  background: #333;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #555;
  }
`;

const Setting = () => {
  return (
    <SettingContainer>
      <TitleComponent title="Setting" />
      <Section>
        <SectionHeader>General</SectionHeader>
        <Theme />
        <ButtonLink to="/account">Account</ButtonLink>
      </Section>
      <Section>
        <SectionHeader>Other</SectionHeader>
        <ButtonLink to="/support">Help & Support</ButtonLink>
        <ButtonLink to="/terms">Terms & Conditions</ButtonLink>
        <ButtonLink to="/feedback">Send Feedback</ButtonLink>
        <ButtonLink to="/aboutus">About Us</ButtonLink>
      </Section>
      <SignOutButton
        onClick={() => {
          /* Sign out logic: We haven't still decided yet */
        }}
      >
        Sign Out
      </SignOutButton>
    </SettingContainer>
  );
};

export default Setting;
