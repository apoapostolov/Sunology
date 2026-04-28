# Suno v5 and v5.5 Prompt Engineering Guide

This guide updates the archived Suno prompting material for current model
behavior.

It keeps the useful core ideas from the older documents, but filters them
through what is still viable for Suno v5 and v5.5.

## Model Snapshot

### Suno v5

Still useful for:

- strong structural coherence
- better arrangement flow
- persistent instrumental identity
- more deliberate control of tempo, key, dynamics, and arrangement

Prompting implication:

- give it a clear musical brief
- define movement across sections
- keep the Style field purposeful and musical

### Suno v5.5

Adds or strengthens:

- more expressive results
- Voices
- Style Personas inside the Voices flow
- Custom Models
- My Taste style augmentation

Prompting implication:

- good prompting matters, but personalization tools now matter more than many
  old prompt hacks
- if you have a real voice, persona, or custom model, write prompts that
  cooperate with those assets instead of trying to brute-force everything in
  text

## The Current Prompting Principle

The winning pattern is no longer "more tricks."

The winning pattern is:

1. clearer musical intent
2. stronger lyrical structure
3. cleaner section control
4. explicit vocal and arrangement direction
5. using v5.5 personalization features when available

## The Three Active Control Surfaces

### 1. Style field

Use the Style field for:

- genre and blend
- mood
- instrumentation
- tempo feel or BPM
- vocal character
- arrangement arc
- standout production details

Best practice:

- write one compact paragraph or a dense sentence cluster
- make it sound like music direction from a producer
- describe how the track evolves

Good:

- "quirky alt-pop with clipped drums, elastic bass, bright synth accents, and a
  close-mic vocal that starts restrained before opening into a bigger, more
  anthemic chorus"

Weak:

- "alt pop, good drums, catchy, emotional, epic, big chorus, viral"

### 2. Lyrics field

Use the Lyrics field for:

- the actual lyric sheet
- section labels
- a few meaningful cue tags
- extra content context when it directly helps the musical result

This matters more than it used to. Suno's newer models can make better use of
context placed near the lyrics, especially when it reinforces section intent and
performance shape.

### 3. Personalization layer in v5.5

Use these when available:

- Voices for your actual singing voice
- Style Personas for recallable song essence
- Custom Models for your own sound
- My Taste to enrich style suggestions

These features often outperform older prompt gimmicks because they give Suno a
real sonic anchor instead of a text-only approximation.

## What Still Works

### A. Narrative style direction

Still highly viable.

Describe the track as a musical scene:

- how it starts
- where it expands
- where it drops back
- how the bridge changes the energy
- what the final chorus should feel like

### B. Explicit arrangement movement

Still highly viable.

Useful examples:

- "start minimal, widen at the chorus"
- "drop drums before the final hook"
- "bridge goes sparse, then rebuilds"

### C. Clear vocal direction

Still viable, especially in v5.5.

Useful language:

- close-mic
- breathy
- conversational
- dry
- strained
- wide-open
- stacked harmonies
- deadpan
- talk-sung

### D. Sparse, high-impact section cues

Still viable.

Use section tags like:

- `[Intro]`
- `[Verse 1]`
- `[Pre-Chorus]`
- `[Chorus]`
- `[Bridge]`
- `[Outro]`

Add only a few impactful bracket cues when they help the generation.

### E. Timed or descriptive SFX for comedy

Still viable when used sparingly and when mirrored in the Style field.

Examples:

- `[record scratch - full stop]`
- `[short laugh track]`
- `[phone ring]`
- `[kazoo break]`

These are strongest when they mark a real comedic turn, not when they are
sprinkled everywhere.

## What Is Now Weak Or Risky

### A. Keyword sludge

Low value.

Huge comma piles without musical logic are less useful than a coherent style
description.

### B. Prompt injection and jailbreak tricks

Weak and unreliable.

Do not build core workflows around:

- fake XML or JSON wrappers
- pretend system instructions
- artist-name smuggling
- syntax games meant to bypass safeguards

### C. Over-tagging lyrics

Risky.

Too many tags crowd the lyric sheet and can reduce musical clarity.

### D. Treating the Style field as a database dump

Weak.

A short, vivid direction is usually better than a giant unordered list.

## Practical Prompt Structure

### Recommended Style field shape

Use this order:

1. genre or blend
2. tempo or pulse
3. instrumentation
4. vocal style
5. emotional arc
6. section movement

Example:

```text
Off-kilter synth-pop at 108 BPM with dry drums, rubbery bass, tight rhythm guitar, and bright analog synth accents. Close-mic deadpan lead vocal in the verses, then a wider and more melodic chorus with stacked harmonies. Starts minimal and suspicious, grows more playful in the pre-chorus, then opens into a bigger hook before a brief stop-time gag in the bridge.
```

### Recommended Lyrics field shape

Use:

```text
[Verse 1]
...

[Pre-Chorus]
...

[Chorus]
...
```

Keep bracketed cues rare and intentional.

## Guidance For Comedy Songs

Comedy works best when the music is still a real song.

Prioritize:

- a real hook
- escalating premise
- one or two musical surprise points
- clear timing before payoff lines
- callbacks that feel earned

Do not make the track a container for random jokes. Suno responds better when
the music and comedy are part of the same structure.

## Guidance For Voices And Personas in v5.5

### If using Voices

- keep the vocal writing singable
- avoid impossible rapid mode shifts unless that is intentional
- write the Style field for the backing track and performance feel, not as a
  replacement for the voice itself
- if there is an Audio Influence control, keep it high enough to preserve the
  voice identity

### If using Style Personas

- let the Persona carry recurring style DNA
- keep the new prompt focused on the new song rather than re-describing
  everything the Persona already implies

### If using Custom Models

- rely more on precise song direction and less on artist imitation language
- use the model to provide the sonic fingerprint, and the prompt to specify the
  current track

## Viability Matrix

### Strong in v5 and v5.5

- narrative style prompts
- explicit arrangement arcs
- clean section tags
- vocal character language
- a few meaningful SFX cues
- lyrical context that supports structure

### Better in v5.5 than earlier models

- realistic vocal identity
- recurring project sound through personalization
- cooperation between prompt text and stored style or voice assets

### Weak, unstable, or not worth centering

- syntax gimmicks
- overlong prompt stacks
- artist-name dependence
- cluttered tag walls
- pseudo-technical hacks that have no official support

## Working Rule

When in doubt:

- simplify
- sharpen the musical brief
- tighten the lyric sheet
- use personalization features if available
- keep only the cues that materially change the audible result
