import * as types from '../actions/ActionTypes';
import {loadTop5BikesRequest} from "../../api/bikes";
import {top5Loaded} from "../actions/loadTop5";

function loadTop5MiddleWare({getState}) {
    return next => action => {
        switch (action.type) {
            case types.LOAD_TOP_5: {
                loadTop5BikesRequest()
                    .then(response => next(top5Loaded(response)))
                    .catch(e => console.error(e));
                break;
            }
            default:
                break;
        }
        return next(action);
    }
}

export default loadTop5MiddleWare;