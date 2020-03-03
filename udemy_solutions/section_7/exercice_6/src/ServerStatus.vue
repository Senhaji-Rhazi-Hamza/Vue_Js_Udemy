<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div v-bind:key="n" v-for="n in 5">
            <hr />
            Server # {{n}}
          </div>
        </div>
        <div  class="ml-5 col">
          <h1>NEXT</h1>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row">
      <div v-bind:key="n" v-for="n in 5">
        <hr />
        Server # {{n}}
      </div>
    </div>

    <div class="col">
        Hello
  </div>-->
  <!-- <div class="col">1 of 2</div>
    <div class="col">2 of 2</div>
  </div>-->
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
