
// dealing with user input pokemon
function pokemonSearch() {
  const userPokemonInput = pokemonInput.value.trim();
  console.log("User Pokemon Input", userPokemonInput);
  pokemonFetchApi(userPokemonInput);
  if (userPokemonInput) {
    console.log("made it here")
  }
  // this can be an alert somewhere else.
  else {
    console.log("enter a pokemon");
  }
}

// dealing with user input animal
function animalSearch() {
  const userAnimalInput = animalInput.value.trim();
  console.log("User Animal Input:", userAnimalInput);
  // const userAnimalInput = "Dog";
  // This above runs the modal when the button is clicked. 
  if (userAnimalInput) {
    animalFetchApi(userAnimalInput);
  }
  // this can be an alert somewhere else.
  else {
    console.log("enter an animal");
  }
}

// fetching information using user input animal

function animalFetchApi(animalInput) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/animals?name=" + animalInput,
    headers: { "X-Api-Key": "LOHrIg46z+hgQ1p2e+L3QQ==Nr61dc7r4QFJEkxi" },
    contentType: "application/json",
    success: function (result) {
      console.log(`ninja api`, result[0]);
      let animalRenWeight, animalRenSpeed, animalRenHeight;
      // checking results for weight if they exist. if they don't dom updated with unknown
      // if it exists update dom with weight
      let apiWeight = result[0].characteristics.weight;
      if (apiWeight === null || apiWeight === undefined) {
        animalRenWeight = "Weight: unknown ";
      } else {
        animalRenWeight = apiWeight;
      }
      // checking for speed, updating dom with info
      let apiSpeed = result[0].characteristics.top_speed;
      if (apiSpeed === null || apiSpeed === undefined) {
        animalRenSpeed = "Speed: unknown ";
      } else {
        animalRenSpeed = apiSpeed;
      }
      // checking for height
      let apiHeight = result[0].characteristics.height;
      if (apiHeight !== null && apiHeight !== undefined) {
        animalRenHeight = apiHeight;
      } else if (
        result[0].characteristics.length !== null &&
        result[0].characteristics.length !== undefined
      ) {
        animalRenHeight = result[0].characteristics.length;

      } else {
        animalRenHeight = "Height: unknown";
      }
      console.log('name', animalInput)
      console.log('weight', animalRenWeight)
      console.log('height', animalRenHeight)
      console.log('speed', animalRenSpeed)
      const animal = {
        name: animalInput, 
        weight: animalRenWeight, 
        height: animalRenHeight,
        speed: animalRenSpeed ,
      }
      console.log('animal:', animal)
      createAnimalCard(animal);
    },
    // error: function ajaxError(jqXHR) {
    //   console.error("Error: ", jqXHR.responseText);
    // },
  });

}

// fetching information using user input pokemon
function pokemonFetchApi(userPokemonInput) {
  console.log("step 1:", userPokemonInput);
  let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${userPokemonInput}`;
  console.log(urlPokemon);
  fetch(urlPokemon)
    .then(function (response) {
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(function (data) {
      // Log the data from the response
      console.log("step 2:", data);
      // update the dom
      let pokeApiWeight = data.weight
      console.log('pokemon weight:', pokeApiWeight);
      let pokeApiHeight = ((data.height) / 10) * 3.28084;
      console.log('height in ft', pokeApiHeight);
      // let feet = Math.floor(feet);
      // let inches = math.round((pokeApiHeight - feet)*12);
      // const realPokeHeight = `feet ${feet}"'" inches ${inches}"""`;
      // console.log(realPokeHeight); 
      let pokeApiSpeed = data.stats[5].base_stat;
      console.log('speed: ', pokeApiSpeed);
      //  .catch(function (error) {
      //       // add this to the dom somewhere
      //       console.error("Error, try again", error);
      //     });
    })

};


//todo store to local storage

//todo get from local storage

//todo display animal cards
// let animal = {
//   name: "Cheetah",
//   weight: "100lbs",
//   height: "45in",
//   speed: "70mph",
// };
function createAnimalCard(animal) {
  const cardH3 = $("<h3>").addClass("card-header-h3").text(animal.name);
  const cardHeader = $(`.a-card-header`);
  cardHeader.append(cardH3);
  const animalHeight = $("<p>").addClass("card-stats").text(animal.height);
  const animalWeight = $("<p>").addClass("card-stats").text(animal.weight);
  const animalSpeed = $("<p>").addClass("card-stats").text(animal.speed);
  const cardBody = $(`.a-stats-content`);
  cardBody.append(animalHeight, animalWeight, animalSpeed);
  return;
}

//todo display pokemon cards
let pokemon = {
  name: "ditto",
  weight: "40lbs",
  height: "3ft",
  speed: "48mph",
};
function createPokemonCard(pokemon) {
  const cardH3 = $("<h3>").addClass("card-header-h3").text(pokemon.name);
  const cardHeader = $(`.p-card-header`);
  cardHeader.append(cardH3);
  const animalHeight = $("<p>").addClass("card-stats").text(pokemon.height);
  const animalWeight = $("<p>").addClass("card-stats").text(pokemon.weight);
  const animalSpeed = $("<p>").addClass("card-stats").text(pokemon.speed);
  const cardBody = $(`.p-stats-content`);
  cardBody.append(animalHeight, animalWeight, animalSpeed);
  return;
}
createPokemonCard(pokemon);

//event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }
});

//Lines 91-132 are for the modal functionality
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {

    $("#modal-js-example").addClass('is-active');

  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }


  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});




//Lines 91-132 are for the modal functionality
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $("#modal-js-example1").addClass('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }



  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});

//end of modal functionality

//event listener for click of animal search. will need to make animalInput a string from the user. 
const animalInput = document.querySelector('#userAnimalInput');
const animalButton = document.querySelector('#modal-button-animal');
const pokemonInput = document.querySelector('#userPokemonInput');   // john's id: #
const pokemonButton = document.querySelector('#modal-button-pokemon');



pokemonButton.addEventListener('click', pokemonSearch);
animalButton.addEventListener('click', animalSearch);

