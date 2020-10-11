import Axios from "axios";
import { http } from "./api_types";

export const getCountries = async () => {
  let res: any = Axios.get(http.get_countries);

  let country_arr: string[] = [];
  const new_res = await Axios.get("https://api.first.org/data/v1/countries");
  Object.values(new_res.data.data).map((el: any) => {
    country_arr.push(el.country);
    return country_arr;
  });
  //return res.data;
  return country_arr;
};
