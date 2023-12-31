import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CategoryCard = ({item}) => {
   const {name, image, _id} = item
   return (
      <div className="p-5 space-y-3 border border-gray-300 transition duration-300 hover:border-sky-500 hover:-rotate-6 rounded-lg" id='category_card'>
         <img src={image} alt="car" className='w-auto h-[120px] mx-auto' />
         <h3 className='text-center font-medium text-2xl'>{name}</h3>
         <div className="text-center" id='category_button'>
            <Link to={`/category/${_id}`}>
               <button className='font-medium border border-sky-500 hover:bg-sky-500 text-sky-500 hover:text-white transition py-1.5 px-4 rounded-full'>Explore</button>
            </Link>
         </div>
      </div>
   );
};

CategoryCard.propTypes = {
   item: PropTypes.object
}

export default CategoryCard;