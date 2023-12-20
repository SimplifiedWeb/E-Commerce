const Checkout_Form = () => {
  const inputStyle = {
    width: "100%",
    padding: "4px 0px",
    paddingLeft: "8px",
    borderRadius: "3px",
    backgroundColor: "#c8c8c831",
    color: "black",
    fontWeight: "500",
  };
  return (
    <>
      <div className="contact-form relative">
        <h1 className="text-3xl py-4 tracking-wider">Billing Details</h1>
        <form className="w-[390px] py-5  flex flex-col gap-4  text-gray-500">
          <div className="firstInput  flex flex-col gap-1 flex-wrap relative ">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[23%]">*</span>
          </div>
          <div className="secondInput flex flex-col gap-1 flex-wrap relative ">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[34%]">*</span>
          </div>
          <div className="thirdInput flex flex-col gap-1 flex-wrap relative">
            <label htmlFor="thirdInput">Street Address</label>
            <input
              type="text"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[32%]">*</span>
          </div>
          <div className="fourthInput flex flex-col gap-1 flex-wrap relative">
            <label htmlFor="firstName">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            {/* <span className="text-red-400 absolute top-[0%] left-[25.5%]">
                *
                </span> */}
          </div>
          <div className="fifthInput flex flex-col gap-1 flex-wrap relative">
            <label htmlFor="fifthInput">Town / City</label>
            <input
              type="text"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[24%]">*</span>
          </div>
          <div className="sixthInput flex flex-col gap-1 flex-wrap relative">
            <label htmlFor="sixthInput">Phone Number</label>
            <input
              type="number"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[32.5%]">
              *
            </span>
          </div>
          <div className="seventhInput flex flex-col gap-1 flex-wrap relative">
            <label htmlFor="seventhInput">Email Address</label>
            <input
              type="email"
              className=" focus:outline-none  "
              style={inputStyle}
            />
            <span className="text-red-400 absolute top-[0%] left-[30.3%]">
              *
            </span>
          </div>
          <div className="EightInput flex gap-3 justify-between items-center flex-wrap relative">
            <input
              type="checkbox"
              style={{
                width: "22px",
                height: "22px",
                accentColor: "red",
              }}
            />
            <span className="w-[80%] text-sm flex-1 ">
              Save this information for faster check-out next time
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout_Form;
