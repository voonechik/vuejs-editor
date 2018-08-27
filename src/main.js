import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({
  data: {
    addedContent: []
  },
  methods: {
    addContent(contentType) {
      this.addedContent.push(contentType);
      this.$emit('contentAdded', this.addedContent);
    },
    removeAddedContentItem(indexItem) {
      this.addedContent.splice(indexItem, 1);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
