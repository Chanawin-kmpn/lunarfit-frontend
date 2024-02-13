//import all needed libraries
import React, { useContext, useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import User, { UserContext } from "../UserContext";
import axios from "axios";
import Swal from "sweetalert2";
// const activitys = [
//   {
//     type: "Run",
//     time: "12:00 - 12:30 PM",
//     name: "Run with dad",
//     duration: "120",
//   },
//   {
//     type: "Swim",
//     time: "10:10 - 10:40 AM",
//     name: "Swim with mom",
//     duration: "30",
//   },
//   {
//     type: "Walk",
//     time: "6:00 - 7:00 PM",
//     name: "Walk with dog",
//     duration: "60",
//   },
//   {
//     type: "Hike",
//     time: "14:00 - 20:00 PM",
//     name: "Hike with friend",
//     duration: "500",
//   },
//   {
//     type: "Bike",
//     time: "14:00 - 20:00 PM",
//     name: "Bike with brother",
//     duration: "200",
//   },
// ];

// Activity component
const Activity = () => {
  const { data } = useContext(UserContext);
  const { setActivityData, activityData, deleteActivity, formatDuration } =
    useContext(UserContext);
  const { reload } = useContext(UserContext);
  useEffect(() => {
    // axios.get("http://127.0.0.1:3000/api/activity").then((res) => {
    //   setActivityData(res.usersData);
    // });
    const getData = async () => {
      const response = await axios.get("http://127.0.0.1:3000/api/activity", {
        withCredentials: true,
      });

      console.log(response.data);
      if (response.status === 200 && response.data) {
        setActivityData(response.data);
      }
    };
    getData();
  }, [reload]);

  const deleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(100);
          },
          title: "Deleted!",
          text: "Your activity has been deleted.",
          icon: "success",
        });
        deleteActivity(id);
        setActivityData((currentActivities) =>
          currentActivities.filter((activity) => activity._id !== id)
        );
      }
    });
  };

  return (
    <CardWrapper className="flex-1">
      {activityData?.map((activity, index) => (
        <Card key={index}>
          <Icon>
            <img
              src={`/assets/images/icon/activity-type-icon/${activity.type.toLowerCase()}-icon.svg`}
              alt="Activity-icon"
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
                  <span className="cursor-pointer">
                    <img
                      src="/assets/images/icon/more-menu-icon.svg"
                      alt="More-menu"
                    />
                  </span>
                )}
              >
                <Dropdown.Item className="border-b-[1px]">
                  <Link to="/activity-details">Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  className="border-t-[1px]"
                  onClick={() => {
                    deleteButton(activity._id);
                  }}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown>
            </HeaderDetail>
            <BodyDetail>
              <Time>
                {activity.start} - {activity.end}
              </Time>
              <Duration>
                <div>
                  <img src="/assets/images/clock-icon.svg" alt="Clock icon" />
                </div>
                {formatDuration(activity.start, activity.end)}
              </Duration>
            </BodyDetail>
            <Name>{activity.name}</Name>
          </Details>
        </Card>
      ))}
      {/* {activityData.map((activity) => {
        console.log(activity);
      })} */}
    </CardWrapper>
  );
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
    aspect-ratio: 1;
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

export default Activity;
