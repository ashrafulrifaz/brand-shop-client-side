import { Link } from "react-router-dom";

const CategoryCard = ({item}) => {
   const {name, image, _id} = item
   return (
      <div className="p-5 space-y-3 border border-gray-300 transition duration-300 hover:border-rose-500 hover:-rotate-6 rounded-lg" id='category_card'>
         <img src={image} alt="car" className='w-auto h-[120px] mx-auto' />
         <h3 className='text-center font-medium text-2xl'>{name}</h3>
         <div className="text-center" id='category_button'>
            <Link to={`/category/${_id}`}>
               <button className='font-medium border border-rose-500 hover:bg-rose-500 hover:text-white transition py-1.5 px-4 rounded-full'>Explore</button>
            </Link>
         </div>
      </div>
   );
};

export default CategoryCard;