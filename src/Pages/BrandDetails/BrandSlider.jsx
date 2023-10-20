import PropTypes from 'prop-types';

const BrandSlider = ({item}) => {
   const {title, details, slider} = item

   const bannerStyle = {
      background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${slider}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
   }

   const handleScroll = () => {
      window.scroll({
         top: 600,
         behavior: 'smooth'
       });
   }

  return (
      <div style={bannerStyle} className="h-[85vh]">
         <div className="mx-auto max-w-[85%] flex flex-col justify-center h-full">
            <div className="space-y-3 px-7 md:px-28 text-center">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{title}</h2>
               <p className="text-slate-50 font-medium">{details}</p>
               <button onClick={handleScroll} className="py-1.5 px-6 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Explore</button>
            </div>
         </div>
      </div>
  );
}

BrandSlider.propTypes = {
   item: PropTypes.object
}

export default BrandSlider;