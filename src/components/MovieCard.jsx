import { useState } from "react";
import Image from "next/image";
import MovieModal from "./MovieModal";

function CardSkeleton() {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-4 animate-pulse">
      <div className="rounded-lg w-full h-64 bg-gray-200 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
}

export default function MovieCard({ allMovieData, loading }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  async function openDetails(item) {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY || process.env.OMDB_API_KEY;
      const res = await fetch(`https://www.omdbapi.com/?i=${item.imdbID}&plot=full&apikey=${apiKey}`);
      const data = await res.json();
      setActive(data);
      setOpen(true);
    } catch (e) {
      // noop
    }
  }

  if (loading) {
    return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-10 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!allMovieData || allMovieData.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">Search for movies to get started.</div>
    );
  }

  return (
    <>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-10">
        {allMovieData.map((item, index) => {
          const { Title, Year, Poster } = item;
          return (
            <button
              key={index}
      onClick={() => openDetails(item)}
      className="text-left group surface p-4 rounded-2xl shadow hover:shadow-lg border border-gray-200 transition-transform hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-lg mb-2">
                <Image
                  src={Poster !== "N/A" ? Poster : "/vercel.svg"}
                  alt={Title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-semibold">{Title}</h2>
              <p className="text-sm text-gray-600">Year: {Year}</p>
            </button>
          );
        })}
      </div>
      <MovieModal open={open} onClose={() => setOpen(false)} movie={active} />
    </>
  );
}