import { key } from "./configApi";
import "./style.css";
import axios from "axios";
import { searchOnWord } from "./search.js";
import { setupCategoryEventListeners } from "./category";
import { listenForFavorites } from "./favorites";
import authModal from "./signIn-join";

const searchDefault = "javascript&css&html&react.js";
const articleElement = document.querySelector("#article");
const CSS = "CSS";
const HTML = "HTML";
const React = "react.js";
const btnLoadNews = document.querySelector("#load--news");


async function getNews(searchWord, date) {
  try {
    const url = `https://newsapi.org/v2/everything?language=en&q=${searchWord}&sortBy=${date}&apiKey=${key.API_KEY_2}`;
    const response = await axios.get(url);
    console.log(response.data.articles);
    //console.log(url);
    displayArticles(response.data.articles);
  } catch (error) {
    console.error(error);
  }
}

setupCategoryEventListeners(getNews);
getNews(searchDefault);

//Functioin that renders articles from the fetch
export function displayArticles(articles) {
  const html = articles
    .filter((article) => article.description)
    .map(
      (article) => `
    <div class="articleCard"> 
    <div class="cardHeader">Category
      <div><i class="favoriteBtn fa-regular fa-star fa-lg" style="color: #14A44D;"></i></div>
    </div>
       ${
         article.urlToImage
           ? `<img src="${article.urlToImage}" class="card-img-top" alt="..." />`
           : ""
       }
        <div class="cardBody">
          <h5 class="cardTitle">${article.title}</h5>
          <p class="cardText">${article.description}</p>
          <a href="${
            article.url
          }" class="btn btn-primary">Read the full article</a>
        <span>Source: ${
          article.author !== null ? article.author : "Unkown"
        }</span><br><span>Published at ${article.publishedAt}</span>
        </div>
      </div>
    </div>
  `
    );

  articleElement.innerHTML = html;
}
authModal();
// signInModal();

getNews(searchDefault);

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  listenForFavorites();
});

export { getNews };

const searchWordButton = document.querySelector("#search-word-button");
let searchInputField = document.querySelector("#search-input");

searchWordButton.addEventListener("click", (e) => {
  searchOnWord(searchInputField);
  searchInputField.value = "";
});
