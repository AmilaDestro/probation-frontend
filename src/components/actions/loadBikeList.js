import * as types from './ActionTypes';

export const loadAllBikes = () => {
    return {
        type: types.LOAD_ALL_BIKES
    }
};

export const allBikesLoaded = (bikes) => {
    return {
        type: types.BIKELIST_LOADED,
        bikes: bikes
    }
};