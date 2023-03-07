function searchFunc() {
  const searchInput = document.getElementById("qiymat").value;
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=10&page=1`;

