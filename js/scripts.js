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

function showDetails(pokemon) {
  console.log('Name: '+ pokemon.name+ ', '+ 'Height: '+ pokemon.height+ 'cm, '+ 'Types: '+ pokemon.type+ '.');
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


  /*buttonSelect.addEventListener('click', function () {
  showDetails(pokemonRepository);
});*/


 


// loop to creat button for each pokemon
/*pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});*/


