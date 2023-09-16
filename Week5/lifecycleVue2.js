Vue.component('password-check', {
    template: 
    `<div>
    
    </div>`,
    data: function() {
        return {
            grandTotal: 0
        }
    },
    // Lifecycle hooks
    beforeCreate() {
        console.log('Comp beforeCreate');
        console.log(this.grandTotal);
    },
    created() {
        console.log('Comp created');
        console.log(this.grandTotal);
    },
    beforeMount() {
        console.log('Comp beforeMount');
    },
    mounted() {
        console.log('Comp mounted');
    },
    beforeUpdate() {
        console.log('Comp beforeUpdate');
    },
    updated() {
        console.log('Comp updated');
    }
})
const app = new Vue({
	el: "#app",
    beforeCreate() {
        console.log('App beforeCreate');
        console.log(this.grandTotal);
    },
    created() {
        console.log('App created');
        console.log(this.grandTotal);
    },
    beforeMount() {
        console.log('App beforeMount');
    },
    mounted() {
        console.log('App mounted');
    },
    beforeUpdate() {
        console.log('App beforeUpdate');
    },
    updated() {
        console.log('App updated');
    }
})
