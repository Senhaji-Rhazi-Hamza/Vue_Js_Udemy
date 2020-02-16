<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        @click="setFocus(server.id)"
        :class="divClasses(server.status)"
        class="list-group-item"
        v-for="(server, index) in servers"
      >
        <span>Server #{{ server.id }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { colorStatus } from "./ServerStatusColors.js";
export default {
  props: {
    selectFn: Function
  },
  data: function() {
    return {
      
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Pending" }
      ]
    };
  },
  methods: {
    setFocus: function(idx) {
      this.selectFn(idx);
      console.log("Im saying hi" + idx);
    },
    divClasses: function(status) {
        return {
          // ClsNormal:true
          ClsNormal: status == "Normal",
          ClsCritical: status == "Critical",
          ClsPending: status == "Pending"
        };
    
  },
  // computed: {
      
  //     }
    }
};
</script>

<style scoped>
.ClsCritical:hover {
  background-color: red;
}
.ClsNormal:hover {
  background-color: green;
}
.ClsPending:hover {
  background-color: orange;
}
</style>
