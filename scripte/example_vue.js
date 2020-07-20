new Vue({
    el: '#app',
    data: {
    titel:'Vue Instanz Beispiel',
    count: 0
    },
    methods: {
    increment: function(){ this.count += 1 },
    decrement: function(){ this.count -= 2 },
    reset: function(){ this.count = 0 }
    }
    });