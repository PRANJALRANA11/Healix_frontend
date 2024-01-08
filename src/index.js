import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KindeProvider
      clientId="c9240f73dfe64356834900b9a93f9f87"
      domain="https://healix1.kinde.com"
      redirectUri="http://localhost:3000/main"
      logoutUri="http://localhost:3000"
    >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
