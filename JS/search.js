const searchForm = document.querySelector("#search-form");
const input = document.createElement("input");
const handleSubmit = (event) => {
  event.preventDefault();
  window.location.replace(
    `https://www.google.com/search?q=${event.target[0].value}`
  );
};

searchForm.addEventListener("submit", handleSubmit);
