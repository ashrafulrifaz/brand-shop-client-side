import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
            path: '/about',
            element: <></>
         },
         {
            path: 'category/:id',
            element: <BrandDetails></BrandDetails>,
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: 'register',
            element: <Register></Register>
         }
      ]
   }
])
export default Router;