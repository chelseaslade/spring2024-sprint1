//  Author: Chelsea Slade (Mayne) & Charlene McCarthy
// Assignment: Sprint 1
// Date: June 28, 2024

//Select Item (Add to Cart)

// function addToCart(item, price) {
//   let cart = localStorage.getItem("cart");
//   if (cart === null) {
//     //New array if cart does not yet exist
//     cart = [];
//   } else {
//     //Else, add to existing cart
//     cart = JSON.parse(cart);
//   }

//   //Add item to cart
//   cart.push({
//     name: item,
//     price: price,
//     quantity: 1,
//   });

//   //Store Cart
//   //   localStorage.setItem("cart", JSON.stringify(cart));

//   //Check Log
//   console.log(cart);
// }

// // Trouble linking JSON to cart HTML... Hard code instead using id's in HTML?
// // ie. id="bigGary"
// // const bigGary = {itemName: "The Big Gary", price: 16.00};

// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("selectButton")) {
//     const button = event.target;
//     const itemName = button.dataset.itemName;
//     const price = parseFloat(button.dataset.price);

//     addToCart(itemName, price);
//   }
// });

//Remove from Cart
function removeItem() {}

//Calculate Item Total (Based on Quantity)
function caclItemTot() {}

//Calculate Sub-Total
function caclSubTot() {}

//Calculate HST
function calcHST() {}

//Calculate Total
function calcTot() {}
