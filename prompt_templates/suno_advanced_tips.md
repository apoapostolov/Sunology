# Suno v5 and v5.5 Advanced Tips

These are advanced techniques that still appear useful after reviewing the old
research against current Suno behavior.

Use them selectively. They are support tools, not the foundation of the prompt.

## High-Value Advanced Tips

### 1. Put the song arc in the Style field

This is still one of the strongest levers.

Do not just describe the static sound. Describe progression:

- how the intro feels
- what changes at the chorus
- what drops out
- what returns bigger

### 2. Use lyrics for structural clarity

Still viable and more useful than in older versions.

Section tags and a few carefully placed cues help Suno map the song shape.

### 3. Use only a few strong non-lyrical cues

Good candidates:

- `[record scratch - full stop]`
- `[spoken aside]`
- `[crowd gasp]`
- `[short laugh track]`
- `[kazoo break]`
- `[phone ring]`

These work best when:

- they mark a real change
- they are mirrored in the Style field
- they are rare enough to matter

### 4. Be explicit about vocal delivery

Useful descriptors that still map well:

- close-mic
- airy
- deadpan
- talk-sung
- wide-open
- strained
- intimate
- layered harmonies

### 5. Use BPM only when it helps

Still viable, but do not force it into every prompt.

Use BPM when:

- comedy timing depends on speed
- dance genre identity matters
- the arrangement needs a precise pulse

Skip it when a looser tempo feel is enough.

### 6. Let v5.5 personalization do real work

If available, these are stronger than many old text hacks:

- Voices
- Style Personas
- Custom Models
- My Taste augmentation

Advanced prompting should cooperate with them, not fight them.

## Tips That Are Sometimes Useful

### 1. Timed cues

Useful for a few critical moments, but easy to overuse.

Best for:

- hard comedic stops
- spoken reveals
- bridge flips
- staged re-entry moments

### 2. Genre flips

Still viable for comedy or surprise songs.

Examples:

- indie verse into polka break
- earnest chorus into novelty bridge
- stripped bridge into oversized final chorus

This works only if the transition feels intentional.

### 3. Conversational lyric guidance

Helpful when you want less sing-song phrasing.

Use:

- direct speech
- short phrases
- talk-sung lines
- dry performance cues

## Tips To Treat As Low Confidence

These showed up in older community research, but should not be treated as core
method:

- capitalization superstition
- prompt injection tricks
- fake schema formatting
- overstacked bracket tags
- celebrity-name smuggling
- excessive meta syntax

They may work occasionally, but they are not stable enough to build the system
around.

## Recommended Advanced Workflow

1. Write a clear Style field.
2. Write a clean Lyrics field.
3. Add only the two or three cues that materially affect the audible result.
4. If using v5.5 features, choose whether the song should lean on a Voice,
   Persona, or Custom Model.
5. Regenerate by changing one real variable at a time:
   style density, vocal direction, structure, or cue placement.

## Comedy-Specific Advanced Tips

- The best gag is often a musical interruption, not a pile of joke lines.
- Stop-time reveals are still useful.
- A deadpan spoken aside can work better than a sung punchline.
- A single novelty break is stronger than repeated novelty spam.
- Stronger hooks outperform denser joke count.

## Working Rule

Advanced prompting should increase control, not increase prompt noise.

If an advanced trick makes the prompt less readable, it usually needs to be cut
or simplified.
