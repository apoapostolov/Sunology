# Suno v5 and v5.5 Prompt Engineering Guide

This guide updates the archived Sunology prompting material using higher-signal
community evidence from Suno `v5` and `v5.5` usage.

The goal is not to catalog every trick. The goal is to preserve the techniques
that still produce audible control.

## Model Snapshot

### Suno v5

Most useful when you need:

- steadier arrangement logic
- stronger instrumental identity
- clearer section-to-section movement
- fewer vocal-side artifacts than some `v5.5` runs

Best use cases:

- instrumental-first generation
- genre work where structure matters more than vocal nuance
- building a base track that may later be covered, extended, or reworked

### Suno v5.5

Most useful when you need:

- more expressive vocal behavior
- better emotional phrasing
- integration with Voices
- stronger use of Personas, Custom Models, and My Taste

Common failure modes reported by users:

- hiss or harsh high-end texture
- repetitive intros
- title leakage at the start
- drift toward pop wash or "live" feeling
- mid-song flattening or collapse
- genre weakness in some heavier or more niche styles

Best use cases:

- vocalist-forward songs
- persona-driven generation
- refinement after you already know the track's identity

## Core Principle

The strongest current pattern is:

1. use the Style field for the musical blueprint
2. use the Lyrics field for structure, pacing, and performance emphasis
3. keep those two surfaces aligned
4. use personalization features as real steering tools, not decorations
5. change one real variable per regeneration

More text is not more control.

## The Three Main Control Surfaces

### 1. Style field

Use the Style field for:

- genre or blend
- pulse or BPM when important
- instrumentation
- vocal character
- emotional arc
- arrangement movement
- standout production traits

High-signal structure:

1. foundation: genre + pulse
2. character: instrumentation + mood
3. performance: vocal behavior
4. movement: what changes across sections

Good example:

```text
Off-center indie pop at a brisk 108 BPM with clipped drums, rubbery bass, bright analog synth stabs, and tight rhythm guitar. Close-mic deadpan verses, then a wider chorus with stacked harmonies and a stronger lift. Starts dry and suspicious, opens up in the pre-chorus, drops to near-empty space before the final chorus, then lands with a short stop-time gag.
```

Weak example:

```text
indie pop, catchy, emotional, synth, viral, anthem, fun, unique, huge chorus, awesome vocals, cinematic
```

### 2. Lyrics field

Use the Lyrics field for:

- the full lyric sheet
- section labels
- a few precise performance or section cues
- local energy shifts that matter musically

This field matters more than many older prompting guides assumed. Community
testing repeatedly shows that `v5.5` often responds well when section behavior
is reinforced close to the lyrics.

Useful example:

```text
[Verse 1]
...

[Pre-Chorus]
...

[Chorus]
...

[Final Chorus - maximum lift, layered, slightly raw]
...
```

Do not turn the lyric sheet into a control panel.

### 3. Personalization layer in v5.5

Use these when available:

- Voices
- Style Personas
- Custom Models
- My Taste

These often outperform text-only forcing because they provide a sonic anchor.

Use text prompting to cooperate with them:

- describe the target song clearly
- do not restate the same concept ten ways
- do not fight the persona/model with contradictory instructions

## What Still Works Reliably

### Narrative musical direction

Write the prompt like producer direction, not a keyword landfill.

Good prompt language describes:

- how the song starts
- where it expands
- where it strips back
- what the bridge changes
- what makes the ending land

### Explicit arrangement movement

Still one of the strongest levers.

Useful examples:

- "starts minimal, widens at the chorus"
- "kick drops out before the final hook"
- "bridge goes sparse and tense, then rebuilds"
- "short instrumental intro, chorus arrives early"

### Vocal direction

This remains one of the most reliable descriptive categories.

Useful vocabulary:

- close-mic
- breathy
- dry
- conversational
- deadpan
- strained
- wide-open
- talk-sung
- stacked harmonies
- layered response vocals

### Sparse section cues

Useful:

- `[Intro]`
- `[Verse 1]`
- `[Pre-Chorus]`
- `[Chorus]`
- `[Bridge]`
- `[Outro]`
- `[Short Instrumental Intro]`
- `[Final Chorus - biggest lift]`

Keep the cue count low. The point is to mark turning points, not annotate every
breath.

### Descriptive prompts over giant tag stacks

Reddit discussion around `v5` and `v5.5` repeatedly points in the same
direction:

- readable prompts outperform giant unordered tag piles
- concise layered prompts outperform giant prompt essays
- structure description often matters more than giant meta-tag lists

## What Is Weak, Risky, or Overrated

