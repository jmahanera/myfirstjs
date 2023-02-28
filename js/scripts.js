let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=50";
  

  

  //getAll function to return all of the items in the pokemonList array
  function getAll() {
    return pokemonList;
  };

  

  //add pokemon function via push
  function add(pokemon) {
    pokemonList.push(pokemon);
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
    button.addEventListener("click", () => {
      // When the button is clicked, show the details of the pokemon
      showDetails(pokemon);
    });
  }

  // Function to log the details of a pokemon
 /* function showDetails(pokemon) {
    // Log the name, height, and type of the pokemon
    console.log(pokemon);
  }*/

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, pokemon.imageUrl, 'Height: ' + pokemon.height);
    });
  }

  
  //adds pokemon with .push, if object
/*function add(pokemon) {
  if ((typeof pokemon === "object") && ("name" in pokemon) && ("height" in pokemon)) 
  {
    pokemonList.push(pokemon);
  }
}*/

function showModal(title, img, text) {
  let modalContainer = document.querySelector('#modal-container');

  // Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let myImage = document.createElement('img');
    myImage.innerText = img
    myImage.src = img

  let contentElement = document.createElement('p');
  contentElement.innerText = text;
  

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(myImage);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);



  modalContainer.classList.add('is-visible');
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
}
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

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
        item.height = details.height;
        item.types = details.types;
        item.imageUrl = details.sprites.front_default;
        item.weight = details.weight;
        // any errors will be cought here
      })
      .catch(function (e) {
        console.error(e);
      });
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
            height: 10, // 10 can be replaced with the desired height value
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
  

  
  function loadAll() {
    loadList().then(function () {
      getAll().forEach(function (pokemon) {
        addListItem(pokemon);
      });
    });
  }

  // all functions to return
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadDetails: loadDetails,
    loadList: loadList,
    showDetails: showDetails,
    loadAll: loadAll,
  };
})();



// fetch("https://pokeapi.co/api/v2/pokemon/?limit=50")
//   .then(function (response) {
//     return response.json(); // This returns a promise!
//   })
//   .then(function (pokemonList) {
//     console.log(pokemonList); // The actual JSON response
//   })
//   .catch(function () {
//     // Error
//   });



pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
