import { ServerRes, Categories } from "./data_interfaces";

export interface ServerState {
  server_res: ServerRes;
}

export interface ProductState {
  all_categories: Categories[];
  categories_filters: string[];
  all_products: any;
  single_product: any;
}

export interface GlobalState {
  server_reducer: ServerState;
  product_reducer: ProductState;
}
