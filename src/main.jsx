import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ScrollToTop />
    <App />
  </BrowserRouter>
);
