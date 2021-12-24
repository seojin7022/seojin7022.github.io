const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const loginSubmit = document.querySelector("#login-submit");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  handleGreeting(username);
}

function handleGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}!`;
}

const USERNAME_KEY = localStorage.getItem("username");

if (USERNAME_KEY === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  handleGreeting(USERNAME_KEY);
}
