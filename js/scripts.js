//Start of IIFE
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

  function addListItem(pokemon) {
  
    var $newUL = documnet.createElement('ul');
    var $newLi = document.createElement('li');
    var $newButton = document.createElement('button');
  
    $newUL.classList('ul-container');
    $newLi.setAttribute('type="button"');
    $newLi.appendChild($newButton);
    $newButton.innerHTML = pokemon.name;
    document.querySelector('.ul-container').append($newLi);
    $newButton.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  
  };
  
  function showDetails(pokemon) {
    console.log(pokemonRepository.getAll());
  };
  
      
})(); //End of IIFE




pokemonRepository.getAll().forEach(function(repository) {
addListItem(repository);
});
