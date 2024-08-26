
const prod = document.getElementById('Products-grid');
const produc = document.getElementById('detailed-section')
const All = document.getElementById('All')
const Mens = document.getElementById('Mens')
const Womens = document.getElementById('Women')
const Jewelery = document.getElementById('Jewelery')
const Electronics = document.getElementById('Electronics')
const Add = document.getElementById('add')
const cartitem =document.getElementById('cartitem')

let productdata = [];

const base_url = 'https://fakestoreapi.com/products'
const base_url1 = 'https://fakestoreapi.in/api/products'
//fetching the data from the Api
fetch(base_url)
  .then(response => response.json())
  .then(data => {
    productdata = data;
    displayProducts(productdata)
  })
  .catch(error => console.error('Error fetching data:', error));


// Function to Filter the Products
const filterProducts = async (cat) => {

  const filteredProducts = productdata.filter((data) => data.category === cat);
  console.log(filteredProducts);
  displayProducts(filteredProducts);
};

// Function to Display the products the Products
const displayProducts = (product) => {

  prod.innerHTML = '';
  product.map((data) => {

    // Create a new card element
    const card = document.createElement('div');
    card.className = 'cards text-center m-2 col-10 col-md-5 col-xl-3';
    // Set card content
    card.innerHTML = `
      <img src=${data.image} class="img-fluid card-img-top p-2" height='200' alt="...">
       <div class="card-body mt-5">
         <p class="card-title">${data.title}</p>
       </div>
       <hr>
       <div class="text-center">
         <i>Price:${data.price}$</i>
       </div>
       <hr>
      <div class="card-body py-4">
         <a class='btn btn-primary' onclick='addtocart(${data.id})' class="card-link">Add to cart</a>
         <a class='btn btn-primary' onclick='details(${data.id})' class="card-link">Details</a>
       </div>
         `;

    prod.appendChild(card);
  });

}

All.addEventListener('click', () => displayProducts(productdata));
Mens.addEventListener('click', () => filterProducts('men\'s clothing'));
Womens.addEventListener('click', () => filterProducts('women\'s clothing'));
Jewelery.addEventListener('click', () => filterProducts('jewelery'));
Electronics.addEventListener('click', () => filterProducts('electronics'));



//To change The active class on buttons 

const buttons = document.querySelectorAll('.tomake button');

const handleButtonClick = (event) => {
  buttons.forEach(button => button.classList.remove('active'));

  event.target.classList.add('active');
};
buttons.forEach(button => button.addEventListener('click', handleButtonClick));


// Call this function when the cart page is opened


//details

const details = (id)=>{
  
  const productDetails = productdata.find(product => product.id === id);
  localStorage.setItem('productDetails', JSON.stringify(productDetails));
  window.location.href = 'details.html';

}

const cartitems = document.getElementById('cartitems')

const cartlist=()=>{

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartitems.innerText = cart.length
}

const addtocart = (id) => {
  

  let cart = JSON.parse(localStorage.getItem('cart')) || [];


  const productToAdd = productdata.find((p) => p.id === id);

  if (productToAdd) {
    

    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {

      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 0) + 1;
    } else {
  
      cart.push({ ...productToAdd, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else 
  {
    console.error('Product not found');
  }
  cartlist();

};


cartlist();