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

searchInput.addEventListener('keyup', getMovies);

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
  document.getElementById('watchlist-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const displayWatchlist = [];

    displayWatchlist.push(displayMoviesHtml);

    const storedWatchlist = localStorage.setItem('movie', JSON.stringify(displayMoviesHtml));
    console.log('Local Test', storedWatchlist);

    document.getElementById('watchlist').innerHTML = displayWatchlist;
  });
};

document.getElementById('search-btn').addEventListener('click', getMovies);
