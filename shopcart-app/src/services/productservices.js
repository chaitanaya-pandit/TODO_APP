export class shopservices {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('products')) || [];
    }

    // storage should receive products from outside
    storage(products) {
       localStorage.setItem('products', JSON.stringify(products));
    }

    async fetchproducts() {
        try {
            const response = await fetch(`https://dummyjson.com/products`);
            const data = await response.json();
            const products = data.products;

            console.log(products);

            this.products = products;

            
            this.storage(products);

            return products;

        } catch (error) {
            console.log("error fetching products:", error);
            return [];
        }
    }
    
    getallproducts() {
        return this.products;
    }
}
