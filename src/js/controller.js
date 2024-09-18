import { AJAX } from "./helpers.js";
import { API_URL } from "./config.js";

const { ...realEstates } = await AJAX(`${API_URL}real-estates`);
console.log(realEstates);

const createAppartObject = function (data) {
  const { ...appart } = data;
  console.log(data, appart);
  return {
    id: appart.id,
    address: appart.address,
    area: appart.area,
    image: appart.image,
    isRental: appart.is_rental,
    price: appart.price,
    zipCode: appart.zip_code,
    ...(appart.key && { key: appart.key }),
  };
};

console.log(createAppartObject(realEstates));
