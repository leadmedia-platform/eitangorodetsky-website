"use client";

import type { VoiceType, ArcType, LayerType } from "@/lib/types";

interface StoryFilterProps {
  activeVoice: VoiceType | null;
  activeArc: ArcType | null;
  activeLayer: LayerType | null;
  onVoiceChange: (voice: VoiceType | null) => void;
  onArcChange: (arc: ArcType | null) => void;
  onLayerChange: (layer: LayerType | null) => void;
}

const voices: VoiceType[] = ["storyteller", "wit", "confessional", "witness"];
const arcs: ArcType[] = ["discovery", "villain", "redemption", "collision", "inheritance"];
const layers: LayerType[] = ["universal", "igaming-flavored", "deeply-igaming-specific"];

const voiceStyles: Record<VoiceType, string> = {
  storyteller: "bg-brand-amber text-brand-cream",
  wit: "bg-brand-sage text-brand-cream",
  confessional: "bg-brand-terracotta text-brand-cream",
  witness: "bg-brand-navy text-brand-cream",
};

const layerLabels: Record<LayerType, string> = {
  universal: "Universal",
  "igaming-flavored": "iGaming Flavored",
  "deeply-igaming-specific": "Deeply iGaming",
};

export default function StoryFilter({
  activeVoice,
  activeArc,
  activeLayer,
  onVoiceChange,
  onArcChange,
  onLayerChange,
}: StoryFilterProps) {
  return (
    <div className="space-y-4">
      {/* Voice Filter */}
      <div>
        <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-secondary">
          Voice
        </span>
        <div className="flex flex-wrap gap-2">
          {voices.map((voice) => (
            <button
              key={voice}
              onClick={() => onVoiceChange(activeVoice === voice ? null : voice)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all ${
                activeVoice === voice
                  ? voiceStyles[voice]
                  : "bg-brand-charcoal/5 text-text-secondary hover:bg-brand-charcoal/10"
              }`}
            >
              {voice}
            </button>
          ))}
        </div>
      </div>

      {/* Arc Filter — only visible when Storyteller is selected */}
      {activeVoice === "storyteller" && (
        <div>
          <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-secondary">
            Arc
          </span>
          <div className="flex flex-wrap gap-2">
            {arcs.map((arc) => (
              <button
                key={arc}
                onClick={() => onArcChange(activeArc === arc ? null : arc)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all ${
                  activeArc === arc
                    ? "bg-brand-amber text-brand-cream"
                    : "bg-brand-charcoal/5 text-text-secondary hover:bg-brand-charcoal/10"
                }`}
              >
                {arc}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Layer Filter */}
      <div>
        <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-secondary">
          Layer
        </span>
        <div className="flex flex-wrap gap-2">
          {layers.map((layer) => (
            <button
              key={layer}
              onClick={() => onLayerChange(activeLayer === layer ? null : layer)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeLayer === layer
                  ? "bg-brand-charcoal text-brand-cream"
                  : "bg-brand-charcoal/5 text-text-secondary hover:bg-brand-charcoal/10"
              }`}
            >
              {layerLabels[layer]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
