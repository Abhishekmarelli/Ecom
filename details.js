document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');

    // Retrieve product details from localStorage
        const productDetails = JSON.parse(localStorage.getItem('productDetails'));

    if (productDetails) {
        // Create HTML content for product details

        const productHtml  = document.createElement('div');
        productHtml .className ='row'
        productHtml.innerHTML = `

    <div class="'col-md-5 col-sm-12 py-3'">
         <img class="img-fluid" src="${productDetails.image}" alt="${productDetails.title}" width="400px" height="400px">
    </div>
    <div class="col-md-5 col-md-6 py-5">
         <h4 class="text-uppercase text-muted">men's clothing</h4>
        <h1 class="display-5">${productDetails.title}"</h1>
         <p class="lead">4.7 <i class="fa fa-star"></i></p>
        <h3 class="display-6  my-4">$${productDetails.price}</</h3>
        <p class="lead">${productDetails.description}</p>
        <button class="btn btn-outline-dark">Add to Cart</button><a class="btn btn-dark mx-3"
         href="/cart">Go to Cart</a>
    </div>
      `;


        // Set HTML content to the container
        productDetailsContainer.append(productHtml)
    } else {
        productDetailsContainer.innerHTML = '<p>Product details not found.</p>';
    }
});


