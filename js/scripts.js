// Create an IIFE (Immediately Invoked Function Expression) that returns an object containing methods for managing a list of Pokemon
let pokemonRepository = (function () {
  // Private variables to store Pokemon list and API URL
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  // Private function to add a Pokemon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Private function to get the entire Pokemon list
  function getAll() {
    return pokemonList;
  }

  // Private function to add a new list item for a Pokemon
  function addListItem(pokemon) {
    // Get the DOM element for the list container
    let pokemonListFolder = document.querySelector(".pokemon-list");

    // Create a new list item element
    let createlistItem = document.createElement("li");
    createlistItem.classList.add("list-group-item");

    // Create a new button element to display the Pokemon's name
    let button = document.createElement("button");
    button.innerText= pokemon.name;
    button.classList.add("btn-block");
    button.classList.add("btn-primary");
    button.classList.add("pokemon-button");
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');

    // Set the classes for the list item element
    createlistItem.classList.add('col-xl-3');
    createlistItem.classList.add('col-lg-4');
    createlistItem.classList.add('col-md-6');

    // Add the button element to the list item element
    createlistItem.appendChild(button);

    // Add the list item element to the list container element
    pokemonListFolder.appendChild(createlistItem);

    // Add an event listener to the button to show the Pokemon's details when clicked
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }
    
  // Private function to show the details of a Pokemon
  function showDetails(pokemon) {
    // Load the details of the Pokemon, then show them in a modal window
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // Private function to show a modal window with the details of a Pokemon
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    // Clear the contents of the modal window
    modalTitle.empty();
    modalBody.empty();

    // Create a new element for the Pokemon's name and add it to the modal window
    let pokemonName = $("<h1>" + pokemon.name + "</h1>");
    modalTitle.append(pokemonName);

    // Create a new image element for the Pokemon's picture and add it to the modal window
    let pokemonImage = $('<img class="modal-img" style="width:50%">');
    pokemonImage.attr("src", pokemon.imageUrl);
    modalBody.append(pokemonImage);

    // Create a new element for the Pokemon's height and add it to the modal window
    let pokemonHeight = $("<p>" + "Height : " + pokemon.height + "</p>");
    modalBody.append(pokemonHeight);
  }
  $('[data-toggle="modal"]').on('click', function(){
    let targetSelector = $(this).attr('data-target');
    $(targetSelector).modal('show'); // Bootstrap’s own function to make the modal appear
  });
  // Private function to hide the modal window
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  // Add an event listener to hide the modal window when the Escape key is pressed
  


  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
