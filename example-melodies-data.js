// --------------------------------------------------------------------------
// -- example-melodies-data.js
// -- initial author: Renick Bell (renick@gmail.com)
// -- initial creation date: Wed Jun 28 10:08:48 AM CST 2023
// -- contributors: Yiler Huang (yiler7777@gmail.com); Steve Wang (stevesg168@gmail.com)
// -- license: GPL 3.0
// --------------------------------------------------------------------------

setupScheduler(e)
e.startScheduler()
addToMusicalEnvironment(e)

chordProgressionScarboroughFair = [
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }],  // C
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }],  // C
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }],  // C
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }],  // C
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 10, octave: 2 }, { note: 2, octave: 2 }, { note: 5, octave: 2 }],  // Am
  [{ note: 10, octave: 2 }, { note: 2, octave: 2 }, { note: 5, octave: 2 }],  // Am
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 2, octave: 2 }, { note: 5, octave: 2 }, { note: 9, octave: 2 }],  // Dm
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }],  // C
  [{ note: 0, octave: 2 }, { note: 4, octave: 2 }, { note: 7, octave: 2 }]   // C
];

noteData = chordProgressionScarboroughFair

randomMelodyData = {
  velocity: [
    112, 107, 116, 115,
    109, 107,  97, 112,
    116,  91,  96, 113
  ],
  noteSpan: buildArray(12, x => {return x}),
  rhythmMap: [0,5, 1, 2.5, 2.75, 4, 5, 6, 8, 8.3, 8.6, 9, 10, 10.5, 10.8],
  bools: [true, true, true, true, true, true, true, true, true, true], 
  noteValues: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.note + ((n.octave + 1) * 12)
      })
  }),
  octave: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  rootNote: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  total: 16,
  rootNote: noteData.map(x => {
      return x.note
  }),
  polyphonyMap: [3 ,2 ,3, 2, 3, 2 ,2 ,3, 2, 3, 2 ,2],
  total: 16,
  polyphonyMap: buildArray(16, x => {return 50}),
  rhythmMap: buildArray(16, x => {return x * 4}),
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(16, x => {return (x)}),
  noteSpan: buildArray(16, x => {return x * 4}),
  rootNote: noteData.map(x => {
      return x.note
  }),
   total: 64,
  polyphonyMap: buildArray(16, x => {return 50}),
  //rhythmMap: buildArray(40, x => {return randomRange(0.5, 1.5, 2)}),
  rhythmMap: buildArray(16, x => {return x * 4}),
//   octave: buildArray(5, x => {return buildArray(10, b => {return x + 3})}),
//   octaveMapKeys: buildArray(12, x => {return x * 4}),
//   octaveMapKeyspan: 20,
    controlChangeMapKeys: [20, 40, 60, 80],
    controlChangeMap: buildArray(4, x => {return {
      channel: 0,
      controller: 1,
      value: randomRange(60, 100),
    }
    })
}

//noteData2 = generateRandomMelody('C', 'bluesPentatonicScale', 40, 4, 6)
noteData2 = chordProgressionScarboroughFair
randomMelody1 = {
  velocity: buildArray(40, x => {return randomRange(30, 50)}),
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(12, x => {return (x)}),
  noteSpan: buildArray(12, x => {return x * 4}),
  bools: buildArray(48, x => {return true}), 
  octave: chordProgressionScarboroughFair.map(x => {
      return 0
  }),
  rootNote: chordProgressionScarboroughFair.map(x => {
      return x[0].note
  }),
  total: 16,
  polyphonyMap: buildArray(16, x => {return 50}),
  rhythmMap: buildArray(16, x => {return x * 4}),
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(16, x => {return (x)}),
  noteSpan: buildArray(16, x => {return x * 4}),
  rootNote: noteData.map(x => {
      return x.note
  }),
   total: 64,
  polyphonyMap: buildArray(16, x => {return 50}),
  //rhythmMap: buildArray(40, x => {return randomRange(0.5, 1.5, 2)}),
  rhythmMap: buildArray(16, x => {return x * 4}),
//   octave: buildArray(5, x => {return buildArray(10, b => {return x + 3})}),
//   octaveMapKeys: buildArray(12, x => {return x * 4}),
//   octaveMapKeyspan: 20,
  noteValues: chordProgressionScarboroughFair.map(x => {
      return [x[0].note + (12 * 3)]  }),
}

noteData3 = chordProgressionScarboroughFair

randomMelody2 = {
  //velocity: [...buildArray(39, x => {return 0}), ...buildArray(8, x => { return 40 + (x * 10)})],
    velocity: [...buildArray(39, x => {return 0}), ...buildArray(8, x => { return 120})],
  noteSpan: buildArray(47, x => {return 1 }),
  rhythmMap: [...buildArray(40, x => {return x}), ...[40, 41, 42, 43, 44 ,45, 46, 47, 48, 49]],
  bools: [...buildArray(39, x => {return true}), ...buildArray(8, x => {return true})], 
  //noteValues: [...buildArray(35, x => {return [60]}), ...noteData3.map(x => {
  //    return [x.note + ((x.octave + 1) * 12)]
 // })],
  octave: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  rootNote: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  total: 16,
  polyphonyMap: buildArray(16, x => {return 50}),
  rhythmMap: buildArray(16, x => {return x * 4}),
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(16, x => {return (x)}),
  noteSpan: buildArray(16, x => {return x * 4}),
  rootNote: noteData.map(x => {
      return x.note
  }),
   total: 64,
  polyphonyMap: buildArray(16, x => {return 50}),
  //rhythmMap: buildArray(40, x => {return randomRange(0.5, 1.5, 2)}),
  rhythmMap: buildArray(16, x => {return x * 4}),
  noteValues: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.note + ((n.octave + 1) * 12)
      })
  }),
}

