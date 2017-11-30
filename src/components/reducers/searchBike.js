import * as types from "../actions/ActionTypes";

const initialState = {
    keyword: '',
    foundBikes: []
};

function searchBikeReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_BIKE: {
            return updateObject(state, {
                keyword: action.keyword
            });
        }
        case types.BIKE_FOUND: {
            console.log("found in reducer " + action.bikes);
            return updateObject(state, {
                foundBikes: action.foundBikes
            })
        }
        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default searchBikeReducer;