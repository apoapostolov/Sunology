<!-- markdownlint-disable MD013 -->

# Sunology

A practical prompt and troubleshooting library for shaping, generating, and refining songs with Suno v5 and v5.5.

![Format](https://img.shields.io/badge/content-Markdown-000000)
![Data](https://img.shields.io/badge/assets-JSON-5E5C5C)
![Models](https://img.shields.io/badge/Suno-v5_%7C_v5.5-7C3AED)

Sunology is a reference repository. There is no music generator or runnable web app inside it. It collects paste-ready generation and refinement contracts, model-aware production guidance, 141 reusable prompt modules, a machine-readable asset bundle, and a twelve-part failure-mode guide. Use it to prepare better Style and Lyrics fields, diagnose a weak render, or design a future self-hosted workflow.

<!-- Finished-artifact proof needed: add an anonymized prompt-to-song case study only when its source and publication rights are documented. No app screenshot or decorative hero is required for this docs route. -->

## Current Status

- **The maintained reference set is ready to use.** Five prompt templates cover generation, refinement, engineering guidance, advanced controls, and comedy workflows.
- **The modular library contains 141 prompts.** Genre, mood, era, fusion, comedy, and multimodal directions are indexed under `prompts/`.
- **Machine-readable rules are included.** JSON and TypeScript assets expose workflow presets, output sections, and the twelve documented failure modes.
- **There is no application release.** The self-hosted web product is a design specification, so a versioned What's New block would misrepresent this repository.

## What You Can Do

- **Generate a complete song package.** The main generation template turns a topic, research, useful source material, and context into a compact `STYLE` field and performable `LYRICS`.
- **Refine without replacing the song.** The refinement contract protects the core premise, strongest lines, genre identity, and chorus while tightening structure and singability.
- **Browse reusable prompt modules.** The `prompts/` collection covers genres, emotional directions, comedy forms, time periods, fusion ideas, and multimodal prompt bundles.
- **Steer v5 and v5.5 differently.** Guidance separates v5's arrangement strengths from v5.5 vocal, Voice, Persona, Custom Model, and artifact considerations.
- **Diagnose known misses.** Twelve named failure modes cover repetitive intros, title leakage, harsh highs, flat dynamics, genre washout, robotic phrasing, over-tagging, and source-style leakage.
- **Use structured assets in tooling.** `prompt_assets/suno_prompt_assets.json` and `prompt_assets/index.ts` expose ordered Style layers, output sections, workflow presets, and typed failure-mode IDs.
- **Plan a future application.** The self-hosted recreation specification maps the archived orchestration into a possible browser product while clearly marking that application as unimplemented.

## Quick Start

| Goal | Read this |
| --- | --- |
| Create a new Style and Lyrics package | [Song generation prompt](prompt_templates/song_generation_prompt.md) |
| Improve an existing draft | [Song refinement prompt](prompt_templates/song_refinement_prompt.md) |
| Learn the current prompting model | [Suno prompt engineering](prompt_templates/suno_prompt_engineering.md) |
| Try higher-leverage controls | [Advanced tips](prompt_templates/suno_advanced_tips.md) |
| Diagnose a failed generation | [Known failure modes](docs/KNOWN_FAILURE_MODES.md) |
| Browse the full prompt library | [Prompt index](prompts/README.md) and [`prompts/`](prompts/) |

## Basic Workflow

1. Copy [the song generation template](prompt_templates/song_generation_prompt.md) into the language model you use for drafting.
2. Replace `{summary}`, `{research}`, `{funny_comments}`, and `{injected_context}` with the actual song brief and source material.
3. Ask for the exact output contract: `STYLE`, `LYRICS`, and `OPTIONAL_NOTES` only when a note changes a real generation decision.
4. Paste the Style and Lyrics sections into Suno and keep the model version with your result.
5. If the render misses, identify one failure mode and change one meaningful variable before regenerating.
6. Use [the refinement template](prompt_templates/song_refinement_prompt.md) when the package needs editing rather than a fresh concept.

The intended Style output is a short producer brief. Tag walls are the failure mode. A useful shape is:

```text
Genre and pulse; instrumentation and mood; vocal behavior; section movement;
one production trait that should remain audible.
```

The Lyrics field holds the full lyric sheet, section labels, and only a small number of local performance cues. Planning notes, giant metadata blocks, fake JSON/XML wrappers, and artist-name imitation are intentionally discouraged.

## Repository Map

```text
prompt_templates/  Maintained generation, refinement, engineering, and comedy guides
prompts/           141 focused genre, emotion, style, fusion, era, and multimodal modules
prompt_assets/     JSON rules plus TypeScript types and workflow helpers
docs/              Failure-mode guide and documentation-only web recreation spec
```

The `prompt_templates/old/` directory preserves earlier versions for comparison. Start with the maintained files one level above it.

## Machine-Readable Assets

`prompt_assets/index.ts` defines `SunoModel`, output section names, workflow presets, failure-mode IDs, and helper functions for choosing a workflow or formatting review records. It is source material for another TypeScript project; this repository has no `package.json`, build command, or published package.

The JSON bundle is versioned `2026-04-28` and contains the same compact operational rules without requiring TypeScript.

## Limits

- The guidance records observed behavior and operational hypotheses, not guarantees about Suno output.
- Suno can change model behavior after these notes are written. Compare advice against current results before turning it into a hard rule.
- The repository does not call Suno, OpenRouter, or another service and does not store songs.
- [The self-hosted web recreation spec](docs/SELF_HOSTED_WEB_RECREATION_SPEC.md) is a design document only. It does not implement the proposed app or API adapters.

## License

This repository does not currently include a license file. Do not assume permission to redistribute the prompt collection or incorporate it into another product until a license is added.
