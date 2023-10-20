import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div className='text-center'>
         <img src={ErrorImg} alt="404" className='w-full md:w-2/5 mx-auto' />
         <Link to="/">
            <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full hover:scale-110 transition-all">Back to Home</button>
         </Link>
      </div>
   );
};

export default ErrorPage;