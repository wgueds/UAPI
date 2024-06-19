import { combineReducers } from 'redux';

import login from './login';
import app from './app';
import shoppingCart from './shoppingCart';

export default combineReducers({
    app,
    login,
    shoppingCart
});