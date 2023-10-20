import AboutImage from '../../../assets/about-car.png'

const About = () => {
   return (
      <div className="py-6 lg:py-14 mx-auto max-w-[90%] lg:max-w-[85%] grid grid-cols-1 lg:grid-cols-2">
         <div>
            <img src={AboutImage} alt="" />
         </div>
         <div className='lg:pl-8 mt-5 lg:mt-0 text-center lg:text-left'>
            <p className='text-sm font-semibold tracking-widest text-sky-500 uppercase'>About Us</p>
            <h1 className="font-semibold text-2xl lg:text-4xl leading-snug">Discover the People and Purpose Behind Our Company</h1>
            <p className="lg:text-lg my-4">Discover a range of vehicles to suit your needs, from stylish cars to family-friendly vans. Whether you are looking for eco-friendly options, luxury rides, or practical solutions, we have it all. Find the perfect vehicle for your journey.</p>
            <button className="py-1.5 px-4 font-medium text-sky-500 hover:bg-sky-500 hover:text-white transition border border-sky-500 rounded-full">Know More</button>
         </div>
      </div>
   );
};

export default About;