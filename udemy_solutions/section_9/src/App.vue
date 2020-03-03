<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="selectedComponent = 'app-red'">Load Red Template</button>
        <hr />
          <component :is="selectedComponent">
            <slot>
              <h2>TITLE</h2>
              <h4>SubTitle</h4>
            </slot>
          </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedComponent: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
