import newCar from '../../../assets/news-cars.jpg'

const NewsLetter = () => {
   const newBack = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${newCar}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
   }

   const handleSubscribe = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      console.log(email);
      form.reset()
   }

   return (
      <div style={newBack} className='px-2 md:px-0 py-12'>
         <div className="p-3 md:p-10 w-full md:w-4/5 lg:w-1/2 mx-auto text-center bg-[rgba(255,255,255,0.2)] rounded-lg">
            <h2 className='text-white font-semibold text-2xl md:text-3xl'>Subscribe Our Newsletter</h2>
            <p className='md:text-lg text-white mt-2 mb-4'>Subscribe our newsletter to get all update</p>
            <div>
               <form onSubmit={handleSubscribe}>
                  <input name='email' type="email" placeholder='Enter your email here' className='py-2.5 px-4 focus:outline-none rounded-s-lg w-3/5' />
                  <button className='bg-rose-500 py-2.5 px-4 font-medium text-white rounded-e-lg'>Subscribe</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default NewsLetter;