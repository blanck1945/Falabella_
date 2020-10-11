import Axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { setServerRes } from "../actions/actions/server_actions";
import {
  getAllProduct,
  getSingleProduct,
  setAllCategories,
  setAllCategoriesFilters,
} from "../actions/actions/product_actions";
import { formatArr } from "../../utils/arr_transform";
import { http } from "./api_types";

export const fetchAllCategories = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.get_all_categories);
      dispatch(setServerRes(data));
      dispatch(setAllCategories(data.data));
      const arr = formatArr(data.data);
      dispatch(setAllCategoriesFilters(arr));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};

export const fetchAllProducts = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.get_product + query);
      dispatch(setServerRes(data));
      dispatch(getAllProduct(data.data));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};

export const fetchSingleProduct = (query: string, id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios.get(http.get_product + query + "/" + id);
      dispatch(setServerRes(data));
      dispatch(getSingleProduct(data.data));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};
