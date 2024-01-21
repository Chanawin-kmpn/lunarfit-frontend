import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Datepicker, Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
let number = 0;

const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const Schedule = () => {
  const currentDate = new Date();

  const [openModal, setOpenModal] = useState(false);

  const [showAlert, setshowAlert] = useState("hidden");

  const [currentMonthNumber, setCurrentMonthNumber] = useState(
    currentDate.getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());
  const [allDay, setAllDay] = useState([]);
  const allMonth = Object.entries(monthNames).map(
    ([monthNumber, monthName]) => ({
      value: parseInt(monthNumber, 10),
      label: monthName,
    })
  );

  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonthNumber, 0).getDate();
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    setAllDay(daysArray);

    //console.log("All Days:", daysArray);
    //console.log("Selected Day:", selectedDay);
    //console.log("Current Month Number:", currentMonthNumber);
    //console.log("Current Year:", currentYear);
    setshowAlert("hidden");
  }, [currentMonthNumber, currentYear, selectedDay]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 7,
    swipeToSlide: true,
    draggable: true,
    initialSlide: selectedDay - 4,
    arrows: null,
  };

  const settingsMonth = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    initialSlide: currentMonthNumber - 2,
    arrows: false,
  };

  const handleDatePickerChange = (date) => {
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();
    // if currentYear < year; จะ setOpenModal(false); แต่ถ้าไม่ค่อย set ค่าต่างๆ
    if (currentYear > year) {
      setOpenModal(false);
      setshowAlert("");
    } else {
      // Set other values if the condition is not met
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months start from 0, so add 1

      setCurrentYear(year);
      setSelectedDay(day);
      setshowAlert("hidden");
      setCurrentMonthNumber(month);
    }

    //console.log(`วัน: ${day}, เดือน: ${month}, ปี: ${year}`);
    setOpenModal(false);
  };
  //console.log(allDay);
  return (
    <>
      <Alert
        className={`py-2 my-2 ${showAlert}`}
        color="failure"
        icon={HiInformationCircle}
      >
        <span className="">
          Pick a year equal to or greater than the current !
        </span>
      </Alert>
      <ScheduleWrapper>
        <ScheduleHeader id="calendar-select" className="">
          <div className="flex gap-4 mb-2" onClick={() => setOpenModal(true)}>
            <span className=" text-[1.25rem]">Schedule</span>
            <FaAngleRight className="my-auto" />
          </div>
        </ScheduleHeader>

        <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body className="text-center">
            <Datepicker inline onSelectedDateChanged={handleDatePickerChange} />
          </Modal.Body>
        </Modal>

        <div className="slider-section">
          <Slider className="slider-wrapper" key={number++} {...settingsMonth}>
            {allMonth.map((monthObj) => {
              // Assuming btnColor is defined somewhere before this block
              let btnColor = "";
              // Set btnColor based on the condition
              if (monthObj.value === currentMonthNumber) {
                btnColor = "bg-black";
              } else {
                btnColor = "bg-[#ddd]";
              }

              return (
                <MonthWrapper key={monthObj.value} className="flex ">
                  <button
                    className={`${btnColor} p-1 w-full rounded-lg shadow-sm text-${
                      monthObj.value === currentMonthNumber ? "white" : "black"
                    }`}
                    onClick={() => setCurrentMonthNumber(monthObj.value)}
                  >
                    {monthObj.label}
                  </button>
                </MonthWrapper>
              );
            })}
          </Slider>

          <Slider className="bg-white -m-4 mt-4" key={number++} {...settings}>
            {allDay.map((day) => {
              let btnColor = "";
              // Set btnColor based on the condition
              if (day === selectedDay) {
                btnColor = "bg-[#ECF229]";
              } else {
                btnColor = "bg-[#ddd]";
              }

              return (
                <div className=" ml-2 pb-5  pt-2" key={day}>
                  <button
                    className={`${btnColor}
                     p-2 w-[40px] text-center rounded-md text-black`}
                    style={{ marginTop: day !== selectedDay ? "8px" : "0" }}
                    value={day}
                    onClick={() => setSelectedDay(day)}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </ScheduleWrapper>

      {/* <p>จำนวนวันทั้งหมดคือ : {allDay.length}</p>
      <p>วันที่เลือก คือ {selectedDay}</p>
      <p> เดือนที่เลือก คือ {monthNames[currentMonthNumber]} </p>
      <p>ปีที่เลือกคือ : {currentYear}</p> */}
    </>
  );
};

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ecf229;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: 2px solid #000;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
`;

const ScheduleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MonthWrapper = styled.div`
  margin-left: 0.5rem;
  max-width: 6rem;
`;

export default Schedule;
