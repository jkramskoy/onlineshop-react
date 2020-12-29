const initialState = {
  cartProducts: [],
  // isAuth: false,
};

//creating  Store -global cart where we will hold data
const reducer = (state = initialState, action) => {
  //create products in our global cart collection
  if (action.type === "STORE_CART_PRODUCTS") {
    return {
      ...state,
      cartProducts: action.cartProducts,
    };
  }

  //delete products in our global cart collection
  if (action.type === "DELETE_CART_PRODUCT") {
    const updatedArr = state.cartProducts.filter(
      (e) => e.id !== action.idForDelete
    );

    return {
      ...state,
      cartProducts: updatedArr,
    };
  }

  return state;
};

export default reducer;
