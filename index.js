'use strict';

// API Key = 5510309e

const searchInput = document.getElementById('search-input');

const getMovies = async (e) => {
  e.preventDefault();

  const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=5510309e`);
  const data = await response.json();

  console.log(data);
  displayMovies(data);
};

const displayMovies = (movie) => {
  document.getElementById('watchlist').innerHTML = `
    <div class="movie-card" >
        <img src=${movie.Poster}>
        <div class="question-mark" >
            <div class="movie-title-rating">
                <h2 class="movie-title" >${movie.Title} <span>${movie.imdbRating}</span></h2>
            </div>
            <div class="movie-info" >
                <p>${movie.Runtime}</p>
                <p>${movie.Genre}</p>
                <button class="watchlist-remove-btn">Watchlist</button>
            </div>
            <p class="movie-plot" >${movie.Plot}</p>
        </div>
    </div>
    `;
};

getMovies();
document.getElementById('search-btn').addEventListener('click', getMovies);
