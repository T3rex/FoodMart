import React,{lazy,Suspense, useState,} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./Components/Cart";


const Instamart =  lazy(()=> import("./Components/Instamart"));

const AppLayout =() => {

  const [user,setUser] = useState({
    name: "T3rex",
    email:"dinorex09@gmail.com"
  })


  return(
  <>
  <Provider store={store}>
    <UserContext.Provider value={{
      user: user,
      setUser: setUser
    }}>
      <Header/>
      <Outlet/>
      <Footer/>
    </UserContext.Provider>
  </Provider>
  </>)
}



const appRouter  = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/about",
        element:<About/>,
        children:[{
          path:"profile",
          element:<Profile/>
        }]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
       {
        path:"/instamart",
        element:
        <Suspense fallback={<Shimmer/>}>
          <Instamart/>
        </Suspense>  
      },
      {
        path:"/cart",
        element:        
          <Cart/>          
      }        
    ]
  } 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
     