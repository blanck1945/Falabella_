import * as productTypes from "../../types/products_types";

export interface GetAllProducts {
  type: typeof productTypes.GET_ALL_PRODUCTS;
  payload: any;
}

export interface GetSingleProduct {
  type: typeof productTypes.GET_SINGLE_PRODUCT;
  payload: any;
}

export interface GetAllCategories {
  type: typeof productTypes.GET_ALL_CATEGORIES;
  payload: any;
}

export interface GetAllCategoriesFilters {
  type: typeof productTypes.GET_ALL_CATEGORIES_FILTERS;
  payload: string[];
}

export type ProductsActions =
  | GetAllProducts
  | GetSingleProduct
  | GetAllCategories
  | GetAllCategoriesFilters;
