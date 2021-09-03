<template><!-- template taxtarea components -->
  <textarea class="select" type="text" autocomplate="off" :class="{textAlign: alignState, marBto20: marginState}" :style="{width:widths + '%', height:heights + 'px'}" style="margin-top:5px; font-size:0.95rem;overflow:hidden;"></textarea>
</template>
<script>
export default {
  name: 'Textareas',
  props: {
    widths: {
      type: Number,
      default: 0
    },
    heights: {
      type: Number,
      default: 0
    },
    alignState: Boolean,
    marginState: Boolean
  },
  data () {
    return {

    };
  }
};
</script>
<style>
    .textareaStyle {
      border: 1px solid #797979;
    }
    /*.textareaStyle:focus {*/
    /*  outline: none;*/
    /*  border: 1px solid #ffffff;*/
    /*  outline: 2px solid #ef8454;*/
    /*}*/
    .textAlign{
      text-align:center;
    }
    .marBto20 {
      margin-bottom: 15px;
    }
</style>
