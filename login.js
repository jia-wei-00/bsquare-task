import socket from "./websocket.js";

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username-input");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputUsername = usernameInput.value.trim();

  console.log(inputUsername);

  if (inputUsername) {
    window.username = inputUsername;
    socket.send(`${inputUsername} joined the chat`);
    window.location.href = "/chat.html";
  }
});
