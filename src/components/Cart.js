import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
 const cartItems = useSelector((store) => store.cart.items);
 const dispatch = useDispatch();
 const clearCartItems = () => {
     dispatch(clearCart());
 }
 return (
 <div className="text-center m-4 p-4">
    <h1 className = "text-2xl font-bold">Cart</h1>
    <button className = "bg-black px-4 py-4 text-white" onClick = {clearCartItems}>Clear Cart</button>
    <div><ItemList items = {cartItems}/></div>
    </div>
 )
}

export default Cart;