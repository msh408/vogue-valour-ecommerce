import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-surface text-on-surface">
      <p className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-5">
        Error 404
    </p>
      <h1 className="font-headline-xl text-6xl sm:text-7xl md:text-8xl mb-6">
        Page Not Found
        </h1>
      <p className="max-w-md text-sm sm:text-base text-on-surface-variant leading-relaxed mb-10">
        The page you're looking for doesn't exist or may have been moved.
        </p>
      <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary text-[10px] tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">Back to Home <span>→</span></Link>
    </main>
  );
}

export default NotFound;