import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import bikesReducers from './components/reducers/addBike';
import removableBikesReducers from './components/reducers/deleteBike';
import deleteBikeMiddleWare from "./components/middleware/deleteBike";
import addBikeMiddleWare from "./components/middleware/addBike";
import bikeListReducer from "./components/reducers/loadBikeList";
import loadBikeListMiddleWare from "./components/middleware/loadBikeList";

const middleware = [
    thunk,
    loadBikeListMiddleWare,
    addBikeMiddleWare,
    deleteBikeMiddleWare,
    createLogger()];

const store = createStore(
    combineReducers({
        bikeListReducer: bikeListReducer,
        bikesReducers: bikesReducers,
        removableBikesReducers: removableBikesReducers

    })
    , applyMiddleware(...middleware));

export default store;