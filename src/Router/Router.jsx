import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import CategorySender from "../Components/HomeComponents/Categories/CategorySender";

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/add-product',
            element: <AddProduct></AddProduct>
         },
         {
            path: '/category-card',
            element: <CategorySender></CategorySender>
         }
      ]
   }
])
export default Router;