

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

