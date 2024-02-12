//Listen to the generated buttons
//debugger;
import { newsArr } from "./main";

export const favoriteItems = [];
let favoriteUrl = "";

favoriteItems.push(...populateFromFavorites()); //This lines populates favorites once the reload happens. favoriteItems is needed as it acts as a check against the handleFavoriteClick function below

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("favoriteBtn")) {
    handleFavoriteClick(event.target);
  }
});

function handleFavoriteClick(target) {
  // Check if the clicked element has the class "favoriteBtn"
  if (!target.classList.contains("favoriteBtn")) {
    return; // Exit the function if the clicked element is not a favorite button
  }

  const favoriteUrl = target.dataset.url;

  // Find the article corresponding to the clicked favorite button
  const updateFavorite = newsArr.find((item) => item.url === favoriteUrl);

  // Check if the clicked article is already in favoriteItems
  const indexInFavorites = favoriteItems.findIndex(
    (item) => item.url === favoriteUrl
  );

  if (indexInFavorites === -1) {
    // Article is not in favorites, so add it
    favoriteItems.push(updateFavorite);
    console.log("Article added to favorites:", updateFavorite);
  } else {
    // Article is already in favorites, so remove it
    favoriteItems.splice(indexInFavorites, 1);
    console.log("Article removed from favorites:", updateFavorite);
  }

  // Save the updated favorite list
  saveFavorite();

  // Toggle the favorite button icon classes after saving the changes
  target.classList.toggle("fa-solid");
  target.classList.toggle("fa-regular");
  console.log("Favorite button toggled");
}

function saveFavorite() {
  localStorage.setItem("Favorites", JSON.stringify(favoriteItems));
}

function loadFavorite() {
  const favoriteJSON = localStorage.getItem("Favorites");
  if (favoriteJSON == null) return [];
  return JSON.parse(favoriteJSON);
}

export function populateFromFavorites() {
  const favoriteJSON = localStorage.getItem("Favorites");
  if (favoriteJSON == null) return [];
  return JSON.parse(favoriteJSON);
}
//add to favorites list

//Listen to favorties button
