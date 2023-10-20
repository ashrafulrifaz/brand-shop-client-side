import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import Google from '../../assets/google.png'
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
   const [showPass, setShowPass] = useState(false)
   const {signInUser, googleLogin} = useContext(AuthContext)
   const navigate = useNavigate()
   const [erroMessage, setErroMessage] = useState('')

   const handleLogin = e => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value
      const password = form.password.value

      if(email === ""){
         setErroMessage('Please! Enter your email')
         return
      }

      if(password === ""){
         setErroMessage('Please! Enter your password')
         return
      }

      signInUser(email, password)
         .then(() => {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Login Successful',
            showConfirmButton: false,
            timer: 1500
            })
            navigate('/')
         })
         .catch(error => setErroMessage(error.message))
   }

   const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider()
      googleLogin(provider)
         .then(() => navigate('/'))
         .then(error => setErroMessage(error.message))
   }

   return (
      <div className="bg-gray-50">
         <div className="py-8 md:py-10 lg:py-16 max-w-[90%] mx-auto lg:max-w-[85%]">
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto py-5 lg:py-10 px-5 lg:px-16 bg-white rounded-lg drop-shadow-2xl">
               <h2 className="text-xl font-semibold text-center">Login to your account</h2>
               <form onSubmit={handleLogin} className="mt-10 space-y-4">
                  <div>
                     <label htmlFor="email">Email</label>
                     <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  </div>
                  <div className='relative'>
                     <label htmlFor="password">Password</label>
                     <input id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                     <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">{showPass ? 'Hide' : 'Show'}</span>
                  </div>
                  {
                     erroMessage && <p className="text-red-500 font-medium mt-3">{erroMessage}</p>
                  }
                  <button className="w-full bg-sky-500 py-2 rounded-full text-white font-semibold">Login</button>
                  <p className='text-center'>Don{"'"}t have an Account <Link to="/register" className='font-medium text-blue-600 hover:underline'>Register</Link></p>
               </form>
               <div className="flex gap-5 mt-4">
                  <a onClick={handleGoogleLogin} className="w-full border border-blue-500 py-2 rounded-full text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                     <img src={Google} className='w-5 h-5' alt="google" /> <span>Login with Google</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;