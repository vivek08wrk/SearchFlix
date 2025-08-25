
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SearchFlix",
  description: "Search and discover movies with a modern UI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/serchflix.jpg" />
      </head>
      <body className="min-h-screen flex flex-col text-white">
        <div className="bg-black/50 text-white sticky top-0 z-20">
          <Navbar />
        </div>
        <main className="max-w-6xl mx-auto w-full px-4 py-6 flex-1">
          {children}
        </main>
        <div className="bg-black/50 text-gray-100">
          <footer className="mt-auto py-4 text-center">
            &copy; {new Date().getFullYear()} SearchFlix. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
