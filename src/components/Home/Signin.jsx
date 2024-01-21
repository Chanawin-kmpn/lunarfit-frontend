import React, { useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import { LightButton } from "../../Style/ButtonStyles";
import { Input, InputWrapper } from "../../Style/InputStyle";
const members = [
  {
    email: "pond_chanawin@hotmail.com",
    password: "123456",
  },
];
const Signin = () => {
  const [inValid, setInValid] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // console.log(email);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // console.log(password);
  };
  const handleValid = () => {
    if (email === members[0].email && password === members[0].password) {
      setInValid();
      console.log("Login success");
    } else {
      setInValid(true);
    }
  };

  return (
    <div>
      <PageTitle pageTitle="Sign In" />
      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Invalid username or password</p>
          </ErrorMessage>
        )}
        {/* Using return from API to check valid to display this component */}
        <Input
          className="border-black"
          variant="outlined"
          label="Email"
          onChange={(event) => handleEmail(event)}
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Password"
          type="password"
          onChange={(event) => handlePassword(event)}
        />
        <Link className="ml-auto font-bold" to="/reset-password">
          Forget Password ?
        </Link>
        <div className="flex flex-col mt-[67px]">
          <LightButton
            color="gray"
            className="grow bg-[#ddd] border-black text-black"
            onClick={() => handleValid()}
          >
            Sign in
          </LightButton>
          <p className="mt-[8px] text-center">
            Don’t have an account?{" "}
            <span>
              <Link to="/signup" className="font-semibold">
                Create Account
              </Link>
            </span>
          </p>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Signin;
