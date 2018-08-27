<template lang="pug">

  main.main.grey.lighten-2
    .container
      AppEditor

</template>

<script>
import AppEditor from './editor/AppEditor.vue';

export default {
  components: {
    AppEditor
  }
}
</script>

<style lang="sass">

* 
  margin: 0
  padding: 0
  box-sizing: border-box

.main
  padding: 70px 0
  height: 100vh

</style>
