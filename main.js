import { key } from "./configApi";
import "./style.css";
import axios from "axios";
//import { search } from "./search.js";
import { setupCategoryEventListeners } from "./category";
//import { listenForFavorites } from "./favorites";
import authModal from "./signIn-join-modals.ts";
import authentication from "./auth";

export const newsArr = [];
const searchDefault = "javascript&css&html&react.js";
const articleElement = document.querySelector("#article");
const domains = "";
const excludeDomains = "dpreview.com";
//const CSS = "CSS";
//const HTML = "HTML";
//const React = "react.js";
//const btnLoadNews = document.querySelector("#load--news");

async function getNews() {
  try {
    const url = `https://newsapi.org/v2/everything?language=en&q=${searchDefault}&excludeDomains=${excludeDomains}&apiKey=${key.API_KEY_1}`;
    const response = await axios.get(url);
    //console.log(response.data.articles);
    newsArr.push(...response.data.articles);
    newsArr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); // Sort by date in descending order
    //console.log(newsArr);
    displayArticles(newsArr);
  } catch (error) {
    console.error(error);
  }
}

setupCategoryEventListeners()
getNews();

//Functioin that renders articles from the fetch
export function displayArticles(articles) {
  const html = articles
    .filter((article) => article.description)
    .map(
      (article) => `
    <div class="articleCard"> 
    <div class="cardHeader">Category
      <div><i class="favoriteBtn fa-regular fa-star fa-lg" data-url=${article.url
        } style="color: #14A44D;"></i></div>
    </div>
    <div class="cardBody" data-url=${article.url}>
       ${article.urlToImage
          ? `<img src="${article.urlToImage}" class="card-img-top" alt="..." />`
          : ""
        }
          <h5 class="cardTitle">${article.title}</h5>
          <p class="cardText">${article.description}</p>
        <span>Source: ${article.author !== null ? article.author : "Unkown"
        }</span><br><span>Published at ${article.publishedAt}</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  articleElement.innerHTML = html;

  document.querySelectorAll(".cardBody").forEach((card) => {
    card.addEventListener("click", function () {
      const articleUrl = this.getAttribute("data-url");
      window.open(articleUrl, "_blank");
    });
  });
}

function sortOldest() {
  newsArr.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
  displayArticles(newsArr);
}

function sortLatest() {
  newsArr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  displayArticles(newsArr);
}

document.getElementById('Latest').addEventListener('click', sortLatest);
document.getElementById('Oldest').addEventListener('click', sortOldest);

//listenForFavorites();
authModal();
authentication();
// document.querySelector("#join").addEventListener("click", function () {

// });

setupCategoryEventListeners(getNews);
//getNews(searchDefault);

//Search on word
const searchWordButton = document.querySelector("#search-word-button");
let searchInputField = document.querySelector("#search-input");

searchWordButton.addEventListener("click", () => {
  const searchedWord = searchInputField.value;
  search(searchedWord);
});
