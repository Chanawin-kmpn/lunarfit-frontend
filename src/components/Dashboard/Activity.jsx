//import all needed libraries
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const activitys = [
  {
    type: "Run",
    time: "12:00 - 12:30 PM",
    name: "Run with dad",
    duration: "120",
  },
  {
    type: "Swim",
    time: "10:10 - 10:40 AM",
    name: "Swim with mom",
    duration: "30",
  },
  {
    type: "Walk",
    time: "6:00 - 7:00 PM",
    name: "Walk with dog",
    duration: "60",
  },
  {
    type: "Hike",
    time: "14:00 - 20:00 PM",
    name: "Hike with friend",
    duration: "500",
  },
];

// Activity component
const Activity = () => {
  return (
    <CardWrapper>
      {activitys.map((activity, index) => (
        <Card key={index}>
          <Icon>
            <img
              src={`/src/assets/images/icon/activitys-icon/${activity.type.toLowerCase()}-icon.svg`}
              alt=""
            />
          </Icon>
          <Details>
            <HeaderDetail>
              <Type>{activity.type}</Type>
              <Dropdown
                className="border-black border-2 rounded-lg "
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                  <span>
                    <img
                      src="/src/assets/images/icon/more-menu-icon.svg"
                      alt=""
                    />
                  </span>
                )}
              >
                <Dropdown.Item className="border-b-[1px]">
                  <Link to="/activity-details">Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  className="border-t-[1px]"
                  onClick={() => console.log("Hello")}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown>
            </HeaderDetail>
            <BodyDetail>
              <Time>{activity.time}</Time>
              <Duration>
                <div>
                  <img src="/src/assets/images/clock-icon.svg" alt="" />
                </div>
                {activity.duration} min.
              </Duration>
            </BodyDetail>
            <Name>{activity.name}</Name>
          </Details>

          {/* <MenuDots onClick={toggleMenu}>...</MenuDots>
          <MenuOptions show={showMenu}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
          </MenuOptions> */}
        </Card>
      ))}
    </CardWrapper>
  );
};

Activity.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Styled components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 1rem;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #ecf229;
  border-radius: 8px;
  padding: 8px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  background-size: cover;
  border-radius: 10px;
  width: 85px;
  aspect-ratio: 1;

  & img {
    width: 50px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: #000;
`;

const Time = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: #333;
  width: 100%;
  max-width: 7.2rem;
  background: white;
  border-radius: 5px;
  padding: 0.25rem 0.3rem;
`;
const HeaderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Name = styled.div`
  font-size: 1em;
  color: #000;
`;

const Duration = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 0.9em;
  text-align: center;
  color: #ffffff;
  background: black;
  border-radius: 5px;
  width: 100%;
  max-width: 6.025rem;
  max-height: 29px;
  padding: 0.25rem 0.5rem;
  & img {
    width: 20px;
    aspect-ratio: 1;
  }
`;

const DropdownWrapper = styled(Dropdown)`
  position: absolute;
`;

const MenuDots = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #000;
  position: absolute;
  top: 0px;
  right: 0px;
  /* z-index: 101; */
`;

const MenuOptions = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%; // Adjust as needed
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 100;
`;

const MenuItem = styled.div`
  padding: 8px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
export default Activity;
