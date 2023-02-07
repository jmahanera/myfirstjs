    
    
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

      /*pokemonRepository.getAll().forEach(function(pokemon){
        let pokemonList = document.querySelector('.pokemonList');
        //console.log(pokemon.name + 'is' + pokemon.height + pokemon.types );
        //document.write()
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = 'Charmander';
        button.classList.add('selected');
        listItem.appendChild(button);
        ul.appendChild(listItem);
      });*/

      function addListItem (pokemon) {
        let pokemonList = document.querySelector(".pokemonList");
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = 'pokemon.name';
        button.classList.add("button-class");
        listItem.appendChild(button);
        ul.appendChild(pokemonList);
        // listens for a button click and the logs to the console the details (why do I need to put this under addListItem)
        button.addEventListener("click", function(Event) {
        showDetails(pokemon);
       });
    }
      
     
    
    
    
        
    
    
    
    
    
    