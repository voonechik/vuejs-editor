<template lang="pug">

  .toolbar(
            :style='{ top, left }'
            v-if='toolbar' 
            ref='toolBar')
    i(
      v-for='button in buttons'
      @mousedown='exec'
      class='toolbar__icon material-icons') {{buttons.className}}

</template>
<script>
export default {
  props: ["button"],

  methods: {
    exec (event) {
      document.execCommand(this.button.styleName[0]);
    }
  }
}
</script>

<style lang='sass'>

  .toolbar
    display: flex
    align-items: center
    justify-content: space-between
    padding: 7px
    position: absolute
    background: #212121
    width: 190px
    height: 40px
    border-radius: 5px
    z-index: 999
    transform: translateX(-50%)

  .toolbar__icon
    color: #fff
    z-index: 999
    cursor: pointer

</style>
