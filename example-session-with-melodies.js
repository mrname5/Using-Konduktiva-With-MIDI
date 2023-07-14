// --------------------------------------------------------------------------
// -- example-session-with-melodies.js
// -- initial author: Renick Bell (renick@gmail.com)
// -- initial creation date: Wed Jun 28 10:08:48 AM CST 2023
// -- contributors: Yiler Huang (yiler7777@gmail.com); Steve Wang (stevesg168@gmail.com)
// -- license: GPL 3.0
// --------------------------------------------------------------------------

.load ./konduktiva-revised-2.js
.load ./testingKonduktiva-revised.js
.load ./konduktiva-superdirt-revised.js
.load ./defaultSuperDirtPlayers-revised.js
.load ./utilities-array.js
.load ./utilities-string.js
.load ./utilities-music.js
.load ./utilities-general.js
.load ./lsystem.js
.load ./chords.js
.load ./example-chord-progression-scarborough-fair.js
.load ./rhythm.js
.load ./websocket.js
.load ./harmony.js
.load ./configure-konduktiva.js
.load ./generate-melody.js
.load ./midi.js
e.actions.midiSequencedRhythm = musicSynthesizerCaller
.load ./example-websocket-session.js
.load ./example-melodies-data.js

//.load ./22May-backup--steve-midi-music.js

//chords.js sort into rhythm.js
//define e in user-music

//chord progression map is the new name for the timeline thing
