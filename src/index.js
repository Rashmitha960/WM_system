import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import App from './App';
import './style.css';  // Make sure this file exists in src/
=======
<<<<<<< HEAD
import App from './App'; 
import './styles/index.css';
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> a5d075e4922a9c2d14ac650e038d1e8a7449d3be
>>>>>>> 9bf5ca4c5cc3478fc8505fc60de50ba990a55447

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
  </React.StrictMode>
);
=======
<<<<<<< HEAD
    <App /> 
  </React.StrictMode>
);
=======
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> a5d075e4922a9c2d14ac650e038d1e8a7449d3be
>>>>>>> 9bf5ca4c5cc3478fc8505fc60de50ba990a55447
=======
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
>>>>>>> feature/login
