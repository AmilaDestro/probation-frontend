import * as types from './ActionTypes';
import {createBikeRequest} from "../../api/bikes";


export const bikeAdded = (bike) => {
    return {
        type: types.ADD_NEW_BIKE,
        payload : {
            name: bike.name,
            productNumber: bike.productNumber,
            color: bike.color,
            price: bike.price,
            size: bike.size,
            weight: bike.weight,
            type: bike.type
        }
    }
};


export const addNewBike = (bike) => {
    return(dispatch, getState) => {
        if (getState().bikesReducers.payload) {
            return Promise.resolve();
        }
        console.log(bike);
        dispatch(bikeAdded(bike));

        return createBikeRequest(bike)
            .then((bikes) => {
            dispatch(bikeAdded(bikes));
            if (bikes === 1) {
                alert("SUCCESS: record created")
            } else {
                alert("ERROR: attempt to send empty data or record already exists")
            }
        })
            .catch(e => console.log(e))

    }
};
