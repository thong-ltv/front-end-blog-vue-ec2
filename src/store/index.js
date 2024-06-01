import axios from "axios";
import { createStore } from "vuex";

//create a new store instance
const store = createStore({
  state() {
    return {
      data: [],
      itemFindByIdContent: "",
      itemFindByIdTitle: "",
      latestPostId: "",
    };
  },

  getters: {
    dataItems(state) {
      return state.data;
    },

    dataItemById(state) {
      return state.itemFindByIdContent;
    },

    dataItemByIdTitle(state) {
      return state.itemFindByIdTitle;
    },

    getLatestPostId(state) {
      return state.latestPostId;
    },
  },

  mutations: {
    setData(state, payload) {
      state.data = payload;
    },

    setItemFindById(state, payload) {
      state.itemFindByIdContent = payload;
    },

    setItemFindByIdTitle(state, payload) {
      state.itemFindByIdTitle = payload;
    },

    setLatestPostId(state, payload) {
      state.latestPostId = payload;
    },
  },

  actions: {
    fetchData({ commit }) {
      axios
        .get("http://44.198.78.243:3000/api/post")
        .then((response) => {
          commit("setData", response.data.data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },

    fetchItemById({ commit }, id) {
      axios
        .get("http://44.198.78.243:3000/api/post")
        .then((response) => {
          const item = response.data.data.find((item) => item._id === id);
          commit("setItemFindById", item.content);
        })
        .catch((error) => console.error("Fetch error: ", error));
    },

    fetchItemByIdTitle({ commit }, id) {
      axios
        .get("http://44.198.78.243:3000/api/post")
        .then((response) => {
          const item = response.data.data.find((item) => item._id === id);
          commit("setItemFindByIdTitle", item.title);
        })
        .catch((error) => console.error("Fetch error: ", error));
    },

    fetchLatestPostId({ commit }) {
      axios
        .get("http://44.198.78.243:3000/api/post")
        .then((response) => {
          const item = response.data.data[response.data.data.length - 1];
          commit("setLatestPostId", item._id);
        })
        .catch((error) => console.error("Fetch error: ", error));
    },
  },
});

export default store;
