import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";

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
         }
      ]
   }
])
export default Router;