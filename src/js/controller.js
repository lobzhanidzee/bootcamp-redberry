import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";
import FiltersView from "./views/filtersView.js";
import selectedFilterView from "./views/selectedFilterView.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}

FiltersView.render();
selectedFilterView.getSelectFilters();