melodyDataNoteData = generateChords(0, 4, "7", "major")
melodyData = {
  velocity: [
    112, 107, 116, 115,
    109, 107,  97, 112,
    116,  91,  96, 113
  ],
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(12, x => {return (x)}),
  noteSpan: buildArray(12, x => {return x * 4}),
  bools: buildArray(48, x => {return true}), 
  //noteValuesKeys: buildArray(12, x => {return (x * 4)}),
  octave: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return 0
      })
  }),
  rootNote: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  total: 16,
  polyphonyMap: buildArray(16, x => {return 50}),
  rhythmMap: buildArray(16, x => {return x * 4}),
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(16, x => {return (x)}),
  noteSpan: buildArray(16, x => {return x * 4}),
  rootNote: noteData.map(x => {
      return x.note
  }),
   total: 64,
  polyphonyMap: buildArray(16, x => {return 50}),
  //rhythmMap: buildArray(40, x => {return randomRange(0.5, 1.5, 2)}),
  rhythmMap: buildArray(16, x => {return x * 4}),
  noteValues: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.note
      })
  }),
}

velocityData = countLetterChanges(generativeParseString('a', {
    "a": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb",
    "b": "bbbbbaaaaaaaaaaaaaaaaaaaaaa",
    "ba": "aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbb"
}, 2))

boolsData = generativeParseString('a', {
    "a": "aaab",
    "aaaaaab": "bbbbb"
}, 5).split('').map(x => {
    if (x === 'a'){
        return true
    }
    else {
        return true
    }
})

generationData = countLetterChanges(generativeParseString('aab', {
    "a": "aabbbbbb",
    "b": "bbbbbaaaaa",
    "ba": "aaaaabb",
    "ab": "baaaaabbb",
    "aaaaab": "ab"
}, 3))

total = 0
lsystemNoteData = generateChords(0, 4, "7", "major")
lsystemData = {
  velocity: velocityData,
   noteSpanKeyspan: 64,
  noteSpanValues: buildArray(12, x => {return (x)}),
  noteSpan: buildArray(12, x => {return x * 4}),
  bools: boolsData, 
  //noteValues: generateLsystemMelody('C', 'bluesPentatonicScale', generationData, 16, 8, 10).map(x => {
    /*
  noteValues: generateLsystemMelody('C', 'minorBluesPentatonicScale', generationData, 10, 8, 10).map(x => {
      return [x.note * x.octave]
  }),
  noteValues: lsystemNoteData.map(x => {
      return x.map(c => {
          return c.note
      })
  }),
  */
//   octave: lsystemNoteData.map(x => {
//       return x.map(c => {
//           return c.octave
//       })
//   }),
  octave: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  rootNote: chordProgressionScarboroughFair.map(x => {
      return x.map(n => {
          return n.octave
      })
  }),
  total: 16,
  polyphonyMap: buildArray(12, x => {return 50}),
  //rhythmMap: buildArray(40, x => {return randomRange(0.5, 1.5, 2)}),
  rhythmMap: buildArray(12, x => {return x * 4}),
//   octave: buildArray(5, x => {return buildArray(10, b => {return x + 3})}),
//   octaveMapKeys: buildArray(12, x => {return x * 4}),
//   octaveMapKeyspan: 20,
  noteValues: chordProgressionScarboroughFair.map((x, i) => {
      total += generationData[i]
      return chordProgressionScarboroughFair[total % (chordProgressionScarboroughFair.length - 1)].map(n => {
          return n.note + ((n.octave + 2) * 12)
      })
  }),
}

updateMidiOutputList(e)
//e.changeTempo(250)
recordConfigurationDataIntoMusicalEnvironment(lsystemData, 'p1', e)
//assignPlayerForMusicSynthesizerSession(1, 'p1')
//melodyData.noteSpan = buildArray(melodyData.noteValues.length, x => {return x})

//recordConfigurationDataIntoMusicalEnvironment(randomMelodyData, 'p1')
recordConfigurationDataIntoMusicalEnvironment(randomMelody2, 'p4', e)
recordConfigurationDataIntoMusicalEnvironment(randomMelodyData, 'p3', e)

assignPlayerForMusicSynthesizerSession(e, 1, {rhythmMapName: 'straight', chordProgressionMapName: 'twelveBars-lsystem-scarbrofair'}, 'p1')
assignPlayerForMusicSynthesizerSession(e, 3, {rhythmMapName: 'straight'}, 'p3')
assignPlayerForMusicSynthesizerSession(e, 4, {rhythmMapName: 'straight'}, 'p4')
//assignPlayerForMusicSynthesizerSession(2, 'p2')
recordConfigurationDataIntoMusicalEnvironment(melodyData, 'p2', e)
//assignPlayerForMusicSynthesizerSession(2,'p2')
assignPlayerForMusicSynthesizerSession(e, 2, {rhythmMapName: 'straight'}, 'p3')
//console.time('p1')

