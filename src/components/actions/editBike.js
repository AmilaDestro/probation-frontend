import * as types from './ActionTypes';

export const editBike = (bike) => {
    return {
        type: types.UPDATE_BIKE,
        bike: bike
    }
};

export const getBikesOldProps = (productId) => {
    return {
        type: types.GET_OLD_PROPERTIES,
        productId: productId
    }
};

export const oldPropsObtained = (notUpdatedBike) => {
    return {
        type: types.OLD_PROPS_OBTAINED,
        notUpdatedBike: notUpdatedBike
    }
};