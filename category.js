//import { displayArticles, newsArr } from "./main.js";
import { search } from "./search.js";

const html = "html";
const CSS = "css"
const JS = "javascript"
const react = "react"
export function setupCategoryEventListeners() {

  document.getElementById("html-category").addEventListener("click", () => {
    search(html);
  });

  document.getElementById("css-category").addEventListener("click", () => {
    search(CSS);
  });

  document.getElementById("react-category").addEventListener("click", () => {
    search(react);
  });

  document.getElementById("JS-category").addEventListener("click", () => {
    search(JS);
  });
}
