//query-selector variables
const moviesGrid = document.querySelector(".movies-grid");
const searchBtn = document.querySelector("#searchbar");
const cancelBtn = document.querySelector("#cancel-button");
const loadBtn = document.querySelector("#load-more-movies-btn");
const api_Key = "eecde0a72132b43bd3b314041e725714";

//populate movie grid
const addMovies = (title, poster_path, vote_count) => {
  moviesGrid.innerHTML += `<div class="movie-card"> 
          <img class="movie-poster" alt="${title}" src="https:image.tmdb.org/t/p/w500${poster_path}" />
          <h3 class="movie-title">${title}</h3>
          <p class="movie-votes">${"⭐️ Votes: "}${vote_count}</p>
        </div>`;
};
//api call function
let page = 1;
async function getData(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}&page=${page}` //fetching data from current movies api
  );
  const data = await response.json();
  console.log(data);
  data.results.forEach((movie) => {
    addMovies(movie.title, movie.poster_path, movie.vote_count); //populating movie grid from api data
  });
}

//load more movies button
loadBtn.addEventListener("click", () => {
  page++; //incrementing page number
  getData(page); //getting data for specific page number
});

//get search results
searchBtn.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchQ = document.querySelector("#search-input"); //access query value
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_Key}&page=${page}&query=${searchQ.value}`; //search url with search query value added
  const res = await fetch(apiUrl); //fetching data from api with regard to search input
  const data = await res.json();
  moviesGrid.innerHTML = ``; //emptying home page to prepare for search values
  data.results.forEach((movie) => {
    addMovies(movie.title, movie.poster_path, movie.vote_count);
  });
});

//pressing enter instead for search
document
  .querySelector("#search-input")
  .addEventListener("keypress", async (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      const searchQ = document.querySelector("#search-input");
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_Key}&page=${page}&query=${searchQ.value}`;
      const res = await fetch(apiUrl);
      const data = await res.json();
      moviesGrid.innerHTML = ``;

      data.results.forEach((movie) => {
        addMovies(movie.title, movie.poster_path, movie.vote_count);
      });
    }
  });
//cancel search
cancelBtn.addEventListener("click", () => {
  page = 1; //set page value back to first page
  moviesGrid.innerHTML = ``; //set innerHTML of the grid to nothing before filling it with data from first page
  const searchInput = document.querySelector("#search-input");
  searchInput.value = ``; //clearing previous search input
  getData(); //repopulating the home page
});
window.onload = function () {
  getData();
};
