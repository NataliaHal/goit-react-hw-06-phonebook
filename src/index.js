// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from "react-redux";
// import { App } from 'components/App';
// import './index.css';
// import { store } from 'redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}> 
//       <App />
//       </Provider>
//   </React.StrictMode>
// );
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "components/App";
import { store } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);