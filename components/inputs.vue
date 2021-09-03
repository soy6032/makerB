<template><!-- template input components -->
  <input ref="intag" class="select" type="text" autocomplate="off" :placeholder="place" :value="val" :class="{borderActive: borderState, textAlign: alignState, textBold: boldState}" :style="{width:widths + '%', height:heights + 'px', fontSize:fontSizes + 'rem'}">
</template>
<script>
export default {
  name: 'Inputs',
  props: {
    widths: {
      type: Number,
      default: 0
    },
    heights: {
      type: Number,
      default: 0
    },
    fontSizes: {
      type: Number,
      default: 1
    },
    place: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: ''
    },
    borderState: Boolean,
    alignState: Boolean,
    boldState: Boolean
  },
  data () {
    return {

    };
  },
  mounted() {
    this.setValues();
  },
  methods: {
    setValues() {
      //console.log(this.$refs.intag);
      this.$refs.intag.setAttribute('value', this.val);
    }
  }
};
</script>
<style>
    .borderActive{
        border-bottom:1px solid #959595;
    }
    .inputStyle:focus {
      /*outline: none;*/
      outline: 2px solid #ef8454;
    }
    .textAlign{
      text-align:center;
    }
    .textBold {
      font-weight: 600;
    }
</style>
