import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store/store';
import App from './App.vue';
import AppEditor from './editor/AppEditor.vue';
import AppPreview from './editor/AppPreview.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: AppEditor},
    {path: '/preview', component: AppPreview}
  ]
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
