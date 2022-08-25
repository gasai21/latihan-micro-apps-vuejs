import * as types from "./mutation-types";

export default {
  [types.ADD_ITEM](state, item) {
    state.items.push(item);
  },

  [types.GET_ITEM](state) {
    return state.items;
  },

  [types.SET_DATA_PRODUCTS](state, data){
    state.products = data;
  },

  [types.GET_DATA_PRODUCTS](state){
    return state.products;
  }
};