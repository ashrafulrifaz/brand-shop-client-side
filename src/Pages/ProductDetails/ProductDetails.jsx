import { useContext } from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const ProductDetails = () => {
   const {user} = useContext(AuthContext)
   const product = useLoaderData()
   const {name, image, details, brandName, price, type, rating} = product

   const handleAddCart = () => {
      const cartProduct = {name, image, brandName, price, type, id: user.uid}
      fetch('https://car-brand-shop-server.vercel.app/cart', {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(cartProduct)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully added to cart',
            showConfirmButton: false,
            timer: 1500
         })
      })
   }

   return (
      <div className="py-12 max-w-[90%] lg:max-w-[85%] mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <img src={image} alt="" />
            </div>
            <div className="space-y-4">
               <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{name}</h1>
               <div className="space-y-2">
                  <h3 className="text-xl font-medium">Brand: {brandName}</h3>
                  <h3 className="text-xl font-medium">Car Type: {type}</h3>
                  <h3 className="text-xl font-medium">Price: {price} Lakh</h3>
               </div>
               <div className="flex items-center gap-2">
                  <Rating
                     emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-yellow-400">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                     ></path>
                     </svg>}
                     fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-yellow-400">
                     <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                     ></path>
                     </svg>}
                     fractions={2}
                     initialRating={rating}
                     readonly
                  />
                  <span className="text-lg font-medium">{rating}</span>
               </div>
               <button onClick={handleAddCart} className="py-1.5 px-4 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Add To Cart</button>
            </div>
         </div>
         <hr className="my-8 h-2" />
         <p className="text-lg text-slate-800"><span className="font-semibold text-xl">Details:</span> {details}</p>
      </div>
   );
};

export default ProductDetails;