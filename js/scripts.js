    
    
    let pokeMonlist =[
    {name: 'Balbasaur', height: 12, types: ['grass', 'poison', 'odor']},
    {name: 'Charmander', height: 11, types:  ['gass','fire', 'wings']},
    {name: 'Squirtle', height: 12, types: ['slow', 'hard', 'shell']},
];

function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function getAll() {
    return pokemonList;
  }

  // The for loop
for (let i = 0; i < pokemonList.length; i++) {        
    if (pokemonList[i].height >= 5) {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!" + "<br>");
    } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
      document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!" + "m) - That is a medium pokemon!" + "<br>");
    } else {
      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!" + "<br>");
    }
  }
  
 



    





