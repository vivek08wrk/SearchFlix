export const metadata = {
  title: "Contact | SearchFlix",
  description: "Get in touch with the SearchFlix team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="surface rounded-2xl border shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Contact</h1>
  <p className="text-gray-700 mb-6">We&apos;d love to hear your feedback and ideas for SearchFlix.</p>
        <form className="grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-200 focus:border-indigo-500 px-3 py-2 bg-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-200 focus:border-indigo-500 px-3 py-2 bg-white" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-200 focus:border-indigo-500 px-3 py-2 bg-white" placeholder="How can we help?" />
          </div>
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">Send</button>
        </form>
      </div>
    </main>
  );
}
