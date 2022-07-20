import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './notes-app';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
