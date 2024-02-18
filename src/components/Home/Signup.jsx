import React, { useContext, useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { InputWrapper, Input } from "../../Style/InputStyle";
import { LightButton } from "../../Style/ButtonStyles";
import { UserContext } from "../UserContext";
const Signup = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inValid, setInValid] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const handleFirstName = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setMessage(true);
      setFirstNameError("First name cannot be empty.");
    } else if (/[^a-zA-Z -]/.test(value)) {
      setMessage(true);
      setFirstNameError(
        "Invalid first name. Please use alphabetic characters only."
      );
    } else {
      setFirstName(value);
      setFirstNameError(""); // Clear error message when valid
    }
  };

  const handleLastName = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setMessage(true);
      setLastNameError("Last name cannot be empty.");
    } else if (/[^a-zA-Z -]/.test(value)) {
      setMessage(true);
      setLastNameError(
        "Invalid last name. Please use alphabetic characters only."
      );
    } else {
      setLastName(value);
      setLastNameError(""); // Clear error message when valid
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setMessage(true);
      setEmailError("Email cannot be empty.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setMessage(true);
      setEmailError("Invalid email format.");
    } else {
      setEmail(value);
      setEmailError(""); // Clear error message when valid
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setMessage(true);
      setPasswordError("Password cannot be empty.");
    } else if (value.length < 8 || !/\d/.test(value)) {
      setMessage(true);
      setPasswordError(
        "Password must be at least 8 characters long and contain a number."
      );
    } else {
      setPassword(value);
      setPasswordError(""); // Clear error message when valid
    }
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    if (!value.trim()) {
      setMessage(true);
      setConfirmPasswordError("Confirm password cannot be empty.");
    } else if (value !== password) {
      setMessage(true);
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPassword(value);
      setConfirmPasswordError(""); // Clear error message when valid
    }
  };

  const validateForm = () => {
    // Validate each field again or ensure no error messages are present
    // This is a simplified example; adapt based on your complete validation logic
    const validations = [
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
      confirmPasswordError,
    ];
    const isValid = validations.every((error) => error === "");
    if (isValid) {
      setInValid(false);
    } else {
      setInValid(true);
    }
    return isValid;
  };

  const checkEmpty = () => {
    const validations = [firstName, lastName, email, password, confirmPassword];

    const isEmpty = validations.some((value) => value === "");
    if (isEmpty) {
      setInValid(true);
    }
  };

  const checkConfirmForm = () => {
    // It's better to check all fields before submission, not just confirmPassword
    const isFormValid = validateForm();
    checkEmpty();
    if (isFormValid) {
      createUser(firstName, lastName, email, password, navigate);
    }
  };

  return (
    <div>
      <PageTitle pageTitle="Sign Up" />
      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p className="main-message">Input cannot be empty</p>
          </ErrorMessage>
        )}
        <div className="flex flex-col gap-4 xl:flex-row">
          <div>
            <Input
              className="bg-white  border-black"
              variant="outlined"
              label="Firstname"
              onChange={handleFirstName}
            />
            {message && firstNameError && (
              <ErrorMessage>
                <p>{firstNameError}</p>
              </ErrorMessage>
            )}
          </div>
          <div>
            <Input
              className="bg-white  border-black"
              variant="outlined"
              label="Lastname"
              onChange={handleLastName}
            />
            {message && lastNameError && (
              <ErrorMessage>
                <p>{lastNameError}</p>
              </ErrorMessage>
            )}
          </div>
        </div>
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Email"
          onChange={handleEmail}
        />
        {message && emailError && (
          <ErrorMessage>
            <p>{emailError}</p>
          </ErrorMessage>
        )}
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        {message && passwordError && (
          <ErrorMessage>
            <p>{passwordError}</p>
          </ErrorMessage>
        )}
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Confirm Password"
          type="password"
          onChange={handleConfirmPassword}
        />
        {message && confirmPasswordError && (
          <ErrorMessage>
            <p>{confirmPasswordError}</p>
          </ErrorMessage>
        )}
        <div className="flex flex-col mt-[32px]">
          {/* <Link className=" flex" to="/signin"> */}
          <LightButton
            color="gray"
            className="grow bg-[#ddd] border-black text-black"
            onClick={checkConfirmForm}
          >
            Sign Up
          </LightButton>
          {/* </Link> */}
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
