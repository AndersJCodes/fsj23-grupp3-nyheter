//debugger

//Listen to the generated buttons

export function listenForFavorites() {
  const favoritesBtn = document.querySelectorAll(".favorite");
  document.addEventListener("click", function (event) {
    // Check if the clicked element has the class "favorite"
    if (event.target.classList.contains("favorite")) {
      // If it does, handle the click event here
      console.log("Favorite button clicked");
      // You can access the clicked element using event.target
      const clickedFavoriteButton = event.target;
    }
  });
}
