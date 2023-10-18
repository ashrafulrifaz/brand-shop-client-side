import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
   const [categoryItem, setCategoryItem] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/category')
         .then(res => res.json())
         .then(data => setCategoryItem(data))
   }, [])

   return (
      <div className="py-10 max-w-[85%] mx-auto">
         <h1 className="text-center text-3xl font-semibold">Vehicle Brands to Choose From</h1>
         <p className='text-center text-lg mt-3'>Discover the ideal ride for your needs among our diverse vehicle selection.<br/> From stylish cars to versatile vans, we have you covered</p>
         <div className="grid grid-cols-4 gap-5 mt-8">
            {
               categoryItem.map((item, idx) => <CategoryCard key={idx} item={item}></CategoryCard>)
            }
         </div>
      </div>
   );
};

export default Categories;