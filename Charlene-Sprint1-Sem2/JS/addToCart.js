//  Author: Chelsea Slade (Mayne) & Charlene McCarthy
// Assignment: Sprint 1
// Date: June 28, 2024

// convert the fucntional code to the OOP code.. using classes and objects

window.addEventListener("DOMContentLoaded", function () {
  class Item {
    constructor(t, a, i) {
      this.itemName = t;
      this.quantity = a;
      this.price = i;
    }

    addItemToList(item) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${item.itemName}</td><td>${item.quantity}</td><td>$${item.price}</td><td><button class="delete">X</button></td>`;
      document.querySelector("#item-list").appendChild(row);
    }

    showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteItem(elemToDelete) {
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.parentElement.remove();
        this.showAlert("Item removed from cart.", "success");
      }
    }
  }

  //Add item to list by clicking "select" button on menu
  //This works for soda only for now
  document
    .querySelector("#addItemButton")
    .addEventListener("click", function () {
      let itemName = "Refreshing Soda";
      let quantity = 1;
      let price = 3.0;

      let item = new Item(itemName, quantity, price);
      item.addItemToList(item);
      item.showAlert("Item added to cart.", "success");
    });

  document
    .querySelector("#item-list")
    .addEventListener("click", function (evt) {
      var item = new Item();
      item.deleteItem(evt.target);
      evt.preventDefault();
    });

  this.document
    .querySelector("#data")
    .addEventListener("click", function (evt) {
      var item = new Item();
      item.deleteItem(evt.target);
      evt.preventDefault();
    });
});
