import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AboutUsContainer = styled.div`
  font-family: "Arial", sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #ecf229;
  color: #333;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  color: #333;
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const ContentSection = styled.section`
  margin-bottom: 20px;
`;

const TeamSection = styled.section`
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
`;

const TeamMember = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

const TeamImage = styled.img`
  width: 50px; // Adjust as necessary
  height: 50px; // Adjust as necessary
  border-radius: 50%;
`;

const TeamName = styled.h3`
  margin-top: 5px;
  font-size: 16px;
  color: #333;
`;

const TeamRole = styled.p`
  font-size: 14px;
  color: #666;
`;

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <AboutUsContainer>
      <BackButton onClick={() => navigate(-1)}>&larr;</BackButton>
      <Header>About Us</Header>
      <ContentSection>
        <h2>Welcome to LunarFit!</h2>
        <p>
          {" "}
          Greetings from the entire Americano Shepherd Team, Cohort 6 of the
          Junior Software Developer Bootcamps! We're thrilled to present our
          exceptional app, LunarFit. More than just an app, LunarFit is your
          adventurous partner in fitness. Designed with innovation, fun, and
          passion, it's set to transform your workout experience. We eagerly
          await your feedback! Share your thoughts, experiences, and ideas. Your
          insights are invaluable, steering us towards new frontiers and
          ensuring LunarFit not only meets but surpasses your expectations.
          Thank you for embarking on this journey with us. Your extraordinary
          fitness adventure begins now! Let's work out to the moon! 🚀💪
        </p>
      </ContentSection>
      <TeamSection>
        <h2>Our Team</h2>
        <TeamMember>
          <TeamImage src="" alt="Team Member" />
          <TeamName>Karin Sukchai</TeamName>
          <TeamRole>UI/UX Designer</TeamRole>
        </TeamMember>
      </TeamSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
