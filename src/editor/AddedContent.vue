<template lang="pug">

  div

    draggable( 
              :options="{dragClass: 'srt', animation: 400, chosenClass: 's-chosen', handle: '.options__icon_drag', ghostClass: 'content-section__drop-placeholder'}" 
              @start="drag=true" 
              @end="drag=false")
      section(v-for="(addedContentItem, index) in typeContent" 
              :key="addedContentItem+index" 
              v-if='/title/.test(addedContentItem)'
              class='content-section') 
        div.add-between
          button(type='button' class='waves-effect btn-floating')
            i.material-icons add
          span
        .content-block
          .options
            i.options__icon.options__icon_drag.material-icons drag_handle
            i.options__icon.material-icons(@click='deleteTitle(index)') delete
          .content-wrap(ref='contentWrap')
            h3(
                @click='showToolbar'
                class='content-block__title' 
                contenteditable='true') Title

      section(
              class='content-section'
              v-else-if='/text/.test(addedContentItem)'
              :key='addedContentItem+index')
        div.add-between
          button(type='button' class='waves-effect btn-floating')
            i.material-icons add
          span
        .content-block
          .options.options_text
            i.options__icon.options__icon_drag.material-icons drag_handle
            i.options__icon.material-icons(@click='deleteText(index)') delete 
          .content-wrap
            p(
              @click='showToolbar'
              class='content-block__content content-block__text' 
              contenteditable='true') Text
    .toolbar(
              :style='{ top, left }'
              v-if='toolbar')
      i(
        @mousedown='exec(button.styleName[0])'
        v-for='button in buttons'
        v-if='button.className !== "divider"'
        :key='button.className'
        class='toolbar__icon material-icons') {{button.className}}
      i(
        class='toolbar__divider'
        v-else)

</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data() {
    return {
      toolbar: false,
      top: '',
      left: '',
      buttons: this.$store.state.buttons,
      typeContent: this.$store.state.addedContent
    }
  },
  methods: {
    exec (styleName) {
      document.execCommand(styleName);
    },
    
    deleteTitle(titleIndex) {
      this.typeContent.splice(titleIndex, 1);
    },

    deleteText(textIndex) {
      this.typeContent.splice(textIndex, 1);
    },

    getSelectionCoords() {
      var win = window;
      var doc = document;
      
      var sel = doc.selection;
      var range, rects, rect, width, left, right;
      var x = 0, y = 0;
      
      if (sel) {
          if (sel.type != "Control") {
              range = sel.createRange();
              range.collapse(true);
              x = range.boundingLeft;
              y = range.boundingTop;
          }
      } else if (win.getSelection) {
          sel = win.getSelection();
          if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
              
            if (range.getClientRects) {
                  // range.collapse(true);
                  rects = range.getClientRects();

                  if (rects.length > 0) {
                      rect = rects[0]; // rects[0] return object
                  }

                  x = rect.left;
                  y = rect.top;
                  width = rect.width;
                  left = rect.left;
                  right = rect.right;
              }
          }
      }
      return { x, y, width, left, right };
    },

    showToolbar() {
      var coords = this.getSelectionCoords();
      if(coords.width > 0) {

        this.top = coords.y - 35 + 'px';
        this.left = coords.left + ((coords.right - coords.left) / 2) + 'px';
        this.toolbar = true;

      } else {
        this.toolbar = false;
      }
    }
  },
  created() {
    // $(function() {
    //   $("#sortable" ).sortable({
    //     connectWith: ".content-section",
    //     handle: '.options__icon_drag',
    //     placeholder: "ui-state-highlight",
    //     forcePlaceholderSize: true
    //   });
    //   // $("#sortable" ).disableSelection();
    // });
  }
}
</script>

<style lang="sass">

  .content-section
    position: relative
    padding: 0 90px

  .add-between
    position: relative
    display: flex
    height: 28px
    padding-left: 10px
    align-items: center
    &:hover
      button
        opacity: 1
        left: -32px
      span
        opacity: 1
    button
      opacity: 0
      position: absolute
      height: 28px
      width: 28px
      left: -70px
      background: #fff
      transition: all .4s ease
      &:hover
        background: #cfd8dc4a 
      i
        color: #000
        width: 28px
        height: 28px
        line-height: 29px
    span
      opacity: 0
      width: 100%
      height: 1px
      border: 0.5px dotted rgba(0,0,0,0.25)
      transition: opacity .2s ease
    
  .options
    position: absolute
    left: -3px
    top: 32px

  .options__icon
    opacity: 0
    position: relative
    left: -30px
    width: 40px
    height: 40px
    line-height: 40px
    border-radius: 50%
    text-align: center
    cursor: pointer
    font-size: 18px
    transition: all .3s ease-out
    &:hover
      background: #cfd8dc4a
  
  .content-block__title
    margin: 0
    outline: none

  .content-block
    &:hover
      .options__icon
        opacity: 1
        left: 0
        transition: all .3s ease-out
        &:nth-child(2)
          transition-delay: .1s

  .options_text
    top: 19px

  .content-block__text
    outline: none

  .toolbar
    display: flex
    align-items: center
    justify-content: space-between
    padding: 7px
    position: absolute
    background: #212121
    width: 280px
    z-index: 999
    height: 40px
    border-radius: 5px
    transform: translateX(-50%)

  .toolbar__icon
    color: #fff
    z-index: 999
    cursor: pointer

  .toolbar__divider
    width: 1px
    height: 100%
    margin: 5px
    background: #e0e0e0

  .content-section__drop-placeholder
    position: relative
    margin: 0 80px
    opacity: 1
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      border: 2px dashed #424242
      border-radius: 6px
      background: #e0e0e0
      opacity: 1

</style>
