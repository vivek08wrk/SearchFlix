
"use client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

type MovieListItem = { Title: string; Year: string; Poster: string; imdbID: string };

export default function HomePage() {
  const [allMovieData, setAllMovieData] = useState<MovieListItem[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [searchMovie, setSearchMovie] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function fetchMovieData(nextPage = 1, replace = true) {
    if (!searchMovie?.trim()) return;
    const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY || process.env.OMDB_API_KEY;
    try {
      if (replace) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setErrorMsg("");
      const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchMovie)}&page=${nextPage}&apikey=${apiKey}`);
      const data = await res.json();
      if (data?.Response === "False") {
        setAllMovieData([]);
        setTotalResults(0);
        setPage(1);
        setErrorMsg(data?.Error || "No results found.");
      } else {
        const list = Array.isArray(data?.Search) ? data.Search : [];
        setAllMovieData(replace ? list : [...allMovieData, ...list]);
        setTotalResults(parseInt(data?.totalResults || "0", 10));
        setPage(nextPage);
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  const quickSearches: string[] = ["Batman", "Avengers", "Inception", "Spider-Man", "Star Wars", "Harry Potter"];
  function runQuickSearch(q: string) {
    setSearchMovie(q);
    fetchMovieData(1, true);
  }

  return (
    <div className="py-4">
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm backdrop-saturate-125 shadow-sm p-5 md:p-8">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SearchFlix</h1>
          <p className="text-sm md:text-base text-gray-100/90 mt-1">Find movies instantly.</p>
        </header>

        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={(v: string) => setSearchMovie(v)}
          fetchMovieData={() => fetchMovieData(1, true)}
        />

    <div className="flex flex-wrap gap-2 justify-center mb-6">
          {quickSearches.map((q) => (
            <button
              key={q}
              onClick={() => runQuickSearch(q)}
      className="px-3 py-1.5 text-sm rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 transition shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>

        {errorMsg && !loading && (
          <div className="text-center text-gray-600 py-10">
            <div className="mx-auto w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-3">🙁</div>
            <p>{errorMsg}</p>
          </div>
        )}

        <MovieCard allMovieData={allMovieData} loading={loading} />

        {allMovieData?.length > 0 && allMovieData.length < totalResults && (
          <div className="mt-8 text-center">
            <button
              disabled={loadingMore}
              onClick={() => fetchMovieData(page + 1, false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60"
            >
              {loadingMore ? "Loading..." : "Load more"}
            </button>
            <p className="mt-2 text-xs text-gray-600">{allMovieData.length} of {totalResults} results</p>
          </div>
        )}
      </div>
    </div>
  );
}
