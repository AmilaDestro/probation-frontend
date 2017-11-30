import * as types from './ActionTypes';
import {createBikeRequest} from "../../api/bikes";


export const bikeAdded = (bike) => {
    return {
        type: types.ADD_NEW_BIKE,
        bike: bike
    }
};

