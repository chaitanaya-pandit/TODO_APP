export class cartproductview {
    constructor(cartservices) {
        this.cartservices = cartservices;
        this.cartproduct = document.getElementById('cart-items-container');
        this.removeproduct=document.querySelectorAll('.remove-product');
        this.totalitems=document.getElementById('cart-total-items');
        this.totalprice=document.getElementById('cart-total-price');
        this.cartproduct.addEventListener('click', (e) => {
          if(e.target.classList.contains('remove-product')) {
            const id = parseInt(e.target.dataset.id);
            this.handleRemoveProduct(id);
          }
        })

    }

    rendercartproducts(items) {
        this.cartproduct.innerHTML = '';

        items.forEach(item => {
            this.cartproduct.innerHTML += `
                <div class="flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-sm mb-3">

                    <!-- Product Image -->
                    <img src="${item.images[0]}" 
                         alt="${item.title}"
                         class="w-16 h-16 rounded-lg object-cover border" />

                    <!-- Product Details -->
                    <div class="flex-1 ml-3">
                        <p class="font-semibold text-gray-800">${item.title}</p>
                        <p class="text-gray-600 text-sm">₹ ${item.price}</p>

                        <div class="flex items-center gap-2 mt-2">
                            <button class="px-2 py-1 bg-gray-300 rounded">-</button>
                            <span class="font-medium">${item.quantity}</span>
                            <button class="px-2 py-1 bg-gray-300 rounded">+</button>
                        </div>
                    </div>

                    <!-- Remove Button -->
                    <button  data-id="${item.id}" class="remove-product px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        Remove
                    </button>
                </div>
            `;
           

        });
    }
    handleRemoveProduct(id){
        this.cartservices.removeproduct(id);
        this.rendercartproducts(this.cartservices.getproducts());

    }

}
