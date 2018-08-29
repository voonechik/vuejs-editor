<template lang="pug">
  
  ul.buttons-list
    li
      button(
              @click='addTitle'
              class='btn-add-title btn-flat waves-effect') Title
    li
      button( 
              @click='addText("text")'
              class='btn-flat waves-effect') Text
    li
      button.btn-flat.waves-effect Link
    li
      button.btn-flat.waves-effect Media

</template>

<script>
import {eventBus} from '../main';

export default {
  data() {
    return {
      contentItemIncrement: 0
    };
  },

  methods: {
    addTitle() {
      let i = this.contentItemIncrement++;
      let totalContentType = 'title' + i;

      this.$store.commit('CHANGE_ADDED_CONTENT', totalContentType);
    },

    addText() {
      let i = this.contentItemIncrement++;
      let totalContentType = 'text' + i;

      this.$store.commit('CHANGE_ADDED_CONTENT', totalContentType);
    }
  }   
}
</script>


<style lang="sass">

  .buttons-list
    display: flex
    margin: 14px 0


</style>
