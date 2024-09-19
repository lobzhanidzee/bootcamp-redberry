import { AJAX } from "./helpers.js";
import { API_URL } from "./config.js";

const { ...realEstates } = await AJAX(`${API_URL}real-estates`);

export const apparts = Object.values(realEstates);
