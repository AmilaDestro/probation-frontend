import * as types from './ActionTypes';

export const bikeSearch = (keyword) => {
    return {
        type: types.SEARCH_BIKE,
        keyword: keyword
    }
};

export const bikeFound = (foundBikes) => {
  return {
      type: types.BIKE_FOUND,
      foundBikes: foundBikes
  }
}