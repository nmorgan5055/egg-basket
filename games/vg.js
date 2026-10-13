EB.register('vg', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'anfang', name: 'Der Anfang', group: 'base', pack: 'Base game',
  main: null,
  blurb: 'Stalingrad, with portal objectives and Covenants. No main quest — a short story prologue and achievement challenges.',
  img: 'https://mmmrkennedy.com/games/VG/',
  guide: 'https://callofduty.fandom.com/wiki/Der_Anfang',
  wiki: 'https://callofduty.fandom.com/wiki/Der_Anfang',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Prologue story', note: "No guide pictures exist for this map.", steps: [
        ["Do a portal objective to open Panzer Column East, then the Store objective to reach the Command Post and Von List's office."],
        ["Take the Void objective in Von List's office to Shi No Numa, survive three full rounds and leave through the portal (Kortifex cutscene)."],
        ["Back at the Command Post, use the portal Krafft is sealed behind on the second floor."],
        ["Do the portal objectives toward the apartments and use the stone tome on the top floor."],
        ["Stand at the top of the Command Post stairs for the green portal."]
      ]},
      { h: 'Achievement challenges', steps: [
        ["Thirst Quencher: drink from all five Demonic Fountains in one game."],
        ["Baker's Dozen: sacrifice 13 hearts (flee the Void for Sacrificial Hearts)."],
        ["Deal With The Devil: equip three Covenants."]
      ]}
    ]}
  ]
});

M({
  id: 'terra', name: 'Terra Maledicta', group: 'dlc', pack: 'Season 1',
  main: 'Decimator Shield & the Void',
  blurb: 'An Egyptian desert of portals and dig spots. The Decimator Shield and a trip into the Void.',
  img: 'https://mmmrkennedy.com/games/VG/terra_maledicta/',
  guide: 'https://mmmrkennedy.com/games/VG/terra_maledicta/terra_maledicta_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Terra_Maledicta',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Decimator Shield', note: "Rated 2/10 solo, 25–40 minutes.", steps: [
        ["Open Merchant Road with a portal objective and walk up to the trapped Shield to start its conversation.", ['pictures/decimator_shield/merhcantroad_portal.webp|Merchant Road portal', 'pictures/decimator_shield/shield.webp|Shield']],
        ["Open East Spring, use the rune stone by Demonic Frenzy (Speed Cola), wait ~2 minutes and take the portal behind it. Finish the Augmentor objective.", ['pictures/decimator_shield/speedcola_runestone.webp|Rune stone', 'pictures/decimator_shield/speedcola_portal.webp|Portal']],
        ["Shoot the four crystals (East Spring, West Spring, above spawn, behind the Altar of Covenants) and talk to the Shield again.", ['pictures/decimator_shield/spawn_crystal.webp|Spawn crystal', 'pictures/decimator_shield/shield_crystal.webp|Shield crystal', 'pictures/decimator_shield/westspring_crystal.webp|West Spring crystal']],
        ["Open West Spring, use the Bazaar rune stone below Diabolical Damage, wait ~90 s and take the portal. Finish the Sacrifice objective.", ['pictures/decimator_shield/deadshot_runestone.webp|Rune stone', 'pictures/decimator_shield/deadshot_portal.webp|Portal']],
        ["Return to the Shield; take it when it falls."]
      ]},
      { h: 'The Void', steps: [
        ["Open Debris Field and use the rune stone by Venomous Vigor (Quick Revive). Enter the Void portal.", ['pictures/main_ee/debrisfield_runestone.webp|Rune stone', 'pictures/main_ee/voidportal.webp|Void portal']],
        ["Follow the Tome Page's beams and Slam the four wall arms with the Shield (Stygian Heights, Vercanna's Home Soil, The Shattered Land, Isle of Blight).", ['pictures/main_ee/tomepage_inair.webp|Tome Page', 'pictures/main_ee/arm_heights.webp|Arm', 'pictures/main_ee/arm_isleofblight.webp|Arm']],
        ["Pick up the Tome Page and take the portal to its right: 10,000 points and four loot chests.", ['pictures/main_ee/tomepage_onground.webp|Tome Page']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Shovel & dig spots', steps: [
        ["Grab a shovel (Debris Field, Market Storage, Outpost Courtyard or Derailment).", ['pictures/dig_spots/debrisfield_shovel.webp|Shovel']]
      ]},
      { h: 'Deathmachine & Ray Gun', steps: [
        ["Dig up four Lost Tome pages (keep digging for a Ray Gun too).", ['pictures/deathmachine/losttomepage_digspot.webp|Tome page', 'pictures/deathmachine/corruptedraygun.webp|Ray Gun']],
        ["Place them top, bottom, left, right on the Outpost Courtyard barrier — a page vanishing means wrong spot.", ['pictures/deathmachine/magicalbarrier.webp|Barrier']]
      ], rec: [{ id: 'pages', at: 1, label: 'Page placement that worked', type: 'text', ph: 'e.g. A top, B left…' }] },
      { h: 'Antenna (free weapon)', steps: [
        ["Dig up the antenna and fit it on the Merchant Road armoured-car radio; then use the radios by Deadshot, by Quick Revive, and in Market Storage, killing each wave.", ['pictures/antenna/antenna.webp|Antenna', 'pictures/antenna/armouredcar_radio.webp|Car radio', 'pictures/antenna/marketstorage_radio.webp|Market Storage radio']]
      ]},
      { h: 'Small digs', steps: [
        ["Corrupted heart: place the dug-up purple orb on a special dig spot for a free heart.", ['pictures/free_heart/specialdigstop.webp|Special dig spot']],
        ["Red orb: chase and shoot it down for 5,000 points.", ['pictures/free_points/pointsorb.webp|Red orb']]
      ]}
    ]}
  ]
});

