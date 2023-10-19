import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import LightImg from '../../assets/light.png'
import DarkImg from '../../assets/dark.png'
import LeftMenuBar from '../../assets/left-menu.png'
import CloseMenu from '../../assets/close.png'

const Header = () => {
   const {user, signOutUser, setLightDark, lightDark} = useContext(AuthContext)
   const [showProfile, setShowProfile] = useState(false)
   const [isMenuActive, setIsMenuActive] = useState(false)
   console.log(lightDark);

   const handleSignOut = () => {
      signOutUser()
      .then(result => console.log(result))
      .catch(error => console.log(error.message))
   }

   useEffect(() => {
      if(lightDark === 'dark'){
         document.documentElement.classList.add('dark')
      } else {         
         document.documentElement.classList.remove('dark')
      }
   }, [lightDark])

   const handleLightDark = () => {
      setLightDark(lightDark === 'dark' ? 'light' : 'dark')
   }

   return (
      <div className="py-4 border-b-2 border-gray-200 dark:border-slate-800 dark:bg-[rgba(0,0,0,0.9)] dark:text-white">
         <div className="max-w-[85%] mx-auto flex justify-between items-center">
            <Link to="/"><h1 className="font-semibold text-2xl ">Brandy</h1></Link>            
            <div className="order-first lg:order-none lg:hidden">
               <img src={LeftMenuBar} className={`w-6 h-auto ${isMenuActive ? 'hidden' : 'block'}`} alt="" onClick={() => setIsMenuActive(true)} />
               <img src={CloseMenu} className={`w-5 h-auto ${isMenuActive ? 'block' : 'hidden'}`} alt="" onClick={() => setIsMenuActive(false)} />
               <div className={`border border-gray-200 py-5 px-10 bg-white top-10 rounded-xl absolute ${isMenuActive ? 'block' : 'hidden'} z-10`}>
                  <ul className="flex flex-col gap-5 justify-center" id="header_nav">
                     <li>
                        <NavLink to="/" className="font-medium hover:text-sky-600 transition">Home</NavLink>
                     </li>
                     <li>
                        <NavLink to="/about" className="font-medium hover:text-sky-600 transition">About</NavLink>
                     </li>
                     <li>
                        <NavLink to="/add-product" className="font-medium hover:text-sky-600 transition">Add Product</NavLink>
                     </li>
                     <li>
                        <NavLink to="/my-cart" className="font-medium hover:text-sky-600 transition">Cart</NavLink>
                     </li>
                  </ul>
               </div>
            </div>

            <ul className="hidden md:flex gap-5" id="header">
               <li>
                  <NavLink to="/" className="font-medium hover:text-sky-600 transition">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/about" className="font-medium hover:text-sky-600 transition">About</NavLink>
               </li>
               <li>
                  <NavLink to="/add-product" className="font-medium hover:text-sky-600 transition">Add Product</NavLink>
               </li>
               <li>
                  <NavLink to="/my-cart" className="font-medium hover:text-sky-600 transition">Cart</NavLink>
               </li>
            </ul>
            <div className="flex gap-4 items-center">
               <div>
                  <a className="cursor-pointer" onClick={handleLightDark}>
                     {
                        lightDark === "light" ? <img className="w-6 h-6" src={DarkImg} alt="" /> : <img className="w-6 h-6" src={LightImg} alt="" />
                     }
                  </a>
               </div>
               {
                  user ? 
                  <a onClick={() => setShowProfile(!showProfile)} className="cursor-pointer relative">
                     <img src="https://i.ibb.co/717bgy7/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" className="w-8 h-8 rounded-full" alt="Pic" />
                     <div className={`z-10 mt-1 p-5 drop-shadow-lg rounded-lg absolute right-0 border border-blue-300 bg-white w-36 space-y-2 dark:bg-[rgba(0,0,0,0.9)] ${showProfile ? 'block' : 'hidden'}`}>
                        <p className="font-medium hover:text-blue-500 text-lg">Profile</p>
                        <hr />
                        <button onClick={handleSignOut} className="py-1.5 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all text-sm">Log Out</button>
                     </div>
                  </a>
                  :
                  <Link to="/login"><button className="py-1.5 px-4 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Login</button></Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Header;