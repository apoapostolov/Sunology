# Suno Comedian Self-Hosted Web Recreation Spec

## Purpose

This document describes how to recreate the archived Suno Comedian implementation as a self-hosted web application for creating, managing, reviewing, and exporting AI music workflows.

It is documentation only. It does not implement the application.

## Source Material Reviewed

Primary implementation source:

- `/home/apoapostolov/git/archive/ai/song_comedian_generic`

Secondary reference source:

- `/home/apoapostolov/git/archive/ai/song_comedian`

The generic tree is the cleaner baseline for recreation because it already separates the workflow into a conversational idea phase, a song generation phase, optional refinement, optional review, and a placeholder Suno audio step.

## Current System Summary

The archived application is a Python CLI that orchestrates these stages:

1. collect a theme or idea
2. suggest persona, style, and emotional tone
3. run a back-and-forth AI conversation to develop material
4. generate song lyrics and style notes from that conversation
5. optionally refine the result with another AI pass
6. optionally request Suno audio generation through a client stub
7. save the result into local markdown files

The current interface is terminal-first, but the workflow already maps cleanly to a browser-based workspace.

## Implementation Map

### Entry and orchestration

- `source/cli/main.py` decides whether to open the interactive UI or run headless.
- `source/cli/app.py` coordinates the non-interactive path and validation.
- `source/cli/interactive.py` provides the menu-driven flow, song browser, refinement path, and audio trigger.

### Conversational idea development

- `source/core/conversationalist.py` manages the multi-turn conversation state.
- The conversationalist stores theme, style, emotion, persona, conversation history, and highlighted ideas in memory.
- It asks for directions, callbacks, and clarifying constraints before generation.

### Prompt and template management

- `source/core/template_manager.py` loads style, emotion, genre, persona, and comedy guidance.
- `source/utils/prompts.py` reads raw template files from disk.
- `prompt_templates/` holds structured JSON prompt modules.
- `personas/` holds markdown persona briefs.
- `context/` holds broader comedy guidance.

### Generation and review

- `source/generators/song_generator.py` builds the lyric-generation prompt, parses the model response, and compresses style notes when they are too long.
- `source/core/reviewer.py` runs a review pass over the generated song.

### External API clients

- `source/clients/openrouter_client.py` is the AI model transport.
- `source/clients/suno_client.py` is a placeholder adapter for Suno audio generation.

### UI and support

- `source/core/console.py` wraps Rich console output.
- `source/utils/fuzzy_match.py` and `source/utils/module_suggester.py` support template selection.
- `source/utils/environment.py` loads environment variables from `.env`.
- `source/utils/paths.py` defines the local content directories and creates them on startup.

## Observed Behavior Worth Preserving

The recreation should preserve these behaviors because they are part of the actual product shape, not incidental CLI details:

- multi-turn idea development before song generation
- optional persona, style, and emotion selection
- AI-assisted recommendation of personas, styles, and tones
- fallback chains across multiple OpenRouter models
- prompt enrichment from reusable local templates
- generated output saved as local text/markdown artifacts
- optional reviewer pass after song generation
- a distinct audio-generation step separate from lyric generation
- support for browsing past songs and refining the latest result

## Product Goal For The Web Version

The target is a self-hosted web application that lets a user:

- create a new music idea from a short prompt or structured brief
- explore lyrics, style notes, and song structure in a browser
- manage songs as persistent records instead of one-off CLI files
- browse prompt templates, personas, and generated outputs
- refine a song through iterative AI feedback
- send a finished song to Suno through an API adapter
- track generation history, model usage, and output metadata

## Proposed Web Architecture

### Frontend

A browser app should provide three main surfaces:

- an idea workspace for conversation and prompt shaping
- a song workspace for lyrics, style notes, versions, and review comments
- a library workspace for browsing, filtering, and managing saved songs

Recommended frontend building blocks:

- React or Next.js for the UI shell
- a state store for active conversation and draft song state
- a markdown or rich-text viewer for lyrics and notes
- a template browser for personas, styles, emotions, and genres
- a job-status panel for generation and Suno export state

### Backend

The backend should own the orchestration that the CLI currently performs in-process.

Recommended backend responsibilities:

- authenticate the user
- persist projects, songs, prompts, and generated revisions
- call OpenRouter for conversation, generation, review, and compression
- enqueue long-running tasks such as generation and Suno export
- normalize model outputs into a stable application schema
- isolate API keys and secrets from the browser

### Worker layer

A worker process should handle anything that can take longer than a browser request:

- song generation
- style-note compression
- review passes
- Suno export jobs
- optional regeneration or batch variant generation

### Storage

Persist the following entities:

- projects or workspaces
- song ideas
- conversation turns
- prompt templates
- persona references
- generated song versions
- review comments
- job history
- Suno export status and returned identifiers

## Functional Model

### 1. Idea intake

The user enters:

- a theme
- optional context
- optional style
- optional emotion
- optional persona inspiration

The current CLI then opens a conversation. In a web app, this becomes the first screen of a project wizard or a persistent composer pane.

### 2. Idea development conversation

The conversationalist currently does three things:

- echoes the user preferences
- proposes distinct comedic directions
- asks clarifying questions

The web version should preserve that rhythm, but display it as a threaded assistant chat so the user can keep or revise the guidance.

### 3. Template suggestion

The current system uses AI-based suggestions plus fuzzy matching for persona, style, and emotion selection.

