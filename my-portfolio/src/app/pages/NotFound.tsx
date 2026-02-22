import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-slate-200 dark:text-slate-800">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Page not found</h2>
      <p className="mt-4 text-slate-500 dark:text-slate-400">Sorry, we couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
    </div>
  );
}
