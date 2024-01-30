import { getNews } from "./main.js";

//Search on word
/* const searchWordButton = document.querySelector("#search-word-button");
let searchInputField = document.querySelector("#search-input"); */

export const searchOnWord = (searchInputField) => {
  let word = searchInputField.value;
  getNews(word);
};

/* searchWordButton.addEventListener("click", (e) => {
  searchOnWord(searchInputField);

  if (e) {
    searchInputField.value = "";
  }
});
 */