const Profile_Sidebar = () => {
  const customBtn = {
    textAlign: "left",
  };

  return (
    <>
      <div className="left flex flex-col gap-3 ">
        <div className="first flex flex-col gap-2">
          <h1 className="font-extrabold">Manage My Account</h1>
          <div className="flex flex-col  text-gray-400 pl-4  flex-wrap p-1   gap-2">
            <button style={customBtn} className="text-red-400">
              My Profile
            </button>
            <button style={customBtn}>Address Book</button>
            <button style={customBtn}>My Payment Options</button>
          </div>
        </div>
        <div className="second">
          <h1>My Orders</h1>
          <div className="flex flex-col  text-gray-400 pl-4  flex-wrap p-1   gap-2">
            <button style={customBtn}>My Returns</button>
            <button style={customBtn}>My Cancellations</button>
          </div>
        </div>
        <div className="third">
          <button style={customBtn}>My WishList</button>
        </div>
      </div>
    </>
  );
};

export default Profile_Sidebar;
