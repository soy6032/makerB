<template><!-- template image components -->
  <div class="imgStyle" :style="{width:widths + '%', height:heights + '%', background:'url('+img+') center center / cover no-repeat'}" />
</template>
<script>
export default {
  name: 'Imgs',
  props: {
    widths: {
      type: Number,
      default: 0
    },
    heights: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    };
  }
};
</script>
<style></style>
