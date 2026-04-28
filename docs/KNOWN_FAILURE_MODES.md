# Suno v5 and v5.5 Known Failure Modes

This document records recurring failure patterns observed in current Suno `v5`
and `v5.5` usage.

The goal is operational:

- identify the symptom fast
- determine whether the problem is prompt-side or model-side
- apply the smallest useful correction

This is not a bug database. It is a practical troubleshooting guide for prompt
design, generation review, and future API workflow design.

## How To Use This Document

When a generation misses:

1. identify the primary audible failure
2. classify whether the problem is likely structural, prompt-density related,
   vocal-direction related, or model-specific
3. change one meaningful variable
4. compare the next render against the failed one

Do not rewrite the entire prompt package unless the package itself is broken.

## Failure Mode Matrix

| ID | Failure mode | Most common in | Likely cause | First response |
| --- | --- | --- | --- | --- |
| `FM-01` | Repetitive intros | `v5.5` | Generic opening direction, too much prompt sameness, weak early structure | Shorten intro guidance and bring the hook or scene in earlier |
| `FM-02` | Title leakage at start | `v5.5` | Slogan-like first lines, title-weighted phrasing | Reduce title repetition and rewrite the first lines as scene entry |
| `FM-03` | Hiss / harsh highs / fizzy ending | `v5.5` | Model artifact, over-bright prompt stack, excessive "huge" language | Simplify the Style field and compare against `v5` |
| `FM-04` | Flat emotional plateau | `v5.5` | Overloaded Style field, weak section contrast, conflicting cues | Shorten Style and move only critical energy shifts into lyrics |
| `FM-05` | Pop-wash genre drift | `v5.5` | Genre under-specified, prompt too generic, niche style unsupported by text alone | Make instrumentation more explicit and move earlier to seed/cover workflows |
| `FM-06` | Mid-song collapse | `v5.5` | Weak bridge purpose, unstable source steering, style conflict | Clarify section roles and reduce competing style signals |
| `FM-07` | Fake-live / chant / stomp creep | `v5.5` | Vague "epic" language, crowd-coded wording | Rewrite toward close-mic, studio-tight, intimate language |
| `FM-08` | Chorus does not lift | `v5` and `v5.5` | Weak melodic contrast implied by prompt, crowded lyrics, no arrangement movement | Strengthen chorus contrast in Style and simplify chorus lyric rhythm |
| `FM-09` | Instrumental identity washes out | `v5.5` | Too much vocal/persona emphasis, generic genre shorthand | Make instruments and rhythm behavior more explicit, or start in `v5` |
| `FM-10` | Vocal phrasing feels robotic | `v5.5` | Overloaded lyric lines, unnatural cadence, too many prompt instructions | Shorten lines and use clearer vocal descriptors |
| `FM-11` | Over-tagged lyrics feel confused | `v5` and `v5.5` | Too many brackets, parentheses, or cue systems | Cut all but the highest-value section cues |
| `FM-12` | Source voice style leaks into later song sections | `v5.5` | Strong audio influence or unstable voice/source coupling | Reduce competing signals and test cleaner or lighter source steering |

## Detailed Notes

## `FM-01` Repetitive intros

### Symptom

- different generations open with nearly the same energy
- intros feel generic or padded
- the song takes too long to reveal the real idea

### Likely causes

- no explicit intro identity
- the prompt saves all detail for later sections
- `v5.5` defaults into a familiar opener

### Recommended fixes

- call for a short intro
- make the opening lyric more scene-specific
- move the first strong image or tonal signal earlier
- test whether the song works better with the chorus arriving sooner

### Avoid

- trying to solve this with more random style adjectives

## `FM-02` Title leakage at start

### Symptom

- the title or title-like phrase gets sung immediately
- the intro feels like a trailer reveal rather than a song opening

### Likely causes

- title repetition too early in the lyric sheet
- a slogan-like phrase in the first line
- prompt language that overemphasizes anthem or headline behavior

### Recommended fixes

- delay the title
- rewrite the opening lines as a scene, statement, or setup
- remove early phrasing that sounds like a chorus slogan

## `FM-03` Hiss / harsh highs / fizzy ending

### Symptom

- brittle high-end texture
- harsh sibilance
- late-song fizz, hum, or overly bright sheen

### Likely causes

- `v5.5` artifact behavior
- over-stacking cues like "bright", "huge", "wide", "anthemic"
- forcing too much intensity too early

### Recommended fixes

- simplify the Style field before rewriting lyrics
- compare the same package in `v5`
- reduce simultaneous "big" and "bright" instructions
- keep regeneration changes isolated

