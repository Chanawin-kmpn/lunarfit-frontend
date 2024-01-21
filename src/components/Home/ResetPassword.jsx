import React, { useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import { Input, InputWrapper } from "../../Style/InputStyle";
import { LightButton } from "../../Style/ButtonStyles";

const ResetPassword = () => {
  const [inValid, setInValid] = useState(false);
  return (
    <div>
      <PageTitle pageTitle="Reset Password" />
      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Email not found!</p>
          </ErrorMessage>
        )}
        <div className="flex flex-col ">
          <Input
            className="bg-white  border-black"
            variant="outlined"
            label="Email"
          />

          <div className="flex flex-col mt-[32px]">
            <Link className=" flex" to="/home">
              <LightButton
                color="gray"
                className="grow bg-[#ddd] border-black text-black"
              >
                Send Email
              </LightButton>
            </Link>
          </div>
        </div>
      </InputWrapper>
    </div>
  );
};

export default ResetPassword;
