// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init({
//    duration: 2000, 
//    delay: 250, 
//    offset: 100,
// })

const ReviewCard = ({review}) => {
   const {name, image, review_text, profession} = review

   return (
      <div className="p-5 rounded-xl border border-violet-500">
         <div className="flex gap-3 items-center">
            <img src={image} className="w-12 h-12 rounded-full" alt="user" />
            <div>
               <h5 className="font-medium text-lg">{name}</h5>
               <p className="text-slate-700">{profession}</p>
            </div>
         </div>
         <hr className="my-3 w-3/4" />
         <p className="text-slate-700">{review_text}</p>
      </div>      
   );
};

export default ReviewCard;