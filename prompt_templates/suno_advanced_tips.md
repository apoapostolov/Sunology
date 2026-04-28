# Suno v4.5+ Advanced Prompting Tips (Use Carefully)

These patterns come from community experimentation (including Reddit threads). They can help steer comedic outcomes, but may also fail or be over‑literal. Prefer clean narrative prompts first; layer these only when you need extra control.

- Capitalization and specificity can matter for genres
  - Try Proper-Case: “Synthwave”, “Pop-Punk”, “Indie-Folk” if lowercase results drift.
  - Hyphenated genres sometimes track better than spaced: “pop‑punk” vs “pop punk”.

- Put critical moments in [] with timestamps
  - The Style Prompt sets the vibe; bracketed cues enforce moment‑to‑moment.
  - Examples: “[00:44 record scratch — full stop]”, “[01:05 spoken aside: deadpan]”.

- Prefer descriptive SFX over onomatopoeia
  - “[comedy slide whistle glissando]” tends to work better than “[boing]”.
  - If an SFX is ignored, retry with a clearer label and a timestamp.

- Stack bracket tags for intros and flips (sparingly)
  - “[intro – tape hiss, small room reverb, solo nylon guitar]”
  - “[00:40 polka break — accordion + tuba]”
  - Keep it readable; avoid long paragraphs inside []

- Never put instructions in ()
  - Anything in parentheses will likely be sung. Reserve () for ad‑libs and backing vocals.
  - Put performance directions only in []: “[Spoken word, deadpan]”, “[Whisper]”.

- For “talky” delivery, be explicit
  - Style Prompt: “Vocal Cues: conversational, spoken rhythm, dry mic, minimal pitch.”
  - In lyrics: add “[doesn’t have to rhyme]” to reduce forced rhymes.

- SFX reliability varies
  - Common: “[record scratch]”, “[crowd gasp]”, “[laugh track — short]”, “[rimshot]”.
  - Niche SFX may require retries or more context: “[retro game coin sfx, short]”.

- Energy shaping works better with timestamps than vague words
  - “[00:28 drop — drums out, bass sustain]” > “quiet down here”.

- Keep final lyrics clean
  - Only allow [] and () markers; forbid code fences, numbering, or drafting notes in the final.

When in doubt, simplify and push intent into the narrative Style Prompt, then add a few high‑impact bracketed cues with timestamps for comedic timing.

## Additional Advanced Tricks from Recent Community (2025)

- **Metatags for Structure:** Use tags like [Verse], [Chorus], [Bridge], [Intro], [Outro] to guide song sections.

- **Production Techniques Over Genres:** Instead of just "rock" or "pop", specify production methods like "FL Studio reverb plugin, Ableton Live automation, Logic Pro compression" for more authentic sounds.

- **Jailbreaking and Prompt Injection:** Some users experiment with prompt injection to bypass restrictions (e.g., using real artist names indirectly). However, this may violate terms and is not recommended.

- **Version-Specific Adjustments:** In Suno 4.5+, JSON or XML formatting tricks are less effective; focus on finesse in narrative prompts.

- **Cheat Sheets:** Refer to community cheat sheets for prompt examples across genres.

These can enhance control but test carefully, as results vary.
