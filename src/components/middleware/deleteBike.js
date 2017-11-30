import * as types from '../actions/ActionTypes';
import {deleteBikeRequest, loadAllBikesRequest, loadTop5BikesRequest} from "../../api/bikes";
import {allBikesLoaded} from "../actions/loadBikeList";
import {top5Loaded} from "../actions/loadTop5";

function deleteBikeMiddleWare({getState}) {
    return next => action => {
        switch (action.type) {
            case types.DELETE_BIKE: {
                if (action.productId != '') {
                    deleteBikeRequest(action.productId)
                        .then(
                            (success) => {
                                if (success == 1) {
                                    alert("SUCCESS: record deleted");
                                } else {
                                    alert("ERROR: record not found");
                                }
                            }
                        )
                        .then(() => loadAllBikesRequest())
                        .then(response => next(allBikesLoaded(response)))
                        .then(() => loadTop5BikesRequest())
                        .then(response => next(top5Loaded(response)))
                        .catch(e => console.error(e));
                } else {
                    alert("WARNING: ID cannot be empty");
                }
                break;
            }
            default:
                break;
        }
        return next(action);
    }
}

export default deleteBikeMiddleWare;