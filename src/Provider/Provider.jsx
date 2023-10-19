import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase.init";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [user, setUser] = useState(null)
   const [userId, setUserId] = useState(null)
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)         
         setLoading(false)
         setUserId(currentUser.uid)
      })
      return () => {
         unsubscribe()
      }
   },[])

   const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
   }

   const info = {user, createUser, signInUser, signOutUser, loading, userId}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;