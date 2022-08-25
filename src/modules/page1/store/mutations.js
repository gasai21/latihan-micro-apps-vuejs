import * as types from "./mutation-types";
// import axios from "axios";

export default {
  // [types.ADD_ITEM](state, item) {
    [types.ADD_ITEM](state, item) {
    state.items.push(item);
  },

  [types.GET_ITEM](state) {
    return state.items;
  },

  [types.SET_DATA_PRODUCTS](state, data){
    // state.products.push(data);
    state.products = data;
    console.log(data);
    // return data;
    // console.log("masuk sini");
    // console.log(data);
    // console.log("----------------------------");
  },

  [types.GET_DATA_PRODUCTS](state){
    return state.products;
  }
};