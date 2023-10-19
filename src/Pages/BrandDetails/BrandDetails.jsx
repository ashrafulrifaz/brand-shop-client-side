import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import BrandSlider from './BrandSlider';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import NotFound from '../../assets/not-found.gif'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

const BrandDetails = () => {
   const {id} = useParams()
   const [categoryItem, setCategoryItem] = useState([])
   const [products, setProducts] = useState([])
   const [sliderItems, setSliderItems] = useState([])

   useEffect(() => {
      fetch(`http://localhost:5000/category/${id}`)
         .then(res => res.json())
         .then(data => setCategoryItem(data))

      fetch(`http://localhost:5000/products`)
         .then(res => res.json())
         .then(data => setProducts(data))

      fetch('http://localhost:5000/slider')
         .then(res => res.json())
         .then(data => setSliderItems(data))
   }, [id]) 
   
   const currentProduct = products.filter(product => categoryItem.name === product.brandName)
   const currentSlider = sliderItems.filter(item => categoryItem.name === item.brand)
   console.log(currentSlider);

   return (
      <div>
         {
            currentProduct.length > 0 ?
            <div>
               <div>
                  <Swiper
                     spaceBetween={30}
                     centeredSlides={true}
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                     }}
                     pagination={{
                        clickable: true,
                     }}
                     navigation={true}
                     modules={[Autoplay, Navigation]}
                     className="mySwiper"
                  >
                     {
                        currentSlider.map((item, idx) => 
                        <SwiperSlide key={idx}>
                           <BrandSlider item={item}></BrandSlider>
                        </SwiperSlide>)
                     }
                  </Swiper>
                  <div className="max-w-[85%] mx-auto py-12">
                     <h2 className='text-3xl font-semibold'>Choose Your Favourite One</h2>
                     <div className="mt-8 grid grid-cols-3 gap-5">
                        {
                           currentProduct.map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
                        }               
                     </div>
                  </div>
               </div>
            </div>
            :            
            <div className='flex flex-col justify-center py-10'>
               <p className='text-center text-2xl font-semibold'>No Cars Found</p>
               <img src={NotFound} alt="not found" className='w-28 mx-auto' />
            </div>
         }
      </div>
      
         
   );
};

export default BrandDetails;