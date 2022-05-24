import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const addToCart = (productId) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { id: productId },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id: productId },
  };
};

export const adjustQuantity = (productId, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: { id: productId, qty: value },
  };
};

export const loadCurrentProduct = (product) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: product,
  };
};
