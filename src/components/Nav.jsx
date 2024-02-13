import React from "react";
import { Link } from "react-router-dom";
import AddActivity from "./Dashboard/add_activity/AddActivity";
import styled from "styled-components";
const Nav = () => {
  const links = [
    {
      url: "/home",
      path: "/assets/images/icon/Home-icon.svg",
      des: "Home",
    },
    {
      url: "/stat",
      path: "/assets/images/icon/Stat-icon.svg",
      des: "Stat",
    },
    {
      path: "AddActivity",
    },
    {
      url: "/setting",
      path: "/assets/images/icon/Setting-icon.svg",
      des: "Setting",
    },
    {
      url: "/profile",
      path: "/assets/images/icon/Profile-icon.svg",
      des: "Profile",
    },
  ];
  return (
    <NavWrapper>
      <Navbar>
        {links.map((link, index) => {
          if (link.path === "AddActivity") {
            return (
              <NavList className="center-link" key={index}>
                <AddActivity />
              </NavList>
            );
          } else {
            return (
              <NavList key={index}>
                <Link to={link.url}>
                  <NavLink>
                    <Icon src={link.path} alt={`${link.des}-icon`} />
                    <p>{link.des}</p>
                  </NavLink>
                </Link>
              </NavList>
            );
          }
        })}
      </Navbar>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  position: sticky;
  bottom: 0;
  background: #151718;
  margin-top: 6rem;
  margin-inline: -2rem;
  padding: 0 2rem 0.25rem;

  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    margin: 0;
    width: 60%;
    background: none;
  }
`;

const Navbar = styled.ul`
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #ecf229;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  /* padding-top: 1rem; */
  @media (min-width: 1280px) {
    justify-content: flex-end;
    gap: 2rem;
    color: #151718;
  }
`;

const NavList = styled.li`
  /* border-top: 4px solid #ecf229; */
  padding-top: 1rem;
  list-style: none;
  &.center-link {
    transform: translateY(-22px);
  }
`;

const NavLink = styled.div`
  width: fit-content;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 40px;
  aspect-ratio: 1;
  margin: 0 auto;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export default Nav;
