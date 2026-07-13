
//SEARCH PRODUCTS

/*const searchInput = document.getElementById("search-input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let searchValue = this.value.toLowerCase();
        let cards = document.querySelectorAll(".product-card");

        cards.forEach(function(card) {
            let productName = card.querySelector("h3").innerText.toLowerCase();

            if (productName.includes(searchValue)) {
                
                card.style.display = ""; 
            } else {
                card.style.display = "none";
            }
        });
    });
}
*/

const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.trim().toLowerCase();
        let cards = document.querySelectorAll(".product-card");
        let found = false;

        cards.forEach(function(card) {

            let productName = card.querySelector("h3").innerText.toLowerCase();

            if (
                searchValue === "" ||
                productName.startsWith(searchValue)
            ) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        noResults.style.display = found ? "none" : "block";
    });
}



//ADD TO CART

function addToCart(name, image, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.name === name);

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

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}
// REMOVE FROM CART
function decreaseOrRemoveFromCart(index) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (cart[index]) {
        if (cart[index].quantity > 1) {
            
            cart[index].quantity -= 1;
            alert(`Reduced quantity of ${cart[index].name}!`);
        } else {
            
            alert(`${cart[index].name} removed from cart!`);
            cart.splice(index, 1);
        }

        
        localStorage.setItem("cart", JSON.stringify(cart));

    
        location.reload();
    }
}

// OPTIONAL
function clearProductCompletely(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }
}


// BUY NOW

/*function buyNow(name, image, price) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
        name: name,
        image: image,
        price: price,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Order placed successfully!");
    
    window.location.href = "/models/order/";
}*/
function buyNow(name, image, price) {

    const product = {
        name: name,
        image: image,
        price: price
    };

    localStorage.setItem("currentProduct", JSON.stringify(product));

    window.location.href = "/cart/confirm/";
}