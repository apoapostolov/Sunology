export type SunoModel = "v5" | "v5.5";

export type PromptSectionName =
  | "STYLE"
  | "LYRICS"
  | "OPTIONAL_NOTES"
  | "REFINED_STYLE"
  | "REFINED_LYRICS"
  | "CHANGE_NOTES";

export type FailureModeId =
  | "FM-01"
  | "FM-02"
  | "FM-03"
  | "FM-04"
  | "FM-05"
  | "FM-06"
  | "FM-07"
  | "FM-08"
  | "FM-09"
  | "FM-10"
  | "FM-11"
  | "FM-12";

export interface WorkflowPreset {
  id: string;
  name: string;
  useWhen: string[];
  steps: string[];
}

export interface FailureModeSummary {
  id: FailureModeId;
  name: string;
  firstResponse: string;
}

export interface PromptAssetBundle {
  version: string;
  styleFieldOrderedLayers: string[];
  styleFieldRules: string[];
  lyricsFieldRules: string[];
  generationOutputSections: PromptSectionName[];
  refinementOutputSections: PromptSectionName[];
  workflowPresets: WorkflowPreset[];
  failureModes: FailureModeSummary[];
}

export interface GenerationPromptInput {
  summary: string;
  research: string;
  funnyComments: string;
  injectedContext: string;
  targetModel?: SunoModel;
  useVoice?: boolean;
  usePersona?: boolean;
  useCustomModel?: boolean;
}

export interface RefinementPromptInput {
  originalLyrics: string;
  summary: string;
  research: string;
  stylePrompt: string;
  injectedContext: string;
  personaContext?: string;
  targetModel?: SunoModel;
}

export const promptAssetBundle: PromptAssetBundle = {
  version: "2026-04-28",
  styleFieldOrderedLayers: [
    "genre_and_pulse",
    "instrumentation_and_mood",
    "vocal_behavior",
    "arrangement_movement",
    "standout_production_trait"
  ],
  styleFieldRules: [
    "Prefer one compact producer-style paragraph.",
    "Use BPM only when rhythm accuracy materially matters.",
    "Do not use giant unordered tag lists.",
    "Do not rely on artist-name imitation.",
    "Describe movement, not only static sound."
  ],
  lyricsFieldRules: [
    "Keep cues sparse.",
    "Only include cues that should change the audible result.",
    "Use the lyric sheet for local energy control when needed.",
    "Do not turn the lyrics into a control panel."
  ],
  generationOutputSections: ["STYLE", "LYRICS", "OPTIONAL_NOTES"],
  refinementOutputSections: [
    "REFINED_STYLE",
    "REFINED_LYRICS",
    "CHANGE_NOTES"
  ],
  workflowPresets: [
    {
      id: "v5_first_then_v5_5_vocals",
      name: "v5 arrangement, then v5.5 vocal feel",
      useWhen: [
        "v5.5 introduces hiss",
        "v5.5 intros become repetitive",
        "v5 arrangement logic is stronger than v5.5 for the song"
      ],
      steps: [
        "Generate a structure-first pass in v5.",
        "Evaluate whether the instrumental identity is stable.",
        "Test the same concept in v5.5 only if stronger vocal expression is needed."
      ]
    },
    {
      id: "lean_style_plus_lyric_control",
      name: "Lean style field with lyric-side section control",
      useWhen: [
        "v5.5 is flattening section nuance",
        "the style prompt is overpowering the lyrics",
        "the song needs precise final-chorus lift"
      ],
      steps: [
        "Reduce the style field to core identity.",
        "Move only the most important section lifts into lyrics.",
        "Regenerate while keeping the song concept fixed."
      ]
    },
    {
      id: "seed_or_cover_defense",
      name: "Seed or cover workflow for genre protection",
      useWhen: [
        "niche genre keeps washing out",
        "text prompts collapse into mainstream pop behavior",
        "melodic or structural identity needs a harder anchor"
      ],
      steps: [
        "Specify the genre with explicit instrumentation.",
        "If text-only prompting still drifts, move to seed or cover workflows.",
        "Use prompt text to refine rather than replace the source anchor."
      ]
    }
  ],
  failureModes: [
    {
      id: "FM-01",
      name: "repetitive_intros",
      firstResponse: "Shorten intro guidance and bring the song idea in earlier."
    },
    {
      id: "FM-02",
      name: "title_leakage",
      firstResponse: "Delay title repetition and rewrite the first lines as scene entry."
    },
    {
      id: "FM-03",
      name: "hiss_or_harsh_highs",
      firstResponse: "Simplify style density and compare the same package in v5."
    },
    {
      id: "FM-04",
      name: "flat_emotional_plateau",
      firstResponse: "Reduce style overload and restore local contrast in the lyrics."
    },
    {
      id: "FM-05",
      name: "genre_washout",
      firstResponse:
        "Specify instruments more clearly and move earlier to seed or cover workflows."
    },
    {
      id: "FM-06",
      name: "mid_song_collapse",
      firstResponse: "Clarify bridge purpose and remove competing style signals."
    },
    {
      id: "FM-07",
      name: "fake_live_or_chant_creep",
      firstResponse:
        "Rewrite the performance language toward close-mic, dry, restrained direction."
    },
    {
      id: "FM-08",
      name: "chorus_does_not_lift",
      firstResponse: "Simplify chorus rhythm and state the contrast more clearly."
    },
    {
      id: "FM-09",
      name: "instrumental_identity_washes_out",
      firstResponse:
        "Specify the actual instrumental core more explicitly and consider a v5 first pass."
    },
    {
      id: "FM-10",
      name: "robotic_vocal_phrasing",
      firstResponse: "Shorten lines and reduce overloaded vocal instructions."
    },
    {
      id: "FM-11",
      name: "over_tagged_lyrics",
      firstResponse: "Cut all but the highest-value section cues."
    },
    {
      id: "FM-12",
      name: "source_voice_style_leakage",
      firstResponse:
        "Simplify the prompt around the source material and test lighter steering."
    }
  ]
};

export function chooseWorkflowPresets(input: {
  model?: SunoModel;
  nicheGenre?: boolean;
  hasVoice?: boolean;
  reportsHiss?: boolean;
  reportsGenreWashout?: boolean;
  needsSectionNuance?: boolean;
}): WorkflowPreset[] {
  const selected: WorkflowPreset[] = [];

  if (input.model === "v5.5" && (input.reportsHiss || input.hasVoice)) {
    selected.push(promptAssetBundle.workflowPresets[0]);
  }

  if (input.model === "v5.5" && input.needsSectionNuance) {
    selected.push(promptAssetBundle.workflowPresets[1]);
  }

  if (input.nicheGenre || input.reportsGenreWashout) {
    selected.push(promptAssetBundle.workflowPresets[2]);
  }

  return selected;
}

export function formatGenerationOperatorNote(input: GenerationPromptInput): string {
  const notes: string[] = [];

  if (input.targetModel === "v5") {
    notes.push("Bias toward arrangement stability and instrumental identity.");
  }

  if (input.targetModel === "v5.5") {
    notes.push("Watch for repetitive intros, title leakage, and over-brightness.");
  }

  if (input.useVoice || input.usePersona || input.useCustomModel) {
    notes.push(
      "Keep the style prompt lean enough to cooperate with the personalization layer."
    );
  }

  return notes.join(" ");
}

export function formatFailureModeReviewEntry(
  failureModeId: FailureModeId,
  model: SunoModel,
  correctiveAction: string
): string {
  return [
    `Failure mode: ${failureModeId}`,
    `Model: ${model}`,
    `Corrective action: ${correctiveAction}`
  ].join(" | ");
}
