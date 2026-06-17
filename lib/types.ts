export interface EssaySource {
  name: string;
  url?: string;
  date?: string;
}

export interface EssayFrontmatter {
  title: string;
  dek: string;
  date: string;
  readTime: string;
  excerpt: string;
  author?: string;
  pillar?: string;
  framework?: string;
  /** Machine-readable citations → Article.citation[] (AI-citation readiness). */
  sources?: EssaySource[];
}

export interface Essay {
  slug: string;
  frontmatter: EssayFrontmatter;
}

export interface EssayWithContent extends Essay {
  content: string;
}
