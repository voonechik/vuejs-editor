import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    addedContent: [],
    previewContent: '',
    buttons: [
      {
        className: 'format_bold',
        styleName: ['bold'],
      },
      {
        className: 'format_italic',
        styleName: ['italic'],
      },
      {
        className: 'format_align_left',
        styleName: ['justifyLeft'],
      },
      {
        className: 'format_align_center',
        styleName: ['justifyCenter'],
      },
      {
        className: 'format_align_right',
        styleName: ['justifyRight'],
      }
    ]
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