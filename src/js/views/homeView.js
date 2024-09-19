import { apparts } from "../model.js";

class HomeView {
  _parentEl = document.querySelector(".main__container");

  GetAppartments() {
    let html = "";

    for (let i = 0; i < apparts.length; i++) {
      html += `
        <div class="main__container--item">
         <img alt="Appartment image" src="./src/img/image.png" class="item--img"/>
         <div class="badge"><span>${
           apparts[i].is_rental ? "ქირავდება" : "იყიდება"
         }</span></div>
         <div class="details">
          <div class="details__price"><span>${apparts[i].price} ₾</span></div>
          <div class="details__location text-icon"><img src="./src/img/icons/Icon-location.svg" alt=""><span>${
            apparts[i].address
          }</span></div>
          <div class="details__info">
           <div class="details__info--item text-icon"><img src="./src/img/icons/icon-bed.svg" alt=""><span>${
             apparts[i].bedrooms
           }</span></div>
           <div class="details__info--item text-icon"><img src="./src/img/icons/icon-size.svg" alt=""><span>${
             apparts[i].area
           } მ²</span></div>
           <div class="details__info--item text-icon"><img src="./src/img/icons/icon-postcode.svg" alt=""><span>${
             apparts[i].zip_code
           }</span></div>
          </div>
         </div>
        </div>
      `;
    }

    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }
}

export default new HomeView();
