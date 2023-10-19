import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

const Review = () => {
   const [reviewData, setReviewData] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/review')
         .then(res => res.json())
         .then(data => setReviewData(data))
   }, [])
   return (
      <div className="py-12 mx-auto max-w-[90%] md:max-w-[85%]">
         <p className='text-sm font-semibold tracking-widest text-sky-500 uppercase text-center'>Review</p>
         <h2 className="text-center font-bold text-2xl md:text-4xl">Client Review</h2>
         <p className="text-center md:text-lg mt-3 font-medium">What people think about us</p>
         <div className="mt-8 md:hidden" id="review">
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
               className="mySwiper mt-4 flex"
            >
               {
                  reviewData.map((review, idx) => <SwiperSlide className="w-full dark:bg-[#191919]" key={idx}><ReviewCard review={review}></ReviewCard></SwiperSlide>)
               }
            </Swiper>
         </div>
         <div className="mt-8 hidden md:block lg:hidden" id="review">
         <Swiper
               slidesPerView={2}
               spaceBetween={30}
               autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
               }}
               pagination={{
               clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper mt-4 flex"
            >
               {
                  reviewData.map((review, idx) => <SwiperSlide className="w-full dark:bg-[#191919]" key={idx}><ReviewCard review={review}></ReviewCard></SwiperSlide>)
               }
            </Swiper>
         </div>
         <div className="hidden lg:block" id="review">
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
               }}
               pagination={{
               clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper mt-4 flex"
            >
               {
                  reviewData.map((review, idx) => <SwiperSlide className="w-full dark:bg-[#191919]" key={idx}><ReviewCard review={review}></ReviewCard></SwiperSlide>)
               }
            </Swiper>
         </div>
      </div>
   );
};

export default Review;