<template lang="pug">
  
  div.preview-wrap
    router-link(to='/' class='preview-wrap__editor-link') Editor
    div.preview.z-depth-1(v-html='preview')

</template>

<script>
import {eventBus} from '../main';

export default {
  data() {
    return {
      preview: this.$store.state.previewContent
    };
  }
}
</script>

<style lang="sass">

  .preview-wrap 
    width: 900px
    margin: 0 auto

  .preview-wrap__editor-link
    padding: 21px 0
    display: inline-flex

  .preview
    min-height: 450px
    background: #fff
    border-radius: 6px
    padding: 16px 90px
    max-width: 900px
    
    h3
      margin: 18px 0 0 !important
    
    p
      margin: 28px 0 0 !important

</style>
