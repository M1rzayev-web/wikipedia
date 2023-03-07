  const searchForm = document.getElementById("form");
  const searchInput = document.getElementById("qiymat");
  const searchResult = document.querySelector(".wiki");
const select = document.getElementById("select");
  // const selectSon = document.getElementById("selectSon");
  // const selectHajm = document.getElementById("selectHajm");
  const apiUrl = "https://";
  const apirUrl2 = ".wikipedia.org/w/api.php"
  const searchParams = {
    action: "query",
    list: "search",
    format: "json",
    prop: "extracts",
    exsentences: "2",
    exlimit: "500",
    origin: "*",
  };
  // const google = "https://picsum.photos/200/";
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
        const searchResultHtml = data.query.search
          .map(
            (result) => `
              <div class="coctile-item">
              <div class="id-name-time">
              <p>ID: ${result.pageid} </p>
                <p>NAME: ${result.title} haqida </p>
          </div>
          <div class="images">
                    <img src="" alt="">
          </div>
          <div class="item-text">
              <p>${result.snippet}</p>
          </div>
          </div>
          `
          )
          .join("");
        searchResult.innerHTML = searchResultHtml;
      })
      .catch((error) => {
        console.error(error);
        searchResult.innerHTML = "<p>Natija topilmadi</p>";
      });
  });
  