class FiltersView {
  _parentEl = document.querySelectorAll(".nav__filter--item");
  _regionBtn = document.querySelector(".region-filter");
  _regionFilterWindow = document.querySelector(".nav__filter__regions");

  constructor() {
    this.activeFilter();
    this.regionActiveFilter();
  }

  activeFilter() {
    this._parentEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        this._parentEl.forEach((el) => {
          el.classList.remove("active-filter");
          el.querySelector("img").classList.remove("active-filter-arrow");
        });
        const filterBtn = e.target.closest("div");
        filterBtn.querySelector("img").classList.toggle("active-filter-arrow");
        filterBtn.classList.toggle("active-filter");

        if (filterBtn.classList.contains("region-filter")) {
          this.regionActiveFilter();
        }
      });
    });
  }

  regionActiveFilter() {
    this._regionBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up to other click handlers
      this._regionFilterWindow.classList.toggle("hidden");
    });

    // Optionally, close the region filter when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !this._regionBtn.contains(e.target) &&
        !this._regionFilterWindow.contains(e.target)
      ) {
        this._regionFilterWindow.classList.add("hidden");
      }
    });
  }
}

export default new FiltersView();
