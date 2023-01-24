    
    
    let repository =[
        {name: 'Balbasaur', height: 12, types: ['grass', 'poison']},
        {name: 'Charmander', height: 2.5, types:  ['fire', 'wings']},
        {name: 'Squirtle', height: 1, types: ['slow', 'shell']},
    ];
    
    function add(pokemon) {
        pokemonList.push(pokemon);
      }
      
     
    
      /* The for loop using console.log instead of document write because document.write
      was giving me an error due to the slow speed of my internet it said. The console list loop 
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
      
    
      // The for loop using document.write.
    for (let i = 0; i < pokemonList.length; i++) {        
        if (pokemonList[i].height >= 5) {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - Wow, that is a big pokemon!");
        } else if (pokemonList[i].height >= 1.6 && pokemonList[i].height < 5) {
          document.write(pokemonList[i].name + " (height: " +pokemonList[i].height + "m) - That is a medium pokemon!");
        } else {
          document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m) - That is a small pokemon!");
        }
      }
      
     
    
    
    
        
    
    
    
    
    
    