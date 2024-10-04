import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";
import FiltersView from "./views/filtersView.js";
import selectedFilterView from "./views/selectedFilterView.js";
import { AJAX } from "./helpers.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}

FiltersView.render();
selectedFilterView.getSelectFilters();

const regions = await AJAX(
  "https://api.real-estate-manager.redberryinternship.ge/api/regions"
);

export function getRegionNameById(id) {
  const region = regions.find((region) => region.id === id);
  return region ? region.name : null;
}

// Example usage
const regionName = getRegionNameById(1);
console.log(regionName);

console.log(regions);
