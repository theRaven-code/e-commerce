const initialState = {
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case "ADD_TO_CART":
      cart.push(action.payload);
      return {
        ...state,
        cart: cart,
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: cart,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: cart,
      };
    default:
      return state;
  }
};
export default cartReducer;
