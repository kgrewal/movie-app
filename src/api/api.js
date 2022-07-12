import axios from 'axios';

// Local Environment API Base URL 
const apiBaseUrl = "http://127.0.0.1:5000/api/";

const fetchMovies = async (searchQuery, page) => {
  try {
    const queryClean = searchQuery.trim();
    const response = await axios.get(apiBaseUrl + "search_movies?title=" + queryClean + "&page=" + page);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const fetchMovieDetails = async (movieID) => {
  try {
    const response = await axios.get(apiBaseUrl + "movie_details?id=" + movieID);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const likeMovie = async (movieID) => {
  try {
    await axios.post(apiBaseUrl + "like_movie?id=" + movieID);
  } catch (err) {
    console.error(err);
  }
};

const unlikeMovie = (movieID) => {
  try {
    axios.post(apiBaseUrl + "unlike_movie?id=" + movieID);
  } catch (err) {
    console.error(err);
  }
};

const getLikedMovies = async () => {
  try {
    const response = await axios.get(apiBaseUrl + "get_liked_movies");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchMovies, fetchMovieDetails, likeMovie, unlikeMovie, getLikedMovies };