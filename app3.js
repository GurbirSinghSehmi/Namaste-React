import React from "react";
import ReactDOM from "react-dom/client"

// Creating a food ordering app
const Header = () => {
    return (
        <div className="header">
         <div className = "logo-container">
            <img className = "logo" src = "https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-app-by-town-brandcrowd.png"/>
         </div>
         <div className = "nav-items">
            <ul>
                <li>Name</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
         </div>
        </div>
    )
}
// below for style we have put to curly brackets as the first one will tell that there is some js code inside and second one is for the object that will have the css properties
const RestaurantCard = (props) => {
    return (
        <div className="res-card" style = {{background : "#f0f0f0"}}>
            <img className = "res-logo" alt="Khaana hai yeh" src={props.resData.logoImage}></img>
            <h3>{props.resData.resName}</h3>
        </div>
    )
}
// using index as a key is a bad practice. but if you dont have any unique id then in that case you can use index
const resObjects = [{resName : "KFC" , logoImage :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/f01666ac73626461d7455d9c24005cd4"},{resName : "Meghana Foods", logoImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yfyo8aklppbwdplv7ofp"},{resName : "McDonalds", logoImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/bb7ae131544c7d37e10fc5faf76f09d6"},{resName : "Smoor", logoImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/dacf54aea3d4c41e3ea5b10dcaf6a5f2"},{resName : "Pizza Hut", logoImage:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7"}];
const Body = () => {
    return (
        <div className = "body">
            <div className = "search">Search</div>
            <div className = "res-container">
                {resObjects.map((element,index) => <RestaurantCard key = {index} resData = {element}/>)}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return(
     <div className = "app">
        <Header/>
        <Body/>
     </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);