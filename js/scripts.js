    
    
    let pokemonList =[
        {name: 'Balbasaur', height: 12, types: ['grass', 'poison']},
        {name: 'Charmander', height: 2.5, types:  ['fire', 'wings']},
        {name: 'Squirtle', height: 1, types: ['slow', 'shell']
      }

    ]

    
    let pokemonRepository = (function () {
    
      let pokemonList =[
          {name: 'Balbasaur', height: 12, types: ['grass', 'poison']},
          {name: 'Charmander', height: 2.5, types:  ['fire', 'wings']},
          {name: 'Squirtle', height: 1, types: ['slow', 'shell']
        }
  
      ]


    function add (pokemon) {
      pokemonList.push(pokemon);
    }
    
    function getAll () {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll
        };
})();
   // The for loop using document.write.
    /*for (let i = 0; i < pokemonList.length; i++) {        
        if (pokemonList[i].height >= 5) {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!");
        } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
          document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!");
        } else {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!");
        }
      }*/

      pokemonRepository.getAll().forEach(function(pokemon){
        //console.log(pokemon.name + 'is' + pokemon.height + pokemon.types );
        document.write(pokemon.name + pokemon.height + pokemon.types)
      });
      
     
    
    
    
        
    
    
    
    
    
    