// SEARCH PRODUCTS

const searchInput = document.getElementById("search-input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(function(card) {

            let productName =
                card.querySelector("h3")
                .innerText
                .toLowerCase();

            if (productName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// ADD TO CART


function addToCart(name, image, price) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    let existingProduct =
        cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            image: image,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}



// BUY NOW


function buyNow(name, image, price) {

    let orders =
        JSON.parse(
            localStorage.getItem("orders")
        ) || [];

    orders.push({
        name: name,
        image: image,
        price: price,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    alert("Order placed successfully!");

    window.location.href = "/order/";
}


