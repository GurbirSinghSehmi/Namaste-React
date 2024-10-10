import { useState , useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContex from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [stateBtn,setStateBtn] = useState("LogIn");
    const {loggedInUser} = useContext(UserContex);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header">
         <div className = "logo-container">
            <img className = "logo" src = {LOGO_URL}></img>
         </div>
         <div className = "nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/About">About Us</Link></li>
                <li><Link to = "/Contact">Contact Us</Link></li>
                <li><Link to = "/Cart">Cart - ({cartItems.length})</Link></li>
                <li><Link to = "/Grocery"> Grocery</Link></li>
                <li><Link to = "/Demo"> Demo</Link></li>
                
                <li><button className = "login" onClick={() => {
                 stateBtn == "LogIn" ? setStateBtn("LogOut") : setStateBtn("LogIn");
                }}>{stateBtn}</button></li>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
         </div>
        </div>
    )
}
export default Header;