export class cartservices {
    constructor() {
        this.cartitems = JSON.parse(localStorage.getItem('cartitems')) || [];
    }

    save() {
        localStorage.setItem('cartitems', JSON.stringify(this.cartitems));
    }

    getproducts() {
        return this.cartitems;
    }

    addproduct(product) {
    const existing = this.cartitems.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        this.cartitems.push({
           ...product,
            quantity: 1
        });
    }

    this.save(this.cartitems);
    return this.cartitems;
   }
 removeproduct(id){
    this.cartitems = this.cartitems.filter(item => item.id !== id);
    this.save();
    return this.cartitems;
 }

 gettotalprice() {
    return this.cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
 }
 gettotalitems() {
    return this.cartitems.reduce((total, item) => total + item.quantity, 0);
 }
}
