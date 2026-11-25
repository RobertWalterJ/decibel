# Decibel Meter

A calm, instrument-style sound level meter that runs in the browser. It offers A or Z weighting, Fast or Slow response, min / Leq / max / time stats, a 60 second trace and a calibration offset. It shares its look with RowCast.

Live: https://robertwalterj.github.io/decibel/

## Install on Android

1. Open the live URL in Chrome.
2. Tap Install in the banner at the top, or use the Chrome menu and choose Install app (Add to Home screen).
3. Allow the microphone the first time you tap Start.

## Calibration

Phone microphones are not calibrated, so readings are estimates, typically within a few dB. Play a known level next to a real sound level meter and adjust the calibration offset in Settings until the two match. The offset is saved on the device.

## Generator

The Generator tab makes sound for testing and for measuring with the Meter tab, which keeps running while you play.

- **Noise:** white, pink or brown, with its own level.
- **Tone layers:** up to 8 sine, square, triangle or saw tones. Set each by a log slider (20 Hz to 20 kHz), a typed value in Hz, nudge buttons (-1 Hz, +1 Hz, half, double) and see the nearest note. All layers mix through the master volume and a soft limiter.
- **Presets:** six built in, plus up to 6 of your own with Save current. Presets replace the layers (saved ones also restore the noise).
- **Master:** Play all / Stop all, volume (always 30% on launch, shown in % and dBFS), with a live oscilloscope and spectrum.

Start quiet. High frequencies and square or saw waves can sound much louder than they read. Audio keeps playing when the app is in the background; only the scope drawing pauses.
