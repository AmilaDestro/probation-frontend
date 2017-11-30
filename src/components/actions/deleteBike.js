import * as types from './ActionTypes';


export const bikeDeleted = (productId) => {
  return {
      type: types.DELETE_BIKE,
      productId: productId
  }
};
