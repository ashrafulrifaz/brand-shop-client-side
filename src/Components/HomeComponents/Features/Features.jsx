import SelectionImage from '../../../assets/choice.png'
import FinanceImage from '../../../assets/compensation.png'
import UsersImage from '../../../assets/users.png'

const Features = () => {
   return (
      <div className="py-6 md:py-12 max-w-[90%] md:max-w-[85%] mx-auto text-center">
         <p className='text-sm font-semibold tracking-widest text-sky-500 uppercase'>Services</p>
         <h1 className="font-semibold text-2xl md:text-4xl leading-snug">Our Diverse Services</h1>
         <p className="lg:text-lg mt-1 mb-4">From events to tech, we have got it all</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
            <div className="p-5 border border-sky-300 rounded-tl-3xl rounded-br-3xl space-y-2 transition-all duration-300 hover:rounded-none hover:rounded-bl-3xl hover:rounded-tr-3xl">
               <div className='p-3 rounded-2xl bg-indigo-100 inline-block'>
                  <img src={SelectionImage} alt="selection" className='w-7 md:w-10' />
               </div>
               <h3 className='text-lg md:text-xl font-semibold'>Extensive Vehicle Inventory</h3>
               <p>Access a wide selection of new and used cars, trucks, and SUVs from various brands and models.</p>
            </div>
            <div className="p-5 border border-sky-300 rounded-tl-3xl rounded-br-3xl space-y-2 transition-all duration-300 hover:rounded-none hover:rounded-bl-3xl hover:rounded-tr-3xl">
               <div className='p-3 rounded-2xl bg-sky-100 inline-block'>
                  <img src={FinanceImage} alt="selection" className='w-7 md:w-10' />
               </div>
               <h3 className='text-lg md:text-xl font-semibold'>Financing Options</h3>
               <p>Discover financing and loan options to make your car purchase more affordable.</p>
            </div>
            <div className="p-5 border border-sky-300 rounded-tl-3xl rounded-br-3xl space-y-2 transition-all duration-300 hover:rounded-none hover:rounded-bl-3xl hover:rounded-tr-3xl">
               <div className='p-3 rounded-2xl bg-rose-100 inline-block'>
                  <img src={UsersImage} alt="selection" className='w-7 md:w-10' />
               </div>
               <h3 className='text-lg md:text-xl font-semibold'>Customer Satisfaction</h3>
               <p>We prioritize your satisfaction at every step, ensuring your car-buying experience is delightful from start to finish.</p>
            </div>
         </div>
      </div>
   );
};

export default Features;