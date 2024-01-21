import React from "react";
import { FloatingLabel } from "flowbite-react";
const Account = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 input-wrapper bg-white p-4 ">
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Weight"
          />
          <div className="icon absolute top-2 right-4">
            <img src="/src/assets/images/icon/weight-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
