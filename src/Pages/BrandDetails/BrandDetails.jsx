// import Swiper from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
// import BrandSlider from './BrandSlider';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const BrandDetails = () => {
   const {id} = useParams()
   const [categoryItem, setCategoryItem] = useState([])
   const [products, setProducts] = useState([])

   useEffect(() => {
      fetch(`http://localhost:5000/category/${id}`)
         .then(res => res.json())
         .then(data => setCategoryItem(data))

      fetch(`http://localhost:5000/products`)
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [id]) 
   
   const currentProduct = products.filter(product => categoryItem.name === product.brandName)

   return (
      <div>
         <div>
            <h1>hello</h1>
            {/* <Swiper
               slidesPerView={1}
               spaceBetween={30}
               autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
               }}
               pagination={{
               clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper mt-10"
            >
               {
                  categoryItem.map((review, idx) => <SwiperSlide className="w-full" key={idx}><BrandSlider review={review}></BrandSlider></SwiperSlide>)
               }
            </Swiper> */}
         </div>
         <div className='max-w-[85%] mx-auto py-10'>
            <div className="grid grid-cols-3 gap-5">
               {
                  currentProduct.map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
               }               
            </div>
         </div>
      </div>
   );
};

export default BrandDetails;