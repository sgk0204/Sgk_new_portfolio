// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_base.css'; // Import base styles
import './styles/_variables.css'; // Import variables
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);