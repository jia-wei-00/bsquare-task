import socket from "./websocket.js";

socket.addEventListener("open", () => {
  // socket.send(`${socket.username} joined the chat`);
  socket.send(`A user joined the chat`);
});

socket.addEventListener("message", (event) => {
  const message = event.data;
  message.text().then((data) => {
    addChat(data);
  });
});

function addChat(data) {
  const chat = document.getElementById("chat-window");
  const p = document.createElement("p");
  p.innerHTML = data;
  chat.appendChild(p);
}

socket.addEventListener("close", () => {
  addChat("A user has left the chat.");
});

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
});

const logout = document.getElementById("logout");
console.log(logout);

window.addEventListener("beforeunload", (event) => {
  socket.send(`A user has left the chat`);
  socket.close();
});

// logout.addEventListener("click", (event) => {
//   event.preventDefault();

//   socket.close();
//   window.location.href = "/";
// });
