import types from "../types/types";

const initialState = {
    exchangeRate: null,
};

const exchangeRateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.exchangeRate:
            return {
                ...state,
                exchangeRate: action.payload,
            };
        default:
            return state;
    }
};

export default exchangeRateReducer;
