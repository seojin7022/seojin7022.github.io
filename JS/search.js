const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

const handleSubmit = (event) => {
  event.preventDefault();
  if (validURL(event.target[0].value)) 
  {
    window.location.replace(event.target[0].value);
  }

  else {
    window.location.replace(
      `https://www.google.com/search?q=${event.target[0].value}`
    );
  }
  
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
