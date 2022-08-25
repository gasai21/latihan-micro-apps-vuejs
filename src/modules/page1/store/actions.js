import * as types from "./mutation-types";
import axios from "axios";

export default {
  
    async getDataApi(state) {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                //   state.products = response.data;
                // console.log(response.data);

                //   return response.data;

                state.commit("SET_DATA_PRODUCTS", response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // return state.products;
    },

//   GET_DATA_PRODUCTS(state){
//     return state.products;
//   }
};