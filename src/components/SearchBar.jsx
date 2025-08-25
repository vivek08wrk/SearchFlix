export default function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
  return (
    <form
      className="w-full max-w-2xl mx-auto flex items-stretch justify-center py-4 px-3 sm:px-4 gap-2 sm:gap-3 bg-transparent"
      onSubmit={e => {
        e.preventDefault();
        fetchMovieData();
      }}
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchMovie}
        onChange={e => setSearchMovie(e.target.value)}
        className="rounded-l-lg w-full sm:w-96 bg-transparent placeholder-white/70 px-4 py-2 outline-none border-2 border-white/30 text-white focus:border-white/60 focus:ring-2 focus:ring-white/20 shadow-sm min-w-0"
        aria-label="Search movies"
      />
      <button
        type="submit"
        className="rounded-r-lg border-2 border-white/40 bg-white/10 text-white px-4 sm:px-6 hover:bg-white/15 active:scale-[0.98] transition shadow-sm"
      >
        Search
      </button>
    </form>
  );
}
