import { useEffect, useRef } from "react";
import Image from "next/image";

export default function MovieModal({ open, onClose, movie }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // prevent background scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus dialog
    setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    Plot,
    Director,
    Writer,
    Actors,
    Poster,
    Ratings,
    Released,
    Language,
    Country,
    Awards,
    imdbID,
    imdbRating,
    imdbVotes,
  } = movie || {};

  const genres = Genre ? Genre.split(",").map((g) => g.trim()) : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="movie-modal-title"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-[94vw] md:w-[900px] max-h-[85vh] overflow-y-auto ring-1 ring-black/5 animate-in"
      >
        <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b px-4 md:px-6 py-3 flex items-center justify-between rounded-t-2xl">
          <h2 id="movie-modal-title" className="text-xl md:text-2xl font-bold text-gray-900">{Title}</h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="text-gray-500 hover:text-gray-700 rounded p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </header>

        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-xl border bg-gray-50">
              <Image
                src={Poster && Poster !== "N/A" ? Poster : "/vercel.svg"}
                alt={Title || "Poster"}
                width={400}
                height={600}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {[Year, Rated, Runtime, Released].filter(Boolean).map((chip) => (
                <span key={chip} className="px-2 py-1 rounded-full bg-gray-100 border text-gray-700">{chip}</span>
              ))}
            </div>
            {imdbID && (
              <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full px-3 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
              >
                View on IMDb
              </a>
            )}
          </div>

          <div className="md:col-span-2 space-y-4">
            {genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {genres.map((g) => (
                  <span key={g} className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs">{g}</span>
                ))}
              </div>
            )}

            {Plot && <p className="text-gray-800 leading-relaxed">{Plot}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Director && (
                <p className="text-sm text-gray-700"><span className="font-semibold">Director:</span> {Director}</p>
              )}
              {Writer && (
                <p className="text-sm text-gray-700"><span className="font-semibold">Writer:</span> {Writer}</p>
              )}
              {Actors && (
                <p className="text-sm text-gray-700 md:col-span-2"><span className="font-semibold">Actors:</span> {Actors}</p>
              )}
              {Language && (
                <p className="text-sm text-gray-700"><span className="font-semibold">Language:</span> {Language}</p>
              )}
              {Country && (
                <p className="text-sm text-gray-700"><span className="font-semibold">Country:</span> {Country}</p>
              )}
              {Awards && (
                <p className="text-sm text-gray-700 md:col-span-2"><span className="font-semibold">Awards:</span> {Awards}</p>
              )}
            </div>

            {(imdbRating || imdbVotes || (Array.isArray(Ratings) && Ratings.length > 0)) && (
              <div className="pt-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Ratings</h3>
                <div className="flex flex-wrap gap-2 items-center">
                  {imdbRating && (
                    <span className="px-2 py-1 rounded bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs">IMDb: {imdbRating} ⭐</span>
                  )}
                  {imdbVotes && (
                    <span className="px-2 py-1 rounded bg-gray-50 text-gray-700 border text-xs">{imdbVotes} votes</span>
                  )}
                  {Array.isArray(Ratings) && Ratings.map((r, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-gray-100 text-gray-700 border text-xs">{r.Source}: {r.Value}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
