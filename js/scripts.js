//Start of IIFE
var pokemonRepository = (function () {

  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/' ;

  // Loading data from external API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) { 
        var pokemon = { 
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
      
    }).catch(function (e) {
      console.error(e);
    })
    
  }

  // Get the pokemon details using the Url from the pokemon object in the parameter
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) { 
      console.error(e);
    });
  }
  
  
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
  
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    console.log(item); });
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
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails
      
  };

 
  
      
})(); //End of IIFE




pokemonRepository.loadList().then(function() {
  // Get all pokemon and loop through each one
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
