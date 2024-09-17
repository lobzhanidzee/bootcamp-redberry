import { AJAX } from "./helpers.js";
import { API_URL } from "./config.js";

const { ...realEstates } = await AJAX(`${API_URL}real-estates`);
console.log(realEstates);
