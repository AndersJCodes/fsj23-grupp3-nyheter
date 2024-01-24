import './style.css'
import axios from "axios";

const key ="d75aac48decd4e9c8d02e380452a20ea";
const url = `https://newsapi.org/v2/everything?q=javascript&html&react&CSS&typescript&apiKey=${key}`;
const articleElement = document.querySelector("#article")

async function getUser(url) {
  try {
    const response = await axios.get(url);
    //console.log(response.data.articles);
    //console.log(url);
    displayArticles(response.data.articles)
  } catch (error) {
    console.error(error);
  }
}
getUser(url);

function displayArticles(articles) {
  const html = articles.map(article => `
    <div class="card" style="width: 40rem">
      <div class="card-header">Category</div>
        <img src="${article.urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text">${article.description}</p>
          <a href="${article.url}" class="btn btn-primary">Read the full article</a>
          <span>Source:${article.name}</span>
        </div>
      </div>
    </div>
  `)

  articleElement.innerHTML = html;

}


/* 
const display = (response) => {
const titleName = respone.articles[0].title
} 
getNews(exampleurl).then(display);*/