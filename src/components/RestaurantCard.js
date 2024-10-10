
// below for style we have put to curly brackets as the first one will tell that there is some js code inside and second one is for the object that will have the css properties
const RestaurantCard = (props) => {
    return (
        <div className="res-card" data-testid = "resCard" style = {{background : "#f0f0f0"}}>
            <img className = "res-logo" alt="Khaana hai yeh" src={props.resData.logoImage}></img>
            <h3>{props.resData.resName}</h3>
            <h3>{props.resData.rating}</h3>
        </div>
    )
}

//Higher Order Component

// input => Restaurant Card ==> output => Restaurant Card Promoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;