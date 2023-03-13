
function searchPokemon() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (searchInput === "") {
      resultDiv.innerHTML = "Please enter a Pokemon name, ID or Height.";
      return;
    }
  
    let url = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokemon not found!");
        }
        return response.json();
      })
      .then((data) => {
        let pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        let pokemonId = data.id;
        let pokemonHeight = data.height;
        let pokemonType = data.types.map((type) => type.type.name).join(", ");
        let pokemonImage = data.sprites.front_default;
        resultDiv.innerHTML = `
          <img src="${pokemonImage}" alt="${pokemonName}">
          <p>Name: ${pokemonName}</p>
          <p>ID: ${pokemonId}</p>
          <p>Type: ${pokemonType}</p>
          <p>Height: ${pokemonHeight}</p>
        `;
      })
      .catch((error) => {
        resultDiv.innerHTML = error.message;
      });
  }



let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=500";
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }

    

    function addListItem(pokemon) {
        let pokemonListFolder = document.querySelector(".pokemon-list");
        let createlistItem = document.createElement("li");
        createlistItem.classList.add("list-group-item");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("btn-block");
        button.classList.add("btn-primary");
        button.classList.add("pokemon-button");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#exampleModal");
        createlistItem.classList.add("col-xl-3");
        createlistItem.classList.add("col-lg-4");
        createlistItem.classList.add("col-md-6");
        createlistItem.appendChild(button);
        pokemonListFolder.appendChild(createlistItem);
        button.addEventListener("click", function () {
            showDetails(pokemon);
        });
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

      

    function showModal(pokemon) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        modalTitle.empty();
        modalBody.empty();
        let pokemonName = $("<h1>" + pokemon.name + "</h1>");
        modalTitle.append(pokemonName);
        let pokemonImage = $('<img class="modal-img" style="width:50%">');
        pokemonImage.attr("src", pokemon.imageUrl);
        modalBody.append(pokemonImage);
        let pokemonHeight = $("<p>" + "Height : " + pokemon.height + "</p>");
        modalBody.append(pokemonHeight);
    }
    $('[data-toggle="modal"]').on("click", function () {
        let targetSelector = $(this).attr("data-target");
        $(targetSelector).modal("show");
    });
    function hideModal() {
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("is-visible");
    }
    window.addEventListener("keydown", (e) => {
        let modalContainer = document.querySelector("#modal-container");
        if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
            hideModal();
        }
    });
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = { name: item.name, detailsUrl: item.url };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }


    
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function logBrowserInfo() {
        if (navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(function(brand) { return brand.brand === "Chrome"; })) {
            console.log('User is using Chrome');
        } else {
            console.log('User is not using Chrome');
        }
    }
    
    logBrowserInfo();
    

    
    return { add: add, getAll: getAll, addListItem: addListItem, showDetails: showDetails, loadList: loadList, loadDetails: loadDetails, showModal: showModal };
})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

