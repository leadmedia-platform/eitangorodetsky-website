"use client";

import { useState, useEffect } from "react";

interface StorySearchProps {
  onSearch: (query: string) => void;
}

export default function StorySearch({ onSearch }: StorySearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => onSearch(query), 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <label htmlFor="story-search" className="sr-only">
        Search stories
      </label>
      <svg
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        id="story-search"
        type="search"
        placeholder="Search stories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border-2 border-brand-charcoal/10 bg-white py-3 pl-11 pr-4 text-base text-brand-charcoal placeholder:text-text-secondary focus:border-brand-amber focus:outline-none"
      />
    </div>
  );
}
