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
- **Target:** set a target level and tolerance with the knob or keys, see how far off you are in plain words, and get a STEADY light after 3 seconds on target. Presets set weighting and response for speaker and cinema reference levels. One key opens the Generator with pink noise at 50%.
- **Spectrum:** octave bands from 63 Hz to 8 kHz (flat weighting), the dominant frequency with its note and cents, and TONAL and mains hum flags.
- **Room:** a plain-language noise character (steady, fluctuating, impulsive, and low rumble, hum, voices, hiss or tonal), an NC rating with the limiting band and a chart against the matching curve, and an echo test: tap Measure echo, clap once, and read RT60 from the decay (500 Hz and 1 kHz).

## Generator

The Generator tab is one mixer. The meter keeps running while you play.

- **Display:** scope of the mixed output above, spectrum strip below. It shows the selected voice, a large frequency (tap to type a value), the note badge (tap for the note picker), tuning state with Snap, the chord summary and the master level.
- **Voice pads:** a 3 by 3 grid of voices 1 to 8 and N (noise: white, pink or brown). Tap to select, tap an empty pad to add a voice. The LED shows state: orange sounding, solid grey armed, outline muted. Tap the LED or long-press a pad to mute.
- **Knobs:** FREQ (coarse, logarithmic, 20 Hz to 20 kHz), FINE (plus or minus 50 cents), LEVEL, and WAVE (sine, square, triangle, saw) or COLOUR for noise. Drag vertically or horizontally, use the mouse wheel or the arrow, PageUp, PageDown, Home and End keys, and double-tap to reset a knob. Keys below: MUTE, CLEAR (two taps), half, double and SNAP.
- **Transport:** PLAY / STOP, a master fader (always 30% on launch), PRESETS (six built in, up to 6 of your own) and RESET (two taps).

Start quiet. High frequencies and square or saw waves can sound much louder than they read. Audio keeps playing when the app is in the background; only the scope drawing pauses.
