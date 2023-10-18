import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.init";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const auth = getAuth(app)

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signInUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const info = {createUser}

   return (
      <AuthContext.Provider value={info, signInUser}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;