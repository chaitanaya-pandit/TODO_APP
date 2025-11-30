
export class viewproducts{
    constructor(cartservices,cartview){
        this.cartservices= cartservices;
        this.cartproductview=cartview;
        this.card=document.getElementById('card');
        this.search=document.getElementById('search-product');
        this.allproducts=[];
        this.filter=document.getElementById('apply-filters');
        this.category=document.querySelectorAll('.cat-filter');
        this.filter.addEventListener('click',()=>this.renderproduct());
        this.search.addEventListener('input',()=>this.renderproduct());
        this.price=document.getElementById('price-range');
        this.price.addEventListener('input',()=>this.renderproduct());
        this.closecart=document.getElementById('close-cart');
        this.closecart.addEventListener('click',()=>this.closecartpanel());

    }

    setproducts(products){
        this.allproducts=products;
        this.renderproduct();
    }
    catogeryproducts(){
        let select=[];
        this.category.forEach((c)=>{
            if(c.checked){
                select.push(c.value);
            }
        })
        return select;
    }
    
   renderproduct() {
    const query = this.search.value.toLowerCase().trim();
    const selectedCategories = this.catogeryproducts().map(c => c.toLowerCase());
    const priceRange = this.price.value;
    let filtered = this.allproducts;
    
    if (priceRange !== "") {
        filtered = filtered.filter(p =>
            p.price <= priceRange
        );
    }

    // 🔍 Search filter
    if (query !== "") {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(query)
        );
    }

    // 🧩 Category filter independent
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p =>
            selectedCategories.includes(p.category.toLowerCase())
        );
    }

    // Display
    this.card.innerHTML = filtered.map(info => `
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div class="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48"> 
                <img src="${info.images[0]}" alt="${info.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-5">
              <h3 class="font-semibold text-lg text-gray-800">${info.title}</h3>
              <h4 class="font-semibold text-lg text-gray-400">${info.category}</h4>
              <p class="text-gray-600 text-sm mt-1">${info.description.split(' ').slice(0, 10).join(' ')}</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-xl font-bold text-gray-800">$ ${info.price}</span>
                <button data-id="${info.id}" class="send-product px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition">
                  Add to Cart
                </button>
              </div>
            </div>
        </div>
    `).join('');

    this.attachaddtocart();
}
attachaddtocart(){
    const buttons=document.querySelectorAll('.send-product');
    buttons.forEach(
        (b)=>{
            b.addEventListener('click',()=>{
                const id=b.dataset.id;
                const product=this.allproducts.find(p=>p.id==id);
                const cart= this.cartservices.addproduct(product);
                this.cartproductview.rendercartproducts(cart);

            })
        }
    )

}
closecartpanel(){
const cartpanel=document.getElementById('cartpanel')
cartpanel.classList.add('hidden');
}

}