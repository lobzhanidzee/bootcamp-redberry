import HomeView from "./views/homeView.js";
import AgentModalView from "./views/agentModalView.js";

if (window.location.pathname.endsWith("/")) {
  HomeView.GetAppartments();
  AgentModalView.modalEvent();
}
