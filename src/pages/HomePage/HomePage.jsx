import { useState, useEffect, useMemo } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../API/TMDBService";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies((data) => {
      setTrendingMovies(data.results);
    });
  }, []);

  const moviesList = useMemo(() => {
    if (trendingMovies.length === 0) return [];

    return trendingMovies.map((movie) => ({
      id: movie.id,
      title: movie.title,
    }));
  }, [trendingMovies]);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList moviesList={moviesList} />
    </div>
  );
};
export default HomePage;