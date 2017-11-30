import * as types from '../actions/ActionTypes';
import {editBikeRequest, getBikeByIdRequest, loadAllBikesRequest} from "../../api/bikes";
import {getBikesOldProps, oldPropsObtained} from "../actions/editBike";
import {allBikesLoaded} from "../actions/loadBikeList";

function editBikeMiddleware({getState}) {
    return next => action => {
        switch (action.type) {
            case types.UPDATE_BIKE: {
                editBikeRequest(action.bike)
                    .then(response => getUpdatedResults(response))
                    .then(() => loadAllBikesRequest())
                    .then(response => next(allBikesLoaded(response)))
                    // .then(() => next(getBikesOldProps(0)))
                    // .then(response => next(oldPropsObtained(response)))
                    .catch(e => console.log(e));
            }
            case types.GET_OLD_PROPERTIES: {
                if (action.productId >= 749) {
                    getBikeByIdRequest(action.productId)
                        .then(response => next(oldPropsObtained(response)))
                        .catch(e => console.log(e));
                }
            }
            default:
                break;
        }
        return next(action);
    }
}

function getUpdatedResults(success) {
    if (success === 1) {
        alert("SUCCESS: record updated");
    } else {
        alert("ERROR: record update failed");
    }
}

export default editBikeMiddleware;