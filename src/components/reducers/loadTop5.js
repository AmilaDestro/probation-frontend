import * as types from "../actions/ActionTypes";

const initialState = {
    topSales: []
}

function top5Reducer(state = initialState, action) {
    switch (action.type) {
        case types.TOP_5_LOADED: {
            return updateObject(state, {
                topSales: action.topSales
            });
        }
        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default top5Reducer;