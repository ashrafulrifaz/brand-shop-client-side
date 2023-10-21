import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartCard = ({filteredData, cartData, setCardData}) => {
   const {_id, image, name, brandName, price} = filteredData

   const handleDelete = (id) => {
      fetch(`https://my-car-brand-shop-server.vercel.app/cart/${id}`, {
         method: "DELETE"
      })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Item Deleted from cart',
                  showConfirmButton: false,
                  timer: 1500
               })
               const remainingCartData = cartData.filter(data => data._id !== id)
               setCardData(remainingCartData)
            }
         })
   }
   
   return (
      <div id="cart_item" className="p-4 flex gap-10 items-center border-t border-sky-500">
         <div className="w-[45%] md:w-[10%]">
            <img src={image} className="w-28" alt="" />
         </div>
         <div className="flex justify-between w-[50%] md:w-[85%]">
            <div className="hidden md:block space-y-1">
               <h2 className="text-xl font-semibold">{name}</h2>
               <p className="inline-block bg-sky-200 rounded-lg px-3 py-0.5 text-sky-600 font-semibold">{brandName}</p>
            </div>
            <div className="space-y-1">
               <h3 className="font-medium text-lg">Tk {price} Lakh</h3>
               <button onClick={() => handleDelete(_id)} className="font-medium text-red-500 hover:bg-red-500 hover:text-white transition-all py-1 px-4 border border-red-500 rounded-full ">Delete</button>
            </div>
         </div>
      </div>
   );
};

CartCard.propTypes = {
   filteredData: PropTypes.object,
   cartData: PropTypes.object,
   setCardData: PropTypes.object
}

export default CartCard;