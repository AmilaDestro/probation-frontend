import * as types from './ActionTypes';

export const loadTop5Sales = () => {
   return {
       type: types.LOAD_TOP_5
   }
};

export const top5Loaded = (topSales) => {
  return {
      type: types.TOP_5_LOADED,
      topSales: topSales
  }
};