import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import productReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer'



const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

const allStoreEnhances = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)
const store = createStore(
    allReducers, 
    {
        products: [{name: 'Iphone'}],
        user: 'Ilima'
    },
    allStoreEnhances
    
);
console.log(store.getState());


ReactDOM.render(<Provider store={store}><App randomProps="whatever" /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
