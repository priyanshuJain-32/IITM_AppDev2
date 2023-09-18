Vue.component('product-page', {
	template: `<div>
	Enter Product name: <input type="text" v-model="productName"/>
		Enter Product price: <input type="text" v-model="productPrice"/>
		<button @click="addProduct" class="btn" :class="[activeClass, dataIconClass]"> Add Product <i class="bi bi-database-fill-add"></i>
		</button>
		
	<p v-if="productList.length != 0"> Total Products: <span v-html="totalProducts"></span>
	
	</p>
	
	<ul>
		Product Name | Product Price
		<li v-for="product in productList"> {{product.productName}} | {{product.productPrice}} </li>
	</ul>
	</div>`,
	data: function() {
		return {
		productName: "",
		productPrice: "",
		productList: [],
		activeClass: 'active',
		dataIconClass: "btn-primary",
		}
	},
	methods: {
		addProduct: function() {
			if (this.productName && this.productPrice) {
				this.productList.push({"productName": this.productName, 
				"productPrice": this.productPrice})};
				dataIconClass = 'btn-warning';
			// save to backend using API here
				fetch("https://httpbin.org/post", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({'productName': this.productName, 'productPrice':this.productPrice})
				})
				.then(response => response.json())
				.then(data => {
					console.log('Success:', data);
					this.dataIconClass = 'btn-success';
				}).catch(error => {
					console.log('Error:', error);
					this.dataIconClass = 'btn-danger';
				});

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