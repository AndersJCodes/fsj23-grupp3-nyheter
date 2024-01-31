

//Listen to the generated buttons

const favoriteItems =[];

export function listenForFavorites() {
  //Adding the event listener
  document.addEventListener("click", function (event) {
    
    // Check if the clicked element has the class "favorite", required to make js see dom loaded items
    if (event.target.classList.contains("favoriteBtn")) {
      // Toggle the favorite state variable
      event.target.classList.toggle('fa-regular');
      event.target.classList.toggle('fa-solid');

      // Log the current state for debugging
      console.log("Favorite button clicked.");
    }
  })
};
/* 
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
  })
}; */