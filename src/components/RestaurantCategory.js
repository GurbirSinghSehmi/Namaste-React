import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
      if(showItems)
      {
        console.log(showItems);
        setShowIndex(-1);
      }
      else
      setShowIndex();
    }
    const shouldOpen = () => {
        if(showItems)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return (
        <div>
            {/*Header*/}
            <div className = "w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className = "flex justify-between cursor-pointer" onClick = {handleClick}>
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>
                    ⬇️
                </span>
                </div>
                {shouldOpen()  && <ItemList items = {data.itemCards}/>}
            </div>
            {/*Accordion Body*/}
        </div>
    )
}
export default RestaurantCategory;