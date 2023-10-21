fetch("https://api.chucknorris.io/jokes/random")
 .then((response) => {
    return response.json();
})
.then((data) => {
    var joke = data.value;
    console.log("Joke: ", joke);
})
.catch();

//Run on the console of Browser