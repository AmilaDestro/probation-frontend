import * as types from "../actions/ActionTypes";

const initialState = {
    bikes: []
}

function bikeListReducer(state = initialState, action) {
    console.log("bikeListReducer:" + action);
    switch (action.type) {
        case types.BIKELIST_LOADED: {
            return updateObject(state, {
                bikes: action.bikes
            });
        }
        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default bikeListReducer;