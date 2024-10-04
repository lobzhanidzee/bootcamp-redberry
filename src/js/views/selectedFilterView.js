import { getRegionNameById } from "../controller.js";

class SelectedFiltersView {
  _regionFilterForm = document.querySelector(".region-filter-form");
  _cleanBtn = document.querySelector(".filter__container--btn");

  constructor() {
    this._cleanBtn.addEventListener("click", this._clearFilters.bind(this));
  }

  getSelectFilters() {
    this._regionFilterForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const parentEl = document.querySelector(".filter__container");
      const storedInputs = [];
      const formData = new FormData(this._regionFilterForm);

      for (const [key, value] of formData.entries()) {
        storedInputs.push({ key, value });
      }

      const existingValues = new Set(
        Array.from(
          parentEl.querySelectorAll(".filter__container--item span")
        ).map((span) => span.textContent)
      );

      const newValues = new Set(
        storedInputs.map((input) => getRegionNameById(+input.value))
      );

      parentEl.querySelectorAll(".filter__container--item").forEach((item) => {
        const spanText = item.querySelector("span").textContent;
        if (!newValues.has(spanText)) {
          item.remove();
        }
      });

      let html = "";
      storedInputs
        .filter((input) => !existingValues.has(getRegionNameById(+input.value)))
        .forEach((input) => {
          html += `
          <div class="filter__container--item text-icon">
                <span>${getRegionNameById(+input.value)}</span>
                <img src="./src/img/icons/x-icon.svg" alt="remove icon" class="btn" />
            </div>`;
          this._cleanBtn.classList.remove("hidden");
        });

      parentEl.insertAdjacentHTML("afterbegin", html);

      if (!html) {
        this._cleanBtn.classList.add("hidden");
      }
    });
  }

  _clearFilters() {
    const parentEl = document.querySelector(".filter__container");
    Array.from(parentEl.children).forEach((child) => {
      if (!child.classList.contains("filter__container--btn")) {
        child.remove();
      }
    });
    this._regionFilterForm.reset(); // Reset the form selections
    this._cleanBtn.classList.add("hidden");
  }
}

export default new SelectedFiltersView();
