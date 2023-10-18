import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const auth = getAuth(app)
   const [user, setUser] = useState(null)

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
      })
      return () => {
         unsubscribe()
      }
   },[auth])

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const signOutUser = () => {
      return signOut(auth)
   }

   const info = {user, createUser, signInUser, signOutUser}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;