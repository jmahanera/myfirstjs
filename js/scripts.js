let pokemonRepository = (function() {
  // Define a repository array that stores pokemon objects
  let repository = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
  
  
  // Function to add a new pokemon object to the repository
  function add(pokemon) {
  // Check if the parameter is an object and has the required properties
  if (
  (typeof pokemon === "object") &&
  (typeof pokemon.name === "string") &&
  (typeof pokemon.height === "number") &&
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
  
  //Load pokemon data from external API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon= {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
        });
    }).catch(function (e) {
        console.error(e)
    })
    
}

  // load pokemon data details on selected pokemon
  function loadDetails(pokemon) {
    let url= pokemon.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function(details) {
        //add the details to the item
        pokemon.imageUrl= details.sprites.front_default;
        pokemon.height= details.height;
        pokemon.types= details.types;
    }).catch(function (e) {
        console.error(e);
    })
}

 // load pokemon types for CSS purposes
 function loadTypes(pokemon) {
  let url= pokemon.detailsUrl;
  return fetch(url).then(function (response) {
      return response.json();
  }).then(function(details) {
      //add the details to the item
      pokemon.types= details.types;
  }).catch(function (e) {
      console.error(e);
  });
}

function searchPokemon() {
  let input= document.querySelector('.search-input');
  let pokemonList2= document.querySelector('.pokemon-list')
  let pokemonElements= pokemonList2.getElementsByTagName('li')

  for (let i=0; i< pokemonElements.length; i++) {
      if(input.value=== ''){
          pokemonElements[i].firstElementChild.classList.remove('hide')
      } else if (pokemonElements[i].firstElementChild.innerText.indexOf(input.value)) {
          pokemonElements[i].firstElementChild.classList.add('hide')
      }
  }

 

  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}
  
  // Return an object with the functions that should be publicly accessible
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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


  //pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
   
  
  

 