import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { ListingsProvider } from './components/contextManager';


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
reportWebVitals();
