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

A near-black display holds the large reading, an everyday-sound label, a 40 segment LED bar (20 to 120 dB, with a peak-hold segment) and the 60 second trace. Below it sit a MIN / LEQ / MAX / TIME strip and the START, RESET and SETUP keys. Setup (a sheet) holds A or Z weighting, Fast or Slow response and the calibration offset.

## Generator

The Generator tab is one mixer. The meter keeps running while you play.

- **Display:** scope of the mixed output above, spectrum strip below. It shows the selected voice, a large frequency (tap to type a value), the note badge (tap for the note picker), tuning state with Snap, the chord summary and the master level.
- **Voice pads:** a 3 by 3 grid of voices 1 to 8 and N (noise: white, pink or brown). Tap to select, tap an empty pad to add a voice. The LED shows state: orange sounding, solid grey armed, outline muted. Tap the LED or long-press a pad to mute.
- **Knobs:** FREQ (coarse, logarithmic, 20 Hz to 20 kHz), FINE (plus or minus 50 cents), LEVEL, and WAVE (sine, square, triangle, saw) or COLOUR for noise. Drag vertically or horizontally, use the mouse wheel or the arrow, PageUp, PageDown, Home and End keys, and double-tap to reset a knob. Keys below: MUTE, CLEAR (two taps), half, double and SNAP.
- **Transport:** PLAY / STOP, a master fader (always 30% on launch), PRESETS (six built in, up to 6 of your own) and RESET (two taps).

Start quiet. High frequencies and square or saw waves can sound much louder than they read. Audio keeps playing when the app is in the background; only the scope drawing pauses.
