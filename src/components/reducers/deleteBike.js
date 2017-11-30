import * as types from "../actions/ActionTypes";

const initialState = {
    productId: 0
};

function removableBikesReducers(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case types.DELETE_BIKE: {
            debugger;
            return updateObject(state, {
                productId: action.productId
            });
        }
        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default removableBikesReducers;