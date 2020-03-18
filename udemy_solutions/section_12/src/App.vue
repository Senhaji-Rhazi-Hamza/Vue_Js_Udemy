<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h3>EXERCICE</h3>
        <h1 v-myVon:click="clicked">Directives Exercise</h1>
        <button type="button" class="btn btn-primary">Hello </button>
      
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'myVon': {
      bind(el, binding, vnode) {
             let type = binding.arg
             let fn = binding.value
             el.addEventListener(type, fn, false); 
           
      }
    }
  },
  methods: {
    clicked() {
      alert('i was clicked')
    }
  },
};
</script>

<style>
</style>
