EB.register('waw', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'nacht', name: 'Nacht der Untoten', group: 'base', pack: 'Base game',
  main: null,
  blurb: 'Where it all started: one bunker, no perks, no power. A song radio and the sniper cabinet.',
  img: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/',
  guide: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/nacht_der_untoten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Nacht_der_Untoten',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song radio', steps: [
        ['Shoot or melee the radio on the table right of the Mystery Box; shoot again to skip songs.', ['pictures/radio.webp|Radio']]
      ]},
      { h: 'Sniper cabinet', steps: [
        ['Buy the scoped Kar98k from the cabinet upstairs above the box room (1,500).', ['pictures/sniper_cabinet.webp|Cabinet']]
      ]}
    ]}
  ]
});

M({
  id: 'verruckt', name: 'Verrückt', group: 'dlc', pack: 'Map Pack 1',
  main: null,
  blurb: 'Wittenau asylum: the first map with power and Perk-a-Colas. No main quest — the toilet song.',
  img: 'https://mmmrkennedy.com/games/WAW/verruckt/',
  guide: 'https://mmmrkennedy.com/games/WAW/verruckt/verruckt_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Verr%C3%BCckt',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Lullaby of a Dead Man"', steps: [
        ['In the bathroom near the power room (Double Tap side), flush the left-most toilet three times.', ['pictures/song_ee/toilet.webp|Left toilet']]
      ]}
    ]}
  ]
});

M({
  id: 'snn', name: 'Shi No Numa', group: 'dlc', pack: 'Map Pack 2',
  main: null,
  blurb: 'A Japanese swamp outpost with Hellhounds and the Wunderwaffe DG-2. No main quest — just the phone song.',
  img: 'https://mmmrkennedy.com/games/WAW/shi_no_numa/',
  guide: 'https://mmmrkennedy.com/games/WAW/shi_no_numa/shi_no_numa_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Shi_No_Numa',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "The One"', steps: [
        ['In the Comms Room, interact with the phone three times.', ['pictures/song_ee/phone.webp|Phone']]
      ]}
    ]}
  ]
});

M({
  id: 'derriese', name: 'Der Riese', group: 'dlc', pack: 'Map Pack 3',
  main: 'Fly Trap',
  blurb: 'The Giant factory: teleporters, Pack-a-Punch\'s debut and the Fly Trap (no reward, just Samantha).',
  img: 'https://mmmrkennedy.com/games/WAW/der_riese/',
  guide: 'https://mmmrkennedy.com/games/WAW/der_riese/der_riese_guide?version=original',
  wiki: 'https://callofduty.fandom.com/wiki/Der_Riese',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', steps: [
        ['Turn on the power switch at the back middle of the map.', ['pictures/pap/power_switch.webp|Power switch']],
        ['Link each teleporter (A left of spawn, B right of spawn, C past power), reaching the mainframe within 30 s each time. The mainframe door opens to PaP.', ['pictures/pap/tele_a.webp|Teleporter A', 'pictures/pap/tele_b.webp|Teleporter B', 'pictures/pap/tele_c.webp|Teleporter C', 'pictures/pap/mainframe.webp|Mainframe']]
      ]},
      { h: 'Fly Trap', note: 'Works solo, about 5–20 minutes. No reward in World at War — just Samantha.', steps: [
        ['With a Pack-a-Punched bullet weapon, shoot the control panel near the right-side zombie spawn (facing right from PaP).', ['pictures/main_ee/panel.webp|Panel', 'pictures/main_ee/panel_zoomed_out.webp|Panel (wide)']],
        ['Hit the three floating objects: furnace below the stairs in the Teleporter B Thompson room, broken window above the M1 Carbine in spawn, bottom-left cage right of the Trench Gun at Teleporter A.', ['pictures/main_ee/toy_furnace_waw.webp|Furnace', 'pictures/main_ee/toy_spawn_waw.webp|Spawn window', 'pictures/main_ee/toy_tele_a_waw.webp|Teleporter A cage']],
        ['Samantha screams after the last one. Done.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Beauty of Annihilation"', steps: [
        ['Hold interact on three brain jars: shelf at the foot of the Jug stairs, right of the Jug stairs, table by the chalkboard in the Teleporter B side room.', ['pictures/song_ee/jar_shelf.webp|Shelf jar', 'pictures/song_ee/jar_stairs.webp|Stairs jar', 'pictures/song_ee/jar_tele_b.webp|Teleporter B jar']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
