
import { Datepicker, Accordion, FloatingLabel } from "flowbite-react";
import React, { useState } from "react";

const mockdata = {
  email : 'current@example.com'

}

const Account = ( ) => {
  const [currentEmail, setCurrentEmail] = useState(mockdata.email);
  const [newEmail, setNewEmail] = useState("");
  //wait to writh recheck confirmed email
  // const [confirmNewEmail, setConfirmNewEmail] = useState("");

  function handleChangeEmail() {
    if (currentEmail && newEmail ) {
      console.log(`Changing email from ${currentEmail} to ${newEmail}`);
      // You might also want to update your state or trigger any necessary actions
      setCurrentEmail(newEmail);
      setNewEmail('');
      setConfirmNewEmail('');
    } else {
      // Handle error or provide user feedback for incomplete data
      console.error('Please provide both current and new email addresses');
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 input-wrapper bg-white p-4 ">
        <h2>Personal Information</h2>
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Weight"
          />
          <div className="icon absolute top-2 right-4">
            {/* <img
              src="/src/assets/images/icon/weight-icon.svg"
              alt="weight-icon"
            /> */}
          </div>
        </div>
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Height"
          />
          <div className="icon absolute top-2 right-4">
            {/* <img
              src="/src/assets/images/icon/Height-icon.png"
              alt="height-icon"
            /> */}
          </div>
        </div>
        {/* select gender */}
        <>
          <select id="gender" name="Gender" required>
            <>
              <img src="/src/assets/images/icon/Height-icon.png" alt="" />
            </>

            <option value="male"> 
            <img></img>Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </>
        {/* birth date */}
        <div>
          <Datepicker
            autoHide={true}
            icon={false}
            showClearButton={false}
            showTodayButton={false}
          />
        </div>
        {/* change email */}
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>Change Email</Accordion.Title>
            <Accordion.Content>
              <p>Current Email</p>
              <input 
                className="border border-black" 
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                readOnly 
                />
              <p>New Email</p>
              <input 
                className="border border-black"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)} />
              <p>Confirm New Email</p>
              <input 
                className="border border-black" 
                />
              <button
                onClick={handleChangeEmail}>
                  Save</button>
            </Accordion.Content>
          </Accordion.Panel>
          {/* change password */}
          <Accordion.Panel>
            <Accordion.Title>Change Password</Accordion.Title>
            <Accordion.Content>
              <p>Current Password</p>
              <input type="password" className="border border-black" />
              <p>New Password</p>
              <input type="password" className="border border-black" />
              <p>Confirm New Password</p>
              <input type="password" className="border border-black" />
              <button>Save</button>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
          {/* delete account */}
        <button
          id="delete-account"
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
