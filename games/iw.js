EB.register('iw', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'spaceland', name: 'Zombies in Spaceland', group: 'base', pack: 'Base game',
  main: 'Sooooul Key',
  blurb: 'An 80s space theme park run by Willard Wyler. Weapons of Rock, the SETI-COM, a UFO and an alien boss.',
  img: 'https://mmmrkennedy.com/games/IW/zombies_in_spaceland/',
  guide: 'https://mmmrkennedy.com/games/IW/zombies_in_spaceland/zombies_in_spaceland_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Zombies_in_Spaceland',
  settings: [
    { id: 'wor', label: 'Weapon of Rock you are building', multi: true, opts: [['hc', 'Head-Cutter'], ['fm', 'Face-Melter'], ['dc', 'Dischord'], ['sh', 'Shredder']] },
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', note: 'Solo is rated very hard (much easier on Director\'s Cut). About 40–60 minutes. Upgrading the Kendall-44 starting pistol helps.', steps: [
        ['Turn on the five power switches: spawn (near the M1), Journey into Space hallway, Astrocade by the portal, Polar Peak by the Magic Wheel, Kepler upstairs in the Moonlight Cafe.'],
        ['Use the four teleporters (Journey into Space, Astrocade, Polar Peak gift shop, bottom of the Moonlight Cafe stairs). The lights above the main teleporter turn blue for each.', ['pictures/pap/tele_journey.webp|Journey teleporter', 'pictures/pap/tele_kepler.webp|Kepler teleporter', 'pictures/pap/tele_indicator.webp|Indicator lights']],
        ['Take the central teleporter to the projector room — 30 s to Pack-a-Punch.', ['pictures/pap/pap_tele_activated.webp|Central teleporter']]
      ]},
      { h: 'SETI-COM', steps: [
        ['Collect a calculator, boombox and umbrella (three possible spots each — Cosmic Way, Astrocade, Kepler, Underground, Journey into Space, Polar Peak gift shop).', ['pictures/main_ee/seti_com/calc_cosmic.webp|Calculator', 'pictures/main_ee/seti_com/boombox_spawn.webp|Boombox', 'pictures/main_ee/seti_com/umbrella_polar.webp|Umbrella']],
        ['A round later the UFO on Polar Peak flashes. Find \'The Hoff at a Cosmic Tunes stand (two in Kepler, one by Mule Munchies) to get the SETI-COM.', ['pictures/main_ee/ufo_on_polar_peak.webp|UFO flashing', 'pictures/main_ee/tunes_kepler_geysers.webp|Kepler stand']],
        ['Defend it three times in three different spots, one per round: 60 s, then 90 s, then 120 s. A fail spawns a Brute — get a new one from \'The Hoff and retry.', ['pictures/main_ee/seti_kepler_gator.webp|Kepler fountain', 'pictures/main_ee/seti_polar_gift.webp|Polar Peak gift shop', 'pictures/main_ee/seti_cosmic.webp|Cosmic Way']],
        ['A full round later, return it to \'The Hoff for four speakers. Put three on the golden symbols around the PaP portal and one in front of the portal.', ['pictures/main_ee/speakers.webp|Speakers', 'pictures/main_ee/golden_symbols.webp|Golden symbols', 'pictures/main_ee/final_speaker_location.webp|Last speaker']]
      ], rec: [{ id: 'defenses', at: 2, label: 'Defenses done', type: 'multi', opts: ['60 s', '90 s', '120 s'] }] },
      { h: 'UFO Simon Says', steps: [
        ['Interact with a Cosmic Way speaker. Each speaker lights a color. Watch the UFO\'s color sequence, then when it turns white hit the speakers in that order (15 s for the first, 10 s for the rest in solo; less in co-op). Don\'t guess — a wrong input spawns a Brute.'],
        ['Do it three times. Clown zombies come, then the Alien(s) step out of the portal.', ['pictures/main_ee/alien_example.webp|Alien']]
      ], rec: [{ id: 'speakerColors', at: 0, label: 'Which speaker is which color', type: 'text', ph: 'e.g. bridge = red, Polar Peak = blue…' }] },
      { h: 'Alien boss', steps: [
        ['Shoot the glowing collar (green → yellow → red). One Alien per player.', ['pictures/main_ee/alien_collar.webp|Collar']],
        ['When it kneels in a bubble, melee the fuse in its backpack. Do this twice; the third knockdown kills it.', ['pictures/main_ee/alien_downed.webp|Downed Alien']]
      ]},
      { h: 'Destroy the UFO', steps: [
        ['Put the alien fuses from in front of the portal into the projector — PaP can now upgrade twice and upgrade Weapons of Rock.', ['pictures/main_ee/fuses.webp|Fuses', 'pictures/main_ee/upgraded_pap.webp|Upgraded PaP']],
        ['Build and Pack-a-Punch a Weapon of Rock (Weapons of Rock tab).'],
        ['With it, shoot four of the five nodes on the Spaceland Ring by the spawn bridge. Shoot the fifth when the UFO is above the PaP portal.', ['pictures/main_ee/power_nodes_on_ring.webp|Ring nodes', 'pictures/main_ee/orange_node.webp|Lit node']],
        ['The UFO explodes and drops the Soul Key (and the Talisman on Director\'s Cut). The cutscene only plays if you\'re Willard Wyler.', ['pictures/main_ee/soul_key.webp|Soul Key', 'pictures/main_ee/talisman.webp|Talisman']]
      ]}
    ]},
    { id: 'wor', label: 'Weapons of Rock', sections: [
      { h: 'Souvenir coins', steps: [
        ['Zombies drop red, blue and green coins. Three coins in a souvenir station crafts an item (e.g. Green ×3 → Revocator, Red/Green/Blue → Kindle Pops).', ['pictures/coins/coins_cosmic_way.webp|Cosmic Way station', 'pictures/coins/coins_polar_peak.webp|Polar Peak station']]
      ]},
      { h: 'Elemental cores', steps: [
        ['Buy an Arcane Core (300 tickets). Send a UFO from the projector-room table to a trap: Electric = Rocket trap, Laser = Disco Ball trap, Wind = Steel Dragon trap, Fire = Chromosphere trap.', ['pictures/elemental_upgrades/arcane_core.webp|Arcane Core', 'pictures/elemental_upgrades/ufo_projector_room.webp|UFOs']],
        ['Get ~20 kills in one use of that trap, then ~25 Arcane Core kills near the UFO. It drops an orb.', ['pictures/elemental_upgrades/fire_orb.webp|Fire orb']]
      ]},
      { h: 'Crystals (Gator)', steps: [
        ['Buy golden teeth (300 tickets, Astrocade prize counter). Lure a Brute into the Kepler Gator trap to break its teeth, then put the golden teeth in.', ['pictures/golden_teeth.webp|Golden teeth', 'pictures/elemental_upgrades/xquisite_core/gator_trap.webp|Gator trap']],
        ['Shoot the target in its throat with the matching core: Wind = left, Electric = 2nd, Laser = 3rd, Fire = right.', ['pictures/elemental_upgrades/xquisite_core/crystal_correct_target.webp|Targets']]
      ]},
      { h: 'Head-Cutter', w: { wor: ['hc'] }, steps: [
        ['Battery: throw a cryo grenade at the Polar Peak Yeti, headshot 10 frozen zombies, then grab the battery from the Yeti hand by the teleporter.', ['pictures/weapons_of_rock/head_cutter/yeti_polar_peak.webp|Yeti', 'pictures/weapons_of_rock/head_cutter/battery.webp|Battery']],
        ['Yeti plush: three green coins at the Polar Peak station. Yellow crystal: Wind core.'],
        ['Build on the cutout in the Polar Peak gift shop.', ['pictures/weapons_of_rock/head_cutter/cardboard_cutout.webp|Cutout']]
      ]},
      { h: 'Face-Melter', w: { wor: ['fm'] }, steps: [
        ['Battery: throw a frag into the Journey into Space teleporter; keep throwing the red grenade it returns into the PaP portal before it explodes.', ['pictures/weapons_of_rock/face_melter/red_grenade.webp|Red grenade', 'pictures/weapons_of_rock/face_melter/battery.webp|Battery']],
        ['Rocket toy: three blue coins at the Journey station. Blue crystal: Electric core.'],
        ['Build on the alien cutout by Escape Velocity.', ['pictures/weapons_of_rock/face_melter/alien_cardboard.webp|Cutout']]
      ]},
      { h: 'Dischord', w: { wor: ['dc'] }, steps: [
        ['Battery: wear the sunglasses zombies drop and shoot five hidden targets (spawn hedge, Cosmic Way, Astrocade, bumper cars, Polar Peak). The battery appears on the Astrocade dance floor.', ['pictures/weapons_of_rock/dischord/sunglasses.webp|Sunglasses', 'pictures/weapons_of_rock/dischord/battery.webp|Battery']],
        ['Disco ball: one red, blue and green coin at the Astrocade station. Green crystal: Laser core.'],
        ['Build on the alien cutout by the Astrocade prize counter.', ['pictures/weapons_of_rock/dischord/alien_cardboard.webp|Cutout']]
      ]},
      { h: 'Shredder', w: { wor: ['sh'] }, steps: [
        ['Battery: shoot it off the back of the Kepler log-ride boat, then grab it mid-air when a geyser shoots it up.', ['pictures/weapons_of_rock/shredder/battery_on_boat.webp|On the boat', 'pictures/weapons_of_rock/shredder/battery_in_fountain.webp|Geyser']],
        ['Alien souvenir: three red coins at the Kepler station. Red crystal: Fire core.'],
        ['Build on the alien cutout in the Underground by the log ride.', ['pictures/weapons_of_rock/shredder/alien_cardboard.webp|Cutout']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Ghosts \'N Skulls (all perks)', steps: [
        ['Skull 1: pop every balloon above the Hailstorm wallbuy in spawn.', ['pictures/ghost_and_skulls/skull_1/balloons.webp|Balloons']],
        ['Skull 2: look at the skulls hidden in the letters G, H, O, S, T on park signs.'],
        ['Skull 3: on the Astrocade dance floor get kills on Green (1), Blue (9), Pink (8), Off (4), in order.', ['pictures/ghost_and_skulls/skull_3/dance_floor.webp|Dance floor']],
        ['Skull 4: finish the skull task on each Astrocade game (basketball, Black Hole 50 pts, Cryptid Attack, Zombie Zoom, Bowling for Planets).'],
        ['Skull 5: after the main quest, wear sunglasses and hit the sky skull above PaP with the ring laser.', ['pictures/ghost_and_skulls/skull_5/skull_in_sky.webp|Sky skull']],
        ['Skull 6: lure a Brute to laser the Ghosts \'N Skulls cabinet, then everyone plays and survives three rounds.', ['pictures/ghost_and_skulls/glowing_machine.webp|Glowing cabinet']]
      ], rec: [{ id: 'gns', at: 0, label: 'Skulls done', type: 'multi', opts: ['Balloons', 'Sign letters', 'Dance floor', 'Arcade games', 'Sky skull', 'Brute laser'] }] },
      { h: 'Song: MW1 theme (Spaceland mix)', steps: [
        ['Three of the nine Employee of the Month boards show a teddy bear instead of August. Shoot all three.', ['pictures/mw1_song/teddy_bear_example.webp|Bear board']]
      ]},
      { h: 'Song: MW2 theme (80s remix)', steps: [
        ['Shoot five teddy bears that spawn at random spots across the park (sometimes the fifth never spawns — restart). <a href="https://youtu.be/YNitLY3MoIU" target="_blank" rel="noopener">All locations video ↗</a>', ['pictures/mw2_song/teddy_bear_example.webp|Teddy bear']]
      ]},
      { h: 'N31L & David Hasselhoff', steps: [
        ['Put N31L\'s head (ice cream stand at the bottom of Hyper Slopes) on his body by the Cosmic Way bridge. Finish five challenges to summon Hasselhoff.', ['pictures/n31l/n31l_head.webp|Head', 'pictures/n31l/n31l_body.webp|Body']],
        ['Give N31L an auxiliary battery (Kepler or Polar Peak spots), do five more challenges; then a floppy disk (Underground), five more. After that, Hasselhoff costs $5000 to summon.']
      ]},
      { h: 'Lobby codes', steps: [
        ['Play as Hasselhoff (after the main quest): Left, Right, Left, Up, Down in the lobby.'],
        ['Play as Willard Wyler (Director\'s Cut): Left, Left, Down, Up, Up, Right.']
      ]}
    ]}
  ]
});

