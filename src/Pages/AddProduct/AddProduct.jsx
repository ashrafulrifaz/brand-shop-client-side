import Swal from 'sweetalert2';
import AddImage from '../../assets/new-item.jpg'

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
      console.log(newProduct);
      
      fetch('https://my-car-brand-shop-server.vercel.app/products', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newProduct)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Post Added Successfully',
               showConfirmButton: false,
               timer: 1500
               })
            form.reset()
         })
   }

   return (
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto py-6 md:py-12 flex flex-col lg:flex-row items-center gap-5">
         <div className='w-full: lg:w-2/5'>
            <div>
               <img src={AddImage} className='w-full md:w-1/2 lg:w-full mx-auto' alt="" />
            </div>
         </div>
         <div className="w-full lg:w-3/5">
            <form onSubmit={handleNewProduct}>
               <div className="w-full border border-sky-500 px-2.5 md:px-5 py-4 rounded-lg space-y-5">
                  <h2 className='text-xl md:text-2xl font-semibold'>Add New Car</h2>
                  <div>
                     <input type="text" name="name" placeholder="Name" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500" required />
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                     <div className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500">
                        <select name="brand" className="w-full focus:outline-none">
                           <option value="Type" disabled selected>Brand Name</option>
                           <option value="Honda">Honda</option>
                           <option value="Toyota">Toyota</option>
                           <option value="BMW">BMW</option>
                           <option value="Mercedes Benz">Mercedes Benz</option>
                           <option value="Audi">Audi</option>
                           <option value="Tesla">Tesla</option>
                           <option value="Ford">Ford</option>
                           <option value="Mazda">Mazda</option>
                        </select>
                     </div>
                     <div className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500">
                        <select name="type" className="w-full focus:outline-none">
                           <option value="Type" disabled selected>Type</option>
                           <option value="Sedan">Sedan</option>
                           <option value="SUV">SUV</option>
                           <option value="Sports">Sports</option>
                           <option value="Convertible">Convertible</option>
                           <option value="Micro">Micro</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <input type="text" name="image" placeholder="Image" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500" required />
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                     <input type="number" name="price" placeholder="Price" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500" required />
                     <input type="text" name="rating" placeholder="Rating" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500" required />
                  </div>
                  <div>
                     <textarea rows="5" type="text" name="details" placeholder="Short Details" className="py-2 px-4 rounded-lg w-full focus:outline-none border border-sky-300 focus:border-sky-500" required />
                  </div>
                  <button className="text-white font-medium py-2 px-8 rounded-full hover:scale-105 transition bg-sky-500">Publish</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddProduct;