<template lang="pug">

  .editor-wrap
    .action-buttons
      a(href='#!') Preview
      ActionButtons
    .editor-area.z-depth-1
      AddedContent

</template>

<script>
import AddedContent from './AddedContent.vue';
import ActionButtons from './ActionButtons.vue';

export default {
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
    padding: 16px 0

</style>
