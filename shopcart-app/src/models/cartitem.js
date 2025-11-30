export class cartproducts {
    constructor(id ,title,description,price,image,stock=1){
        this.id=id;
        this.title=title;
        this.description=description;
        this.price=price;
        this.image=image;
        this.stock=stock
    }

    getdetailscart(){
        return{
            id:this.id,
            title:this.title,
            description:this.description,
            price:this.price,
            image:this.image,
            quantity:this.quantity
        }
    }
}