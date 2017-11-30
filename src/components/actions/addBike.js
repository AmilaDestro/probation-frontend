import * as types from './ActionTypes';


export const bikeAdded = (bike) => {
    return {
        type: types.ADD_NEW_BIKE,
        bike: bike
    }
};

