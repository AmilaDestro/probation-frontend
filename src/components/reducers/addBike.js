import * as types from "../actions/ActionTypes";

const initialState = {
    bike: {
        name: '',
        productNumber: '',
        color: '',
        price: 0.0,
        size: 0,
        weight: 0.0,
        type: 1
    },
};

function bikesReducers(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NEW_BIKE: {
            debugger;
            return updateObject(state, {
                bike: action.bike,
            });
        }
        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default bikesReducers;