// import Swiper from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import BrandSlider from './BrandSlider';
import { useEffect, useState } from 'react';

const BrandDetails = () => {
   const {id} = useParams()
   const [categoryItem, setCategoryItem] = useState([])
   console.log(categoryItem, id);

   useEffect(() => {
      fetch(`http://localhost:5000/category/${id}`)
      .then(res => res.json())
      .then(data => setCategoryItem(data))
   }, [id]) 

   return (
      <div>
         <div>
            <h1>hello</h1>
            <Swiper
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
            </Swiper>
         </div>
      </div>
   );
};

export default BrandDetails;