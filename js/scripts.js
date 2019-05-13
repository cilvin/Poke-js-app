
var pokemonRepository = (function () {

    var repository = [ 
        {name: 'Bulbasaur', height: 21, types: ['grass', 'poison'] },
        {name: 'Charmander', height: 14, types: ['fire'] },
        {name: 'Butterfree', height: 7, types: ['bug',] }
    ];
    
  
    
    function add(repository) {
        repository.push(item)
    }

    function getAll() {
        return repository;
    }
  
    

    return {
        getAll: getAll,
        add: add,
       
    
        
    };
        
  })();

  //Element tags for the names of pokemon
    var openingTag = '<h2 class="styleMe">',
        closingTag = '</h2>';
    //<p> tags for the pokemon attributes
    var openPTag = '<p>',
        closePTag = '</p>';

pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon);
  if (pokemon.height == 7) {
        document.write(openingTag + pokemon.name + closingTag + openPTag + ' (height: '  + pokemon.height + ') ' + closePTag + '<br>');
        } 
  else if (pokemon.types === 'grass') {
            document.write(openingTag + pokemon.name + closingTag + openPTag +  ' (height: ' + pokemon.height + ') -Wow thats big! ' + closePTag + '<br>');
        } 
  else if (pokemon.types === 'fire') {
            document.write(openingTag + pokemon.name + closingTag + openPTag + '(height: ' + pokemon.height + ') ' + closePTag + '<br>');
        } 
  else if (pokemon.types === 'bug') {
            document.write(openingTag + pokemon.name + closingTag + openPTag + '(height: ' + pokemon.height + ') ' + closePTag + '<br>');
        } 
  else {
            document.write(openingTag + pokemon.name + closingTag + openPTag + ' (height: ' + pokemon.height + ') -Wow thats big! ' + closePTag + '<br>');
        }
});




