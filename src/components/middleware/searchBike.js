import * as types from '../actions/ActionTypes';
import {searchBikeRequest} from "../../api/bikes";
import {bikeFound} from "../actions/searchBike";

function searchBikesMiddleware({getState}) {
    return next => action => {
        console.log("middleware action.keyword:" + action.keyword);
        switch (action.type) {
            case types.SEARCH_BIKE: {
                searchBikeRequest(action.keyword)
                    .then(response => next(bikeFound(response)))
                    .catch(e => console.log(e))
            }
            case types.BIKE_FOUND: {

            }
            default:
                break;
        }
        return next(action);
    }
}

export default searchBikesMiddleware;