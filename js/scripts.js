let pokemonRepository = (function () {
  let repository = [
      { name: "Bulbasaur", height: 0.6, type: ["fire", "flying"] },
      { name: "Charizard", height: 1.1, type: ["grass", "poison"] },
      { name: "Squirtle", height: 1.7, type: ["water",] },

     
  ]

  function add(pokemon) {
    if(
        typeof pokemon=== 'object' &
        typeof pokemon.name=== 'string' &
        typeof pokemon.height=== 'number' &
        Array.isArray(pokemon.types)
    ) {
        repository.push(pokemon)
    } else {
        console.log(`Not valid!`)
    }
}

function getAll() {
  return repository;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener('click', function (event) {
    let target = event.target;
    target.classList.toggle('button-class');
    target.classList.toggle('button');
  });
}

return {
  add: add,
  getAll: getAll,
addListItem: addListItem
};
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
});

// add list item
/*function addListItem(pokemon) {
  // organizes funtions and selectors
  let pokemonListFolder= document.querySelector('.pokemon-list')
  let createListItem= document.createElement('li');
  let button= document.createElement('button');
  // creates button for each pokemon added
  button.innerText= pokemon.name;
  document.querySelector('.pokemon-list');
  pokemonListFolder.appendChild(createListItem);
  pokemonListFolder.lastElementChild.appendChild(button);
  let buttonSelect= pokemonListFolder.lastElementChild.querySelector('button');
  buttonSelect.classList.add(pokemon.typeClass);
  //creates an even listener to every button
  buttonSelect.addEventListener('click', function () {
    showDetails(pokemon);
});
}


 
function showDetails(pokemon) {
  console.log('Name: '+ pokemon.name+ ', '+ 'Height: '+ pokemon.height+ 'cm, '+ 'Types: '+ pokemon.types+ '.');
}

// loop to creat button for each pokemon
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});*/


