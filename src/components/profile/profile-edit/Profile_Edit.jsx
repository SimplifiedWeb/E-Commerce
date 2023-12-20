const Profile_Edit = () => {
  const inputStyle = {
    width: "100%",
    padding: "6px 0px",
    paddingLeft: "8px",
    borderRadius: "3px",
    backgroundColor: "#c8c8c831",
    color: "black",
    fontWeight: "500",
  };
  return (
    <>
      <div className="profile-edit ">
        <h1 className="text-red-400 text-[17px] font-extrabold p-2">
          Edit Your Profile
        </h1>
        <form className="absolute left-[10%] w-[800px]  p-3 ">
          <div className="first-section w-full flex flex-wrap gap-7">
            <div className="firstInput  flex flex-col gap-1 w-[320px] flex-wrap relative ">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
              />
            </div>
            <div className="firstInput  flex flex-col gap-1 flex-wrap w-[320px] relative ">
              <label htmlFor="firstName">Last Name</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
              />
            </div>
            <div className="firstInput  flex flex-col gap-1 flex-wrap w-[320px] relative ">
              <label htmlFor="firstName">Email </label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
              />
            </div>
            <div className="firstInput  flex flex-col gap-1 flex-wrap w-[320px] relative ">
              <label htmlFor="firstName">Address</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
              />
            </div>
            <div className="firstInput  flex flex-col  flex-wrap w-[87%] relative ">
              <label htmlFor="firstName" className="mb-1">
                Password Changes
              </label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                placeholder="Current Password"
              />
            </div>
            <div className="firstInput  flex flex-col flex-wrap w-[87%] relative ">
              {/* <label htmlFor="firstName">Address</label> */}
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                placeholder="New Password"
              />
            </div>
            <div className="firstInput  flex flex-col  flex-wrap w-[87%] relative ">
              {/* <label htmlFor="firstName">Address</label> */}
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                placeholder="Confirm New Password"
              />
            </div>
            <div className="buttons flex justify-end items-end w-full gap-2 mr-[100px]">
              <button className="w-[200px]  p-3 rounded-md hover:scale-[0.97] ">
                Cancel
              </button>
              <button className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile_Edit;
