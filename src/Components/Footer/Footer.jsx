import { Link, NavLink } from "react-router-dom";

const Footer = () => {
   return (
      <div className="py-10 border-t-2 border-gray-200">
         <div className="max-w-[85%] mx-auto flex justify-between">
            <Link to="/"><h1 className="font-semibold text-2xl">Brandy</h1></Link>
            <ul className="flex flex-col gap-3">
               <h2 className="text-lg font-semibold">Useful Links</h2>
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
                  <NavLink to="/my-cart" className="font-medium hover:text-sky-600 transition">My Cart</NavLink>
               </li>
            </ul>
            <ul className="flex flex-col gap-3">
               <h2 className="text-lg font-semibold">Product Categories</h2>
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
                  <NavLink to="/my-cart" className="font-medium hover:text-sky-600 transition">My Cart</NavLink>
               </li>
            </ul>
            <div>
               
            </div>
         </div>
      </div>
   );
};

export default Footer;