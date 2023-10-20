import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import BrandSlider from './BrandSlider';
import { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import NotFound from '../../assets/not-found.gif'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { AuthContext } from '../../Provider/Provider';

const BrandDetails = () => {
   const {loading, products, sliderItems} = useContext(AuthContext)
   const {id} = useParams()
   const [categoryItem, setCategoryItem] = useState([])

   useEffect(() => {
      fetch(`https://brand-shop-server-p6vhov71m-ashraful-islams-projects.vercel.app/category/${id}`)
         .then(res => res.json())
         .then(data => setCategoryItem(data))
   }, [id]) 
   
   const currentProduct = products.filter(product => categoryItem.name === product.brandName)
   const currentSlider = sliderItems.filter(item => categoryItem.name == item.brand)
   
   return (
      <div>
         {
            loading ? <div className="flex h-[85vh] items-center">
            <div className="custom-loader"></div>
         </div> : <span></span>
         }
         {
            currentProduct.length > 0 ?
            <div>
               <div>
                  <Swiper
                     spaceBetween={30}
                     centeredSlides={true}
                     autoplay={{
                        delay: 4500,
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
                        <SwiperSlide key={idx} className='-mt-[30px]'>
                           <BrandSlider item={item}></BrandSlider>
                        </SwiperSlide>)
                     }
                  </Swiper>
                  <div className="max-w-[85%] mx-auto py-5">
                     <h2 className='text-3xl font-semibold'>Choose Your Favourite One</h2>
                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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