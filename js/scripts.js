    
    
    let repository =[
        {name: 'Balbasaur', height: 12, types: ['grass', 'poison', 'odor']},
        {name: 'Charmander', height: 1.6, types:  ['gass','fire', 'wings']},
        {name: 'Squirtle', height: 1, types: ['slow', 'hard', 'shell']},
    ];
    
    function add(pokemon) {
        pokemonList.push(pokemon);
      }
      
     
    
      /* The for loop using console.log instead of document write because document write
      gives me an error due to the slow speed of my internet it said. The console list loop 
      below worked perfectly.*/
    
      /*for (let i = 0; i < pokemonList.length; i++) {        
        if (pokemonList[i].height >= 5) {
          console.log(pokemonList[i].name + " (height: " + pokemonList[i].height );
        } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
          console.log(pokemonList[i].name + " (height: " +pokemonList[i].height );
        } else {
          console.log(pokemonList[i].name + " (height: " + pokemonList[i].height);
        }
      }*/
      a
    
      /* The for loop using document.write, i get errors due to poor internet connection*/
    for (let i = 0; i < pokemonList.length; i++) {        
        if (pokemonList[i].height >= 5) {
          console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!");
        } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
          console.log(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!" + "m) - That is a medium pokemon!");
        } else {
          console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!");
        }
      }
      
     
    
    
    
        
    
    
    
    
    
    