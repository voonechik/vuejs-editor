import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    addedContent: [],
    previewContent: ''
  },
  mutations: {
    CHANGE_PREVIEW_CONTENT(state, payload) {
      this.state.previewContent = payload;
    },
    CHANGE_ADDED_CONTENT(state, payload) {
      this.state.addedContent.push(payload);
    }
  }
});