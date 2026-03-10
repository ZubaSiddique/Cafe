const products = {
  cappuccino: {
    name: "CAPPUCCINO",
    image: "img/cappucino.jpg",
    price:500,
    description: "Espresso with steamed milk and foam"
  },

  latte: {
    name: "CAFÉ LATTE",
    image: "img/late.jpg",
    price:570,
    description: "Smooth espresso with hot milk"
  },

  mocha: {
    name: "CAFÉ MOCHA",
    image: "img/mocha.jpg",
    price:410,
    description: "Chocolate flavored espresso"
  },

  americano: {
    name: "AMERICANO",
    image: "img/americano.jpg",
    price:750,
    description: "Espresso mixed with hot water"
  },
 hotmilk: {
    name: "HOT MILK",
    price:100,
    image: "img/hotmilk.jpg"
     
   },
    greentea: {
    name: "GREEN TEA",
    image: "img/greentea.jpg",
     price:130
   },
    lemontea: {
    name: "LEMON TEA",
    image: "img/lemontea.jpg",
     price:140
   },
    assam: {
    name: "ASSAM TEA",
    image: "img/assamtea.jpg",
     price:200
   }
};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");

const product = products[productKey];

if(product){

  document.getElementById("productName").innerText = product.name;

  document.getElementById("productImage").src = product.image;

  document.getElementById("productPrice").innerText = product.price;

}

//cartbutton
const addBtn = document.getElementById("addToCartBtn");
addBtn.addEventListener("click", () => {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const existingItem = cart.find(item => item.name === product.name);

if(existingItem){

existingItem.quantity += 1;

}else{

cart.push({
name: product.name,
price: product.price,
image: product.image,
quantity: 1
});

}

localStorage.setItem("cart", JSON.stringify(cart));

alert("Item added to cart ☕");

});

