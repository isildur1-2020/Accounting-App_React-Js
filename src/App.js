import React from "react";
import AppRouter from "./Routers/AppRouter";
// REDUX
import { Provider } from "react-redux";
import { generateStore } from "./redux/store";

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
