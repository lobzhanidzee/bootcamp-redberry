class FiltersView {
  _parentEl = document.querySelectorAll(".nav__filter--item");

  _regionBtn = document.querySelector(".region-filter");
  _priceBtn = document.querySelector(".price-filter");
  _areaBtn = document.querySelector(".area-filter");
  _bedroomsBtn = document.querySelector(".bedrooms-filter");

  _regionFilterWindow = document.querySelector(".nav__filter__regions");
  _pricesFilterWindow = document.querySelector(".nav__filter__prices");
  _areaFilterWindow = document.querySelector(".nav__filter__area");
  _searchesFilterWindow = document.querySelector(".nav__filter__searches");

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
        if (filterBtn.classList.contains("price-filter")) {
          this.priceActiveFilter();
        }
        return;
      });
    });
  }

  regionActiveFilter() {
    this._regionBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._regionFilterWindow.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (
        !this._regionBtn.contains(e.target) &&
        !this._regionFilterWindow.contains(e.target)
      ) {
        this._regionFilterWindow.classList.add("hidden");
      }
    });
  }

  priceActiveFilter() {
    this._priceBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this._pricesFilterWindow.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (
        !this._priceBtn.contains(e.target) &&
        !this._pricesFilterWindow.contains(e.target)
      ) {
        this._pricesFilterWindow.classList.add("hidden");
      }
    });
  }
}

export default new FiltersView();
