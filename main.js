import './style.css'
import axios from "axios";

const key =""

const exampleurl = `https://newsapi.org/v2/everything?q=javascript&apiKey=${key}`

async function getUser(exampleurl) {
  try {
    const response = await axios.get(exampleurl);
    console.log(response);
    console.log(response.data.articles[0].description);
  } catch (error) {
    console.error(error);
  }
}
getUser(exampleurl);

/* 
const display = (response) => {
const titleName = respone.articles[0].title
} 
getNews(exampleurl).then(display);*/