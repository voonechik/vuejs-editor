<template lang="pug">

  .editor-wrap
    .action-buttons
      router-link(to='/preview' @click.native='getEditorContent') Preview
      ActionButtons
    .editor-area.z-depth-1
      AddedContent

</template>

<script>
import AddedContent from './AddedContent.vue';
import ActionButtons from './ActionButtons.vue';

export default {
  methods: {
    getEditorContent() {
      let content = [];
      let contentWrap = document.getElementsByClassName('content-wrap');

      Array.prototype.map.call(contentWrap, function(element) {
        content.push(element.innerHTML);
      });
      
      let transformContentToString = content + '';
      let totalContent = transformContentToString.replace(/contenteditable="true"/g, '').replace(/,/g, '');
      this.$store.commit('CHANGE_PREVIEW_CONTENT', totalContent);
    }
  },
  components: { AddedContent, ActionButtons }
}
</script>

<style lang="sass">

  .editor-wrap
    width: 900px
    margin: 0 auto

  .action-buttons
    display: flex
    justify-content: space-between
    align-items: center

  .editor-area
    min-height: 450px
    background: #fff
    border-radius: 6px
    padding: 16px 0 28px

</style>
