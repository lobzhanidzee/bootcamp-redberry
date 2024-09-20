class AgentModalView {
  _openBtn = document.querySelector(".nav__btn--agent");
  _modalWindow = document.querySelector(".add-agent-window");
  _overlay = document.querySelector(".overlay");
  _cancelBtn = document.querySelector(".modal-btn-cancel");

  modalEvent() {
    this._openBtn.addEventListener("click", () => {
      this._modalWindow.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
    this._overlay.addEventListener("click", () => {
      this._modalWindow.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
    this._cancelBtn.addEventListener("click", () => {
      this._modalWindow.classList.toggle("hidden");
      this._overlay.classList.toggle("hidden");
    });
  }
}

export default new AgentModalView();
