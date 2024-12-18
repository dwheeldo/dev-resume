import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import App from './App';

const root = createRoot(document.getElementById('app')!);

root.render(
  <Router>
    <App />
  </Router>,
);
