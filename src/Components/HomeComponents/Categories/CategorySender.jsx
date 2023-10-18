
const CategorySender = () => {
   const handleNewCategory = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value
      const image = form.image.value
      const sliderImage1 = form.slider_image1.value;
      const sliderImage2 = form.slider_image2.value;
      const sliderImage3 = form.slider_image3.value;
      const newProduct = {name, image, sliderImage1, sliderImage2, sliderImage3}
      
      fetch('http://localhost:5000/category', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.insertedId){
               form.reset()
            }
         })
   }

   return (
      <div>
         <form onSubmit={handleNewCategory}>
            <div className="w-full border border-rose-500 p-10 rounded-lg space-y-5">
               <div>
                  <input type="text" name="name" placeholder="Name" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="image" placeholder="Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="slider_image1" placeholder="Slider Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="slider_image2" placeholder="Slider Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="slider_image3" placeholder="Slider Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <button className="text-white font-medium py-2 px-8 rounded-full hover:scale-105 transition bg-rose-500">ADD</button>
            </div>
         </form>
      </div>
   );
};

export default CategorySender;