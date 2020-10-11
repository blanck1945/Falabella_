import Axios from "axios";
import { User } from "../data_interfaces/data_interfaces";
import { Dispatch } from "react";
import { http } from "./api_types";
import { Action } from "redux";
import { setServerRes } from "../actions/actions/server_actions";

export const postUserToExpress = (user: User) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await Axios({
        method: "post",
        url: http.post_user,
        data: user,
      });
      console.log(data);
      dispatch(setServerRes(data));
    } catch (err) {
      dispatch(setServerRes(err));
    }
  };
};
