
  fetch(`https://uz.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=TATU`)
    .then((Response) => Response.json())
    .then(data => console.log(data))