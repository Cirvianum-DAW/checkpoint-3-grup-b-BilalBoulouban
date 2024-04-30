// Afegeix aquí el codi de JS per a la pàgina pokemon.html
//const pokemon = document.getElementById("pokemon");
// const pokemonForm = document.getElementById("pokemon");
// const pokemon2 = document.getElementById("name");
// const pokemon3 = document.getElementById("height");
// const pokemon4 = document.getElementById("weight");
// const pokemon5 = document.getElementById("abilities");
// const pokemonInput = document.getElementById("sprite");

//const pokemonInfo = document.getElementById("pokemonInfo");
addEventListener("click", function (event) {
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
    if (response.ok) {
      getpokemonhability(data);
    }
  } catch (error) {
    console.error("El nom o el id del pokemon esta malament");
  }
}

function getpokemonhability(data) {
  const { name, id, height, weight, ability, sprites } = data;

  const pokemonhability = `
  <p>name: ${name}</p>
        <p>ID: ${id}</p>
        <p>Height: ${height / 10} m</p>
        <p>Weight: ${weight / 10} kg</p>
        <p>habilitat: ${ability / 10} kg</p>
        <img src="${sprites}" alt="${name}">

    `;
  getPokemonInfo;
  getpokemonhability;
}
