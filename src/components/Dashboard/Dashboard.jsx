import React, { useContext } from "react";
import Schedule from "./Schedule";
import Activity from "./Activity";
import Tips from "./Tips";
import Nav from "../Nav";
import { SectionWrapper } from "../../Style/Wrapper";
import { UserContext } from "../UserContext";
const Dashboard = () => {
  const { data } = useContext(UserContext);
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-500">Welcome</p>
          <p className="font-bold text-2xl">{data.fullName}</p>{" "}
          {/* Add name value */}
        </div>
        <div>
          <img src="/src/assets/images/icon/Profile.png" alt="" />
        </div>
      </div>
      <div className="content-section flex flex-col gap-4 lg:flex-row">
        <Schedule />
        <Activity />
        <Tips />
      </div>
      <Nav />
    </SectionWrapper>
  );
};

export default Dashboard;
