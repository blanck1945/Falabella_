import { Categories } from "../Redux_Store/data_interfaces/data_interfaces";

export const formatArr = (arr: any) => {
  arr[0].category_filters = arr[0].category_filters.split("-");
  arr[1].category_filters = arr[1].category_filters.split("-");
  arr[2].category_filters = arr[2].category_filters.split("-");

  const concatArr = arr.map((el: Categories) =>
    el.category_filters.map((filter: string) => filter.concat(",ver todo"))
  );

  return concatArr;
};
