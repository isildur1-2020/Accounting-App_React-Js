export const BASE_URL = "http://localhost:4545/api";
export const URL_IMAGES = "http://localhost:4545/images";
export const token = window.localStorage.getItem("token");
export const headers = {
  "authorization-bearer": window.localStorage.getItem("token"),
};
