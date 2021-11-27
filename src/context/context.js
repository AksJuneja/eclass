import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider} from "../lib/firebase";
import db from "../lib/firebase";

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}



export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInMail, setLoggedInMail] = useState(null);
  const [isTeacher, setIsTeacher] = useState(false);

  const login = () => {
    auth.signInWithPopup(provider);
    localStorage.setItem("isTeacher",isTeacher);
    setIsTeacher(localStorage.getItem("isTeacher"));
  }

  const logout = () =>{
    auth.signOut();
  } 

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if (authUser) {
        setLoggedInMail(authUser.email);
        setLoggedInUser(authUser);
        //  localStorage.setItem("isTeacher",isTeacher);
        
      } else {
        setLoggedInMail(null);
        setLoggedInUser(null);
      }
    //  setIsTeacher(localStorage.getItem("isTeacher"));
   });

    return () => unsubscribe();
  }, []);
  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    login,
    logout,
    loggedInMail,
    loggedInUser,
    isTeacher,
    setIsTeacher,
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
};