import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { auth, firestore } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const initialState = { isAuth: false, user: {} }

const Authcontext = createContext()

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGGED_IN":
      return { isAuth: true, user: payload.user };
    case "SET_LOGGED_OUT":
      return initialState;
    default:
      return state;
  }
}


export default function AuthcontextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isApploading, setIsApploading] = useState(true)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        readuserProfile(user)
      } else {
        setIsApploading(false)
      }
    });
  }, [])
  const readuserProfile = async (user) => {
    const docRef = doc(firestore, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({type:"SET_LOGGED_IN",payload:{user}})
    } else {
      console.log("No such document!");
    }
  }


  return (
    <div>
      <Authcontext.Provider value={{ isApploading, ...state, dispatch }}>
        {children}
      </Authcontext.Provider>
    </div>
  )
}
export const useAuthcontext = () => useContext(Authcontext)
