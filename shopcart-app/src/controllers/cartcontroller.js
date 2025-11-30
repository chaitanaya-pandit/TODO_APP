export class cartcontroller{
    constructor(cartservice,cartview){
        this.cartservice=cartservice;
        this.cartview=cartview;
        this.cartbtn=document.getElementById('open-cart');
        this.cartpanel=document.getElementById('cartpanel');
        this.cartbtn.addEventListener('click',()=>this.rendercart());
    }
    rendercart(){
       this.cartpanel.classList.toggle('hidden');
       const items=this.cartservice.getproducts();
       this.cartview.rendercartproducts(items);
    }
}