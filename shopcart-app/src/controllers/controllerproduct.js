import { viewproducts } from "../views/productview.js";
import { products } from "../models/product.js";
import { shopservices } from "../services/productservices.js";

export class controllerproduct {
    constructor(cartservices,cartview) {
        this.service = new shopservices();
        this.view = new viewproducts(cartservices,cartview);
    }

    async getallproducts() {
        const products = await this.service.fetchproducts();
        this.view.setproducts(products);
    }
}
