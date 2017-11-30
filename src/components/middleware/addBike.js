import * as types from '../actions/ActionTypes';
import {createBikeRequest, loadAllBikesRequest} from "../../api/bikes";
import {allBikesLoaded} from "../actions/loadBikeList";


function addBikeMiddleWare({getState}) {
    return next => action => {
        switch (action.type) {
            case types.ADD_NEW_BIKE: {
                createBikeRequest(action.bike)
                    .then((bikes) => {
                        if (bikes === 1) {
                            alert("SUCCESS: record created")
                        } else {
                            alert("ERROR: attempt to send empty data or record already exists")
                        }
                    })
                    .then(() => loadAllBikesRequest())
                    .then(response => next(allBikesLoaded(response)))
                    .catch(e => console.log(e))
            }
            default:
                break;
        }
        return next(action);
    }
}

export default addBikeMiddleWare;