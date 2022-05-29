import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import ShopService from './services';
import ShopServiceContext from './components/shopServiceContext';
import store from './store';

const shopService = new ShopService()

ReactDOM.render(
  <Provider store={store}>
    <ShopServiceContext.Provider value={shopService}>  
      <App/> 
    </ShopServiceContext.Provider>   
  </Provider>
  , document.getElementById('root'));

