let animalFavorites = JSON.parse(localStorage.getItem("animalFavorites")) || []
animalFavorites.forEach(function(item){
    createAnimalCard(item)
})

let pokemonFavorites = JSON.parse(localStorage.getItem("pokemonFavorites")) || []

pokemonFavorites.forEach(function(item){
    createPokemonCard(item)
})

function createAnimalCard(animal) {
    // $(`.a-card-header`).addClass("card-header-h3").text(animal.name);
    // $(`#aStat-1`).addClass("card-stats").text(animal.height);
    // $(`#aStat-2`).addClass("card-stats").text(animal.weight);
    // $(`#aStat-3`).addClass("card-stats").text(animal.speed);
    //refactoring
    let header = $(`<h3></h3>`).addClass("card-header-h3").text(animal.name);
    let cardstat1 = $(`<p></p>`).addClass("card-stats").text(animal.height);
    let cardstat2 =  $(`<p></p>`).addClass("card-stats").text(animal.weight);
    let cardstat3 = $(`<p></p>`).addClass("card-stats").text(animal.speed);
    let footer = $(`<div></div>`);
    
    let addRemoveButton = $(`<button></button>`).text("Remove Button").addClass("removeCard");
    footer.append(addRemoveButton);
    let card = $(`<div></div>`).addClass('cardClass');
    card.append ([header, cardstat1, cardstat2, cardstat3, footer]);
    addRemoveButton.click(function () {
      let parentDiv = addRemoveButton.closest('.cardClass');
      parentDiv.remove();
    }
    );
  
  $("#favorite-animal-container").append(card)
  
  
  
    return;
  }
  
  function createPokemonCard(pokemon) {
    // $(`.a-card-header`).addClass("card-header-h3").text(animal.name);
    // $(`#aStat-1`).addClass("card-stats").text(animal.height);
    // $(`#aStat-2`).addClass("card-stats").text(animal.weight);
    // $(`#aStat-3`).addClass("card-stats").text(animal.speed);
    //refactoring
    let header = $(`<h3></h3>`).addClass("card-header-h3").text(pokemon.name);
    let cardstat1 = $(`<p></p>`).addClass("card-stats").text(pokemon.height);
    let cardstat2 =  $(`<p></p>`).addClass("card-stats").text(pokemon.weight);
    let cardstat3 = $(`<p></p>`).addClass("card-stats").text(pokemon.speed);
    let footer = $(`<div></div>`);
    let addRemoveButton = $(`<button></button>`).text("Remove Button");
    footer.append(addRemoveButton);
    let card = $(`<div></div>`).addClass('cardClass');
    card.append ([header, cardstat1, cardstat2, cardstat3, footer]);
    addRemoveButton.click(function () {
      let parentDiv = addRemoveButton.closest('.cardClass');
      parentDiv.remove();
    }
    );
  
  $("#favorite-pokemon-container").append(card)
  
  
  
    return;
  }