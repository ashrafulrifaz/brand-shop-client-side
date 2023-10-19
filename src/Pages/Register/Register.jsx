import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.init";

const Register = () => {
   const [showPass, setShowPass] = useState(false)
   const {createUser} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value
      const photo = form.photo.value
      const email = form.email.value
      const password = form.password.value

      createUser(email, password)
         .then(() => {
            updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
            })
            .then(result => console.log(result))
            .catch(error => console.log(error.message))
            navigate('/')
         })
         .catch(error => console.log(error.message))
   }

   return (
      <div className="bg-gray-50 py-16">
         <div className="w-1/2 mx-auto py-10 px-16 bg-white rounded-lg drop-shadow-2xl">
            <h2 className="text-xl font-semibold text-center">Create your account</h2>
            <form onSubmit={handleLogin} className="mt-10 space-y-4">
               <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="name" name="name" placeholder="Enter your name" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
               </div>
               <div>
                  <label htmlFor="photo">Photo</label>
                  <input id="photo" type="text" name="photo" placeholder="Enter your photo URL" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
               </div>
               <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
               </div>
               <div className='relative'>
                  <label htmlFor="password">Password</label>
                  <input id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">{showPass ? 'Hide' : 'Show'}</span>
               </div>
               <button className="w-full bg-sky-500 py-2 rounded-full text-white font-semibold">Register</button>
               <p className='text-center'>Already have an Account <Link to="/login" className='font-medium text-blue-600 hover:underline'>Login</Link></p>
            </form>
            <div className="flex gap-5 mt-4">
               {/* <a onClick={handleGoogleLogin} className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Google} className='w-5 h-5' alt="google" /> <span>Login with Google</span>
               </a>
               <a className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Facebook} className='w-5 h-5' alt="google" /> <span>Login with Facebook</span>
               </a> */}
            </div>
         </div>
      </div>
   );
};

export default Register;