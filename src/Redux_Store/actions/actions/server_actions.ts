import * as serverTypes from "../../types/server_types";
import { ServerRes } from "../../data_interfaces/data_interfaces";

export const setServerRes = (data: ServerRes) => ({
  type: serverTypes.SERVER_RES,
  payload: data,
});
