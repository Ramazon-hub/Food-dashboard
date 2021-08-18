import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { FoodProvider } from './context/OrderFoods/OrderFoods';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <FoodProvider>
            <App />
        </FoodProvider>
    
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