M({
  id: 'rave', name: 'Rave in the Redwoods', group: 'dlc', pack: 'DLC 1 · Sabotage',
  main: 'Locksmith',
  blurb: 'A 90s summer camp turned rave. Rave Mode, the Vlad crossbow, Kevin Smith and the Super Slasher.',
  img: 'https://mmmrkennedy.com/games/IW/rave_in_the_redwoods/',
  guide: 'https://mmmrkennedy.com/games/IW/rave_in_the_redwoods/rave_in_the_redwoods_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Rave_in_the_Redwoods',
  settings: [
    { id: 'vlad', label: 'Vlad upgrade you want', multi: true, opts: [['deer', 'Deer (Whirlwind)'], ['eagle', 'Eagle (Trap-o-Matic)'], ['owl', 'Owl (Acid Rain)'], ['wolf', 'Wolf (Ben Franklin)']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', note: 'About 40–60 minutes solo (25–35 on Director\'s Cut). Failing a Rave challenge costs a random perk, but you can retry right away.', steps: [
        ['Turn on power in the Bear Lodge basement (through the Mines).'],
        ['Build the boat: handle (Rave Area by Quickies), engine (Mess Hall middle pillar), propeller (Tuff \'Nuff room above spawn).', ['pictures/pap/handle.webp|Handle', 'pictures/pap/engine.webp|Engine', 'pictures/pap/propeller.webp|Propeller']],
        ['Grab the film reel on the docks, ride the boat to Turtle Island, grab the second reel outside the cabin back door, and fix the projector inside. The portal leads to PaP (30 s).', ['pictures/pap/film_reel_docks.webp|Docks reel', 'pictures/pap/film_reel_cabin.webp|Cabin reel', 'pictures/pap/broken_proj.webp|Projector']]
      ]},
      { h: 'Kevin\'s challenges', steps: [
        ['Talk to Kevin Smith in the Turtle Island cabin attic.', ['pictures/main_ee/kevin_in_attic.webp|Kevin']],
        ['Photo 1: take it from behind the Burning Man in the Rave Area, place it at the Thunderbird Amphitheatre bonfire, and shoot off 10 arms in ~70 s (the Banshee wallbuy is ideal). Kill the Slasher and take the glowing photo.', ['pictures/main_ee/photo_1.webp|Photo 1', 'pictures/main_ee/photo_1_amphitheater.webp|Bonfire', 'pictures/main_ee/photo_1_glowing.webp|Glowing']],
        ['Photo 2: talk to Kevin, take it from the upstairs Tuff \'Nuff doorway, place it in front of Quickies, and shoot off 10 legs. Kill the Slasher, take the photo.', ['pictures/main_ee/photo_2.webp|Photo 2', 'pictures/main_ee/photo_2_ground_quickies.webp|By Quickies']],
        ['Skull: talk to Kevin, take the skull left of the Magic Wheel in the basement, place it on the beach in front of Slappy Taffy, and get 10 headshots. Kill the Slasher, take the skull.', ['pictures/main_ee/skull_pickup.webp|Skull', 'pictures/main_ee/skull_place_down.webp|Beach']]
      ]},
      { h: 'Buttons', steps: [
        ['In the Bear Lodge basement, everyone presses the wall buttons with no light above them at the same time (three right of the stairs, one left of the Magic Wheel). An alarm sounds.', ['pictures/main_ee/three_buttons.webp|Three buttons', 'pictures/main_ee/one_button.webp|Fourth button']],
        ['All players ride the boat together — it now goes to the boss.']
      ]},
      { h: 'Super Slasher', note: 'Bring strong guns (FHR-40, Mauler, RPR-Evo, NV4, Acid Rain, Whirlwind).', steps: [
        ['In Rave Mode, charge two skulls (more in co-op) with ~30 souls each; keep them charged while they fall.', ['pictures/main_ee/boss_fight_skull.webp|Skull', 'pictures/main_ee/charged_skull.webp|Charged']],
        ['Lure the Slasher onto the circle they make. When his lower torso glows, shoot it.', ['pictures/main_ee/boss_circle.webp|Circle', 'pictures/main_ee/glowing_part_on_slasher.webp|Glowing torso']],
        ['Shoot the symbol on his body until it disappears; repeat about 8 times.', ['pictures/main_ee/symbol.webp|Symbol']],
        ['Wind storm: hide behind rocks in the green circles for ~30 s while dodging saw blades.', ['pictures/main_ee/green_circle.webp|Safe circle']],
        ['Repeat twice more (the dreamcatchers above the cabin count down), then kill him. Pick up the Soul Key piece for the cutscene.', ['pictures/main_ee/dreamcatcher.webp|Dreamcatchers', 'pictures/main_ee/soul_key.webp|Soul Key']]
      ]}
    ]},
    { id: 'vlad', label: 'Vlad', sections: [
      { h: 'Vlad crossbow', steps: [
        ['Take the hot dog from the bucket in the Turtle Island cabin bathroom.', ['pictures/vlad/hot_dog_bucket.webp|Hot dog bucket']],
        ['In Rave Mode, throw a hot dog at each of three deer heads (Bear Lodge, Mess Hall, Owl Camp cabins), shoot them, and grab the glowing symbols.', ['pictures/vlad/deer_bear_lodge.webp|Deer head', 'pictures/vlad/glowing_symbol.webp|Symbol']],
        ['Leave Rave Mode and open the crossbow cabinet in the Bear Lodge.', ['pictures/vlad/crossbow_cabinet.webp|Cabinet']]
      ]},
      { h: 'Statue upgrades', note: 'Small statue spawns are random each game.', steps: [
        ['Find your small animal statue and put it on the speakers left of Quickies. Damage (don\'t kill) ~8 zombies nearby until it chimes, then take it.', ['pictures/vlad/upgrades/statue_nv4.webp|Statue', 'pictures/vlad/upgrades/speakers.webp|Speakers']],
        ['Deer: place at the big deer on the beach or docks.', ['pictures/vlad/upgrades/deer_beach.webp|Deer'], { vlad: ['deer'] }],
        ['Eagle: place at the Thunderbird Amphitheater.', ['pictures/vlad/upgrades/eagle.webp|Eagle'], { vlad: ['eagle'] }],
        ['Owl: place at Camp Owl (Mines entrance or lit sign).', ['pictures/vlad/upgrades/owl_mines.webp|Owl'], { vlad: ['owl'] }],
        ['Wolf: place at Camp Wolf (Mines or Mess Hall entrance).', ['pictures/vlad/upgrades/wolf_mines.webp|Wolf'], { vlad: ['wolf'] }],
        ['Get ~20 kills with a regular Vlad near it, then pick it up to upgrade.']
      ]},
      { h: 'Smiley chainsaw', steps: [
        ['After the main quest (or on Director\'s Cut), take the Smiley from the rack by the wheel in the basement. It\'s the only thing that kills the Slasher.', ['pictures/smiley/smiley_pickup.webp|Smiley rack']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Puppet Strings"', steps: [
        ['With power on, enter Rave Mode at the Bear Lodge fireplace and aim at ten purple dots around the lodge until each becomes a symbol (can take several Rave Modes).']
      ]},
      { h: 'Double Pack-a-Punch', steps: [
        ['Use the computer in spawn; three rounds later, take the alien fuses behind it to the projector (already installed if you\'ve beaten the Spaceland quest).', ['pictures/pap/double_pap/computer.webp|Computer', 'pictures/pap/double_pap/alien_fuses.webp|Fuses']]
      ]},
      { h: 'Ghosts \'N Skulls 2 (all perks)', steps: [
        ['Skull 1: run traps in order with exact kills — Log Swing 1, Woodchipper 9, Rave Stereo 9, Waterfall 2.'],
        ['Skull 2: in Rave Mode, aim at the green symbol on the cabinet; next round, at the Turtle Island campfire in Rave Mode, shoot the matching symbol.'],
        ['Skull 3: hit the skull on the knife-throwing wheel in the basement.'],
        ['Skull 4: a round later, in Rave Mode aim at five green letters in order S-K-U-L-L.'],
        ['Skull 5: ride the boat and shoot every skull.'],
        ['Skull 6: shoot the cabinet with the Ben Franklin Vlad until it glows, then win the three-round mini-game (match ghost colors to skull colors).', ['pictures/ghost_and_skulls_2/ghost_n_skull_2_machine.webp|Cabinet']]
      ], rec: [
        { id: 'gns2sym', at: 1, label: 'Cabinet symbol (Skull 2)', type: 'text', ph: 'Describe it' },
        { id: 'gns2col', at: 5, label: 'Skull colors (Skull 6)', type: 'text', ph: 'e.g. left red, middle blue…' }
      ] },
      { h: 'Free Max Ammo', steps: [
        ['Play the basement knife game and land all six knives on the zombie\'s head (once per round).']
      ]},
      { h: 'Extras', steps: [
        ['Play as Kevin Smith (after the main quest): Right, Left, Left, Down, Down, Right in the lobby.'],
        ['Director\'s Cut lobby music: on scene 1, throw a knife at the white talisman on the wheel zombie\'s head in the basement.', ['pictures/lobby_music/white_tailsman.webp|White talisman']]
      ]}
    ]}
  ]
});

M({
  id: 'shaolin', name: 'Shaolin Shuffle', group: 'dlc', pack: 'DLC 2 · Continuum',
  main: 'Pest Control',
  blurb: '1970s New York kung fu movie. Chi powers from Pam Grier and three fights with the Rat King.',
  img: 'https://mmmrkennedy.com/games/IW/shaolin_shuffle/',
  guide: 'https://mmmrkennedy.com/games/IW/shaolin_shuffle/shaolin_shuffle_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Shaolin_Shuffle',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Pack-a-Punch', note: 'About 1–1.5 hours solo (40–70 min on Director\'s Cut).', steps: [
        ['Find the flyer (Dojo garbage, a rooftop near Racin\' Stripes, the Disco roof, or Main Street by the Pink Cat), the coin (Sewers, under Tuff \'Nuff, after all four power switches) and a film reel (several spots).', ['pictures/pap/flyer_dojo.webp|Flyer', 'pictures/pap/coin_jug.webp|Coin', 'pictures/pap/film_reel_disco.webp|Film reel']],
        ['Flyer opens the Pink Cat front door, coin opens the side room, film reel fixes the projector. Take the wall portal to PaP (30 s).', ['pictures/pap/pink_cat_door1.webp|Pink Cat door', 'pictures/pap/projector.webp|Projector']]
      ]},
      { h: 'Part 1 — The Eye', steps: [
        ['From round 5, get a Chi style from Pam Grier in the Dojo and level it to Shurikens (tier 2).', ['pictures/pam.webp|Pam Grier']],
        ['Talk to Pam until she mentions the one who terrorizes the streets. Shoot a rat cage, follow the rat and shoot each cage it enters (six).', ['pictures/main_ee/eye/rat_cage_ramp.webp|Rat cage']],
        ['Kill 15–20 zombies inside the yellow circle by the last cage, then the ninjas, and take the key.', ['pictures/main_ee/eye/glowing_circle_key.webp|Circle', 'pictures/main_ee/eye/key.webp|Key']],
        ['Open the symbol locker in Bang Bangs subway. Shoot four symbols in order: right of the Dojo (left one), Disco downstairs bathroom (2nd from left), right of the Volk by Deadeye (1st), same spot (2nd).', ['pictures/main_ee/eye/locker.webp|Locker', 'pictures/main_ee/eye/symbols_1.webp|Symbols 1', 'pictures/main_ee/eye/symbols_3.webp|Symbols 3']],
        ['Use the circle in front of the Black Cat Dojo to summon the Rat King. Kill him and take the Eye.', ['pictures/main_ee/eye/eye_fight_symbol.webp|Summon circle', 'pictures/main_ee/eye/eye.webp|Eye']]
      ]},
      { h: 'Part 2 — The Brain', steps: [
        ['Talk to Pam again. Use the Eye to find and shoot six orange Rat King symbols (one at a time).', ['pictures/main_ee/brain/eye_symbols/symbol_example.webp|Symbol']],
        ['A subway phone rings with a Morse code number. Listen to the whole call (getting hit cancels it) and decode it with the chart.', ['pictures/main_ee/brain/phone_morse_code_map.webp|Morse chart']],
        ['Take the Nightmare Summer poster whose film registration number matches. Wrong poster = reshoot the six symbols.', ['pictures/main_ee/brain/poster_example.webp|Poster']],
        ['Put the poster on the spotlight on the Disco roof. Blow up the window marked X and kill the ninjas.', ['pictures/main_ee/brain/spotlight.webp|Spotlight', 'pictures/main_ee/brain/x_window.webp|X window']],
        ['Shoot the roof letter symbols to spell the word shown (e.g. SHAOLIN, KATANA). A wrong letter resets it.', ['pictures/main_ee/brain/letter_on_wall.webp|Letter on wall']],
        ['After the gong, use the Rat King symbol at the RPR Evo by Deadeye, kill him and take the Brain.', ['pictures/main_ee/brain/brain_fight.webp|Fight symbol', 'pictures/main_ee/brain/brain.webp|Brain']]
      ], rec: [
        { id: 'morse', at: [1, 2], label: 'Phone number from the Morse code', type: 'text', ph: 'e.g. 420' },
        { id: 'word', at: 4, label: 'Word to spell', type: 'text', ph: 'e.g. KATANA' }
      ] },
      { h: 'Part 3 — The Heart', steps: [
        ['Talk to Pam again. After three rounds of a cigarette burn on screen, you\'re locked outside the Dojo — kill the spawns for a turnstile piece and repair the spawn subway turnstile.', ['pictures/main_ee/heart/turnstile.webp|Turnstile piece', 'pictures/main_ee/heart/broken_turnstile.webp|Broken turnstile']],
        ['Climb the ladder by Mule Munchies and shoot the window symbol. Kill 5–10 zombies in each glowing circle that appears until a gong.', ['pictures/main_ee/heart/symbol_in_window.webp|Window symbol', 'pictures/main_ee/heart/glowing_circle_mule.webp|Circle']],
        ['Use the Disco DJ booth. Kill the disco-ball zombie while a normal zombie stands on the dance floor so the ball passes on. Do it 10 times.', ['pictures/main_ee/heart/dj_booth.webp|DJ booth', 'pictures/main_ee/heart/disco_ball_zombie.webp|Disco ball zombie']],
        ['Use the Rat King symbol in front of the Pink Cat, kill him and take the Heart.', ['pictures/main_ee/heart/heart.webp|Heart']]
      ], rec: [{ id: 'disco', at: 2, label: 'Disco-ball zombies (of 10)', type: 'nums', n: 1 }] },
      { h: 'Rat King boss', steps: [
        ['Talk to Pam and enter the lair in the sewers. Bring a high-ammo bullet weapon — running dry can soft-lock the Eye challenge.'],
        ['Hurt him until he retreats, then take an organ to the big floor symbol: Eye = shoot every revealed symbol; Heart = kill a zombie in each acid puddle; Brain = protect the blue-eyed zombies attacking it.'],
        ['After all three, kill him. The Soul Key (and Talisman on Director\'s Cut) spawns.', ['pictures/main_ee/soul_key.webp|Soul Key', 'pictures/main_ee/talisman.webp|Talisman']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Double Pack-a-Punch', steps: [
        ['Press the wall button in the PaP room, then race through the Main Street portal by Blue Bolts and grab the uncharged fuses within ~25 s.', ['pictures/pap/double_pap/fuse_box.webp|Fuse box']],
        ['Put them on the Main Street subway rails, let a train run over them, then insert them in the projector.', ['pictures/pap/double_pap/electric_rails.webp|Rails']]
      ]},
      { h: 'Skullbuster (all perks)', steps: [
        ['Collect six skulls: clean the machine, solve the mahjong, draw numbers on glass, the jump puzzle, jump in front of the train, and dial 555-0152 at a payphone. Then win the mini-game.']
      ]},
      { h: 'Katana & Nunchucks', steps: [
        ['Katana: after finishing the main quest once, it\'s on the Dojo wall for 10,000 (free in a game where you finish it).'],
        ['Nunchucks: finish the clock quest and a fire sale; then they\'re in the Mystery Wheel for good.']
      ]},
      { h: 'Song: "Cats on the Boulevard"', steps: [
        ['Find all seven hidden radios; the seventh starts the song.']
      ]},
      { h: 'Extras', steps: [
        ['Play as Pam Grier (after the main quest): Up, Up, Right, Left, Down, Left in the lobby.'],
        ['Dial numbers at subway payphones (911, 0, and more).']
      ]}
    ]}
  ]
});

