export interface EssayFrontmatter {
  title: string;
  dek: string;
  date: string;
  readTime: string;
  excerpt: string;
  author?: string;
  pillar?: string;
  framework?: string;
}

export interface Essay {
  slug: string;
  frontmatter: EssayFrontmatter;
}

export interface EssayWithContent extends Essay {
  content: string;
}
