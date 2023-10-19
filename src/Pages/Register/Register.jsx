import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import Google from '../../assets/google.png'

const Register = () => {
   const [showPass, setShowPass] = useState(false)
   const {createUser, googleLogin} = useContext(AuthContext)
   const navigate = useNavigate()
   const [isNameHave, setIsNameHave] = useState('')
   const [isImageHave, setIsImageHave] = useState('')
   const [isEmailHave, setIsEmailHave] = useState('')
   const [isPassHave, setIsPassHave] = useState('')
   const [erroMessage, setErroMessage] = useState('')

   const handleRegister = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value
      const photo = form.photo.value
      const email = form.email.value
      const password = form.password.value

      if(name === ''){
         setIsNameHave('please! enter your name')
         return
      } else {
         setIsNameHave('')
      }

      if(photo !== ''){
         if(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(photo)){
            setIsImageHave('')
         } else {
            setIsImageHave('invalid photo url')
            return
         }
      } else {
         setIsImageHave('please! enter your photo url')
         return
      }

      if(email !== ''){
         if(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(email)){
            setIsEmailHave('')
         } else {
            setIsEmailHave('invalid email')
            return
         }
      } else {
         setIsEmailHave('please! enter your email')
         return
      }

      if(password !== ''){
         if(password.length >= 6){
            if(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~[\]-]).*$/.test(password)){
               setIsPassHave('')
               createUser(email, password)
                  .then(() => {
                     updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                     })
                     .then(result => console.log(result))
                     .catch(error => console.log(error.message))
                     navigate('/')
                     Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'Registration Successful',
                     showConfirmButton: false,
                     timer: 1500
                     })
                  })
                  .catch(error => console.log(error.message))             
            } else {
               setIsPassHave('password must contain a capital letter and a special character')
               return
            }
         } else {
            setIsPassHave('password show have at least 6 character')
            return
         }         
      } else {
         setIsPassHave('please! enter your password')
         return
      }
   }
      
   const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider()
      googleLogin(provider)
         .then(() => navigate('/'))
         .then(error => setErroMessage(error.message))
   }

   return (
      <div className="bg-gray-50 py-16">
         <div className="w-1/2 mx-auto py-10 px-16 bg-white rounded-lg drop-shadow-2xl">
            <h2 className="text-xl font-semibold text-center">Create your account</h2>
            <form onSubmit={handleRegister} className="mt-10 space-y-4">
               <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="name" name="name" placeholder="Enter your name" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  {
                     isNameHave && <p className="text-red-500 font-medium mt-3">{isNameHave}</p>
                  }
               </div>
               <div>
                  <label htmlFor="photo">Photo</label>
                  <input id="photo" type="text" name="photo" placeholder="Enter your photo URL" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  {
                     isImageHave && <p className="text-red-500 font-medium mt-3">{isImageHave}</p>
                  }                  
               </div>
               <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" placeholder="Enter your email" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  {
                     isEmailHave && <p className="text-red-500 font-medium mt-3">{isEmailHave}</p>
                  }
               </div>
               <div className='relative'>
                  <label htmlFor="password">Password</label>
                  <input id="password" type={showPass ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" />
                  <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">{showPass ? 'Hide' : 'Show'}</span>
               </div>
               {
                  isPassHave && <p className="text-red-500 font-medium mt-3">{isPassHave}</p>
               }
               <button className="w-full bg-sky-500 py-2 rounded-full text-white font-semibold">Register</button>
               <p className='text-center'>Already have an Account <Link to="/login" className='font-medium text-blue-600 hover:underline'>Login</Link></p>
            </form>
            <div className="flex gap-5 mt-4">
               <a onClick={handleGoogleLogin} className="w-full border border-blue-500 py-2 text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer rounded-full">
                  <img src={Google} className='w-5 h-5' alt="google" /> <span>Register with Google</span>
               </a>
               {
                  erroMessage && <p className="text-red-500 font-medium mt-3">{erroMessage}</p>
               }
            </div>
         </div>
      </div>
   );
};

export default Register;