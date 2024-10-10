import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import UserContex from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import Carousel from "./components/Carousel";
//import Grocery from "./components/Grocery";
// Creating a food ordering app

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();
    //Authentication
    useEffect(() => {
     // Make an API call and send username and password
      const data = { name : "Gurbir Singh"}
      setUserInfo(data.name);
    },[])
    return(
        /* Extreme outside it will be Default User*/
        <Provider store = {appStore} >
        <UserContex.Provider value = {{loggedInUser : userInfo, setUserInfo}}>
            {/* Outside Header Component it will give Gurbir*/}
     <div className = "app">
     <UserContex.Provider value = {{loggedInUser : userInfo, setUserInfo}}>
        {/* Inside Header Component it will give Guru*/}
        <Header/>
        </UserContex.Provider>
        {/* for children routes we need OutLet component to redirect to the route we are mentioning and header remains as it is*/}
        <Outlet/>
     </div>
     </UserContex.Provider>
     </Provider>
    );
}
// using ":" in /:resId we have basically made path as dynamic, so we can put any id there and it will route to Restaurantmenu below
const appRouter = createBrowserRouter([{
path : "/",
element : <AppLayout/>,
children:[
    {path : "/",
    element: <Body/>},
    {
        path:"/About",
    element : <About/>
    },
    {
        path : "/Contact",
        element : <Contact/>
    },
    {
        path : "/restaurants/:resId",
        element : <RestaurantMenu/>
    },
    {
        path : "/Grocery",
        element : <Suspense fallback = {<h1>Loading....</h1>} ><Grocery/></Suspense>
    }
    ,
    {
        path : "/Cart",
        element : <Cart/>
    }
    ,
    {
        path : "/Carousel",
        element : <Carousel/>
    }
    ,
    {
        path : "/Demo",
        element : <Demo/>
    }
],
errorElement : <Error/>}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);