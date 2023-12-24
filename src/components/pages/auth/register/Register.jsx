// import { useState } from "react";
import { Link } from "react-router-dom";
import InputTargets from "../../../hooks/useInput/InputTargets";
import { getAuth } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const initialValue = {
    fullName: "",
    email: "",
    password: "",
  };
  const { register } = getAuth();
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      await register(email, password);
      alert("SuccessFully added");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit } = InputTargets(
    initialValue,
    onSubmit
  );

  return (
    <>
      <div className="register min-h-[100vh] flex flex-wrap relative">
        <div className="left flex-1">
          <img
            src="/images/auth/auth.png"
            alt="auth-image"
            className="w-[720px] h-[650px] absolute left-[-10%] top-[5%]"
          />
        </div>
        <div className="right flex-2 flex flex-col gap-5 justify-center items-center absolute top-[8%] left-[57%]">
          <div className="form  p-2  flex flex-wrap flex-col gap-5 justify-center items-center  w-[350px]">
            <div className="first-section w-full flex flex-col gap-4">
              <h1 className="text-3xl tracking-wider ">Create an account</h1>
              <h1 className="text-gray-600">Enter your details below</h1>
            </div>
            <div className="second-section flex flex-col w-full p-1 flex-wrap gap-5 ">
              <input
                type="text"
                name="fullName"
                placeholder="Name"
                className="focus:outline-none w-full border-b-[1.6px] border-gray-400 py-2"
                value={values?.fullName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email or Phone Number"
                className="focus:outline-none border-b-[1.6px] border-gray-400 py-2"
                value={values?.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="focus:outline-none border-b-[1.6px] border-gray-400 py-2"
                value={values?.password}
                onChange={handleChange}
              />
            </div>
            <div className="third-section w-full">
              <button
                type="submit"
                className="w-full bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
                onClick={handleSubmit}
              >
                Create an Account
              </button>
              <button className="bg-inherit w-full p-1 mt-4 px-3 border-[1.3px] border-gray-400 flex justify-center items-center gap-2 hover:bg-gray-200">
                <span>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="google"
                    className="w-[40px] h-[40px]"
                  />
                </span>
                Sign up with Google
              </button>
            </div>
          </div>
          <div className="sign-in">
            <div className="flex gap-3 mt-[-8px] justify-center items-center">
              <button className=" font-light">Already have account?</button>
              <button className="underline mb-1">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
