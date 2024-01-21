import React, { useState } from "react";
import { Label, Modal, FloatingLabel, FileInput } from "flowbite-react";
import addIcon from "/src/assets/images/icon/Add-icon.svg";
import styled from "styled-components";
const AddActivity = () => {
  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="-mt-6">
      <button onClick={() => setOpenModal(true)}>
        <img src={addIcon} alt="Add-icon" />
      </button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body className="overflow-hidden">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Add Activity
            </h3>
            <InputWrapper>
              <StyledSelect name="type" id="type">
                <option value=""></option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
                <option value="bike">Bike</option>
                <option value="swim">Swim</option>
                <option value="hike">Hike</option>
              </StyledSelect>
              <StyledLabel>Type:</StyledLabel>
            </InputWrapper>

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Name:"
              />
            </InputWrapper>

            <InputWrapper>
              <DateLabel>Date:</DateLabel>
              <DateInput type="date" />
            </InputWrapper>

            <div className="flex justify-between">
              <InputWrapper>
                <TimeLabel>Start:</TimeLabel>
                <TimeInput
                  className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                  type="time"
                  name=""
                  id=""
                />
              </InputWrapper>
              <InputWrapper>
                <TimeLabel>End:</TimeLabel>
                <TimeInput
                  className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                  type="time"
                  name=""
                  id=""
                />
              </InputWrapper>
            </div>

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Note:"
              />
            </InputWrapper>

            <div className="flex w-full items-center justify-center">
              <Label
                htmlFor="dropzone-file"
                className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-[1px] border-black hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#6c7381"
                      d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Press to upload image</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput id="dropzone-file" className="hidden" />
              </Label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-between border">
          <button
            className="border-[1px] rounded-[10px] px-6 p-4"
            color="gray"
            onClick={() => setOpenModal(false)}
          >
            Cancle
          </button>
          <button
            className="border-[1px] rounded-[10px] bg-[#ECF229] text-black border-[black] px-6 p-4"
            onClick={() => setOpenModal(false)}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const StyledLabel = styled.label`
  position: absolute;
  top: 0.825rem;
  left: 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 1rem 0.635rem;
  font-size: inherit;
  text-align: center;
  border-color: black;
  border-radius: 10px;

  &::after {
    content: "Type:";
    position: absolute;
  }
`;

const TimeLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;
const TimeInput = styled.input`
  text-align: end;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    background: none;
    width: 100%;
  }
`;

const DateLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;

const DateInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  text-align: end;
  border-color: black;
  border-radius: 10px;
  padding: 1rem 1rem 0.635rem;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    background: none;
    -webkit-appearance: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  font-size: 1.25rem;
  max-height: 3.5rem;
`;

export default AddActivity;
