import Body from "../Body"
import "@testing-library/jest-dom";
import { fireEvent, render , screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRes.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
   return Promise.resolve({
    json : () => {Promise.resolve(MOCK_DATA);}
   })
}); // we are making this global fetch function as the fetch which is used in Body is coming from browser and will not be present in jsdom

it("Should Search K and see if KFC is loaded or not",async () => {
    await act(async () => render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    
    )) 
    //since we have state variables and fetch in body component , then we will have to wrap it in act() function that comes from react-dom/test-utils

   const cards = screen.getAllByTestId("resCard")
   expect(cards.length).toBe(5);
   const searchBtn = screen.getByRole("button",{name : "Search"});
   const searchInput = screen.getByTestId("searchInput"); 
   fireEvent.change(searchInput,{target:{value : "K"}}) 
   fireEvent.click(searchBtn);
   //screen should load 1 card
   const cardsAfterSearch = screen.getAllByTestId("resCard")
   expect(cardsAfterSearch.length).toBe(1);
});
it("Should filter Top Rated Restaurants",async () => {
    await act(async () => render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    
    )) 
    //since we have state variables and fetch in body component , then we will have to wrap it in act() function that comes from react-dom/test-utils

   const cardsBeforeFilter = screen.getAllByTestId("resCard")
   expect(cardsBeforeFilter.length).toBe(5);
   const topRatedButton = screen.getByRole("button", {name : "Top Rated Restaraunts"});
   fireEvent.click(topRatedButton);
   const cardsAfterFilter = screen.getAllByTestId("resCard")
   expect(cardsAfterFilter.length).toBe(2);
}); 