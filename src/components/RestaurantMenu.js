import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
   {/* const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu= async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+resId+"&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A547%2C%22primaryRestaurantId%22%3A41297%2C%22cloudinaryId%22%3A%22f01666ac73626461d7455d9c24005cd4%22%2C%22brandId%22%3A547%2C%22dishFamilyId%22%3A%22846649%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    } */}
{/* The above thing that we commented, will be implementing same using our own below custom Hook so that the code looks clean*/}
    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null) {
        return <h1>Loading...</h1>
    }
    // "?" used below is used for optional chainig which returns undefined if we try to access property of null or undefined instead of throwing error
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className = "text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</p>
            {/* Categories Accordion */}
            {
            // Controlled Component
            categories.map((category,index) => (
            <RestaurantCategory key = {index} data = {category?.card?.card} showItems = {index == showIndex ? true : false} setShowIndex = {(i) => i == -1 ?setShowIndex(i) : setShowIndex(index)}/>
            ))}
        </div>
    )
}

export default RestaurantMenu;