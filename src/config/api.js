export const BASE_URL = "https://accounting-app2.herokuapp.com/api";
export const URL_IMAGES = "https://accounting-app2.herokuapp.com/images";
export const token = window.localStorage.getItem("token");
export const headers = {
  "authorization-bearer": window.localStorage.getItem("token"),
};
