
"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY || process.env.OMDB_API_KEY;
      const res = await fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${apiKey}`);
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="py-4">
      <div className="surface-blur rounded-2xl border shadow-sm p-4 md:p-6">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  );
}
