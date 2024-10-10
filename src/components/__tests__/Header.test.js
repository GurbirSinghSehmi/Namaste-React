import { fireEvent, render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should load Header Component with a login button.",() => {

    render(
        <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});
test("Should render Header Component with cart items as 0.",() => {

    render(
        <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);
    const CartItems = screen.getByText("Cart - (0)"); // we can paas regex also here
    expect(CartItems).toBeInTheDocument();
});

test("Should change login button to logout on click of button",() => {

    render(
        <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByRole("button",{name : "LogIn"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name : "LogOut"});
    
    expect(logoutButton).toBeInTheDocument();
});