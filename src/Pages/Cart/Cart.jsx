import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import CartCard from "./CartCard";

const Cart = () => {
   const loadedCartData = useLoaderData()
   const [cartData, setCardData] = useState(loadedCartData)
   const {userId} = useContext(AuthContext)

   const myCartData = cartData.filter(data => data.id === userId)
   console.log(myCartData, userId, cartData);
   return (
      <div className="py-10 mx-auto max-w-[85%]">
         <h1 className="text-2xl font-semibold">My added Cars</h1>
         <div className="mt-5 border border-rose-300 py-5 rounded-lg">
            {
               myCartData.length > 0 ?
               <div>
                  {
                     myCartData.map((filteredData, idx) => <CartCard key={idx} filteredData={filteredData} setCardData={setCardData} cartData={cartData}></CartCard>)
                  }
               </div>
               :
               <p className="text-center font-semibold text-xl">Nothing added to this cart</p>
            }
         </div>
      </div>
   );
};

export default Cart;