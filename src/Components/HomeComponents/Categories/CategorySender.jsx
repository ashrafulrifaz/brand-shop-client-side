
const CategorySender = () => {
   const handleNewCategory = e => {
      e.preventDefault()
      const form = e.target;
      const brand = form.brand.value
      const slider = form.slider.value
      const title = form.title.value
      const details = form.details.value
      const newProduct = {brand, slider, title, details}
      
      fetch('http://localhost:5000/slider', {
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
                  <input type="text" name="brand" placeholder="brand" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="slider" placeholder="slider" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="title" placeholder="title" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <div>
                  <input type="text" name="details" placeholder="details" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
               </div>
               <button className="text-white font-medium py-2 px-8 rounded-full hover:scale-105 transition bg-rose-500">ADD</button>
            </div>
         </form>
      </div>
   );
};

export default CategorySender;