M({
  id: 'snnr', name: 'Shi No Numa Reborn', group: 'dlc', pack: 'Season 2',
  main: 'Repair the Mirror',
  blurb: 'The swamp returns. The Wunderwaffe DG-2, the Monolith and a fight with the Echo.',
  img: 'https://mmmrkennedy.com/games/VG/shi_no_numa_reborn/',
  guide: 'https://mmmrkennedy.com/games/VG/shi_no_numa_reborn/shi_no_numa_reborn_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Shi_No_Numa_Reborn',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Wunderwaffe DG-2', note: "Rated 3/10 solo, 25–40 minutes.", steps: [
        ["Take the barrel from the Fishing Hut and put it on the Comm Room radio tower; defend it next round, then take it and the charged tube.", ['pictures/wunderwaffe/weaponbarrel.webp|Barrel', 'pictures/wunderwaffe/radiotower.webp|Radio tower', 'pictures/wunderwaffe/vacuumtube1.webp|Tube 1']],
        ["Take the Comm Room fuse. Run the Storage Hut trap; when it shorts, fuse the red box and let it kill until the tube lights.", ['pictures/wunderwaffe/electricalfuse.webp|Fuse', 'pictures/wunderwaffe/redbox_open.webp|Red box', 'pictures/wunderwaffe/vacuumtube2.webp|Tube 2']],
        ["Round 15: lead Zaballa to the War Room Tesla Coil so her mines hit it five times; take the tube.", ['pictures/wunderwaffe/teslacoil.webp|Tesla Coil', 'pictures/wunderwaffe/vacuumtube3.webp|Tube 3']],
        ["Build it at the Storage Hut workbench.", ['pictures/wunderwaffe/workbench.webp|Workbench']]
      ]},
      { h: 'The Monolith & the Ceremony', steps: [
        ["Blow three Boom Schreiers by the vine-covered Monolith.", ['pictures/main_ee/monolith_vines.webp|Monolith']],
        ["Place the three Cypher Wheels (Dormitory table, Doctor's Quarters, Dig Site table).", ['pictures/main_ee/cypher_wheel_spawn_building.webp|Wheel 1', 'pictures/main_ee/cypher_wheel_doctors_quarters.webp|Wheel 2', 'pictures/main_ee/cypher_wheel_dig_site.webp|Wheel 3']],
        ["Find three symbol papers, translate them (cheat sheet, or burn the Doctor's Quarters paper) and enter them on the Monolith.", ['pictures/main_ee/symbol_excavation_room.webp|Symbols', 'pictures/main_ee/symbol_translations_cheat_sheet.webp|Cheat sheet']],
        ["Everyone touches a glowing stone, then Wunderwaffe the blue-mist Zombies by the shrine during the lockdown.", ['pictures/main_ee/glowing_stone.webp|Stone', 'pictures/main_ee/blue_mist.webp|Blue mist']]
      ], rec: [{ id: 'symbols', at: 2, label: 'Translated symbols', type: 'text', ph: 'Paper 1 · 2 · 3' }] },
      { h: 'Repair the Mirror', steps: [
        ["Fill the Flogger Courtyard fountain by flinging Zombies with the Flogger, then drink for Zombie Blood.", ['pictures/main_ee/empty_demonic_fountain.webp|Fountain']],
        ["In Zombie Blood, check the War Room map's red X and shoot the mirror piece off that hut's ceiling.", ['pictures/main_ee/war_room_map.webp|Map', 'pictures/main_ee/ceiling.webp|Ceiling']],
        ["Walk up to the red orb in the spawn building and go to its destination for the second piece.", ['pictures/main_ee/red_orb.webp|Red orb', 'pictures/main_ee/red_orb_mirror.webp|Mirror piece']],
        ["Put both pieces on the Dig Site pedestal. Use the blue orb and shoot it along its route back to Dig Site.", ['pictures/main_ee/central_pedestal.webp|Pedestal', 'pictures/main_ee/blue_orb.webp|Blue orb']]
      ]},
      { h: 'The Echo', steps: [
        ["Equip Energy Mine (tier 3+). Everyone uses the Dig Site blue orbs.", []],
        ["Each phase: kill the required type (blue-mist Zombies, then Boom Schreiers, then Sturmkriegers) near the mirror for the dome, then shoot her mask while she's inside. Three masks."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Rampage Inducer', steps: [
        ["Quickly shoot the five lanterns outside the spawn room.", ['pictures/rampage_inducer/leftofsvt.webp|Lantern', 'pictures/rampage_inducer/tablet.webp|Tablet']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + Max Ammo', steps: [
        ["Shoot the four Fishing Hut silver plates, pick up the doll, shoot the dolls on the bridge, then use the doll again.", ['pictures/song_ee/plate1.webp|Plate', 'pictures/song_ee/samdoll_onbridge.webp|Bridge doll']]
      ]},
      { h: 'Song: "The One"', steps: [
        ["Use the Comm Room phone.", ['pictures/song_ee2/phone.webp|Phone']]
      ]},
      { h: 'Aether Bunny (fire sale)', steps: [
        ["In Zombie Blood, take the three bunny pieces: under the zipline, in the swamp by the Fishing Hut, and under the moved box.", ['pictures/bunny/underzipline.webp|Under zipline', 'pictures/bunny/underbox.webp|Under box']]
      ]}
    ]}
  ]
});

