/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { auth, provider } from "../../../../../config/Firebase";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const googleSignIn = () => {
    return signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    // each time it gonna trigger when the authentication state got changed
    const unSubscribeTheListener = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unSubscribeTheListener;
  }, []);

  console.log(currentUser);

  const value = {
    currentUser,
    getAuth,
    register,
    login,
    logout,
    forgetPassword,
    googleSignIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const getAuth = () => {
  return useContext(AuthContext);
};
