//Start of IIFE
var pokemonRepository = (function () {

  var repository = [ 
      {name: 'Bulbasaur', height: 21, types: ['grass', 'poison'] },
      {name: 'Charmander', height: 14, types: ['fire'] },
      {name: 'Butterfree', height: 7, types: ['bug',] }
  ];
  
  function addListItem(pokemon) {
  
    var $newUL = document.createElement('ul');
    var $newLi = document.createElement('li');
    var $newButton = document.createElement('button');
  
    $newUL.classList.add("ul-container");
    $newLi.setAttribute("type","button");
    $newLi.appendChild($newButton);
    $newButton.innerHTML = pokemon.name;
    document.querySelector('.ul-container').append($newLi);
    $newButton.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  
  }
  
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  
  function add(item) {
      repository.push(item)
  }

  function getAll() {
      return repository;
  }


  

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      showDetails: showDetails
     
      
  };

 
  
      
})(); //End of IIFE




pokemonRepository.getAll().forEach(function(pokemon) {
  
  pokemonRepository.addListItem(pokemon);
});
