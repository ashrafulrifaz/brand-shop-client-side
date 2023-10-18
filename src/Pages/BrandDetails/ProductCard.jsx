import { Link } from "react-router-dom";
import Tags from '../../assets/tags.png'

const ProductCard = ({product}) => {
   const {_id, name, image, brandName, price} = product

   return (
      <div className="border border-rose-300 rounded-lg p-5 space-y-4">
         <img src={image} alt="" className="w-auto h-44" />
         <h2 className="text-2xl font-semibold">{name}</h2>
         <div className="flex justify-between items-center">
            <p className="text-lg font-medium">{brandName}</p>
            <p className="text-lg font-medium flex items-center gap-1"><img src={Tags} className="w-6 h-auto" alt="" />{price} Lakh</p>
         </div>
         <div>Rating</div>
         <div className="flex gap-4">
            <Link to={`/products/${_id}`}>
               <button className="py-1.5 px-4 rounded-full bg-sky-500 text-white hover:text-sky-500 hover:bg-transparent border border-sky-500 font-medium hover:scale-105 transition">Details</button>
            </Link>
            <Link>
               <button className="py-1.5 px-4 rounded-full border border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white font-medium hover:scale-105 transition">Update Details</button>
            </Link>
         </div>
      </div>
   );
};

export default ProductCard;