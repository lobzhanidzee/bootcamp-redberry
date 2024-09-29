class FiltersView {
  _parentEl = document.querySelectorAll(".nav__filter--item");

  _regionBtn = document.querySelector(".region-filter");
  _priceBtn = document.querySelector(".price-filter");
  _areaBtn = document.querySelector(".area-filter");
  _bedroomsBtn = document.querySelector(".bedrooms-filter");

  _regionFilterWindow = document.querySelector(".nav__filter__regions");
  _pricesFilterWindow = document.querySelector(".nav__filter__prices");
  _areaFilterWindow = document.querySelector(".nav__filter__area");
  _bedroomsFilterWindow = document.querySelector(".nav__filter__bedrooms");

  render() {
    this.activeFilter();
    this.setupFilter(this._regionBtn, this._regionFilterWindow);
    this.setupFilter(this._priceBtn, this._pricesFilterWindow);
    this.setupFilter(this._areaBtn, this._areaFilterWindow);
    this.setupFilter(this._bedroomsBtn, this._bedroomsFilterWindow);
  }

  activeFilter() {
    this._parentEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        this._parentEl.forEach((el) => {
          el.classList.remove("active-filter");
          el.querySelector("img").classList.remove("active-filter-arrow");
        });
        const filterBtn = e.target.closest("div");
        if (filterBtn) {
          filterBtn
            .querySelector("img")
            .classList.toggle("active-filter-arrow");
          filterBtn.classList.toggle("active-filter");
        }
        return;
      });
    });
  }

  hideAllFilterWindows() {
    this._regionFilterWindow.classList.add("hidden");
    this._pricesFilterWindow.classList.add("hidden");
    this._areaFilterWindow.classList.add("hidden");
    this._bedroomsFilterWindow.classList.add("hidden");
  }

  setupFilter(button, window) {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.hideAllFilterWindows();
      window.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!button.contains(e.target) && !window.contains(e.target)) {
        window.classList.add("hidden");
        button.classList.remove("active-filter");
        button.querySelector("img").classList.remove("active-filter-arrow");
      }
    });
  }
}

export default new FiltersView();
