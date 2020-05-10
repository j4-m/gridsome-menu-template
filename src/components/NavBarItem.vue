<template>
  <component :is="tag" :to="to" active-class="is-active"><slot/></component>
</template>

<script>
export default {
  props:{
    to: {
      type: String,
      required: true,
      default: '/'
    },
  	hasChildren: {
      type:Boolean,
      required:true
    }
  },
  computed: {
    tag() { return this.hasChildren ? 'div' : 'g-link' }
  }
}
</script>