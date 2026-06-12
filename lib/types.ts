export type VoiceType = "storyteller" | "wit" | "confessional" | "witness";
export type ArcType = "discovery" | "villain" | "redemption" | "collision" | "inheritance";
export type LayerType = "universal" | "igaming-flavored" | "deeply-igaming-specific";

export interface StoryFrontmatter {
  title: string;
  voice: VoiceType;
  arc?: ArcType;
  layer: LayerType;
  date: string;
  excerpt: string;
  readTime: string;
  author?: string;
}

export interface Story {
  slug: string;
  frontmatter: StoryFrontmatter;
}

export interface StoryWithContent extends Story {
  content: string;
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
}

export interface Essay {
  slug: string;
  frontmatter: EssayFrontmatter;
}

export interface EssayWithContent extends Essay {
  content: string;
}
