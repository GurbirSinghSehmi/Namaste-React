import { useRef, useState } from "react";

const Demo2 = () => {
    const [y, setY] = useState(0);
    let x =10;
    const ref = useRef(0);// Not like ref = 0, it is something like :- ref = {current : 0}
    return (<div className="m-4 p-4 border border-black bg-slate-50 w-96 h-96">
        <div>
            <button className="bg-green-100 p-2 m-4" onClick = {() => {x=x+1;console.log(x);}}>Increase x</button>
            <span className="font-bold text-xl">Let x= {x}</span>
            
        </div>
            
        <div>
            <button className="bg-green-100 p-2 m-4" onClick = {() => {setY(y+1);}}>Increase y</button>
            <span className="font-bold text-xl">Let y = {y}</span>
            
        </div>
        <div>
            <button className="bg-green-100 p-2 m-4" onClick = {() => {ref.current = ref.current+1;console.log(ref.current)}}>Increase ref</button>
            <span className="font-bold text-xl">Let ref = {ref.current}</span>
            
        </div>
            Demo2</div>)
            // In all these three variables of let, ref and state, the difference is that, if we keep on increasing the value of x,then x ki value will keep on increasing on the console and not on UI as it does not rerender the component, but since y is a state variable so its value will change on UI, but once y ki value changes, it rerenders the component causing x ki value to go back to the initial value. So if we want to keep the last updated value of a variable, even if the component is re rendered, then in these case we do useRef(), and these ref values will persist with the latest value in backend even if they dont update in UI because change of ref also does not lead to rerender.
}

export default Demo2;