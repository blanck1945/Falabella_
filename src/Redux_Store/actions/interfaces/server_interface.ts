import * as serverRes from "../../types/server_types";
import { ServerRes } from "../../data_interfaces/data_interfaces";

export interface ServerResType {
  type: typeof serverRes.SERVER_RES;
  payload: ServerRes;
}

export type ServerActions = ServerResType;
