import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import TitleComponent from "../TitleComponent";

const Setting = () => {
  return (
    <main>
      <TitleComponent title="Setting" />
      <Link to="/account">Account</Link>
      <Nav />
    </main>
  );
};

export default Setting;
