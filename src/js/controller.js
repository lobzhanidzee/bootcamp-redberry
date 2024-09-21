import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";
import FiltersView from "./views/filtersView.js";
import { POST } from "./helpers.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}
POST();

FiltersView.activeFilter();
FiltersView.regionActiveFilter();
