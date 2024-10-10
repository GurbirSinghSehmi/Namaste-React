import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resObjects from "../utils/mockData";
import { useEffect, useState , useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContex from "../utils/UserContext";
import { Link } from "react-router-dom";

const Body = () => {
    // local state variable 
const [listOfRestaurants, setListOfRestaurants] = useState([]); 
const [searchBtn,setSearchBtn] = useState("");
const originalListOfRestaurants = resObjects;
// anything i put at first inside useState will be a default value
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
useEffect(() => {
  fetchData();
},[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();

console.log(json);
setListOfRestaurants(resObjects);
}
const onlineStatus = useOnlineStatus();

if(onlineStatus == false)
{
    return <h1>OffLine Hai Bhai tu!</h1>
}
const {loggedInUser, setUserInfo} = useContext(UserContex);
 // Normal variable
//let listOfRestaurants = [];

// Conditional rendering
if(listOfRestaurants.length == 0)
{
    return <h1>Loading....</h1>
}
// using index as a key is a bad practice. but if you dont have any unique id then in that case you can use index

    return (
        <div className = "body">
            <div className = "filter">
              {/*  <input type = "text" value = {searchBtn}/>This will not let us type anything in input as we are rendering a state variable and never changing its state so it will just be empty string. To resolve this we will use onChange and change the state with every change event*/ }
              <input type = "text" value = {searchBtn} data-testid ="searchInput" onChange = {(e) => {
                setSearchBtn(e.target.value);
              }}/>              
                <button className = "search-text" onClick={() => {
                    const filteredSearchList = originalListOfRestaurants.filter((element) => element.resName.toLowerCase().includes(searchBtn.toLowerCase()) );
                    setListOfRestaurants(filteredSearchList);
                }}> Search </button>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = originalListOfRestaurants.filter((res) => res.rating > 4);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaraunts</button>
            </div>
            <div>
                <label>UserName : </label>
                <input value = {loggedInUser} className="border border-black p-2" onChange={(e) => setUserInfo(e.target.value)}/>
            </div>
            <div className = "res-container">
                {listOfRestaurants.map((element,index) => 
                // If a restaurant is promoted then add a promoted label to it
                element.isPromoted ? <Link to = {`/restaurants/` + "229"}><RestaurantCardPromoted key = {index} resData = {element}/></Link> : <Link><RestaurantCard key = {index} resData = {element}/></Link>
                )}
            </div>
        </div>
    )
}
export default Body;