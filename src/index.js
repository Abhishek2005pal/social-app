import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from "./reportWebVitals";

const domNode = document.getElementById('root');
hydrateRoot(domNode, <App />);

reportWebVitals();
