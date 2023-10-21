import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
   const [categoryItem, setCategoryItem] = useState([])

   useEffect(() => {
      fetch('https://my-car-brand-shop-server.vercel.app/category')
         .then(res => res.json())
         .then(data => setCategoryItem(data))
   }, [])

   return (
      <div className="py-10 max-w-[90%] lg:max-w-[85%] mx-auto">
         <h1 className="text-center text-2xl md:text-3xl font-semibold">Vehicle Brands to Choose From</h1>
         <p className='text-center md:text-lg mt-3 dark:text-[rgba(255,255,255,0.9)]'>Discover the ideal ride for your needs among our diverse vehicle selection.<br/> From stylish cars to versatile vans, we have you covered</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-8">
            {
               categoryItem.map((item, idx) => <CategoryCard key={idx} item={item}></CategoryCard>)
            }
         </div>
      </div>
   );
};

export default Categories;