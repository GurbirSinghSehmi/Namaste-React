import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
   const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item))
   }
  return (
    <div> 
            {items.map(item => (<div data-testid = "foodItems" key = {item.card.info.id} className = "p-2 m-2 border border-gray-200 border-b-2 text-left">
                <div className = "py-2"><span>
                {item.card.info.name}
                    </span>
                    <span> 
                    - Rs {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
                    </span>
                    <p className="text-xs">{item.card.info.description}</p>
                    
                    </div>
                    <div><img src= {'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/'+item.card.info.imageId} className = "w-14 h-auto"/>
                    <div className="absolute"><button className="p-2 bg-white shadow-lg  m-auto" onClick={() => handleAddItem(item)}>Add+</button></div>
                    </div>
                    </div>))}
    </div>
  )
}
export default ItemList;