'use strict';

const searchInput = document.getElementById('search-input');

// Calls to OMdb API
const getMovies = async (e) => {
  e.preventDefault();

  const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=5510309e`);
  const data = await response.json();

  console.log(data);
  displayMovies(data);
};
// Displays movies from API database
const displayMovies = (movies) => {
  let displayMoviesHtml = '';

  displayMoviesHtml += `
    <div class="movie-card" >
        <img class="movie-poster" src=${movies.Poster}>
        <div class="movie-info" >
            <div class="movie-title-rating">
                <h2 class="movie-title" >${movies.Title} </h2>
                    <p class="movie-rating" >${movies.imdbRating}</p>
            </div>
            <div class="movie-details" >
                <p>${movies.Runtime}</p>
                <p>${movies.Genre}</p>
                <button id="watchlist-btn" class="watchlist-remove-btn">Watchlist</button>
            </div>
            <p class="movie-plot" >${movies.Plot}</p>
        </div>
    </div>
    `;

  document.getElementById('search-list').innerHTML = displayMoviesHtml;

  document.getElementById('watchlist-btn').addEventListener('click', () => {
    localStorage.setItem('movie', JSON.stringify(displayMoviesHtml));

    const test = localStorage.getItem('movie');
    console.log('Testing Local Storage', test);
  });
};

document.getElementById('search-btn').addEventListener('click', getMovies);
