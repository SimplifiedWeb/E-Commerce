import { getAuth } from "../authContext/AuthContext";

const Logout = () => {
  const { logout } = getAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
