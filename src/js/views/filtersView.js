class FiltersView {
  _parentEl = document.querySelectorAll(".nav__filter--item");
  _regionBtn = document.querySelector(".region-filter");
  _regionFilterWindow = document.querySelector(".nav__filter__regions");

  activeFilter() {
    this._parentEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        const nearestDiv = e.target.closest("div");
        nearestDiv.classList.toggle("active-filter");
      });
    });
  }

  regionActiveFilter() {
    this._regionBtn.addEventListener("click", () => {
      this._regionFilterWindow.classList.toggle("hidden");
    });
  }
}

export default new FiltersView();
