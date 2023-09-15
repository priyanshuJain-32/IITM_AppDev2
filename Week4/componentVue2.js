Vue.component('product-page', {
	template: `<div>
	Enter Product name: <input type="text" v-model="productName"/>
		Enter Product price: <input type="text" v-model="productPrice"/>
		<button @click="addProduct"> Add Product </button>
	<p v-if="productList.length != 0"> Total Products: <span v-html="totalProducts"></span></p>
	<ul>
		<li v-for="product in productList"> {{product.productName}} </li>
	</ul></div>
	`,
	data: function() {
		return {
		productName: "",
		productPrice: "",
		productList: []
		}
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
const app = new Vue({
	el: "#app"
})