M({
  id: 'radioactive', name: 'Attack of the Radioactive Thing', group: 'dlc', pack: 'DLC 3 · Absolution',
  main: 'Soul-Less',
  blurb: 'A 1950s B-movie beach town with Elvira. Build a zombie key, mix the right chemical and nuke Crog-Zilla.',
  img: 'https://mmmrkennedy.com/games/IW/attack_of_the_radioactive_thing/',
  guide: 'https://mmmrkennedy.com/games/IW/attack_of_the_radioactive_thing/attack_of_the_radioactive_thing_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Attack_of_the_Radioactive_Thing',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', note: 'About 50–80 minutes solo. Lots of numbers to note — use the boxes. <a href="https://mmmrkennedy.com/games/IW/attack_of_the_radioactive_thing/attack_solvers" target="_blank" rel="noopener">Chemistry & word solvers ↗</a>', steps: [
        ['Take the power switch handle from the arm on the beach to the power box by the drive-in.'],
        ['Get Elvira\'s book from the Ice Cream Parlour backroom safe and give it to Elvira in the TV studio for an empty vial.', ['pictures/pap/elviras_book.webp|Elvira\'s book']],
        ['Take the Cleaver from behind the Market counter and get ~20 kills to fill the vial. Give it back to Elvira; she opens the portal outside the TV studio.', ['pictures/cleaver.webp|Cleaver', 'pictures/pap/closed_portal.webp|Portal']],
        ['PaP portal moves afterward to behind the Ice Cream Parlour or the middle of the RV park (look for lightning).', ['pictures/pap/pap_ice_cream.webp|Ice Cream Parlour', 'pictures/pap/pap_rv.webp|RV park']]
      ]},
      { h: 'Body parts', steps: [
        ['Head: after PaP, press the projector-room button; grab it from the window ledge of the locked RV you land in.', ['pictures/main_ee/head.webp|Head']],
        ['Torso: repair the freezer trap and get the crowbar (Motel maintenance room), then melee the hanging pig next to the torso.', ['pictures/main_ee/torso.webp|Torso']],
        ['Left arm: the firepit right of the Volk in the RV park.', ['pictures/main_ee/left_arm.webp|Left arm']],
        ['Right arm: drop a Seismic Wave Generator next to the arm in the beach sand; grab it when it stops rising.', ['pictures/main_ee/right_arm.webp|Right arm']],
        ['Left leg: kill a radioactive soldier zombie (round 5+) with the Cleaver.', ['pictures/main_ee/radioactive_zombie.webp|Radioactive zombie']],
        ['Right leg: grenade the last tree on the left of the path from the Snack Shack to the TV station.', ['pictures/main_ee/right_leg_tree.webp|Tree']]
      ], rec: [{ id: 'parts', at: 0, label: 'Parts collected', type: 'multi', opts: ['Head', 'Torso', 'Left arm', 'Right arm', 'Left leg', 'Right leg'] }] },
      { h: 'Mirrors & the zombie key', steps: [
        ['Elvira\'s mirror: give her a filled vial, then take the mirror from the TV station couch. Broken mirror: crowbar the RV park bathroom mirror. Car mirror: crowbar the right mirror of the white car on Main Street.', ['pictures/main_ee/elviras_mirror.webp|Elvira\'s mirror', 'pictures/main_ee/unbroken_mirror.webp|Bathroom mirror', 'pictures/main_ee/car_mirror.webp|Car mirror']],
        ['In spawn: body parts on the upright bed, broken mirror on the pill-bottle table, Elvira\'s mirror on the crates by the zombie window, car mirror on the big crate.', ['pictures/main_ee/upright_bed.webp|Upright bed', 'pictures/main_ee/pill_bottles.webp|Pill table', 'pictures/main_ee/large_crate.webp|Big crate']],
        ['Take the punch card from the Ice Cream Parlour backroom desk and put it in the spawn machine.', ['pictures/main_ee/punch_card.webp|Punch card', 'pictures/main_ee/machine_in_spawn.webp|Machine']],
        ['Pick a combo of 3, 4, 5, 6, 8 (no repeats) and enter it in the order shown by the film reels on the TV station shelf.', ['pictures/main_ee/reels.webp|Film reels', 'pictures/main_ee/number_on_reel.webp|Reel number']],
        ['Use the machine again, then enter the combo backwards. The zombie becomes a key — open the gas station garage on Main Street.', ['pictures/main_ee/key.webp|Key', 'pictures/main_ee/garage_door.webp|Garage']]
      ], rec: [{ id: 'combo', at: [3, 4], label: 'My number combination', type: 'text', ph: 'e.g. 5 3 8 4 6' }] },
      { h: 'Chemistry set & nuke parts', steps: [
        ['Put the tube (Market backroom couch), gauge (RV picnic table by Mule Munchies) and screen (picnic table on the RV–beach path) on the empty garage table.', ['pictures/main_ee/tube.webp|Tube', 'pictures/main_ee/gauge.webp|Gauge', 'pictures/main_ee/empty_table_garage.webp|Table']],
        ['Put three nuke parts in the garage nuke: under the red car between the Motel and TV station, end of the stream under the beach bridge, behind the gate on the TV station fence.', ['pictures/main_ee/nuke_red_car.webp|Red car', 'pictures/main_ee/nuke_beach.webp|Beach', 'pictures/main_ee/nuke_tv_station.webp|TV station']]
      ]},
      { h: 'Safe code', steps: [
        ['Go prone on the left side of the Market backroom desk and read the four numbers.', ['pictures/main_ee/desk_prone.webp|Desk']],
        ['Crowbar four pressure gauges so each lands on one of those numbers: back of the gas station, right of the Snack Shack, back of the power building, Motel maintenance room.', ['pictures/main_ee/gauge_gas.webp|Gauge']],
        ['Open the Market safe and note the sequence on the scoreboard screen — you can\'t check it later.', ['pictures/main_ee/open_safe.webp|Safe']]
      ], rec: [
        { id: 'deskNums', at: 0, label: 'Desk numbers', type: 'nums', n: 4 },
        { id: 'safeSeq', at: 2, label: 'Safe sequence (needed in the boss)', type: 'text', ph: 'Write it exactly' }
      ] },
      { h: 'Chemistry', steps: [
        ['M number: on the Motel office wall right of the window. TV number: top "< ##" on the TV by Elvira.', ['pictures/main_ee/m_number.webp|M number', 'pictures/main_ee/elvira_tv.webp|TV number']],
        ['Put the numbers in the solver; it tells you the map color to set at the TV station control panel and the numbers to read off the spawn tent board.', ['pictures/main_ee/control_panel.webp|Control panel', 'pictures/main_ee/board_spawn_full_colour.webp|Tent board']],
        ['From round 10, collect batteries and fix a radio (power station porta-potty or Motel office couch). One recording names the right chemical.', ['pictures/main_ee/battery.webp|Battery', 'pictures/main_ee/radio_motel.webp|Motel radio']],
        ['Place the ingredients on the squares, enter the number on the keypad and press the big button. Taking damage means something\'s wrong.', ['pictures/main_ee/squares_chem.webp|Squares', 'pictures/main_ee/keypard_number.webp|Keypad', 'pictures/main_ee/big_button.webp|Button']],
        ['Give the chemical to the nuke; everyone interacts to charge it, then again to start the boss.']
      ], rec: [
        { id: 'mNum', at: 0, label: 'M number · TV number', type: 'nums', n: 2 },
        { id: 'chemColor', at: 1, label: 'Color to set', type: 'select', opts: ['Full color', 'Red', 'Green', 'Blue'] },
        { id: 'chemName', at: 2, label: 'Chemical named on the radio', type: 'text', ph: 'Chemical' }
      ] },
      { h: 'Crog-Zilla', steps: [
        ['Push the nuke cart to the water, shooting down eggs and fireballs so it keeps moving.', ['pictures/main_ee/nuke_cart_spawn.webp|Nuke cart']],
        ['Dodge the raised-claw slam (instant down). Hit the glowing chest with the beach death rays (by the OSA, RV path, Main Street path, concrete bridge); after one hit the Spartan SA3 wallbuy also hurts it.', ['pictures/main_ee/glowing_spot.webp|Chest', 'pictures/main_ee/ray_osa.webp|Death ray']],
        ['After 3–4 chest hits, everyone charges the empty cart and survives the radiation until pushed under the bridge.', ['pictures/main_ee/raditation_spit.webp|Radiation']],
        ['Jump and slide through the lasers to the cart before time runs out (everyone).', ['pictures/main_ee/nuke_cart_empty.webp|Cart']],
        ['Inside the boss, every player enters the safe sequence (3 strikes per try, 3 tries). Success gives the Soul Key.', ['pictures/main_ee/talisman.webp|Talisman (Director\'s Cut)']]
      ]}
    ]},
    { id: 'gear', label: 'Weapons & Traps', sections: [
      { h: 'Traps', steps: [
        ['Electric: part in the trash can by the bus, repair on the power station fence. Freezer: part on gas station boxes, repair on the Market freezer wall. Fuel tank: part on an RV picnic table, repair on the propane tank. Pool: part on a white truck, repair on the pool generator.']
      ]},
      { h: 'M.A.D. upgrades', steps: [
        ['With the crowbar, melee three power boxes: grip (outside the RV park men\'s room), crank (TV station by the portal), plunger (brick wall behind the gas station).', ['pictures/mad_upgrade/grip.webp|Grip', 'pictures/mad_upgrade/crank.webp|Crank', 'pictures/mad_upgrade/plunger.webp|Plunger']]
      ]},
      { h: 'Craftable scorestreaks', steps: [
        ['Each needs a blueprint plus three parts at a build table: Seismic Wave Generator (Ice Cream Parlour back door), Violet Ray (bench by the bus), Hypnosis (Market office shelf), Mind Control (outside Motel maintenance).', ['pictures/craftable_scorestreaks/wave_blueprint.webp|Seismic blueprint', 'pictures/craftable_scorestreaks/ray_blueprint.webp|Violet Ray blueprint']]
      ]},
      { h: 'Elvira melee upgrade', steps: [
        ['After opening the garage, take the pages from the garage shelf to Elvira.', ['pictures/elvira_upgrade/pages.webp|Pages']]
      ]},
      { h: 'Double Pack-a-Punch', steps: [
        ['Press the projector-room button; in the locked RV, crowbar the cabinet above the window and grab the fuses within ~6 s.', ['pictures/pap/double_pap/closed_cabinet.webp|Cabinet', 'pictures/pap/double_pap/fuses_rv.webp|Fuses']],
        ['Fill the vial again, drop the fuses in the power station, run the electric trap to charge them, then put them in the projector.', ['pictures/pap/double_pap/fuses_on_ground.webp|Fuses on ground']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Brachyura Boogie"', steps: [
        ['Interact with five vinyl records: power station (behind sheet metal), under the Market register, Snack Shack blue tarp, Motel trash can, under a table in the open RV.', ['pictures/song_ee/power.webp|Power station', 'pictures/song_ee/market.webp|Market', 'pictures/song_ee/snack_shack.webp|Snack Shack']]
      ]},
      { h: 'Skull Hop (all perks)', steps: [
        ['Shoot five hidden skulls (some need a sniper).', ['pictures/skull_hop/skull_1/skull_power.webp|Skull']],
        ['Leave the gas-station container in the radiation puddle by the Ice Cream Parlour for five minutes.', ['pictures/skull_hop/skull_2/radiation_puddle.webp|Puddle']],
        ['Put it in the pool and get exactly 16 kills in one pool trap use.'],
        ['Spell the Ice Cream Parlour wall word with the swingset symbols (solver on the guide).', ['pictures/skull_hop/skull_4/word.webp|Word']],
        ['With the S-Ravage and a pool container, shoot 7+ ghosts at a Wyler portrait.', ['pictures/skull_hop/skull_5/wyler_portrait_example.webp|Portrait']],
        ['Shoot the cabinet with a charged M.A.D. and win the three-round mini-game.', ['pictures/skull_hop/skull_hop_machine.webp|Cabinet']]
      ], rec: [{ id: 'hopWord', at: 3, label: 'Wall word', type: 'text', ph: 'Word' }] },
      { h: 'Calling cards & extras', steps: [
        ['Message Rerouted: snipe the turnstile sticking out of the rock on the hill between the gas station and the beach.', ['pictures/message_rerouted/turnstile.webp|Turnstile']],
        ['Make \'Em Squeal: take Fat from the leftmost freezer meat with the Cleaver, then crawl prone to the toilet in the middle RV bathroom stall.', ['pictures/make_em_squeal/stall.webp|Stall']],
        ['Willard\'s diary: read the book by the Motel pool (one entry per game, all after the main quest).'],
        ['Play as Elvira (after the main quest): Down, Right, Down, Left, Up, Right in the lobby.']
      ]}
    ]}
  ]
});

