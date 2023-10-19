import Banner from "../../Components/HomeComponents/Banner/Banner";
import Categories from "../../Components/HomeComponents/Categories/Categories";
import About from '../../Components/HomeComponents/About/About'
import Features from "../../Components/HomeComponents/Features/Features";
import NewsLetter from "../../Components/HomeComponents/NewsLetter/NewsLetter";
import Review from "../../Components/HomeComponents/Review/Review";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Home = () => {
   const {loading} = useContext(AuthContext)

   return (
      <div className="dark:bg-[rgba(0,0,0,0.9)] dark:text-white">
         {
            loading ? <div className="flex h-[85vh] items-center">
            <div className="custom-loader"></div>
         </div> : <span></span>
         }
         <Banner></Banner>
         <Categories></Categories>
         <About></About>
         <Features></Features>
         <Review></Review>
         <NewsLetter></NewsLetter>
      </div>
   );
};

export default Home;