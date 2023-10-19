
const CartCard = ({filteredData, cartData, setCardData}) => {
   const {_id, image, name, brandName, price} = filteredData

   const handleDelete = (id) => {
      fetch(`http://localhost:5000/cart/${id}`, {
         method: "DELETE"
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
               const remainingCartData = cartData.filter(data => data._id !== id)
               setCardData(remainingCartData)
            }
            
         })
   }
   
   return (
      <div id="cart_item" className="p-4 flex gap-10 items-center border-t border-rose-500">
         <div className="w-[10%]">
            <img src={image} className="w-28" alt="" />
         </div>
         <div className="flex justify-between w-[85%]">
            <div className="space-y-1">
               <h2 className="text-xl font-semibold">{name}</h2>
               <p className="inline-block bg-rose-200 rounded-lg px-3 py-0.5 text-rose-600 font-semibold">{brandName}</p>
            </div>
            <div className="space-y-1">
               <h3 className="font-medium text-lg">Tk {price} Lakh</h3>
               <button onClick={() => handleDelete(_id)} className="font-medium text-rose-500 hover:bg-rose-500 hover:text-white transition-all py-1 px-4 border border-rose-500 rounded-full ">Delete</button>
            </div>
         </div>
      </div>
   );
};

export default CartCard;