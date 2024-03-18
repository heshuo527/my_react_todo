import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './pages/User'
import Login from './pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

