import * as productTypes from "../types/products_types";
import { ProductState } from "../data_interfaces/state_interfaces";
import { ProductsActions } from "../actions/interfaces/products_interface";

const productInitialState: ProductState = {
  all_categories: undefined,
  categories_filters: undefined,
  all_products: undefined,
  single_product: undefined,
};

export default (state = productInitialState, action: ProductsActions) => {
  switch (action.type) {
    case productTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        all_categories: action.payload,
      };
    case productTypes.GET_ALL_CATEGORIES_FILTERS:
      return {
        ...state,
        categories_filters: action.payload,
      };
    case productTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        all_products: action.payload,
      };
    case productTypes.GET_SINGLE_PRODUCT:
      return {
        ...state,
        single_product: action.payload,
      };
    default:
      return state;
  }
};
