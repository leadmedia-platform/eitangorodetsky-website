"use client";

import { useState, useMemo, useCallback } from "react";
import type { Story, VoiceType, ArcType, LayerType } from "@/lib/types";
import StoryFilter from "./StoryFilter";
import StorySearch from "./StorySearch";
import StoryGrid from "./StoryGrid";
import StoryPagination from "./StoryPagination";

const STORIES_PER_PAGE = 12;

interface StoriesArchiveProps {
  stories: Story[];
}

export default function StoriesArchive({ stories }: StoriesArchiveProps) {
  const [activeVoice, setActiveVoice] = useState<VoiceType | null>(null);
  const [activeArc, setActiveArc] = useState<ArcType | null>(null);
  const [activeLayer, setActiveLayer] = useState<LayerType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleVoiceChange = useCallback((voice: VoiceType | null) => {
    setActiveVoice(voice);
    if (voice !== "storyteller") setActiveArc(null);
    setCurrentPage(1);
  }, []);

  const handleArcChange = useCallback((arc: ArcType | null) => {
    setActiveArc(arc);
    setCurrentPage(1);
  }, []);

  const handleLayerChange = useCallback((layer: LayerType | null) => {
    setActiveLayer(layer);
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const filtered = useMemo(() => {
    let result = stories;

    if (activeVoice) {
      result = result.filter((s) => s.frontmatter.voice === activeVoice);
    }
    if (activeArc) {
      result = result.filter((s) => s.frontmatter.arc === activeArc);
    }
    if (activeLayer) {
      result = result.filter((s) => s.frontmatter.layer === activeLayer);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.frontmatter.title.toLowerCase().includes(q) ||
          s.frontmatter.excerpt.toLowerCase().includes(q)
      );
    }

    return result;
  }, [stories, activeVoice, activeArc, activeLayer, searchQuery]);

  const totalPages = Math.ceil(filtered.length / STORIES_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * STORIES_PER_PAGE,
    currentPage * STORIES_PER_PAGE
  );

  return (
    <div>
      <div className="mb-8 space-y-6">
        <StorySearch onSearch={handleSearch} />
        <StoryFilter
          activeVoice={activeVoice}
          activeArc={activeArc}
          activeLayer={activeLayer}
          onVoiceChange={handleVoiceChange}
          onArcChange={handleArcChange}
          onLayerChange={handleLayerChange}
        />
      </div>

      <p className="mb-6 font-mono text-xs text-text-secondary">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"} found
      </p>

      <StoryGrid stories={paginated} />
      <StoryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
