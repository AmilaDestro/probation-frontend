import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import bikesReducers from './components/reducers/addBike';
import removableBikesReducers from './components/reducers/deleteBike';
import deleteBikeMiddleWare from "./components/middleware/deleteBike";
import addBikeMiddleWare from "./components/middleware/addBike";
import bikeListReducer from "./components/reducers/loadBikeList";
import loadBikeListMiddleWare from "./components/middleware/loadBikeList";
import loadTop5MiddleWare from "./components/middleware/loadTop5";
import top5Reducer from "./components/reducers/loadTop5";

const middleware = [
    thunk,
    loadBikeListMiddleWare,
    loadTop5MiddleWare,
    addBikeMiddleWare,
    deleteBikeMiddleWare,
    createLogger()];

const store = createStore(
    combineReducers({
        bikeListReducer: bikeListReducer,
        top5Reducer: top5Reducer,
        bikesReducers: bikesReducers,
        removableBikesReducers: removableBikesReducers

    })
    , applyMiddleware(...middleware));

export default store;