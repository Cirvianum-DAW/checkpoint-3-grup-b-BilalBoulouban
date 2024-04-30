// Afegeix aquí el codi de JS per a la pàgina pokemon.html
const pokemon = document.getElementById("pokemon");
addEventListener("submit", function (event) {
  event.preventDefault();
  const pokemonNomID = pokemon.value.trim().toLowerCase();
  if (pokemonNomID) {
    getPokemonInfo(pokemonNomID);
  }
});

async function getPokemonInfo(pokemonNomID) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNomID}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("El nom o el id del pokemon esta malament");
  }
}

getPokemonInfo(2);
const swapi = {
  request,
};
