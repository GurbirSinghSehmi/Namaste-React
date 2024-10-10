import React from "react";
import User from "./User"
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentDidMount(){
        console.log("Parent component did mount.");
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
               <UserClass name = "Guriiii (class)"/>
            </div>
        )    
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//            <UserClass name = "Guriiii (class)"/>
//         </div>
//     )
// }

export default About;