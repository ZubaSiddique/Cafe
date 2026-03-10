// document.addEventListener("DOMContentLoaded", function(){

// const container = document.getElementById("cartItems");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// if(cart.length === 0){
//   container.innerHTML = "<p>Your cart is empty ☕</p>";
//   return;
// }

// cart.forEach(function(item){

// const div = document.createElement("div");

// div.style.display = "flex";
// div.style.alignItems = "center";
// div.style.gap = "20px";
// div.style.borderBottom = "1px solid #ddd";
// div.style.padding = "10px";

// div.innerHTML = `
// <img src="${item.image}" style="width:120px;height:120px;object-fit:cover;border-radius:6px;">

// <p style="width:150px;font-weight:600;">${item.name}</p>

// <p style="width:80px;"> ${item.price}</p>

// <p style="width:80px;">Qty: ${item.quantity}</p>
// `;

// container.appendChild(div);

// });

// });


document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("cartItems");
const totalElement = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

container.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.quantity;

const div = document.createElement("div");

div.className = "grid grid-cols-3 items-center border-b gap-0 lg:py-4 py-4 px-6";

div.innerHTML = `

<div class="flex lg:flex-row flex-col items-center lg:gap-4 gap-2">
<img src="${item.image}" class="w-14 h-14 object-cover rounded">
<p class="font-medium">${item.name}</p>
</div>

<p>Rs ${item.price}</p>

<div class="flex items-center gap-3 ">

<button class="decrease bg-gray-200 px-3 py-1 rounded text-[#4E2F22]">-</button>

<p>${item.quantity}</p>

<button class="increase bg-gray-200 px-3 py-1 rounded text-[#4E2F22]">+</button>

</div>

`;

container.appendChild(div);

div.querySelector(".increase").addEventListener("click", ()=>{

cart[index].quantity++;

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

});

div.querySelector(".decrease").addEventListener("click", ()=>{

if(cart[index].quantity > 1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

});

});

// subtotal
totalElement.innerText = "Subtotal: Rs " + total;
}
// totalElement.innerText = "Subtotal: Rs " + total;


renderCart();

});