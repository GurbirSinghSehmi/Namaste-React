import { useState ,useMemo} from "react";
import Demo2 from "./Demo2";

const Demo = () => {
    const [stateChanges,setStateChanges] = useState("");
    const [buttonChanges,setButtonChanges] = useState("buttan");
   
   const claculateSum = () => {
    let sum = 0;
    console.time("Sum");
    for(let i =0 ;i<100000000;i++)
    {
        sum += i;
    }
    console.timeEnd("Sum");
    return sum;
   }
    
   console.log(useMemo(claculateSum,[stateChanges]));//This useMemo will prevent calling of calculateSum if something other that the stateChanges, like if button changes then it wont call calculateSum and will just return the cached result that it previously calculated
    return (
        <div className="m-4 p-4 w-96 h-96 border border-black">Demo
        <button className = "border border-black" onClick = {() => buttonChanges == "buttan" ? setButtonChanges("button"):setButtonChanges("buttan") }>{buttonChanges}</button>
        <input type = "text" className = "m-4 p-2 border border-black" value = {stateChanges} onChange = {(e) => {setStateChanges(e.target.value);}}/>
        <Demo2/>
        </div>
    )
}
export default Demo;