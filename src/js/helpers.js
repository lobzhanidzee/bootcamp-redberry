import { TIMEOUT_SEC } from "./config.js";
import { TOKEN } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (
  url,
  method = "GET",
  uploadData = undefined
) {
  try {
    const fetchPro = fetch(url, {
      method: `${method}`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};

export const POST = () => {
  const addAgentForm = document.getElementById("addAgentForm");
  let postData = new FormData();

  addAgentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(addAgentForm);
    const data = Object.fromEntries(formData);

    fetch("https://api.real-estate-manager.redberryinternship.ge/api/agents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          const text = response.text();
          throw new Error(text);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        AgentModalView.modalEvent();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });
};
