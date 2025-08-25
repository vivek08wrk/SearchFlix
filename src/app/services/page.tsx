export const metadata = {
  title: "Services | SearchFlix",
  description: "What SearchFlix offers.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="surface rounded-2xl border shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Services</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="section">
            <h2 className="font-semibold text-lg mb-2">Movie Search</h2>
            <p className="text-gray-700 text-sm">Search movies by title with results from the OMDB API.</p>
          </div>
          <div className="section">
            <h2 className="font-semibold text-lg mb-2">Details Modal</h2>
            <p className="text-gray-700 text-sm">View detailed information for each movie including plot, cast, and ratings.</p>
          </div>
          <div className="section">
            <h2 className="font-semibold text-lg mb-2">Responsive UI</h2>
            <p className="text-gray-700 text-sm">Enjoy a modern, responsive interface across devices.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
