import * as serverTypes from "../types/server_types";
import { ServerState } from "../data_interfaces/state_interfaces";
import { ServerActions } from "../actions/interfaces/server_interface";

const serverInitialState: ServerState = {
  server_res: undefined,
};

export default (state = serverInitialState, action: ServerActions) => {
  switch (action.type) {
    case serverTypes.SERVER_RES:
      return {
        ...state,
        server_res: action.payload,
      };
    default:
      return state;
  }
};
