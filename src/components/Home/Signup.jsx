import React, { useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import { InputWrapper, Input } from "../../Style/InputStyle";
import { LightButton } from "../../Style/ButtonStyles";
const Signup = () => {
  const [inValid, setInValid] = useState(false);
  return (
    <div>
      <PageTitle pageTitle="Sign Up" />

      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Invalid Email</p>
          </ErrorMessage>
        )}
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Firstname"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Lastname"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Email"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Password"
          type="password"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Confirm Password"
          type="password"
        />
        <div className="flex flex-col mt-[32px]">
          <Link className=" flex" to="/signin">
            <LightButton
              color="gray"
              className="grow bg-[#ddd] border-black text-black"
            >
              Sign Up
            </LightButton>
          </Link>
          <p className="mt-[8px] text-center">
            Already have an account?{" "}
            <span>
              <Link to="/signin" className="font-semibold">
                Sign in
              </Link>
            </span>
          </p>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Signup;
