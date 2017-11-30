import * as types from '../actions/ActionTypes';
import {loadAllBikesRequest} from "../../api/bikes";
import {allBikesLoaded} from "../actions/loadBikeList";


function loadBikeListMiddleWare({getState}) {
    return next => action => {
        switch (action.type) {
            case types.LOAD_ALL_BIKES: {
                loadAllBikesRequest()
                    .then(response => next(allBikesLoaded(response)))
                    .catch(e => console.error(e));
                break;
            }
            default:
                break;
        }
        return next(action);
    }
}

export default loadBikeListMiddleWare;