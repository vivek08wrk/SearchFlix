export default function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
  return (
    <form
      className="flex justify-center py-5 px-4 gap-0 bg-transparent"
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
        className="rounded-l-lg w-80 bg-transparent placeholder-white/70 px-4 py-2 outline-none border-2 border-white/30 text-white focus:border-white/60 focus:ring-2 focus:ring-white/20 shadow-sm"
        aria-label="Search movies"
      />
      <button
        type="submit"
        className="bg-indigo-600 shadow px-6 text-white rounded-r-lg border-2 border-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition"
      >
        Search
      </button>
    </form>
  );
}
