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
    showModal(item); 
    });
  }
  

  function add(item) {
    repository.push(item)
}

function getAll() {
    return repository;
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
      item.weight = details.weight;
    }).catch(function (e) { 
      console.error(e);
    });
  }
  
  
  

  // Creating modal content
  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');

    // Clearing all existing modal content
    $modalContainer.innerHTML = '';

    // Create div element in DOM
    var modal = document.createElement('div');
    // Add class to div DOM element
    modal.classList.add('modal');

    // Create closing button in modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    // Adding event Listener to close modal when clicked 
    closeButtonElement.addEventListener('click', hideModal);

    // Creating element for name in modal content
    var nameElement = document.createElement('h1');
    nameElement.innerText = item.name;

    //creating img in modal content
    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute('src', item.imageUrl);

    // Cretating element for height
    var heightElement = document.createElement('p');
    heightElement.innerText = 'height : ' + item.height;

    // Creating element for weight in modal content
    var typesElement = document.createElement('p');
    typesElement.innerText = 'weight : ' + item.weight;

    // Appending modal content to webpage
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);
    $modalContainer.appendChild(modal);

    // adds class to show the modal
    $modalContainer.classList.add('is-visible');
  
  }

  // hides modal when you click on close button
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  // Hides modal when clicked on ESC on keyboard

window.addEventListener('keydown', (e) => { 
  var $modalContainer = document.querySelector('#modal-container');
  
  if (
    e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
  ) {
    hideModal();
  }
});

// Hides modal if clicked outside of it
var $modalContainer = document.querySelector('#modal-container');
$modalContainer.addEventListener('click', e => {
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});
  
 
  


  

  return {
      getAll: getAll,
      add: add,
      addListItem: addListItem,
      showDetails: showDetails,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal
      
  };

 
  
      
})(); //End of IIFE




pokemonRepository.loadList().then(function() {
  // Get all pokemon and loop through each one
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
