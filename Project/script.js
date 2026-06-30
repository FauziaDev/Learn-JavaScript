const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f24e0d06";
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById('searchBtn');
const movieResults = document.getElementById('movieResults');
const favorites = document.getElementById('favorites');

let  favoriteMovies =JSON.parse(localStorage.getItem('favorite')) || [];
// Load Favorites from Local Storage
document.addEventListener('DOMContentLoaded', displayFavorites);
// Fetch Movies from API
async function fetchMovies(query) {
    try {
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();
     
    if(data.Response === 'True') {
        displayMovies(data.Search);
        //  console.log("Print Movie data", data.Search);
    } else{
        // console.log(`No movie found for the query: ${query}`)
        movieResults.innerHTML = `<p>No movies available for the query : ${query}</p>`
    }
    // console.log(data);   
} catch(error) {
    console.log(`Error Occured while fetching movies: ${error}`);
}
}
// Display Movies in Results Section
function displayMovies(movies) {
    movieResults.innerHTML = "";
    movies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `
        <img src ="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <button onClick="addToFavorite('${movie.imdbID}','${movie.Title.replace("'", "\\" + "'")}','${movie.Poster}','${movie.Year}');">Add  To Favourites</button> 
        `;

        movieCard.classList.add = 'movie-card';

        movieResults.appendChild(movieCard);  
    });
}
// Add Movie to Favorites
function addToFavorite(id, title, poster, year) {
    if(favoriteMovies.some((movie) => movie.id == id)) return; {
    favoriteMovies.push({id, title, poster, year});
    localStorage.setItem("favorite",JSON.stringify(favoriteMovies));
    displayFavorites();
}
}

// Display Favorites
function displayFavorites() {
    favorites.innerHTML = "";
    favoriteMovies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `
        <img src ="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <button onClick="removeFavorite('${movie.id}');">Remove</button> 
        `;

        movieCard.classList.add('movie-card');

        favorites.appendChild(movieCard);  
    });
}
// Remove Movie from Favorites
function removeFavorite(id){
    favoriteMovies = favoriteMovies.filter((movie) => movie.id !== id);
    localStorage.setItem("favorite", JSON.stringify(favoriteMovies));
    displayFavorites();
}

// Event Listener for Search Button
searchBtn.addEventListener('click',() => {
    const query = searchInput.value.trim();
    if(query) {
        fetchMovies(query);
    }
});
// const searchQuery = "Someone";
// fetchMovies(searchQuery);
// fetchMovies('someone');

