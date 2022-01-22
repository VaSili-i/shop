import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import user from "./store/userStore.js";
import shop from "./store/shopStore.js";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user,
    shop
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

