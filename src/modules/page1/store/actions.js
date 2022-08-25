import * as types from "./mutation-types";
import axios from "axios";

export default {
  
    async getDataApi(state) {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                state.commit("SET_DATA_PRODUCTS", response.data);
            })
            .catch((err) => {
                console.log(err);
            });

    },
};