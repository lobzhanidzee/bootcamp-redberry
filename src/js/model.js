import { AJAX } from "./helpers.js";
import { API_URL } from "./config.js";

const { ...realEstates } = await AJAX(`${API_URL}real-estates`);

export const apparts = Object.values(realEstates);

const regions = await AJAX(
  "https://api.real-estate-manager.redberryinternship.ge/api/regions"
);

export function getRegionNameById(id) {
  const region = regions.find((region) => region.id === id);
  return region ? region.name : null;
}
