
const AddProduct = () => {
   const handleNewProduct = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value
      const brandName = form.brand.value;
      const type = form.type.value;
      const image = form.image.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const details = form.details.value;
      const newProduct = {name, brandName, type, image, price, rating, details}
      
      fetch('http://localhost:5000/products', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
   }

   return (
      <div className="max-w-[80%] mx-auto py-12 grid grid-cols-3 items-center gap-5">
         <div>
            <div className="flex gap-4">
               <h1 className="text-4xl font-semibold leading-snug">Let{"'"}s Add a New <span className="text-rose-500">Car or Vehicle</span></h1>
            </div>
         </div>
         <div className="col-span-2">
            <form onSubmit={handleNewProduct}>
               <div className="w-full border border-rose-500 p-10 rounded-lg space-y-5">
                  <div>
                     <input type="text" name="name" placeholder="Name" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                  </div>
                  <div className="flex gap-5">
                     <input type="text" name="brand" placeholder="Brand Name" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                     <input type="text" name="type" placeholder="Type" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                  </div><div>
                     <input type="text" name="image" placeholder="Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                  </div>
                  <div className="flex gap-5">
                     <input type="number" name="price" placeholder="Price" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                     <input type="text" name="rating" placeholder="Rating" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                  </div>
                  <div>
                     <textarea rows="5" type="text" name="details" placeholder="Short Details" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-rose-300 focus:border-rose-500" required />
                  </div>
                  <button className="text-white font-medium py-2 px-8 rounded-lg bg-rose-500">Publish</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddProduct;