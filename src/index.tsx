import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import './css/index.css';
import App from './App';

const root = createRoot(document.getElementById('app')!);

root.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
);
