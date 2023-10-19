
const BrandSlider = ({item}) => {
   const {title, details, slider} = item
  return (
      <div className="py-10">
         <div className="mx-auto max-w-[85%] grid grid-cols-2 content-center items-center">
         <div className="space-y-3 text-left pr-10">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-slate-800 font-medium">{details}</p>
            <button className="py-1.5 px-6 rounded-full bg-sky-500 text-white font-medium hover:scale-105 transition">Explore</button>
         </div>
         <div>
            <img src={slider} className="w-full h-auto" alt="" />
         </div>
         </div>
      </div>
  );
}


export default BrandSlider;