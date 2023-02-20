let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = ('https://pokeapi.co/api/v2/pokemon/?limit=20');

  

  //getAll function to return all of the items in the pokemonList array
function getAll() {
  return pokemonList;
}

//add pokemon function via push
function add(pokemon) {
  pokemonList.push(pokemon);
}

  //Add pokemon to a list with the format of a button
  function addListItem(pokemon) {
    let listItem = ('<li class="list-group-item"></li>');
    let button = ('<button class="pokemon-button btn-primary btn-lg" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');
    listItem.append(button);
    pokemonListElement.append(listItem);
    button.on('click', function() {
        showDetails(pokemon);
    });
}

   //adds pokemon with .push, if object
/*function add(pokemon) {
  if ((typeof pokemon === "object") & ("name" in pokemon)) {
    pokemonList.push(pokemon);
  }
}*/

  // Function to add a list item for each pokemon in the repository
  function addListItem(pokemon) {
  // Select the pokemon list element
    let pokemonList = document.querySelector('.pokemon-list');
    // Create a new list item element
    let listPokemon = document.createElement('li');
    // Create a button element
    let button = document.createElement('button');

    // Set the text of the button to the uppercase pokemon name
    button.innerText = pokemon.name.toUpperCase();
    // Add a class to the button
    button.classList.add('button-class');
    // Append the button to the list item
    listPokemon.appendChild(button);
    // Append the list item to the pokemon list
    pokemonList.appendChild(listPokemon);

    // Add a click event listener to the button
    button.addEventListener('click', () => {
    // When the button is clicked, show the details of the pokemon
      showDetails(pokemon);
    });
  }

   // Function to log the details of a pokemon
   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }


//adds pokemon with .push, if object
function add(pokemon) {
console.log(pokemon)
if ((typeof pokemon === "object")  ("name" in pokemon)) {
  pokemonList.push(pokemon);
}
}


//load a list of pokemon from api. Promise fetch function.
function loadList() {
return fetch(apiUrl)
  .then(function (response) {
    // convert response to json
    return response.json();
  })
  .then(function (json) {
    // api uses 'results' for array of pokemon. Each result, we are calling item. For each item, we assign keys to parameters (items from api)
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      // add function which pushes pokemon if it is object, and has name
      add(pokemon);
    });
    // if any error occurs, it will be cought right here
  })
  .catch(function (e) {
    console.error(e);
  });
}



//load pokemon details - promise (image, height, type)
function loadDetails(item) {
// defining url from json results and then fetching those details
let url = item.detailsUrl;
return fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (details) {
  // details coming from api (all the info on each pokemon) after selecting which detail is needed (sprites, height, types-array)
  item.imageUrl = details.sprites.front_default;
  item.height = details.height;
  item.types = details.types;
  item.weight = details.weight;
  // any errors will be cought here
})
.catch(function (e) {
  console.error(e);
  
});
}


function loadAll() {
loadList().then(function () {
getAll().forEach(function (pokemon) {
  addListItem(pokemon);
});
});
}

// all functions to return
return {
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  loadAll: loadAll,
};
}());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll(pokemon).forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
  });
})

















