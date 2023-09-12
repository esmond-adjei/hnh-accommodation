import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { ListingsProvider } from './services/contextManager';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ListingsProvider>
        <App />
      </ListingsProvider>
    </Router>
  </React.StrictMode>
);
