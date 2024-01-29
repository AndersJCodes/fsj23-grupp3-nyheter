export function setupCategoryEventListeners(getNewsFunction) {
    // Add event listeners to the anchor tags
    document.getElementById("Övrigt-category").addEventListener("click", () => {
      getNewsFunction("övrigt");
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
  