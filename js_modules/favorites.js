

//debugger
export function listenForFavorites() {
    const favorites = document.querySelectorAll("#favorite"); //Import button
    console.log(favorites);
    //Listen for clicks on to the button
    favorites.forEach(favorite => {
        favorite.addEventListener("click", (clickedFav) => {
            //console.log(favorite.src);
            const src = clickedFav.target.getAttribute("src");
            if (src === "favorite-false.png") {
                console.log("adding favorite image");
                clickedFav.target.setAttribute("src", "../favorite-true.png");
                getFavorite();
            } else {
                console.log("removing favorite image");
                clickedFav.target.setAttribute("src", "../favorite-false.png");
                removeFavorite();
            }
        })
    })

}

    function getFavorite(){
    console.log("GET favorite to storage");
    }

    function removeFavorite(){
    console.log("REMOVE favorite from storage");
    }



