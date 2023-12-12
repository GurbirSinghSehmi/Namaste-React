// const heading = React.createElement("h1",{id : "heading"},"Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// creating a nested struction of div s below in react:
// <div id = "parent"><div id = "child"><h1>I'm h1 tag</h1></div></div>

// const heading = React.createElement("div",{id : "parent"},
// React.createElement("div",{id : "child"},
// React.createElement("h1",{},"I'm h1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// If i have to add siblings in html like
// <div id = "parent"><div id = "child"><h1>I'm h1 tag</h1><h1>I'm sibling h1 tag</h1></div></div>



const heading = React.createElement("div",{id : "parent"},
React.createElement("div",{id : "child"},[
React.createElement("h1",{},"I'm h1 tag"),React.createElement("h1",{},"I'm sibling h1 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);