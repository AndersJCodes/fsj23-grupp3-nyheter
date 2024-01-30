export function setupCategoryEventListeners(getNewsFunction) {
    document.getElementById("Övrigt-category").addEventListener("click", () => {
      getNewsFunction("javascript&css&html&react.js");
    });
  
    document.getElementById("html-category").addEventListener("click", () => {
      getNewsFunction("HTML");
    });
  
    document.getElementById("css-category").addEventListener("click", () => {
      getNewsFunction("CSS");
    });
  
    document.getElementById("react-category").addEventListener("click", () => {
      getNewsFunction("react.js");
    });
  }
  