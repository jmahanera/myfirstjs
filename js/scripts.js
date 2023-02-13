let pokemonRepository = (function() {
  // Define a repository array that stores pokemon objects
  let repository = [
  { name: "Bulbasaur", height: 0.6, type: ["grass", "poison"] },
  { name: "Charizard", height: 1.1, type: ["fire", "flying"] },
  { name: "Squirtle", height: 1.7, type: ["water"] },
  ];
  
  // Function to add a new pokemon object to the repository
  function add(pokemon) {
  // Check if the parameter is an object and has the required properties
  if (
  (typeof pokemon === "object") &
  (typeof pokemon.name === "string") &
  (typeof pokemon.height === "number") &
  Array.isArray(pokemon.type)
  ) {
  // If the object is valid, add it to the repository
  repository.push(pokemon);
  } else {
  // If the object is not valid, log an error message
  console.log("Not valid!");
  }
  }
  
  // Function to retrieve all pokemon objects in the repository
  function getAll() {
  return repository;
  }
  
  // Function to add a list item for each pokemon in the repository
  function addListItem(pokemon) {
  // Select the pokemon list element
  let pokemonList = document.querySelector(".pokemon-list");
  // Create a new list item element
  let listPokemon = document.createElement("li");
  // Create a button element
  let button = document.createElement("button");
  
  // Set the text of the button to the uppercase pokemon name
  button.innerText = pokemon.name.toUpperCase();
  // Add a class to the button
  button.classList.add("button-class");
  // Append the button to the list item
  listPokemon.appendChild(button);
  // Append the list item to the pokemon list
  pokemonList.appendChild(listPokemon);
  
  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // When the button is clicked, show the details of the pokemon
    showDetails(pokemon);
  });
  }
  
  // Function to log the details of a pokemon
  function showDetails(pokemon) {
  // Log the name, height, and type of the pokemon
  console.log(`Name: ${pokemon.name} Height: ${pokemon.height} Type: ${pokemon.type}`);
  };
  
  // Return an object with the functions that should be publicly accessible
  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  };
  })();
  
  // Call the add function to add a new pokemon to the repository
  pokemonRepository.add({ name: 'Pikachu', height: 0.3, type: ['electric'] });
  
  // Log the entire repository
  console.log(pokemonRepository.getAll());
  
  // Call the addListItem function for each pokemon in the repository
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });