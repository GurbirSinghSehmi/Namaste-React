import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props); // to initialise this.props = props we use super constructor
        this.state = {
            count : 0,
            userInfo:{
                login : "Dummy Name",
                node_id : "Default"
            }
        }
    }
    async componentDidMount(){// this gets called when this component will be rendered to the page
        // so the lifecycle for this component will be -> constructor - render - componentDidMount
        console.log("child component mounted.");
        const data = await fetch("https://api.github.com/users/SinghGurbir");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        })
    }
    componentDidUpdate()
    {
        console.log("component did update.");
    }
    componentWillUnmount(){
        console.log("This will get called when comonent is just about to get unmounted from the webpage.");
    }
    render(){
        return (<div className = "user-card">
            <button onClick = {() => {
                //NEVER UPDATE STATE VARIABLES DIRECTLY
                // this.state.count = this.state.count +1; //this will not work
                this.setState({
                    count : this.state.count +1
                })
            }}>Click me</button>
            <h1>{this.state.count}</h1>
      {/* <h2>Name : {this.props.name}</h2>*/}
      <h2>Name : {this.state.userInfo.login}</h2>
       <h3>Location : {this.state.userInfo.node_id}</h3>
       <h4>Contact : @gurbirmay15</h4>
    </div>);
    }
}
export default UserClass;