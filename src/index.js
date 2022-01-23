import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {React.createElement(App, null, null)}    
  </React.StrictMode>,
document.getElementById('app-root')
);