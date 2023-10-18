import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };


  const logOut=()=> {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user ke pawa geche", currentUser);
      setUser(currentUser);
      setLoading(false);
      return () => unSubcribe();
    });
  }, []);

  const info = {
    user,
    loading,
    register,
    login,
    googleLogin,
    updateName,
    logOut,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
