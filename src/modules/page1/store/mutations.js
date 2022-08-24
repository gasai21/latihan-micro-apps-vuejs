import * as types from "./mutation-types";

export default {
  // [types.ADD_ITEM](state, item) {
    [types.ADD_ITEM](state, item) {
    state.items.push(item);
  },

  [types.GET_ITEM](state) {
    return state.items;
  }
};