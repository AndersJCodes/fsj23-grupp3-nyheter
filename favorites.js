'use strict'

//Listen to the generated buttons

const favoriteItems =[];


export function listenForFavorites() {
  // Initialize a variable to track the favorite state
  let isFavorite = false;

  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element has the class "favorite"
    if (event.target.classList.contains("favorite")) {
      // Toggle the favorite state variable
      isFavorite = !isFavorite;

      // Update the image based on the current state
      const clickedFavoriteButton = event.target;
      clickedFavoriteButton.src = isFavorite ? './favorite-true.png' : './favorite-false.png';

      // Log the current state for debugging
      console.log("Favorite button clicked. Current state:", isFavorite);
    }
  });
}

/* export function listenForFavorites() {
  // Initialize a variable to track the favorite state
  let isFavorite = false;

  // Select all current and future favorite buttons
  const favoritesBtn = document.querySelectorAll(".favorite");

  // Add a click event listener to each favorite button
  favoritesBtn.forEach(button => {
    button.addEventListener("click", function (event) {
      // Toggle the favorite state variable
      isFavorite = !isFavorite;

      // Update the image based on the current state
      const clickedFavoriteButton = event.target;
      clickedFavoriteButton.src = isFavorite ? './favorite-true.png' : './favorite-false.png';

      // Log the current state for debugging
      console.log("Favorite button clicked. Current state:", isFavorite);
    });
  });
} */