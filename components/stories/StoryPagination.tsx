"use client";

interface StoryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function StoryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: StoryPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Story pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg px-4 py-2 text-sm font-medium text-brand-charcoal transition-colors hover:bg-brand-amber/10 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous page"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
          className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
            currentPage === page
              ? "bg-brand-amber text-brand-cream"
              : "text-brand-charcoal hover:bg-brand-amber/10"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg px-4 py-2 text-sm font-medium text-brand-charcoal transition-colors hover:bg-brand-amber/10 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