The web version should expose that as:

- AI suggestions with confidence and rationale
- searchable lists of templates
- manual override
- optional skip for each dimension

### 4. Generation

The current generator uses a prompt contract with these required fields in the output:

- title
- lyrics
- style notes

The web version should keep that schema and store each generation as a versioned artifact rather than overwriting the previous result.

### 5. Review

The review step is a separate AI pass that comments on:

- comedic strengths
- risks
- actionable improvements

The web version should keep it optional and visibly distinct from generation so users understand that it is critique, not creation.

### 6. Audio export

The Suno client in the archive is only a stub. The web recreation should treat Suno integration as an adapter boundary, not as a hard-coded implementation detail.

The application should support:

- exporting lyrics and metadata into a Suno submission payload
- storing the returned export state
- retrying failed submissions
- linking a generated song to one or more Suno jobs

## Suggested Data Model

### Project

Represents a creative session or workspace.

Fields:

- id
- name
- created_at
- updated_at
- owner_id

### SongDraft

Represents a creative target before final generation.

Fields:

- id
- project_id
- theme
- context
- selected_style
- selected_emotion
- selected_persona
- status
- last_conversation_summary

### ConversationTurn

Represents one message in the idea-development dialogue.

Fields:

- id
- song_draft_id
- role
- content
- created_at
- metadata

### GeneratedSongVersion

Represents a generated lyric artifact.

Fields:

- id
- song_draft_id
- title
- lyrics
- style_notes
- model_name
- temperature
- raw_response
- created_at

### ReviewNote

Represents critique or refinement advice.

Fields:

- id
- generated_song_version_id
- reviewer_model
- content
- created_at

### ExportJob

Represents a Suno submission or other downstream music export.

Fields:

- id
- generated_song_version_id
- provider
- status
- payload_snapshot
- provider_job_id
- provider_url
- created_at
- updated_at

## API Surface

A web recreation should expose stable API boundaries around the major workflow steps.

### Project and draft management

- `POST /api/projects`
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects/:id/drafts`
- `PATCH /api/drafts/:id`

### Conversation

- `POST /api/drafts/:id/conversation`
- `GET /api/drafts/:id/conversation`

### Selection helpers

- `GET /api/templates/personas`
- `GET /api/templates/styles`
- `GET /api/templates/emotions`
- `GET /api/templates/genres`
- `POST /api/templates/suggestions`

### Generation and review

- `POST /api/drafts/:id/generate`
- `POST /api/generated/:id/review`
- `POST /api/generated/:id/refine`

### Export

- `POST /api/generated/:id/export/suno`
- `GET /api/exports/:id`

### Library

- `GET /api/songs`
- `GET /api/songs/:id`
- `GET /api/songs/:id/versions`

## Prompt Strategy For The Web Version

The archive shows a clear layering strategy that should be preserved:

- a conversational prompt for discovery
- a generation prompt for lyrics and style notes
- a review prompt for critique
- a compression prompt for long style notes
- provider-specific guidance for the music export step

In the web recreation, each prompt should be:

- versioned
- editable
- stored separately from runtime code
- inspectable in the UI for debugging and auditability

## Suno Adapter Strategy

Because the archived code does not include a working Suno API implementation, the recreation should define a provider interface first and bind the actual API later.

Recommended contract:

- `submit_song(title, lyrics, style_notes, metadata) -> export job`
- `check_status(job_id) -> state`
- `fetch_result(job_id) -> provider response`

The adapter should be able to support:

- direct Suno API access when available
- a mock provider for local development
- future providers without rewriting the user flow

## State Machine

The browser app should treat each song as moving through a small number of explicit states.

Recommended states:

- draft
- conversation_active
- ready_to_generate
- generating
- generated
- review_ready
- reviewing
- export_pending
- exported
- failed

## UX Requirements For Recreation

The web UI should make the workflow obvious:

- show the current stage of the song
- preserve the conversation history
- keep the generated lyric text easy to read and copy
- keep style notes separate from the lyrics
- allow quick regeneration with changed parameters
- show provenance such as model name and temperature
- provide a clear path from lyrics to export

## Non-Goals

Do not try to recreate the CLI literally.

Do not:

- keep the terminal menu as the primary UX
- hard-code model names into the browser
- leak API keys to the client
- make the Suno provider implementation the main focus of the UI
- overwrite old generations instead of versioning them

## Migration Notes From The Archive

The archive already provides the main behaviors that the web app should preserve:

- in-memory conversational state
- prompt enrichment from local template files
- fuzzy matching and AI suggestions for template selection
- model fallback lists driven by environment variables
- generated markdown/text artifacts saved locally
- optional review and refinement paths

The web app should replace in-memory state with persisted records, but the user-visible flow should remain familiar.

## Open Questions

- Which Suno API contract is the real target for the deployment environment?
- Should generations be single-shot, multi-variant, or both?
- Should the library be project-scoped, user-scoped, or shared across workspaces?
- Should prompt templates be editable in the web UI or managed only in files?
- Should the app keep a local file export path in addition to database storage?

## Summary

The archived Suno Comedian implementation is already a layered orchestration system. Its CLI shell is easy to replace with a web shell because the real product logic lives in clear modules:

- conversation development
- template selection
- lyric generation
- review
- export
- persistence

A self-hosted web recreation should keep those boundaries, move state out of process memory, and wrap the audio step behind a provider interface so the app can remain functional even if the upstream API changes.
