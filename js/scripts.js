

var pokemonRepository = (function () {

    var repository = [ 
        {name: 'Bulbasaur', height: 21, types: ['grass', 'poison'] },
        {name: 'Charmander', height: 14, types: ['fire'] },
        {name: 'Butterfree', height: 7, types: ['bug',] }
    ];
    
    //Element tags for the names of pokemon
    var openingTag = '<h2 class="styleMe">',
        closingTag = '</h2>';
    //<p> tags for the pokemon attributes
    var openPTag = '<p>',
        closePTag = '</p>';
    
    function add(repository) {
        repository.push(item)
    }

    function getAll() {
        return repository;
    }
  
    function forEach(name) {
         return  repository.forEach(name);
    }
  
    

    return {
        getAll: getAll,
        add: add,
        forEach: forEach
    
        
    };
        
  })();

pokemonRepository.forEach(function(name) {
  console.log(name);
    for (var i=0; i < repository.length; i++) {
        if (repository[i].height == 7) {
            document.write(openingTag + repository[i].name + closingTag + openPTag + ' (height: '  + repository[i].height + ') ' + closePTag + '<br>');
        } else if (repository[i].types[0] === 'grass') {
            document.write(openingTag + repository[i].name + closingTag + openPTag +  ' (height: ' + repository[i].height + ') -Wow thats big! ' + closePTag + '<br>');
        } else if (repository[i].types[0] === 'fire') {
            document.write(openingTag + repository[i].name + closingTag + openPTag + '(height: ' + repository[i].height + ') ' + closePTag + '<br>');
        } else if (repository[i].types[1] === 'bug') {
            document.write(openingTag + repository[i].name + closingTag + openPTag + '(height: ' + repository[i].height + ') ' + closePTag + '<br>');
        } else {
            document.write(openingTag + repository[i].name + closingTag + openPTag + ' (height: ' + repository[i].height + ') -Wow thats big! ' + closePTag + '<br>');
        }
    }
  
});





