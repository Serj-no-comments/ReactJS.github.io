import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import Router from "./Profilese/HomeList";
import {createTheme, ThemeProvider} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Provider} from "react-redux";
import {store} from "./Reduser/store";


const myThem=createTheme({
    palette:{
        background:{
            default: "lightblue"
        }
    }
});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter>
        <ThemeProvider theme={myThem}>
            <CssBaseline/>
            <Router />
        </ThemeProvider>
    </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
