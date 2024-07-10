import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import "modern-normalize";

import Navigation from "../Navigation/Navigation";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("/src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("/src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("/src/pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("/src/pages/NotFoundPage/NotFoundPage"));

const MovieCast = lazy(() => import("/src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("/src/components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navigation />
      <div className="mainContent">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;