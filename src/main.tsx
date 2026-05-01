import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Inject Material Symbols font dynamically since index.html is out of scope
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
