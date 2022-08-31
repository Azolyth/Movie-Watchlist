'use strict';

// API Key = 5510309e

const searchInput = document.getElementById('search-input');

const getMovies = async (e) => {
  e.preventDefault();
  e.target.value;

  const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=5510309e`);
  const data = await response.json();

  console.log(data);
  displayMovies(data);
};

const displayMovies = (movies) => {
  let displayMoviesHtml = '';

  displayMoviesHtml += `
    <div class="movie-card" >
        <img src=${movies.Poster}>
        <div class="question-mark" >
            <div class="movie-title-rating">
                <h2 class="movie-title" >${movies.Title} <span class="movie-rating" >${movies.imdbRating}</span></h2>
            </div>
            <div class="movie-info" >
                <p>${movies.Runtime}</p>
                <p>${movies.Genre}</p>
                <button class="watchlist-remove-btn">Watchlist</button>
            </div>
            <p class="movie-plot" >${movies.Plot}</p>
        </div>
    </div>
    `;

  document.getElementById('watchlist').innerHTML = displayMoviesHtml;
};

document.getElementById('search-btn').addEventListener('click', getMovies);
