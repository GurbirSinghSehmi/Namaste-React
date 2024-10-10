import Carousel from "../Carousel";
import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("Check if carousel is loaded.",() => {
    render(<Carousel/>);
    const imageLoaded = screen.getAllByTestId("image");

    expect(imageLoaded.length).toBe(5);
});

test("Check if buttons are loaded or not.",() => {
    render(<Carousel/>);
    const prevButton = screen.getByRole("button",{name : "Previous"});

    expect(prevButton).toBeInTheDocument();

    const nextButton = screen.getByRole("button",{name : "Next"});

    expect(nextButton).toBeInTheDocument();


});