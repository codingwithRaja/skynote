import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/notes/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
);


