import { Link, useNavigate } from "react-router-dom"; //Newly added useNavigate
import styled from "styled-components";
import Swal from "sweetalert2"; // Import SweetAlert2
import TitleComponent from "../TitleComponent";
import Nav from "../Nav";
import { SectionWrapper, ContentWrapper } from "../../Style/Wrapper";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constant";

const Setting = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure you want to sign out?",
      text: "You will need to login again to continue.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/signout`, {
            withCredentials: true,
          });

          if (response.status === 200) {
            // After sign out, redirect to the homepage
            Swal.fire({
              icon: "success",
              title: "Sign out Success",
            }).then(() => {
              navigate("/");
            });
          } else {
            throw new Error("Failed to sign out");
          }
        } catch (error) {
          console.error("Sign out error:", error);
          Swal.fire("Error", "Failed to sign out", "error");
        }
      }
    });
  };

  return (
    <SectionWrapper>
      <TitleComponent title="Setting" />
      <ContentWrapper>
        <SectionHeader>General</SectionHeader>
        <ButtonLink to="/account">
          Account{" "}
          <img src="/assets/images/icon/forward-icon.svg" alt="forward-icon" />
        </ButtonLink>
        <ButtonLink to="/terms">
          Terms & Conditions{" "}
          <img src="/assets/images/icon/forward-icon.svg" alt="forward-icon" />
        </ButtonLink>
        <SectionHeader>Others</SectionHeader>
        <ButtonLink to="/support">
          Help & Support{" "}
          <img src="/assets/images/icon/forward-icon.svg" alt="forward-icon" />
        </ButtonLink>
        <ButtonLink to="/feedback">
          Send Feedback{" "}
          <img src="/assets/images/icon/forward-icon.svg" alt="forward-icon" />
        </ButtonLink>
        <ButtonLink to="/aboutus">
          About Us{" "}
          <img src="/assets/images/icon/forward-icon.svg" alt="forward-icon" />
        </ButtonLink>
      </ContentWrapper>
      <SignOutButton onClick={handleSignOut}>
        <img src="/assets/images/icon/signout-icon.svg" alt="signout-icon" />
        Sign Out
      </SignOutButton>
      <Nav />
    </SectionWrapper>
  );
};

const SectionHeader = styled.h2`
  color: #333;
  font-family: "Roboto", "san-serif";
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 0;
`;

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  color: #000;
  background: #fff;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 5px;
  margin-block: 1rem;
  padding: 10px 15px;
  &:hover {
    background: #e7e7e7;
  }
`;

const SignOutButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  color: #151718;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border: 2px solid #151718;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-top: 20px;

  &:hover {
    background: #555;
  }
`;

export default Setting;
