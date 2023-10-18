import Banner from "../../Components/HomeComponents/Banner/Banner";
import Categories from "../../Components/HomeComponents/Categories/Categories";
import About from '../../Components/HomeComponents/About/About'
import Features from "../../Components/HomeComponents/Features/Features";
import NewsLetter from "../../Components/HomeComponents/NewsLetter/NewsLetter";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Categories></Categories>
         <About></About>
         <Features></Features>
         <NewsLetter></NewsLetter>
      </div>
   );
};

export default Home;