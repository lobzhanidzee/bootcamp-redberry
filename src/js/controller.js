import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";
import FiltersView from "./views/filtersView.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}

FiltersView.render();

const regionFilterForm = document.querySelector(".region-filter-form");

regionFilterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const parentEl = document.querySelector(".filter__container");
  const storedInputs = [];
  const formData = new FormData(regionFilterForm);

  for (const [key, value] of formData.entries()) {
    storedInputs.push({ key, value });
  }

  const html = storedInputs
    .map(
      (input) => `
    <div class="filter__container--item text-icon">
      <span>${input.value}</span>
      <img src="./src/img/icons/x-icon.svg" alt="remove icon" class="btn" />
    </div>
  `
    )
    .join("");

  parentEl.insertAdjacentHTML("afterbegin", html);
});
