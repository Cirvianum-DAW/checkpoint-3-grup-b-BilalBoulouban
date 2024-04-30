const loadPokemons = () => {
  fetch(" `https://pokeapi.co/api/v2/pokemon/2")
    .then((response) => {
      console.log("response", response);

      const parsedData = response.json();
      return parsedData;
    })
    .then((data) => {
      console.log("DATA  ", data);

      data.results.forEach((pokemon, i) => {
        const listItem = document.createElement("li");
        const name = document.createTextNode(`${i + 1} - ${pokemon.name}`);

        listItem.appendChild(name);
        pokemonsList.appendChild(listItem);

        listItem.addEventListener("click", (event) => {
          selectPokemon(event.target);
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching the Pokemons", error);
    });
};

const selectPokemon = (listItem) => {
  const pokemonIndex = Number.parseInt(listItem.innerHTML);
  const imageOfSelected = document.getElementById("selected-image");
  let nameOfSelected = document.getElementById("name");

  nameOfSelected.innerHTML = listItem.innerHTML.toUpperCase();
  nameOfSelected.style.visibility = "visible";
  imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};

loadPokemons(2);
