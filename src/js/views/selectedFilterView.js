import { getRegionNameById } from "../model.js";

class SelectedFiltersView {
  _parentEl = document.querySelector(".filter__container");
  _regionFilterForm = document.querySelector(".region-filter-form");
  _priceFilterForm = document.querySelector(".price-filter-form");
  _areaFilterForm = document.querySelector(".area__filter--form");
  _bedroomsFilterForm = document.querySelector(".bedrooms__filter--form");
  _cleanBtn = document.querySelector(".filter__container--btn");

  constructor() {
    this._cleanBtn.addEventListener("click", this._clearFilters.bind(this));
  }

  getSelectFilters() {
    // ------------------
    if (this._priceFilterForm) {
      this._priceFilterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const storedInputs = [];
        const formData = new FormData(this._priceFilterForm);

        for (const [key, value] of formData.entries()) {
          storedInputs.push({ key, value });
        }

        let html = "";
        storedInputs
          .filter(
            (input) =>
              input.key === "maxPrice" && input.value > formData.get("minPrice")
          )
          .forEach((input) => {
            html += `
            <div class="filter__container--item text-icon">
                  <span>${+formData.get("minPrice")}₾ - ${+input.value}₾</span>
                  <img src="./src/img/icons/x-icon.svg" alt="remove icon" class="btn" />
              </div>`;
            this._cleanBtn.classList.remove("hidden");
          });

        this._parentEl.insertAdjacentHTML("afterbegin", html);
        console.log(html);
        console.log(storedInputs);
      });
    }
    // ------------------

    this._regionFilterForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const storedInputs = [];
      const formData = new FormData(this._regionFilterForm);

      for (const [key, value] of formData.entries()) {
        storedInputs.push({ key, value });
      }

      const existingValues = new Set(
        Array.from(
          this._parentEl.querySelectorAll(".filter__container--item span")
        ).map((span) => span.textContent)
      );

      const newValues = new Set(
        storedInputs.map((input) => getRegionNameById(+input.value))
      );

      this._parentEl
        .querySelectorAll(".filter__container--item")
        .forEach((item) => {
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

      this._parentEl.insertAdjacentHTML("afterbegin", html);
      this._removeFilter();
      if (!html) {
        this._cleanBtn.classList.add("hidden");
      }
    });
  }

  _clearFilters() {
    this._parentEl = document.querySelector(".filter__container");
    Array.from(this._parentEl.children).forEach((child) => {
      if (!child.classList.contains("filter__container--btn")) {
        child.remove();
      }
    });
    this._regionFilterForm.reset();
    this._cleanBtn.classList.add("hidden");
  }

  _removeFilter() {
    const filterBoxes = document.querySelectorAll(".filter__container--item");

    filterBoxes.forEach((filterBox) => {
      filterBox.querySelectorAll("img").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          filterBox.remove();
        });
      });
    });
  }
}

export default new SelectedFiltersView();