### Giant tag libraries

Low value as a primary method.

Tags can help in moderation, but long catalogs usually add noise faster than
control.

### Prompt injection tricks

Do not build a workflow around:

- fake JSON or XML
- pretend system instructions
- jailbreak phrasing
- schema cosplay

These are not stable prompt engineering.

### Artist-name dependence

Risky and often unnecessary.

A stronger pattern is to translate the reference into musical language:

- instrumentation
- arrangement density
- vocal posture
- drum behavior
- harmonic brightness or darkness
- mix energy

### Overloaded lyrics

Too many bracket tags, parenthetical notes, and side instructions can make the
song feel confused.

Parentheses are especially unreliable as "private" stage direction. Users often
report that they get treated as audible material or group-vocal behavior.

### Contradictory Style and Lyrics fields

This is one of the most common causes of flat or strange results.

If the Style field says glossy, huge, modern pop and the lyrics are tagged like
an intimate dry folk performance, expect instability.

## Prompt Construction Patterns

### Standard prompt shape

Use this order:

1. genre or blend
2. tempo or pulse
3. instrumentation
4. vocal behavior
5. emotional character
6. arrangement movement

### When to keep the Style field shorter

Shorten the Style field when:

- the lyrics carry important section behavior
- `v5.5` is flattening or overpowering nuance
- you are using a Voice or Persona that already supplies strong identity

This is a recurring community pattern: if `v5.5` is getting too samey or too
maximalist, reduce prompt clutter and move only the most important section
instructions into the lyrics.

### When to use BPM

Use BPM when:

- rhythm identity is critical
- comedy timing depends on pace
- dance genre accuracy matters

Skip BPM when a looser phrase like "midtempo", "slow burn", or "brisk" is
enough.

## Model-Aware Workflows

### Workflow A: `v5` for bed, `v5.5` for vocal feel

This is one of the most repeated practical workflows in current community use:

1. build the instrumental identity in `v5`
2. use `v5.5` when you need more expressive vocals or stronger phrasing
3. compare whether the `v5.5` pass improves the song or just adds artifacts

Best when:

- `v5.5` keeps over-brightening the song
- you like `v5` arrangement logic but want more expressive singing

### Workflow B: seed, cover, or audio-first steering

Use a seed or source audio more aggressively when:

- the genre is niche or heavy
- text prompts keep collapsing into mainstream pop behaviors
- you want a stable melodic or structural anchor

### Workflow C: voice-aware prompting

When building a Voice for `v5.5`:

- include sung material if singing quality matters
- include spoken material if spoken or talk-sung delivery matters
- consider separate voices for radically different use cases such as rap,
  belting, screaming, or soft indie delivery

## Failure Mode Countermeasures

### Repetitive intros

Try:

- calling for a short intro
- getting to the hook earlier
- explicitly defining intro character instead of leaving it generic

### Title leakage at the start

If the title keeps getting sung immediately:

- reduce title-like repetition in early lines
- make the opening lyric less slogan-like
- avoid style phrasing that sounds like a trailer title reveal

### Hiss, harsh sibilance, or over-bright endings

Treat this as a model artifact problem, not just a prompt problem.

Useful mitigations:

- compare `v5` vs `v5.5` for the same concept
- simplify over-dense style prompts
- avoid stacking too many "bright", "wide", "anthemic", and "huge" cues at once
- regenerate with one variable changed rather than rewriting the whole song

### Mid-song collapse or pop reversion

Try:

- stronger section contrast in the lyrics
- clearer bridge purpose
- fewer conflicting style adjectives
- seed or cover workflows when text prompting keeps reverting

### Forced "live", chanting, stomping, or crowd-feel creep

Avoid:

- vague "epic" prompt sludge
- too many communal or festival-coded words
- unnecessary crowd-style cues

If it keeps happening, rewrite the style direction to sound more studio-tight
and intimate.

## Comedy Guidance

Comedy still works best when the underlying song is musically real.

Prioritize:

- a usable hook
- one escalating premise
- a few timing-critical musical surprises
- cleaner setup before payoff lines

Use novelty cues sparingly:

- one stop-time reveal is stronger than five random interruptions
- a deadpan spoken aside can outperform a loudly telegraphed punchline
- musical contrast is often a better joke than extra verbal clutter

## Working Rules

- Keep prompts readable.
- Keep Style and Lyrics aligned.
- Use bracket cues only where the audible result should change.
- Prefer changing one variable per regeneration.
- Use `v5.5` personalization features as real control surfaces.
- Treat community folklore as disposable unless it repeatedly survives actual
  generation testing.
