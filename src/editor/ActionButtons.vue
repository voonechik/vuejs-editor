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
      contentItemIncrement: 1
    };
  },

  methods: {
    addTitle() {
      let i = this.contentItemIncrement++;
      let totalContentType = 'title' + i;
      eventBus.addContent(totalContentType);
    },

    addText() {
      let i = this.contentItemIncrement++;
      let totalContentType = 'text' + i;
      eventBus.addContent(totalContentType);
    }
  }   
}
</script>


<style lang="sass">

  .buttons-list
    display: flex
    margin: 14px 0


</style>
