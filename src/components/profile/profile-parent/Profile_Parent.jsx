import { Link } from "react-router-dom";
import Profile_Edit from "../profile-edit/Profile_Edit";
import Profile_Sidebar from "../profile-sidebar/Profile_Sidebar";
import { useState } from "react";
import My_Address_Book from "../my-address-book/My_Address_Book";
import My_Payment_Options from "../my-payment-options/My_Payment_Options";
import My_Returns from "../../cancel-orders/my-returns/My_Returns";
const Profile_Parent = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const handleSelection = (element) => {
    setActiveComponent(element);
  };

  const handleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <>
      <div className="profile min-h-[100vh] relative sm:mt-[20%]">
        <div className="route ">
          <div className="route flex gap-2 w-full justify-between absolute top-[4%]   left-[3%]">
            <div className="flex gap-2">
              <Link to="/">
                <button className="text-[#868686]">Home</button>
              </Link>
              <button className="text-[#868686]">/</button>
              <button>My Account</button>
            </div>

            <div className="name mr-12 flex justify-center items-center gap-3 ">
              <span className="text-red-400">
                Welcome! <span className="text-black">Faizan</span>
              </span>
              <button
                className="lg:hidden 2xl:hidden sm:block  "
                onClick={handleProfileOptions}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`sidebar-section sm:bg-white absolute top-[13%] left-[4%]  ${
            showProfileOptions
              ? "bg-white sm:block z-50 sm:top-[4%] sm:left-[45%]"
              : "sm:hidden"
          }`}
        >
          <Profile_Sidebar
            handleSelection={handleSelection}
            handleProfileOptions={handleProfileOptions}
          />
        </div>
        <div className="right absolute left-[32%] top-[13%] sm:left-0 sm:top-[10%]">
          {activeComponent === "profile" && <Profile_Edit />}
          {activeComponent === "address" && (
            <My_Address_Book
              name="Address Book"
              handleProfileOptions={handleProfileOptions}
            />
          )}
          {activeComponent === "returns" && (
            <My_Returns
              name="Returns Orders"
              handleProfileOptions={handleProfileOptions}
            />
          )}
          {activeComponent === "payment" && (
            <My_Payment_Options
              name="Payment Options"
              handleProfileOptions={handleProfileOptions}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile_Parent;
