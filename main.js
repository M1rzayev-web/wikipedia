const searchForm = document.getElementById("form");
const searchInput = document.getElementById("qiymat");
const searchResults = document.querySelector(".wiki");
const select = document.getElementById("select");
const apiUrl = "https://";
const apirUrl2 = ".wikipedia.org/w/api.php";
const searchParams = {
  action: "query",
  list: "search",
  format: "json",
  origin: "*",
};

searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    return;
  }
  searchParams.srsearch = searchTerm;
  const queryString = new URLSearchParams(searchParams).toString();
  fetch(`${apiUrl + select.value + apirUrl2}?${queryString}`)
    .then((response) => response.json())
    .then((data) => {
      const searchResultsHtml = data.query.search
        .map(
          (result) => `
            <div class="coctile-item">
             <div class="id-name-time">
            <p>ID: ${result.pageid} </p>
              <p>NAME: ${searchInput.value} haqida </p>
         </div>
         <div class="images">
                  <img src="${result.pageImages}" alt="">
         </div>
         <div class="item-text">
             <p>${result.snippet}</p>
         </div>
         </div>
        `
        )
        .join("");
      searchResults.innerHTML = searchResultsHtml;
    })
    .catch((error) => {
      console.error(error);
      searchResults.innerHTML = "<p>Natija topilmadi</p>";
    });
});
