import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Card } from "flowbite-react";
import styled from "styled-components";

//input data here
const dataTips = [
  {
    id: 1,
    img: "/src/assets/images/tips/piece-your-workout-together.webp",
    topic: "Piece your workout together.",
    details:
      "You do not need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.",
  },
  {
    id: 2,
    img: "/src/assets/images/tips/exercise-with-friend.webp",
    topic: "Exercise with a friend.",
    details:
      "Finding a workout partner can help keep you on track and motivate you to get out the door.",
  },
  {
    id: 3,
    img: "/src/assets/images/tips/keep-it-brisk.webp",
    topic: "Keep it brisk.",
    details:
      "When you walk, make it brisk, since this may help control weight better than walking at a leisurely pace. What is brisk enough? Walk as though you are meeting someone for lunch and you are a little late.",
  },
  {
    id: 4,
    img: "/src/assets/images/tips/move-your-feet-before-you-eat.webp",
    topic: "Move your feet before you eat.",
    details:
      "Hit the gym or go for a 20-minute walk with coworkers, and have lunch afterward.",
  },
  {
    id: 5,
    img: "/src/assets/images/tips/try-a-pedometer.webp",
    topic: "Try a pedometer.",
    details:
      "Step-counters (pedometers) are an easy, inexpensive way to motivate yourself to be active. Work up to 10,000 steps per day.",
  },
  {
    id: 6,
    img: "/src/assets/images/tips/turn-off-tv.webp",
    topic: "Turn off the TV, computer, and smart phone.",
    details:
      "Cutting back on screen time is a great way to curb your “sit time.” Move around instead, by visiting the gym or even cleaning the house.",
  },
  {
    id: 7,
    img: "/src/assets/images/tips/trun-sit-time-into-fit-time.webp",
    topic: "Turn sit time into fit time.",
    details:
      "Try to combine cardiovascular exercise with a sedentary activity that you already do. For example, try doing simple exercises while watching TV, or set a reminder at work to get up and walk a few minutes every hour.",
  },
  {
    id: 8,
    img: "/src/assets/images/tips/sign-up-for-a-class.webp",
    topic: "Sign up for a class.",
    details:
      "Check out the fitness course schedule at your local gym or community center, or the dance or yoga class schedule at a nearby studio. You may find that having the structure of a class helps you learn a new activity and keeps you on track.",
  },
  {
    id: 9,
    img: "/src/assets/images/tips/plan-exercise-into-your-day.webp",
    topic: "Plan exercise into your day.",
    details:
      "Set aside a specific time in your schedule to exercise and put it in your planner.",
  },
  {
    id: 10,
    img: "/src/assets/images/tips/reward-yourself.webp",
    topic: "Reward yourself.",
    details:
      "Set short-term goals—and reward yourself for achieving them. Try targeting a specific event, such as a road race or a walk-for-charity, to participate in—this can help keep you motivated.",
  },
];

const Tips = () => {
  //default T for show component first
  const [isVisible, setIsVisible] = useState(true);

  //created random Tips
  const randomArrayTips = Math.floor(Math.random() * dataTips.length);
  const randomTips = dataTips[randomArrayTips];

  //created func delete
  const handleDelete = () => {
    // hind Tips
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // show nullไม่มีไรเลย if isVisible is false
  }

  return (
    // <TipWrapper key={randomTips.id}>
    //   <TipImage>
    //     <img className="" src={randomTips.img} alt="picture_tips" />
    //   </TipImage>

    //   <div className="w-[65%] p-[8px] ">
    //     <p className="font-bold text-[16px]">{randomTips.topic}</p>
    //     <p className="text-[9px]">{randomTips.details}</p>
    //   </div>
    //   <FaXmark className="text-[#DDDDDD]" onClick={handleDelete} />
    // </TipWrapper>
    <Card className="border-black border-2" imgSrc={randomTips.img} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {randomTips.topic}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {randomTips.details}
      </p>
    </Card>
  );
};

export default Tips;
