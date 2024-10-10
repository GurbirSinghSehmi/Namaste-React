import React from "react";
import ReactDOM from "react-dom/client"

// Render using JSX syntax
// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = (<h1 id = "heading" className="React"> 
This is the Heading we all were waiting for
</h1>);

// React Functional Component
// const HeadingComponent = () =>{
//     return <h1>This is a functional component in react.</h1>
// }

// Another way to write the above component
// const HeadingComponent = () =>( 
//     <h1>This is a functional component in react.</h1>
// )
const Title = () => <h1>This is One functional component rendered inside another!</h1>
// This below thing is called component composition, meaning putting one component inside another.
// const HeadingComponent = () =>(
//     <div id="container">
//     <h2>{100 + 200}</h2>
//     <Title/> 
//     <h1>This is a functional component in react.</h1>
//     </div>
// )
// we can also put a react element inside component using {}
const HeadingComponent = () =>(
    <div id="container">
    <h2>{jsxHeading}</h2>
    <Title/> 
    <h1>This is a functional component in react.</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

// Below is the way to render a react functional component to our browser
root.render(<HeadingComponent/>);