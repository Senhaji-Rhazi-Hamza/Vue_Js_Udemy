<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <!-- <button @click="incrementIdx()">increment</button> -->
            <servers :selectFn="selectClicked" ></servers>
            <app-server-details  v-bind:clicked="this.clickedServerIdx"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
        ,
        data : function () {
            return {
                clickedServerIdx : 2
            }
        },
        methods: {
            selectClicked : function(idx) {
                console.log('im inside selectClicked idx  = ' + idx)
                this.clickedServerIdx = idx
            },
            incrementIdx: function() {
                this.clickedServerIdx = this.clickedServerIdx + 1
                console.log("current value of idx is : " + this.clickedServerIdx)
                return this.clickedServerIdx
            }
        },
    }
</script>

<style>

</style>
