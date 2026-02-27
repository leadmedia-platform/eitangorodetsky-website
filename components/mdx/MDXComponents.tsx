import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-serif text-4xl font-bold leading-tight text-brand-charcoal md:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 font-serif text-2xl font-bold text-brand-charcoal md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-serif text-xl font-bold text-brand-charcoal md:text-2xl"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-6 text-lg leading-[1.8] text-brand-charcoal"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-brand-amber pl-6 italic text-text-secondary"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 text-lg leading-relaxed" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed" {...props} />
  ),
  a: (props) => (
    <a
      className="text-brand-amber underline underline-offset-2 transition-colors hover:text-brand-terracotta"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-bold text-brand-charcoal" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  hr: () => (
    <hr className="my-12 border-t border-brand-charcoal/10" />
  ),
};
