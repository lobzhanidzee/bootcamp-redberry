import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";
import FiltersView from "./views/filtersView.js";
import selectedFilterView from "./views/selectedFilterView.js";
import { AJAX } from "./helpers.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}

FiltersView.render();
selectedFilterView._setupFormListeners();

// document.addEventListener("DOMContentLoaded", () => {
//   const minPriceInput = document.getElementById("minPriceInput");
//   const maxPriceInput = document.getElementById("maxPriceInput");
//   const priceDisplay = document.querySelector(".nav__filter__prices");
//   const priceOptions = document.querySelectorAll(".price-option");
//   const form = document.querySelector(".price-form");

//   function createPriceElement(minPrice, maxPrice) {
//     const priceElement = document.createElement("div");
//     priceElement.classList.add("price-element");
//     priceElement.innerHTML = `Min Price: ${minPrice} ₾, Max Price: ${maxPrice} ₾`;
//     priceDisplay.appendChild(priceElement);
//   }

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const minPrice = minPriceInput.value;
//     const maxPrice = maxPriceInput.value;
//     if (minPrice && maxPrice) {
//       createPriceElement(minPrice, maxPrice);
//     }
//   });

//   priceOptions.forEach((option) => {
//     option.addEventListener("click", (e) => {
//       const priceValue = e.target.textContent.trim().split(" ")[0];
//       if (
//         e.target.parentElement.previousElementSibling.textContent.includes(
//           "მინ"
//         )
//       ) {
//         minPriceInput.value = priceValue;
//       } else {
//         maxPriceInput.value = priceValue;
//       }
//     });
//   });
// });
