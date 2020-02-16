<template>
    <div class="col-xs-12 col-sm-6">
        
        <p v-if="currentIdx != 0">Server Details of idx : {{ clicked}}</p>
        <p v-else>
            Server Details not updated yet
        </p>
    </div>

</template>

<script>

export default {
    props: ['clicked'],
    data : function () {
        return {
         
        }
    }
}
</script>

<style>

</style>
