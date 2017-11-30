import axios from 'axios';


const GET_ALL_BIKES_URL = "http://localhost:8081/api/bikes";
const GET_TOP_5 = "http://localhost:8081/api/top5";
const ADD_NEW_BIKE = "http://localhost:8081/api/bikes/";
const DELETE_BIKE = "http://localhost:8081/api/bikes/";
const SEARCH_BIKE = "http://localhost:8081/api/bikes/";
const EDIT_BIKE = "http://localhost:8081/api/bikes/update/";
const GET_BIKE_BY_ID = "http://localhost:8081/api/bikes/";


export const loadAllBikesRequest = () => {
    return axios.get(GET_ALL_BIKES_URL)
        .then(function (response) {
            return response.data;
        });
};


export const loadTop5BikesRequest = () => {
    return axios.get(GET_TOP_5)
        .then(function (response) {
            return response.data;
        });
};


export const createBikeRequest = (bike) => {

    return axios.post(ADD_NEW_BIKE, bike)

        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const editBikeRequest = (bike) => {

    return axios.post(EDIT_BIKE, bike)

        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
};


export const deleteBikeRequest = (productId) => {

    return axios.delete(DELETE_BIKE, {params:
        {
            productId: productId
        }
    })

        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
 };


export const searchBikeRequest = (keyword) => {

    return axios.get(SEARCH_BIKE, {
        params: {
            keyword: keyword
        }
    })

        .then(function (response) {
            console.log(response.data);
            return response.data;

        })
        .catch(function (error) {
            console.log(error);
        });
};

export const getBikeByIdRequest = (productId) => {
    return axios.get(GET_BIKE_BY_ID.concat(productId))
        .then(function (response) {
            console.log(response.data);
            return response.data;

        })
        .catch(function (error) {
            console.log(error);
        });
};