M({
  id: 'archon', name: 'The Archon', group: 'dlc', pack: 'Season 4',
  main: 'Kortifex',
  blurb: 'Back to the desert for three trials and the Dark Aether showdown with Kortifex.',
  img: 'https://mmmrkennedy.com/games/VG/the_archon/',
  guide: 'https://mmmrkennedy.com/games/VG/the_archon/the_archon_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Archon',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Start', note: "Rated 3/10 solo, 40–60 minutes.", steps: [
        ["Build Pack-a-Punch, put the relic on the stone in front of it, then enter the Dark Aether portal and survive until you're downed.", ['pictures/main_ee/stone_mirror.webp|Stone', 'pictures/main_ee/portal_darkaether.webp|Portal']],
        ["Grab a shovel (Derailment, Bazaar, Debris Field or Tents).", ['pictures/main_ee/shovel_derailment.webp|Shovel']]
      ]},
      { h: 'Trial of Mindfulness', steps: [
        ["Dig by the Merchant Road obelisk for a red orb. Stand on the runes in the order shown — 3, 4, then 5 symbols.", ['pictures/main_ee/mindfulness_obelisk.webp|Obelisk', 'pictures/main_ee/midfulness_symbol.webp|Symbols']],
        ["Use the obelisk and capture the runes without killing Zombies."]
      ]},
      { h: 'Trial of Resilience', steps: [
        ["Shoot the Debris Field Dark Aether crystals until one spawns an orb.", ['pictures/main_ee/resilience_crystal1.webp|Crystal', 'pictures/main_ee/resilience_redorb.webp|Orb']],
        ["Bring back the cursed hat (Tents), skull (Bazaar 2F) and femur (dig in Derailment). Take the Decimator Shield.", ['pictures/main_ee/resilience_cursedhat.webp|Hat', 'pictures/main_ee/resilience_cursedskull.webp|Skull', 'pictures/main_ee/resilience_cursedfemur.webp|Femur']],
        ["Start the trial at the obelisk; Slam the three Syphoncores and pour their blood into the fountain.", ['pictures/main_ee/resilience_syphoncore.webp|Syphoncore', 'pictures/main_ee/resilience_emptyfountain.webp|Fountain']]
      ]},
      { h: 'Trial of Sacrifice', steps: [
        ["With three Molotovs, light the three Derailment torches at once.", ['pictures/main_ee/sacrifice_torch1.webp|Torch 1', 'pictures/main_ee/sacrifice_torch2.webp|Torch 2', 'pictures/main_ee/sacrifice_torch3.webp|Torch 3']],
        ["Sacrifice a Pack-a-Punched weapon to the orb and kill the Überkrieger.", ['pictures/main_ee/sacrifice_redorb.webp|Orb']],
        ["Switch to Ring of Fire at the tablet, start the obelisk, and get six kills by each new obelisk inside the ring.", ['pictures/main_ee/sacrifice_tablet.webp|Tablet', 'pictures/main_ee/sacrifice_beamoflight.webp|Beam']]
      ]},
      { h: 'Kortifex', steps: [
        ["Enter the portal by PaP (Shield recommended). Phase 1: shoot the upper eye.", []],
        ["Phases 2–3: shoot ground crystals for red shards, turn them blue in the purple pods, throw them at a sky pillar to drop the shield, and shoot an eye. Pillars also stop his healing.", ['pictures/main_ee/purplepods.webp|Purple pods', 'pictures/main_ee/bluecrystalshard.webp|Blue shard', 'pictures/main_ee/pillarinsky.webp|Sky pillar']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Rampage Inducer', steps: [
        ["Shoot the five spawn skulls in order: left of spawn, straight ahead, above the SVT, mid-Temple, above PaP.", ['pictures/rampage_inducer/skull1.webp|Skull 1', 'pictures/rampage_inducer/skull5.webp|Skull 5', 'pictures/rampage_inducer/tablet.webp|Tablet']]
      ]},
      { h: 'Mister Peeks (free Ray Gun)', steps: [
        ["With the Rampage Inducer on, dig up the bunny part after each scream (every five rounds). Three parts."]
      ]},
      { h: 'Song: "Vanishing Shore"', steps: [
        ["Interact three times with the instrument upstairs in the Radio Outpost.", ['pictures/song_ee/guitar.webp|Instrument']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
