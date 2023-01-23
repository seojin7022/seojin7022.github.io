const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const handleSubmit = (event) => {
  event.preventDefault();
  window.location.replace(
    `https://www.google.com/search?q=${event.target[0].value}`
  );
};

const handleFocus = (event) => {
  searchForm.classList.add("search-expand");
};

const handleFocusOut = (event) => {
  searchForm.classList.remove("search-expand");
};

searchForm.addEventListener("submit", handleSubmit);
searchInput.addEventListener("focus", handleFocus);
searchInput.addEventListener("focusout", handleFocusOut);
