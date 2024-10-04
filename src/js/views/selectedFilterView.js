class SelectedFiltersView {
  _regionFilterForm = document.querySelector(".region-filter-form");

  getSelectFilters() {
    this._regionFilterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const parentEl = document.querySelector(".filter__container");
      const storedInputs = [];
      const formData = new FormData(this._regionFilterForm);

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
  }
}

export default new SelectedFiltersView();
