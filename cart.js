document.addEventListener('DOMContentLoaded', () => {

    const cardbody = document.getElementById('Cartbody')
    const products = JSON.parse(localStorage.getItem('cart'));
    
   


    if (products) {
        products.map((product)=>{
        const cartitem = document.createElement('div')
        cartitem.className = 'cartitem'
        cartitem.innerHTML =`
                      <div class="row d-flex align-items-center">
                        <div class="col-lg-3 col-md-12">
                          <div class="bg-image rounded" data-mdb-ripple-color="light">
                            <img src='${product.image}' alt="${product.title} " width="100" height="75">
                          </div></div>
                          <div class="col-lg-5 col-md-6"><p><strong>${product.title} </strong></p>
                          </div>
                          <div class="col-lg-4 col-md-6">
                            <div class="d-flex mb-4" style="max-width: 300px;">
                              <button class="btn px-3" onclick="updatequantity()" >+</button>
                              <p class="mx-5">${product.quantity}</p>
                              <button class="btn px-3" onclick="updatequantity()">-</button>
                            </div><p class="text-start text-md-center"><strong><span class="text-muted">${product.quantity}</span> x $ ${product.price}</strong></p>
                          </div>
                        </div>
                        <hr class="my-4">
                    `
                    cardbody.append(cartitem);
                })

    } else {
        productDetailsContainer.innerHTML = '<p>Product details not found.</p>';
    }
});


const updatequantity = () =>{

}

const total =() =>{
  const products = JSON.parse(localStorage.getItem('cart'));
  document.getElementById('numOfproducts').innerText = products.length
  let total = 0
products.map((product)=>{
total += product.price;
})
document.getElementById('price').innerText = total
document.getElementById('total').innerText = total + 30
}

total();