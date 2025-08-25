export const metadata = {
  title: "About | SearchFlix",
  description: "About the SearchFlix project and its features.",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="surface rounded-2xl border shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">About SearchFlix</h1>
        <p className="text-gray-700 leading-relaxed">
          SearchFlix is a lightweight movie search app built with Next.js. It uses the OMDB API to fetch movie data and showcases a modern, responsive UI.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="section">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Features</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Fast client-side search</li>
              <li>Responsive grid for movie cards</li>
              <li>Accessible details modal with full info</li>
              <li>Optimized images via Next.js Image</li>
            </ul>
          </div>
          <div className="section">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Tech</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Next.js App Router</li>
              <li>Tailwind CSS</li>
              <li>OMDB API</li>
              <li>React 19</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
