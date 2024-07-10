import axios from "axios";
import { toast } from "react-hot-toast";

// Set up default base URL and Authorization header for axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_APP_API_READ_ACCESS_TOKEN}`;

// Function to fetch trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/week`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: "en-US"
      }
    });
    return response.data;
  } catch (error) {
    toast.error("Error fetching trending movies: " + error.message);
    throw error;
  }
};

// Function to search for movies
export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        query,
        include_adult: false,
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    toast.error("Error searching for movies: " + error.message);
    throw error;
  }
};

// Function to fetch movie details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: "en-US"
      }
    });
    return response.data;
  } catch (error) {
    toast.error("Error fetching movie details: " + error.message);
    throw error;
  }
};

// Function to fetch movie credits
export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: "en-US"
      }
    });
    return response.data;
  } catch (error) {
    toast.error("Error fetching movie credits: " + error.message);
    throw error;
  }
};

// Function to fetch movie reviews
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
        language: "en-US"
      }
    });
    return response.data;
  } catch (error) {
    toast.error("Error fetching movie reviews: " + error.message);
    throw error;
  }
};
