'use strict';

// API Key = 5510309e

const searchInput = document.getElementById('search-input');

const getMovies = async (e) => {
  e.preventDefault(); // Temporary until button handler

  const response = await fetch(`http://www.omdbapi.com/?t=${searchInput.value}&apikey=5510309e`);
  const data = await response.json();

  console.log(data);
};

document.getElementById('search-btn').addEventListener('click', getMovies);
