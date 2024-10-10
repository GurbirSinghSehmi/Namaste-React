import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        items : []
    },
    reducers: {
        addItem : (state,action) => {
        // Redux uses IMMER Behind the scenes to create an immutable object that is a diff between the original state and the mutated state
           state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state) => {
            // state = [] will not work as we are not mutating state and are just changing reference
            // Read about IMMER for more knowledge
            state.items.length = 0;
            // reutrn {items : []} --> this will also work as RTK says you either mutate the state or return a new state
            //Learn about redux devtools as well
            // Read about RTK query
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;