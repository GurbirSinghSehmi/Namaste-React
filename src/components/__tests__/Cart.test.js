import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu"
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
       json : () => Promise.resolve(MOCK_DATA),
    })
)
it("Should load RestaurantMenu component.",async () => {
  await act(async () => {
       return render(
        <BrowserRouter>
       <Provider store = {appStore}>
        <Header/>
       <RestaurantMenu/>
       <Cart/>
       </Provider>
       </BrowserRouter>)
  })
  const accordianHeader = screen.getByText("Recommended (16)");
  fireEvent.click(accordianHeader);
  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(16);
  const addBtn = screen.getAllByRole("button",{name : "Add+"});
  fireEvent.click(addBtn[0]);
  const cartItemTest = screen.getByText("Cart - (1)");
  expect(cartItemTest).toBeInTheDocument();
  const cartItemAfterAddingToCart = screen.getAllByTestId("foodItems");
  expect(cartItemAfterAddingToCart.length).toBe(17); //This will be 17 because 16 were already having id as food items and as cart is also using same component so id will be same and count will increase by 1 since cart has 1 item added
});