import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import exchangeRateReducer from "./reducers/exchangeRate";

const reducers = combineReducers({
    auth: authReducer,
    exchangeRate: exchangeRateReducer,
});

export const generateStore = () => {
    const store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
