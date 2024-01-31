import { displayArticles } from "./main.js";
import { key } from "./configApi";
import axios from "axios";

//Search on word
export const searchOnWord = (searchInputField) => {
  let word = searchInputField.value;
  getSearchedNews(word);
};

async function getSearchedNews(searchWord) {
  try {
    const url = `https://newsapi.org/v2/everything?language=en&searchIn=title&q=${searchWord}&pageSize=10&apiKey=${key.API_KEY_2}`;
    const response = await axios.get(url);
    //console.log(response.data.articles);
    displayArticles(response.data.articles);
  } catch (error) {
    console.error("Det uppstod ett fel:", error);
  }
}
