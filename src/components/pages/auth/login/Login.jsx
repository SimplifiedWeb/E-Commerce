import { Link, useNavigate } from "react-router-dom";
import InputTargets from "../../../hooks/useInput/InputTargets";
import { getAuth } from "../authContext/AuthContext";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../../../config/Firebase";

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  };
  const { login } = getAuth();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { email, password } = values;
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log("Credential are wrong");
    }
  };

  const { values, handleSubmit, handleChange } = InputTargets(
    initialValue,
    onSubmit
  );

  return (
    <>
      <div className="login min-h-[100vh] flex flex-wrap relative sm:min-h-[60vh] overflow-hidden">
        <div className="left flex-1 sm:hidden">
          <img
            src="/images/auth/auth.png"
            alt="auth-image"
            className="w-[720px] h-[65  0px] absolute left-[-10%] top-[5%]"
          />
        </div>
        <div className="right flex-2 flex flex-col gap-5 justify-center items-center absolute top-[22%] left-[57%] sm:top-[22%] sm:left-[5%]">
          <div className="form  p-2  flex flex-wrap flex-col gap-7 justify-center items-center  w-[350px] ">
            <div className="first-section w-full flex flex-col mb-[-15px] gap-4">
              <h1 className="text-3xl tracking-wider ">Log in to Exclusive</h1>
              <h1 className="text-gray-600">Enter your details below</h1>
            </div>
            <div className="second-section flex flex-col w-full p-1 flex-wrap gap-5 ">
              <input
                type="text"
                placeholder="Email or Phone Number"
                onChange={handleChange}
                values={values?.email}
                name="email"
                className="focus:outline-none border-b-[1.6px]   border-gray-400 py-2"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                values={values?.password}
                name="password"
                className="focus:outline-none border-b-[1.6px] border-gray-400 py-2"
              />
            </div>
            <div className="third-section w-full flex justify-around  items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
              >
                Log in
              </button>
              <button className="bg-inherit text-[#db4444] w-full  mt-4  mr-[-30px]   ">
                <Link to="/forget-password">Forget Password?</Link>
              </button>
            </div>
          </div>
          <div className="sign-in">
            <div className="flex gap-3 mt-[-8px] justify-center items-center">
              <button className=" font-light">Create an account?</button>
              <button className="underline mb-1">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
