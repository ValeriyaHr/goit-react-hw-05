import axios from "axios";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzYyNDg5NTY5MGFjYmIzMDBlZmU4Y2E5OTU0ZDQ0ZSIsIm5iZiI6MTcyMDYwNzk4MC41MjU5ODMsInN1YiI6IjY2OGU1ZjI1OWQxYjU3MDMxZjVjMmNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pnoniB_nFYzXO_iPl_SBRUS--LvzztbEzIu-yjUdm9k";

export const getTrendingMovies = (onSuccess) => {
  axios
    .get("/trending/movie/week", {
      params: {
        language: "en-US",
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const searchMovie = (query, onSuccess) => {
  axios
    .get("/search/movie", {
      params: {
        query,
        include_adult: false,
        language: "en-US",
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const getMovieDetails = (movieId, onSuccess) => {
  axios
    .get(`movie/${movieId}`, {
      params: {
        language: "en-US",
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const getMovieCredits = (movieId, onSuccess) => {
  axios
    .get(`movie/${movieId}/credits`, {
      params: {
        language: "en-US",
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const getMovieReviews = (movieId, onSuccess) => {
  axios
    .get(`movie/${movieId}/reviews`, {
      params: {
        language: "en-US",
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      toast.error(error.message);
    });
};