import types from "../types/types";

export const authAction = () => ({
  type: types.login,
});

export const logoutAction = () => ({
  type: types.logout,
});
