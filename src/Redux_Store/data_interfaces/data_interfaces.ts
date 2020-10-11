export interface ServerRes {
  application: string;
  country: string;
  data: string[];
  id: string;
  msg: string;
  promise: string;
  provider: string;
  query: string;
  table: string;
  page: string;
  time: string;
}

export interface Categories {
  id: number;
  category_name: string;
  category_description: string[];
  category_header: string[];
  category_filters: string[];
}

export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  user_name: string;
  user_email: string;
  user_password: string;
  user_country: string;
  user_id_num: number;
  user_gender?: string;
  user_birthday: string;
  user_cel: string;
  user_avatar: string;
  user_falabella_news: boolean;
  user_terms_conditions: boolean;
}

export const User_Model: User = {
  first_name: "",
  last_name: "",
  user_name: "",
  user_email: "",
  user_password: "",
  user_country: "",
  user_id_num: undefined,
  user_gender: null,
  user_birthday: "",
  user_cel: "",
  user_avatar: "",
  user_falabella_news: false,
  user_terms_conditions: false,
};
