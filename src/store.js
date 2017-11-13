import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import bikesReducers from './components/reducers/addBike';

const middleware = [thunk, createLogger()];

const store = createStore(
    combineReducers({
        bikesReducers
    })
    , applyMiddleware(...middleware));

export default store;