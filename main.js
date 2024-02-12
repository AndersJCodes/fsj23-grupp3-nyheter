import { key } from "./configApi";
import "./style.css";
import axios from "axios";
import { search } from "./search.js";
import { favoriteItems, populateFromFavorites } from "./favorites.js";
import { setupCategoryEventListeners } from "./category";
import authModal from "./signIn-join-modals.ts";
import authentication from "./auth";

export const newsArr = [];
const searchDefault = "javascript&css&html&react.js";
const articleElement = document.querySelector("#article");
const domains = "";
const excludeDomains = "dpreview.com";
let newsFetched = false;

async function getNews() {
  try {
    const url = `https://newsapi.org/v2/everything?language=en&q=${searchDefault}&excludeDomains=${excludeDomains}&apiKey=${key.API_KEY_3}`;
    const response = await axios.get(url);
    //console.log(response.data.articles);
    newsArr.push(...response.data.articles);
    newsArr.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); // Sort by date in descending order
    //console.log(newsArr);
    displayArticles(newsArr);
    newsFetched = true;
  } catch (error) {
    console.error(error);
  }
}

if (!newsFetched) {
  getNews();
}

setupCategoryEventListeners();

//Functioin that renders articles from the fetch
export function displayArticles(articles) {
  const html = articles
    .filter((article) => article.description)
    .map((article) => {
      const isFavorite = favoriteItems.some((item) => item.url === article.url); // Check if the article is in favorites
      console.log(isFavorite);
      return `
        <div class="articleCard"> 
          <div class="cardHeader">
            <div><i class="favoriteBtn fa-lg fa-star ${
              isFavorite ? "fa-solid" : "fa-regular"
            }" data-url="${article.url}" style="color: #14A44D"
      };"></i></div>
          </div>
          <div class="cardBody" data-url="${article.url}">
             ${
               article.urlToImage
                 ? `<img src="${article.urlToImage}" class="card-img-top" alt="..." />`
                 : ""
             }
            <h5 class="cardTitle">${article.title}</h5>
            <p class="cardText">${article.description}</p>
            <span>Source: ${
              article.author !== null ? article.author : "Unknown"
            }</span><br>
            <span>Published ${formatDate(article.publishedAt)}</span>
          </div>
        </div>
      `;
    })
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

document.getElementById("Latest").addEventListener("click", sortLatest);
document.getElementById("Oldest").addEventListener("click", sortOldest);

authModal();
authentication();

//Search on word
const searchWordButton = document.querySelector("#search-word-button");
let searchInputField = document.querySelector("#search-input");

searchWordButton.addEventListener("click", () => {
  const searchedWord = searchInputField.value;
  search(searchedWord);
});

function formatDate(publishedAt) {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(currentDate.getDate() - 1);
  const publishedDate = new Date(publishedAt);
  const isToday = publishedDate.toDateString() === currentDate.toDateString();
  const isYesterday =
    publishedDate.toDateString() === yesterdayDate.toDateString();
  const monthName = publishedDate.toLocaleString("default", { month: "long" });
  if (isToday) {
    return `Today ${publishedDate.getHours()}:${publishedDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else if (isYesterday) {
    return `Yesterday ${publishedDate.getHours()}:${publishedDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else {
    return ` ${publishedDate.getDate()} ${monthName}`;
  }
}
