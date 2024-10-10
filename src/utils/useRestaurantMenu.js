import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu= async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+resId+"&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A547%2C%22primaryRestaurantId%22%3A41297%2C%22cloudinaryId%22%3A%22f01666ac73626461d7455d9c24005cd4%22%2C%22brandId%22%3A547%2C%22dishFamilyId%22%3A%22846649%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantMenu;