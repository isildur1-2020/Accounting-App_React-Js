import types from "../types/types";

export const exchanceRate = (payload) => ({
    type: types.exchangeRate,
    payload,
});
