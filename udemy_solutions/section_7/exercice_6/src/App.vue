<template>
  <div class="container">
      <server-header>  </server-header>    
      <server-status>  </server-status>
      <br>    
      <span class="ml-3 mt-5"> <server-managment>  </server-managment>    </span>
      
  </div>
</template>

<script>
// 
import ServerHeader from './ServerHeader.vue'
import ServerStatus from './ServerStatus.vue'
import ServerManagment from './ServerManagment.vue'


export default {
  components: {
        'server-header':ServerHeader,
        'server-status':ServerStatus,
        'server-managment':ServerManagment
    }
}
</script>

<style>
</style>