M({
  id: 'beast', name: 'The Beast from Beyond', group: 'dlc', pack: 'DLC 4 · Retribution',
  main: 'The End?',
  blurb: 'A 1980s sci-fi movie set on an ice-planet base. Cryptids, the Entangler, N31L and the final fight with Mephistopheles.',
  img: 'https://mmmrkennedy.com/games/IW/the_beast_from_beyond/',
  guide: 'https://mmmrkennedy.com/games/IW/the_beast_from_beyond/the_beast_from_beyond_guide',
  wiki: 'https://callofduty.fandom.com/wiki/The_Beast_from_Beyond',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power', note: 'About 45–60 minutes. Rated hard solo, much easier on Director\'s Cut. Works solo.', steps: [
        ['Drop down the hole in the Ops Center floor.', ['pictures/power/hole.webp|Hole']],
        ['Take N31L\'s head and put it in the slot by the spawn door. Power comes on.', ['pictures/power/head.webp|N31L\'s head', 'pictures/power/slot.webp|Slot']]
      ]},
      { h: 'Pack-a-Punch', steps: [
        ['Find three pieces of scrap metal: Cargo Bay, Medical Bay and the Theatre.', ['pictures/pap/metal_cargo_bay.webp|Cargo Bay', 'pictures/pap/metal_med_bay.webp|Medical Bay', 'pictures/pap/metal_theatre.webp|Theatre']],
        ['Place them on the broken bridge to reach the PaP portal.', ['pictures/pap/broken_bridge.webp|Broken bridge']]
      ]},
      { h: 'Floppy disks', note: 'You need the Entangler for disk 3 (from the Mystery Box or the Medical Bay wall).', steps: [
        ['Disk 1: the first Phantom you kill after your first trip through the PaP portal drops it.'],
        ['Disk 2: in the snow by a pillar to the left of the PaP portal.', ['pictures/main_ee/floppy_pap.webp|Disk 2']],
        ['Disk 3: in Proteus, aim the Entangler through the red-room fence at the floor vent while smoke is coming out, then pull the disk out.', ['pictures/main_ee/red_room_fence.webp|Fence', 'pictures/main_ee/vent_smoke.webp|Vent smoke', 'pictures/main_ee/red_room_floppy.webp|Disk 3']],
        ['Disk 4: shoot a space helmet through the Medical Bay force field at the monitor to knock the disk loose.', ['pictures/main_ee/force_field_door.webp|Force field', 'pictures/main_ee/force_field_monitor.webp|Monitor', 'pictures/main_ee/floppy_force_field.webp|Disk 4']],
        ['The insert order is random each game. Read the symbols on N31L\'s screen and match them with the cheat sheet (or an online solver).', ['pictures/main_ee/floppy_cheat.webp|Cheat sheet']]
      ], rec: [
        { id: 'floppy', at: 4, label: 'Disk order / symbols', type: 'text', ph: 'e.g. 3, 1, 4, 2' }
      ] },
      { h: 'Hack N31L', note: 'The hack lasts about 5 minutes, so do these quickly.', steps: [
        ['Theatre: use the Entangler to pull the button off the wall and shoot it into the Beast poster.', ['pictures/main_ee/button_theatre.webp|Theatre button', 'pictures/main_ee/beast_poster.webp|Beast poster']],
        ['Medical Bay: go prone and press the button under the desk.', ['pictures/main_ee/button_med_bay.webp|Med Bay button']],
        ['Handle panel: note which handles are horizontal, flip only those, and repeat until it finishes.', ['pictures/main_ee/handles.webp|Handles']]
      ], rec: [
        { id: 'handles', at: 2, label: 'Horizontal handles', type: 'text', ph: 'e.g. 1, 3, 4' }
      ] },
      { h: 'Install N31L', steps: [
        ['Entangle N31L to the computer in the projector (PaP) room. Doors close while you carry him; swapping weapons at a TV keeps them open.', ['pictures/main_ee/neil_computer_pap.webp|Projector-room computer']],
        ['Interact with the computer to start the boss fight.']
      ]},
      { h: 'Mephistopheles', note: 'Bring Ego Trip or other strong Fate & Fortune cards.', steps: [
        ['Grab the free ammo crate, then camp in the sloped crate.', ['pictures/main_ee/ammo_crate.webp|Ammo crate', 'pictures/main_ee/sloped_crate.webp|Sloped crate']],
        ['Turn off the three monitors quickly.', ['pictures/main_ee/console_1.webp|Monitor 1', 'pictures/main_ee/console_2.webp|Monitor 2', 'pictures/main_ee/console_3.webp|Monitor 3']],
        ['Survive the 99 countdown, then use the sparking computer.'],
        ['Kill the two Mammoths that come out of the crate.', ['pictures/main_ee/mammoth_crate.webp|Mammoth crate']],
        ['Watch the cutscene. There\'s no Soul Key on this map, and the map breaks afterward outside Director\'s Cut.']
      ]}
    ]},
    { id: 'venom', label: 'Venom', sections: [
      { h: 'Venom-X', steps: [
        ['Kill a Phantom in the electric water trap.', ['pictures/venom_x/water_trap.webp|Water trap']],
        ['Solve the button box (a solver helps).', ['pictures/venom_x/buttons.webp|Buttons']],
        ['Activate the containment chamber and stand in the circle.', ['pictures/venom_x/containment_chamber.webp|Chamber', 'pictures/venom_x/containment_activate.webp|Activate', 'pictures/venom_x/containment_circle.webp|Circle']],
        ['Finish the four mazes at the middle console.', ['pictures/venom_x/middle_console.webp|Console', 'pictures/venom_x/maze_screen.webp|Maze']],
        ['Pick up the Venom-X.', ['pictures/venom_x/venom_x_pickup.webp|Venom-X']]
      ]},
      { h: 'Venom-Y', steps: [
        ['Read the Morse code at the terminal right of Bang Bangs to get the key: ARCHER or CROSS.', ['pictures/venom_x/venom_y/key_terminal.webp|Key terminal']]
      ], rec: [
        { id: 'venomkey', at: 0, label: 'Venom key', type: 'select', opts: ['ARCHER', 'CROSS'] }
      ] },
      { h: 'Venom-Z', steps: [
        ['Flip the key, then kill non-standard zombies until it\'s at 50%.'],
        ['Enter 195# at the console.', ['pictures/message_sent/console.webp|Console']],
        ['Shoot the ghosts by PaP.'],
        ['Pack-a-Punch the Venom-Y for 10,000.']
      ], rec: [
        { id: 'ghosts', at: 2, label: 'Ghosts shot', type: 'nums', n: 1 }
      ] }
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Double Pack-a-Punch', steps: [
        ['Open the power box by Proteus and take the fuses.', ['pictures/pap/double_pap/fuse_box.webp|Fuse box', 'pictures/pap/double_pap/fuse_box_open.webp|Open']],
        ['Put the fuses on the Sasquatch cutout\'s hand.', ['pictures/pap/double_pap/sasquatch.webp|Sasquatch']],
        ['Take the film reel from concessions and put it in the projector.', ['pictures/pap/double_pap/film_reel.webp|Film reel', 'pictures/pap/double_pap/projector.webp|Projector']],
        ['Entangle the vortex at the wormhole trap for the Brute helmet and put it on the Brute cutout.', ['pictures/pap/double_pap/wormhole_trap.webp|Wormhole trap', 'pictures/pap/double_pap/vortex.webp|Vortex', 'pictures/pap/double_pap/brute.webp|Brute']],
        ['Take the charged fuses to the projector.']
      ]},
      { h: 'Skull Breaker (all perks)', steps: [
        ['Skull 1: grenade a power box, then shoot the skull.', ['pictures/skull_1/box_cargo.webp|Power box', 'pictures/skull_1/skull.webp|Skull']],
        ['Skull 2: stand on the four red Xs, grab the skull as it moves, and Entangle it.', ['pictures/skull_2/red_x_upper.webp|Red X', 'pictures/skull_2/skull_moved.webp|Moved skull']],
        ['Skull 3: shoot the symbol that doesn\'t match.', ['pictures/skull_3/quick_ref_image.webp|Quick reference']],
        ['Skull 4: walk the pink/green path.'],
        ['Skull 5: solve the 8 queens puzzle on the chessboard.', ['pictures/skull_5/chessboard.webp|Chessboard']],
        ['Skull 6: enter the code from the papers.', ['pictures/skull_6/all_skull_6_codes.webp|Codes']],
        ['Win the mini-game.']
      ], rec: [
        { id: 'skull6', at: 5, label: 'Skull 6 code', type: 'text', ph: 'Code' }
      ] },
      { h: 'Message Sent', steps: [
        ['Enter 197# at the console.', ['pictures/message_sent/console.webp|Console']],
        ['Use the vortex.', ['pictures/message_sent/vortex.webp|Vortex']],
        ['Entangle the turnstile from the KBS Longbow dumpster.', ['pictures/message_sent/turnstile.webp|Turnstile']]
      ]},
      { h: 'Song: "Scattered Lies"', steps: [
        ['Find all 15 astronaut plushies.', ['pictures/song_ee/astro_flooded.webp|Plushie', 'pictures/song_ee/astro_ticket.webp|Plushie']]
      ], rec: [
        { id: 'plush', at: 0, label: 'Plushies found (of 15)', type: 'nums', n: 1 }
      ] },
      { h: 'Extras', steps: [
        ['Director\'s Cut lobby music: shoot the talisman at the shooting gallery.', ['pictures/lobby_music/shooting_gallery.webp|Shooting gallery']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
