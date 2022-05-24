import { ActionTypes } from "../constants/action-types";

const initState = {
  products: [],
  cart: [],
  currentItem: null,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.ADD_TO_CART:
      // get the item data from the products array
      const item = state.products.find((prod) => prod.id == payload.id);
      // check if the item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case ActionTypes.AdJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: payload.qty } : item
        ),
      };
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
