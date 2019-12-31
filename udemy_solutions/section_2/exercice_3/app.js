new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result : function(){
            return this.value < 37 ? 'not there yet' : 'done'
        }
    },

    watch: {
        value : function(value)
        {
            var vm = this
            setTimeout(function(){vm.value = 0}, 5000)
            
        }
    },
});

// new Vue({
//     el: '#exercise',
//     data: {
//         value: ''
//     },
//     methods: {
//             alertMe: function(event) {
//                 alert('This an alert');
//             },
//             recordValue: function(event)
//             {
//                 this.value = event.target.value
//                 console.log(this.value)
//             }
//         }
// });