import { key } from "./configApi";
import "./style.css";
import axios from "axios";
import { setupCategoryEventListeners } from './category';
import { listenForFavorites } from "./favorites";

const searchDefault = "javascript&css&html&react.js";
const articleElement = document.querySelector("#article");
const CSS = "CSS"
const HTML = "HTML"
const React = "react.js"
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
function displayArticles(articles) {
  const html = articles
    .filter(article => article.description)
    .map(article => `
    <div class="articleCard"> 
      <div class="cardHeader">Category
        <div><img class="favorite" src="favorite-false.png"></div>
      </div>
       ${article.urlToImage
        ? `<img src="${article.urlToImage}" class="card-img-top" alt="..." />`
        : ""
      }
        <div class="cardBody">
          <h5 class="cardTitle">${article.title}</h5>
          <p class="cardText">${article.description}</p>
          <a href="${article.url
      }" class="btn btn-primary">Read the full article</a>
        <span>Source: ${article.author !== null ? article.author : 'Unkown'}</span><br><span>Published at ${article.publishedAt}</span>
        </div>
      </div>
    </div>
  `
    );

  articleElement.innerHTML = html;
}

getNews(searchDefault);

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  listenForFavorites();
});


export { getNews };