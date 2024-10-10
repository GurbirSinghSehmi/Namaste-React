import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { fireEvent, render , screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

test("Should Render RestaurantCard Component with props Data", () => {

    render(<RestaurantCard resData = {MOCK_DATA}/>)
    const resName = screen.getByText("KFC");
    expect(resName).toBeInTheDocument();
});

test("Should load RestaurantCard with promoted label.",() => {

    const K = withPromotedLabel(RestaurantCard);
    render(<K resData = {MOCK_DATA}/>);
    const isRenderedWithPromotedLabel = screen.getByText("Promoted");
    expect(isRenderedWithPromotedLabel).toBeInTheDocument();
});