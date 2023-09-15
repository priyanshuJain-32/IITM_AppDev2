var app = new Vue({
	el: "#app",
	data: {
		productName: "",
		productPrice: "",
		productList: []
	},
	methods: {
		addProduct: function() {
			this.productList.push({"productName": this.productName, 
			"productPrice": this.productPrice});
			this.productName = "";
			this.productPrice = "";
		},
	},
	computed: {
		totalProducts() {
			return `<p>${this.productList.length}</p>`
		}
	}

})