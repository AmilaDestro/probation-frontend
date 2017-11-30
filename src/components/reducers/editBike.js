import * as types from "../actions/ActionTypes";

const initialState = {
    bike: {
        productId: 0,
        name: '',
        productNumber: '',
        color: '',
        price: 0.0,
        size: 0,
        weight: 0.0,
        type: 1
    },
    productId: 0,
    notUpdatedBike: {
        productId: 0,
        name: '',
        productNumber: '',
        color: '',
        price: '',
        size: '',
        weight: '',
        type: ''
    }
}

function editBikeReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_BIKE: {
            return updateObject(state, {
               bike: action.bike
            });
        }
        case types.GET_OLD_PROPERTIES: {
            return updateObject(state, {
               productId: action.productId
            });
        }
        case types.OLD_PROPS_OBTAINED: {
            return updateObject(state, {
                notUpdatedBike: action.notUpdatedBike
            });
        }
        default:
            return state;
    }

}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default editBikeReducer;