//Listen to the generated buttons
//debugger;
import { newsArr } from "./main";

const favoriteItems = [];
let favoriteUrl = "";

function listenForFavorites() {
  //Adding the event listener
  document.addEventListener("click", function (event) {
    // Check if the clicked element has the class "favorite", required to make js see dom loaded items
    if (event.target.classList.contains("favoriteBtn")) {
      // Toggle the favorite state variable
      event.target.classList.toggle("fa-regular");
      event.target.classList.toggle("fa-solid");
      //console.log("Favorite button clicked.");

      favoriteUrl = event.target.dataset.url;
      //console.log(favoriteUrl);

      const updateFavorite = newsArr.filter((item) => item.url === favoriteUrl);
      console.log(updateFavorite);

      // Check if the updated favorite is already in favoriteItems
      const isFavoritePresent = favoriteItems.some(
        (item) => item.url === updateFavorite[0].url
      );
      if (!isFavoritePresent) {
        // Add the updated favorite to favoriteItems
        favoriteItems.unshift(updateFavorite[0]);
        console.log("Updated favorite added to favoriteItems:", favoriteItems);
        saveFavorite();
      } else {
        console.log(
          "Updated favorite is already in favoriteItems. Removing..."
        );
        // Remove the updated favorite from favoriteItems
        favoriteItems.splice(
          favoriteItems.findIndex((item) => item.url === updateFavorite[0].url),
          1
        );
        saveFavorite();
        console.log(
          "Updated favorite removed from favoriteItems:",
          favoriteItems
        );
      }
    }
  });
}

function saveFavorite() {
  localStorage.setItem("Favorites", JSON.stringify(favoriteItems));
}

function loadFavorite() {
  const favoriteJSON = localStorage.getItem("Favorites");
  if (favoriteJSON == null) return [];
  return JSON.parse(favoriteJSON);
}

listenForFavorites();
//add to favorites list

//Listen to favorties button
