import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { ToastContainer } from "react-toastify";

import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import theme from "./styles/theme";

import App from "./App";

import "./styles/global.scss";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    closeOnClick
                />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
