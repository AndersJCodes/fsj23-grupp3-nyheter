////This module handles the favorites funktionality of the webpage that allows the user to star a news item. It is saved to local storage and then retrievved from local storage when the fetch is generated and also when the user choose to dislay the favorites only from the menu.

//Declare variables needed for the function
import { newsArr, displayArticles } from "./main";

const savedNewsButton = document.querySelector("#save");
const displaySavedNews = document.querySelector(".display-saved-news");
export const favoriteItems = [];
let favoriteUrl = "";

favoriteItems.push(...populateFromFavorites()); //This lines populates favorites once the reload happens. favoriteItems is needed as it acts as a check against the handleFavoriteClick function below

//Listen to a click on the favorites
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

  //Finds the article corresponding to the clicked favorite button
  const updateFavorite = newsArr.find((item) => item.url === favoriteUrl);

  //Check if the clicked article is already in favoriteItems
  const indexInFavorites = favoriteItems.findIndex(
    (item) => item.url === favoriteUrl
  );

  if (indexInFavorites === -1) {
    //Article is not in favorites, so add it
    favoriteItems.push(updateFavorite);
    console.log("Article added to favorites:", updateFavorite);
  } else {
    //Article is already in favorites, so remove it
    favoriteItems.splice(indexInFavorites, 1);
    console.log("Article removed from favorites:", updateFavorite);
  }

  //Saves the updated favorite list
  saveFavorite();

  //Toggle the favorite button icon class
  target.classList.toggle("fa-solid");
  target.classList.toggle("fa-regular");
  console.log("Favorite button toggled");
}

//Funktion that Updates the local storage with the changes made
function saveFavorite() {
  localStorage.setItem("Favorites", JSON.stringify(favoriteItems));
}

//Function to load favorites from local storage, only used when loading the favorites button
function loadFavorite() {
  const favoriteJSON = localStorage.getItem("Favorites");
  if (favoriteJSON == null) return [];
  displayArticles(JSON.parse(favoriteJSON));
  displaySavedNews.style.display = "block";
}

//This function populates the fetch with the favorite items (somewhat duplicate with the above)
export function populateFromFavorites() {
  const favoriteJSON = localStorage.getItem("Favorites");
  if (favoriteJSON == null) return [];
  return JSON.parse(favoriteJSON);
}

savedNewsButton.addEventListener("click", loadFavorite);
