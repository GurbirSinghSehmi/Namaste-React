import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//To group all these test cases we can use Describe

//describe("Contact Us Page test cases",() => {
    // you can write 'test' as 'it' also
   beforeAll(() => {
    console.log("Before All");
   });  // If you want to call some function before any test case is executed then we use beforeAll() given by jest
   beforeEach(() => {
     console.log("Before Each");
   }); // If we want to call some function after each test case then we use beforeEach given by jest
   // Similarly we also have afterAll and afterEach functions given by jest

    test("Should load contact Us component.",() => {

        render(<Contact/>) //this will render to jsdom
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    test("Should load button inside contact Us component.",() => {
    
        render(<Contact/>) //this will render to jsdom
       // const button = screen.getByRole("button");
       //We can also check by text to test like below
       const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    test("Should load input name inside contact Us component.",() => {
    
        render(<Contact/>) //this will render to jsdom
      
       const input = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(input).toBeInTheDocument();
    });
    test("Should load two input boxes inside contact Us component.",() => {
    
        render(<Contact/>) //this will render to jsdom
      
       const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
//});
