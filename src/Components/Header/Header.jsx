import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Header = () => {
   const {user, signOutUser} = useContext(AuthContext)
   console.log(user);

   const handleSignOut = () => {
      signOutUser()
      .then(result => console.log(result))
      .catch(error => console.log(error.message))
   }

   return (
      <div className="py-4 border-b-2 border-gray-200">
         <div className="max-w-[85%] mx-auto flex justify-between items-center">
            <Link to="/"><h1 className="font-semibold text-2xl">Brandy</h1></Link>
            <ul className="flex gap-5">
               <li>
                  <NavLink to="/" className="font-medium hover:text-sky-600 transition">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/about" className="font-medium hover:text-sky-600 transition">About</NavLink>
               </li>
               <li>
                  <NavLink to="/" className="font-medium hover:text-sky-600 transition">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/add-product" className="font-medium hover:text-sky-600 transition">Add Product</NavLink>
               </li>
               <li>
                  <NavLink to="/my-cart" className="font-medium hover:text-sky-600 transition">Cart</NavLink>
               </li>
            </ul>
            <div>
               {
                  user ? 
                  <div className="flex gap-3 items-center">
                     <span className="font-medium">{user?.displayName}</span>
                     <img src={user?.photoURL} className="w-8 h-8 rounded-full" alt="user" />
                     <button onClick={handleSignOut} className="py-1.5 px-4 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Log Out</button>
                  </div>
                  :
                  <Link to="/login"><button className="py-1.5 px-4 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Login</button></Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Header;