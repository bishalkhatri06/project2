import React from "react";
import "./App.css";
import MyRoute from "./MyRoute";
// it is used to know compiler that there is our data store
// import { legacy_createStore } from "redux";
// it is used to provide data to every component
import { Provider } from "react-redux";
// import cartReducer from "./redux/reducer/cartReducer";
import store from "./store";

const App = () => {
  // const store=legacy_createStore(cartReducer)
  return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
};

export default App;
