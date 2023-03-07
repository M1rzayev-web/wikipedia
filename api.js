function searchFunc() {
  const searchInput = document.getElementById("qiymat").value;
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=10&page=1`;

  fetch(`https://uz.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=TATU`)
    .then((Response) => Response.json())
    .then((data) => console.log(data))