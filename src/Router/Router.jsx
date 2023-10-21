import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutPage from "../Pages/About/About";

const Router = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/add-product',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
         },
         {
            path: '/about',
            element: <AboutPage></AboutPage>
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
         },
         {
            path: '/products/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://my-car-brand-shop-server.vercel.app/products/${params.id}`)
         },
         {
            path: '/my-cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>,
            loader: () => fetch(`https://my-car-brand-shop-server.vercel.app/cart`)
         },
         {
            path: '/update/:id',
            element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader: ({params}) => fetch(`https://my-car-brand-shop-server.vercel.app/products/${params.id}`)
         }
      ]
   }
])
export default Router;