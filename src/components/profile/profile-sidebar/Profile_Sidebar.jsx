import { Link } from "react-router-dom";

const Profile_Sidebar = ({ handleSelection, handleProfileOptions }) => {
  const customBtn = {
    textAlign: "left",
  };

  return (
    <>
      <div className="left flex flex-col gap-3 sm:p-2 sm:pb-10 sm:shadow-lg sm:bg-white sm:gap-7">
        <div className="first flex flex-col gap-2 ">
          <div className="flex gap-5">
            <h1 className="font-extrabold sm:pt-2">Manage My Account</h1>
            <button
              className="mb-4 lg:hidden sm:pt-2 2xl:hidden sm:block md:block"
              onClick={handleProfileOptions}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[28px] h-[28px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col  sm:mt-[-15px]  text-gray-400 pl-4  flex-wrap p-1   gap-2">
            <button
              style={customBtn}
              onClick={() => handleSelection("profile")}
              className="text-red-400"
            >
              My Profile
            </button>
            <button
              style={customBtn}
              onClick={() => handleSelection("address")}
            >
              Address Book
            </button>
            <button
              style={customBtn}
              onClick={() => handleSelection("payment")}
            >
              My Payment Options
            </button>
          </div>
        </div>
        <div className="second sm:mt-[-12px] ">
          <h1>My Orders</h1>
          <div className="flex flex-col  text-gray-400 pl-4  flex-wrap p-1   gap-2">
            <button
              style={customBtn}
              onClick={() => handleSelection("returns")}
            >
              My Returns
            </button>
          </div>
        </div>
        <div className="third flex flex-col gap-2 sm:mt-[-10px] mt-2">
          <Link to="/wishList">
            <button style={customBtn}>My WishList</button>
          </Link>
          <Link to="/cancelOrders">
            <button className="text-black">My Cancellations</button>
          </Link>
          <Link to="/cart">
            <button className="text-black">My Cart Items</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile_Sidebar;
