let play = document.querySelector("#play");
let playing = document.querySelector("#playing");
play.addEventListener("click", () => {
  // Hide this button
  play.style = "display: none";
  playing.style = " ";

  Tone.start();
  let reverb = new Tone.Reverb({
    decay: 1,
    wet: 0.3,
  }).toDestination();
  let hiHatFilter = new Tone.Filter(15000, "bandpass").connect(reverb);
  let hiHat = new Tone.NoiseSynth({
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0,
      release: 0,
    },
    volume: -6,
  }).connect(hiHatFilter);
  new Tone.Loop((time) => {
    hiHat.triggerAttackRelease("16n", time);
  }, "8n")
    .start("0:0:0")
    .stop("4:0:0");
  class Snare {
    constructor() {
      this.noiseFilter = new Tone.Filter(5000, "bandpass").connect(reverb);
      this.noiseSynth = new Tone.NoiseSynth({
        envelope: {
          attack: 0.001,
          decay: 0.1,
          sustain: 0,
          release: 0,
        },
        volume: -12,
      }).connect(this.noiseFilter);
      this.synth = new Tone.Synth({
        envelope: {
          attack: 0.0001,
          decay: 0.1,
          sustain: 0,
          release: 0,
        },
        oscillator: { type: "sine" },
        volume: -12,
      }).connect(reverb);
    }
    triggerAttackRelease(duration, when) {
      this.noiseSynth.triggerAttackRelease(duration, when);
      this.synth.triggerAttackRelease("G3", duration, when);
    }
  }
  let snare = new Snare();
  new Tone.Loop((time) => {
    snare.triggerAttackRelease("16n", time);
  }, "2n")
    .start("0:1:0")
    .stop("4:0:0");
  let kick = new Tone.MembraneSynth({
    pitchDecay: 0.02,
    octaves: 6,
    volume: -9,
  }).connect(reverb);
  new Tone.Loop((time) => {
    kick.triggerAttackRelease(50, "16n", time);
  }, "2n")
    .start("0:0:0")
    .stop("4:0:0");
  Tone.Transport.start();
});
