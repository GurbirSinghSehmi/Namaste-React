import { useState } from "react";

const User = (props) => {
    const [count,setCount] = useState(0);
    return (<div className = "user-card">
        <h1>{count}</h1>
       <h2>Name : {props.name}</h2>
       <h3>Location : Chandigarh</h3>
       <h4>Contact : @gurbirmay15</h4>
    </div>);
}

export default User;
