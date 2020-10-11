import * as productTypes from "../../types/products_types";
import { Categories } from "../../data_interfaces/data_interfaces";

export const getAllProduct = (data: any) => ({
  type: productTypes.GET_ALL_PRODUCTS,
  payload: data,
});

export const getSingleProduct = (data: any) => ({
  type: productTypes.GET_SINGLE_PRODUCT,
  payload: data,
});

export const setAllCategories = (data: Categories) => ({
  type: productTypes.GET_ALL_CATEGORIES,
  payload: data,
});

export const setAllCategoriesFilters = (data: string[]) => ({
  type: productTypes.GET_ALL_CATEGORIES_FILTERS,
  payload: data,
});
