import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { userProvider } from "./components/userProvider"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <userProvider>
        {/* <Provider> */}
        {/* store={store}> */}
        <App />
        {/* </Provider> */}
      </userProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
