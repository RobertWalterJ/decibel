# Decibel Meter

A precision pocket instrument for sound: a sound level meter and a tone and noise generator, built as a monochrome hardware panel with one orange signal accent and a near-black display.

Live: https://robertwalterj.github.io/decibel/

## Install on Android

1. Open the live URL in Chrome.
2. Tap Install in the banner at the top, or use the Chrome menu and choose Install app (Add to Home screen).
3. Allow the microphone the first time you tap Start.

## Calibration

Phone microphones are not calibrated, so readings are estimates, typically within a few dB. Play a known level next to a real sound level meter and adjust the calibration offset in Settings until the two match. The offset is saved on the device.

## Meter

The top display is an analog dial (20 to 120 dB, 240 degrees) with a coloured zone band, a damped needle (about 150 ms fast, 600 ms slow), a 2 second peak-hold tick, a hollow marker for the session maximum and, in Target view, a band for the target. The large reading, unit and an everyday-sound label sit inside the dial. A 3 by 2 strip shows LEQ, MIN, MAX, L10, L90 and PEAK, with TIME in the display header. Setup (a sheet) holds A, C or Z weighting, Fast or Slow response and the calibration offset.

Four keys choose the lower display. The choice is remembered.

- **Level:** the 60 second trace, HOLD, EXPORT (CSV of per-second rows with a session summary at the top) and a NIOSH exposure line (safe time at the last 60 seconds, plus session dose, A-weighting only).
- **Target:** set a target level and tolerance with the ruler (the same scrubber, in dB) or keys, see how far off you are in plain words, and get a STEADY light after 3 seconds on target. Presets set weighting and response for speaker and cinema reference levels. One key opens the Generator with pink noise at 50%.
- **Spectrum:** octave bands from 63 Hz to 8 kHz (flat weighting), the dominant frequency with its note and cents, and TONAL and mains hum flags.
- **Room:** a plain-language noise character (steady, fluctuating, impulsive, and low rumble, hum, voices, hiss or tonal), an NC rating with the limiting band and a chart against the matching curve, and an echo test: tap Measure echo, clap once, and read RT60 from the decay (500 Hz and 1 kHz).

## Generator

The Generator tab is one mixer. The meter keeps running while you play.

- **Display:** scope of the mixed output above, spectrum strip below. It shows the selected voice, a large frequency (tap to type a value), the note badge (tap for the note picker), tuning state with Snap, the chord summary and the master level.
- **Voice pads:** a 3 by 3 grid of voices 1 to 8 and N (noise: white, pink or brown). Tap to select, tap an empty pad to add a voice. The LED shows state: orange sounding, solid grey armed, outline muted. Tap the LED or long-press a pad to mute.
- **Voice controls:** no dials. Wave keys (SINE, SQUARE, TRI, SAW; WHITE, PINK, BROWN for the noise voice) with drawn glyphs, a frequency ruler, a row of step keys and a level fader.
  - **Ruler:** a tuning tape under a fixed orange hairline, log scale from 20 Hz to 20 kHz with the value under the hairline. Drag to scrub: slow drags move about 1 cent per pixel, fast drags up to a semitone per 10 pixels, and a flick keeps gliding (not with reduced motion). Pinch, or tap ZOOM, to switch between WIDE (whole range) and NARROW (one octave with semitones and note names). The mouse wheel scrubs too. For keyboards: Arrow keys are 1 Hz below 1 kHz and 10 Hz above, Shift is a semitone, PageUp and PageDown an octave, Home and End the limits.
  - **Step keys:** minus 1 Hz, plus 1 Hz, minus and plus one semitone, half, double and SNAP. They are disabled for the noise voice.
  - **Level fader:** the same control as the master fader. Double-tap the cap to reset it to 50%. MUTE and CLEAR (two taps) sit beside it.
- **Transport:** PLAY / STOP, a master fader (always 30% on launch), PRESETS (six built in, up to 6 of your own) and RESET (two taps).

Start quiet. High frequencies and square or saw waves can sound much louder than they read. Audio keeps playing when the app is in the background; only the scope drawing pauses.