### Operational note

Treat this as partly model-side. Do not over-credit prompt superstition.

## `FM-04` Flat emotional plateau

### Symptom

- the song feels locked at one intensity
- chorus lift does not register
- sections blur together

### Likely causes

- overloaded Style field
- too many broad emotional adjectives
- insufficient local contrast in the lyrics

### Recommended fixes

- reduce the Style field to the core identity
- mark only the most important section lift in the lyrics
- strengthen bridge or final-chorus contrast

## `FM-05` Pop-wash genre drift

### Symptom

- intended genre edges get sanded off
- heavier or stranger styles drift toward safer mainstream behavior

### Likely causes

- generic genre naming
- missing instrumentation detail
- text prompting alone not anchoring the target style strongly enough

### Recommended fixes

- specify instruments, rhythm behavior, and mix posture
- remove generic pop-coded filler words
- use seed, cover, or audio-first workflows earlier
- compare whether `v5` preserves the shape better

## `FM-06` Mid-song collapse

### Symptom

- energy or identity falls apart around verse 2, bridge, or later chorus
- later sections feel less intentional than the opening

### Likely causes

- weak bridge design
- source steering leaking unstable traits
- too many conflicting signals across sections

### Recommended fixes

- give the bridge a clearer job
- simplify the style language
- make verse, chorus, and bridge roles more distinct

## `FM-07` Fake-live / chant / stomp creep

### Symptom

- unnecessary crowd feel
- stomps, chants, or communal energy where it was not requested
- a "live anthem" vibe replacing a tighter studio result

### Likely causes

- vague "epic" or "anthemic" phrasing
- crowd-coded prompt language
- style overgeneralization

### Recommended fixes

- shift toward close-mic, dry, restrained, intimate language
- remove festival-coded and crowd-coded wording
- keep performance direction more studio-tight

## `FM-08` Chorus does not lift

### Symptom

- chorus arrives but does not feel larger or more satisfying
- the song sounds structurally correct but emotionally weak

### Likely causes

- chorus lyric rhythm is too cluttered
- no clear arrangement movement
- the Style field does not describe contrast

### Recommended fixes

- simplify chorus lines
- build clearer verse-to-chorus movement
- state how the chorus widens, brightens, opens, or hits harder

## `FM-09` Instrumental identity washes out

### Symptom

- backing track becomes generic
- distinctive instrumentation stops feeling central

### Likely causes

- text prompt over-focused on mood instead of sound
- too much reliance on voice/persona identity
- generic genre shorthand

### Recommended fixes

- specify the actual instrumental core
- clarify drum, bass, synth, guitar, or texture roles
- test `v5` as the first-pass model

## `FM-10` Vocal phrasing feels robotic

### Symptom

- awkward cadence
- overstuffed line delivery
- lines feel read rather than sung

### Likely causes

- lyric lines are too long
- too many concept pivots in one bar
- prompt is trying to control too many vocal variables

### Recommended fixes

- shorten lines
- cut filler words
- use fewer but stronger vocal descriptors
- improve chorus singability first

## `FM-11` Over-tagged lyrics feel confused

### Symptom

- the lyric sheet looks like a markup file
- generation starts feeling busy or inconsistent

### Likely causes

- too many bracket systems
- too many low-value non-lyrical cues
- parenthetical instructions being treated as audible content

### Recommended fixes

- strip cues down to section labels and one or two real turning points
- remove decorative annotations
- keep only controls that should change the audible result

## `FM-12` Source voice style leaks into later song sections

### Symptom

- later sections start reflecting the source voice or source audio style more
  than intended
- the song begins in the target style but drifts later

### Likely causes

- stronger audio influence than the arrangement can absorb
- source material with a style fingerprint that keeps reasserting itself

### Recommended fixes

- simplify the rest of the prompt
- reduce conflicting signals
- test cleaner source material or a lower-force steering setup

### Confidence note

This pattern is plausible and reported by users, but should still be treated as
an operational hypothesis rather than a guaranteed rule.

## Triage Workflow

When evaluating a bad generation, use this order:

1. Is the song package itself structurally weak?
2. Are Style and Lyrics in conflict?
3. Is the problem a known `v5.5` artifact?
4. Would `v5` preserve the musical identity better?
5. Should this move from text-only prompting to seed/cover/audio-first
   steering?

## Documentation Rule

When Sunology later adds app logic, map each failed generation review to:

- a dominant failure mode ID
- the model used
- the prompt version used
- the corrective action attempted

That will allow real failure-rate tracking instead of relying on memory.
