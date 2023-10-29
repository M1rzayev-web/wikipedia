
  fetch(`https://uz.wikipedia.org/w/api.php`)
    .then((Response) => Response.json())
    .then(data => console.log(data))