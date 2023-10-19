import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Tags from '../../assets/tags.png'
import Rating from "react-rating";

const ProductCard = ({product}) => {
   const {_id, name, image, brandName, price, rating} = product

   return (
      <div className="border border-sky-300 rounded-lg p-5 space-y-4">
         <img src={image} alt="" className="w-auto h-44" />
         <h2 className="text-2xl font-semibold">{name}</h2>
         <div className="flex justify-between items-center">
            <p className="text-lg font-medium">{brandName}</p>
            <p className="text-lg font-medium flex items-center gap-1"><img src={Tags} className="w-6 h-auto" alt="" />{price} Lakh</p>
         </div>
         <div className="flex items-center gap-2">
            <Rating
               emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-400">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
               ></path>
               </svg>}
               fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
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
         <div className="flex gap-4">
            <Link to={`/products/${_id}`}>
               <button className="py-1.5 px-4 rounded-full bg-sky-500 text-white hover:text-sky-500 hover:bg-transparent border border-sky-500 font-medium hover:scale-105 transition">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
               <button className="py-1.5 px-4 rounded-full border border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white font-medium hover:scale-105 transition">Update Details</button>
            </Link>
         </div>
      </div>
   );
};

ProductCard.propTypes = {
   product: PropTypes.object
}

export default ProductCard;