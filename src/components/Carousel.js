import { useEffect, useState } from "react";
import { IMAGE_ARRAY } from "./mocks/mockImageArray";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrevious = () => {
        activeIndex == 0 ? setActiveIndex(IMAGE_ARRAY.length-1) : setActiveIndex(activeIndex - 1);
    }
    const handleNext = () => {
        setActiveIndex((activeIndex + 1)%IMAGE_ARRAY.length);
    }
    useEffect(() => {
       const timer = setTimeout(() => {handleNext();},5000);
        return () => {
            clearTimeout(timer);
        }
    },[activeIndex])
    return (
       <div className = "w-96  m-[200px] h-96 flex">
        <button className = "border border-black 1px bg-white m-5 h-8  w-40" onClick = {handlePrevious}>Previous</button>
        {IMAGE_ARRAY.map((element,index) => {
          return <img data-testid = "image" key = {element} src = {element} className = {index != activeIndex ? "hidden" : ""} alt = "An Image"/>
        })}
        <button className = "border border-black 1px bg-white m-5 h-8  w-40" onClick = {handleNext}>Next</button>
       </div>
    );
}
export default Carousel;