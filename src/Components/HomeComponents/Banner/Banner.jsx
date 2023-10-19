import bannerCar  from '../../../assets/home-banner.png'

const Banner = () => {
   return (
      <div className=''>
         <div className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center gap-8 max-w-[90%] md:max-w-[85%] mx-auto py-10">
            <div className='text-center md:text-left'>
               <p className='text-sm font-semibold tracking-widest text-sky-500'>WELCOME</p>
               <h1 className="font-semibold text-3xl md:text-5xl leading-snug dark:text-white">Get Your Dream Car at the Speed of Light</h1>
               <p className="text-lg my-4 dark:text-[rgba(255,255,255,0.9)]">Dive into a handocked colection of the finest automobilas that redefine your onving experience.</p>
               <button className="py-1.5 px-4 font-medium hover:bg-sky-500 text-sky-500 hover:text-white transition border border-sky-500 rounded-full">Contact Us</button>
            </div>
            <div>
               <img src={bannerCar} className='w-full' alt="car" />
            </div>
         </div>
      </div>
   );
};

export default Banner;