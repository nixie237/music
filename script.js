let play = document.querySelector("#play");
let playing = document.querySelector("#playing");
 play.addEventListener("click", () => {
 // Hide this button
 play.style = "display: none";
 playing.style = " ";

 Tone.start();
 let synth = new Tone.Synth().toDestination();
 new Tone.Sequence( (time, note) => {
 synth.triggerAttackRelease(note, "16n", time);
 },  ["C4", null, "B3", "C4", "G3", "A3", null, "B3"], "8n")
 .start("0:0:0")
 .stop("4:0:0");

    Tone.Transport.start();

 });
 synth.triggerAttackRelease("G4", "16n", "0:0:0");
 synth.triggerAttackRelease("C4", "16n", "0:1:0");
 synth.triggerAttackRelease("C4", "16n", "0:2:0");
 synth.triggerAttackRelease("C4", "16n", "0:3:0");
 synth.triggerAttackRelease("G4", "16n", "1:0:0");
 synth.triggerAttackRelease("C4", "16n", "1:1:0");
 
