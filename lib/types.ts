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
