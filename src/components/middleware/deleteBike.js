import * as types from '../actions/ActionTypes';
import {deleteBikeRequest} from "../../api/bikes";

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