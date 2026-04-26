//linked with item.html
const products = {
  cappuccino: {
    name: "CAPPUCCINO",
    image: "img/coffee.jpg",
    price:500,
    description: "Espresso with steamed milk and foam"
  },

  latte: {
    name: "CAFÉ LATTE",
    image: "img/coffee.jpg",
    price:570,
    description: "Smooth espresso with hot milk"
  },

  mocha: {
    name: "CAFÉ MOCHA",
    image: "img/coffee.jpg",
    price:410,
    description: "Chocolate flavored espresso"
  },

  americano: {
    name: "AMERICANO",
    image: "img/coffee.jpg",
    price:750,
    description: "Espresso mixed with hot water"
  },
 hotmilk: {
    name: "HOT MILK",
    price:100,
    image: "hotmilk.jpg"
     
   },
    greentea: {
    name: "GREEN TEA",
    image: "tea.jpg",
     price:130
   },
    lemontea: {
    name: "LEMON TEA",
    image: "tea.jpg",
     price:140
   },
    assam: {
    name: "ASSAM TEA",
    image: "tea.jpg",
     price:200
   }
};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");

const product = products[productKey];

if(product){

  document.getElementById("productName").innerText = product.name;

  document.getElementById("productImage").src = product.image;

  document.getElementById("productPrice").innerText ="Rs." + product.price;

}

//cart count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalQuantity = 0;

  cart.forEach(item => {
    totalQuantity += item.quantity;
  });

  document.getElementById("cartCount").innerText = totalQuantity;
}


//Quantity Function
let quantity = 1;

const quantityInput = document.getElementById("quantityInput");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function () {
    quantity++;
    quantityInput.value = quantity;
});

decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
});

//cartbutton
// const addBtn = document.getElementById("addToCartBtn");
// addBtn.addEventListener("click", () => {

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const existingItem = cart.find(item => item.name === product.name);

// if(existingItem){

// existingItem.quantity += 1;

// }else{

// cart.push({
// name: product.name,
// price: product.price,
// image: product.image,
// quantity: 1
// });

// }

// localStorage.setItem("cart", JSON.stringify(cart));

// alert("Item added to cart ☕");

// });
const addBtn = document.getElementById("addToCartBtn");

addBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

  localStorage.setItem("cart", JSON.stringify(cart));

    alert(quantity + " item(s) added to cart ☕");
});
// BUY NOW BUTTON
const buyNowBtn = document.getElementById("buyNowBtn");

buyNowBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(quantity + " item(s) added to cart ☕");
    
    // Redirect to cart page
    window.location.href = "cart.html";
});

updateCartCount();

