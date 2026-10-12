EB.register('bo1', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'kino', name: 'Kino der Toten', group: 'base', pack: 'Base game',
  main: null,
  blurb: 'Abandoned Berlin theater. No main quest — teleporter, film reels, a model rocket and the "115" song.',
  img: 'https://mmmrkennedy.com/games/BO1/kino_der_toten/',
  guide: 'https://mmmrkennedy.com/games/BO1/kino_der_toten/kino_der_toten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Kino_der_Toten',
  settings: [],
  tabs: [
    { id: 'basics', label: 'Power & PaP', sections: [
      { h: 'Power & teleporter', steps: [
        ['Turn on the power switch on the stage.', ['pictures/power/power.webp|Power switch']],
        ['Use the mainframe on the stage, then the pad in the spawn room to link. Take the stage teleporter to PaP — you have 30 s before you are sent back.', ['pictures/pap/mainframe.webp|Mainframe', 'pictures/pap/teleporter_pad.webp|Spawn pad']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "115"', steps: [
        ['Interact with three meteor rocks: in a jar under the stairs near Quick Revive, on a stand by the mannequins behind the dressing-room wallbuy, and on the letter shelf in the upstairs alley room.', ['pictures/song_ee/rock_spawn.webp|Spawn jar', 'pictures/song_ee/rock_dressing_room.webp|Dressing room', 'pictures/song_ee/rock_alley.webp|Alley room']]
      ]},
      { h: 'Film reels', steps: [
        ['After a PaP trip you land in one of four random rooms; some have a film reel. Grab it.'],
        ['Play it in the projector in the PaP room. There are three reels.', ['pictures/film_reels/projector.webp|Projector']]
      ]},
      { h: 'Model rocket launch', steps: [
        ['With power on, jump 5 times in front of the left mannequin by the Speed Cola door in the dressing room.', ['pictures/rocket_launch/mannequins.webp|Mannequins']],
        ['Teleport until you land in the Pentagon-style room and interact with the rocket model.', ['pictures/rocket_launch/rocket.webp|Rocket']]
      ]}
    ]}
  ]
});

M({
  id: 'five', name: '"Five"', group: 'base', pack: 'Hardened / Prestige bonus',
  main: null,
  blurb: 'The Pentagon, with Kennedy, Nixon, McNamara and Castro. Teleporters, DEFCON switches and the Pentagon Thief.',
  img: 'https://mmmrkennedy.com/games/BO1/five/',
  guide: 'https://mmmrkennedy.com/games/BO1/five/five_guide',
  wiki: 'https://callofduty.fandom.com/wiki/%22Five%22',
  settings: [],
  tabs: [
    { id: 'basics', label: 'Power & PaP', sections: [
      { h: 'Power', steps: [
        ['Go to the Labs (bottom floor). The switch is in the second room on the left from the elevator, the one with a big "3" on the wall.', ['pictures/power/power_switch.webp|Power switch', 'pictures/power/power_room_outside.webp|Room with the 3']]
      ]},
      { h: 'DEFCON & Pack-a-Punch', steps: [
        ['In the War Room (2nd floor), pull all four DEFCON switches: left of the lower elevator, between Jug and Mule Kick, left out of the first elevator, far side of the catwalk.', ['pictures/pap/defcon_lower_elevator.webp|By lower elevator', 'pictures/pap/defcon_jug.webp|Jug & Mule Kick', 'pictures/pap/defcon_catwalk_close.webp|Catwalk near', 'pictures/pap/defcon_catwalk_far.webp|Catwalk far']],
        ['At DEFCON 5, any teleporter takes you to the Panic Room. You get ~30 s of quiet to Pack-a-Punch before the doors open.', ['pictures/pap/pap_machine.webp|Pack-a-Punch']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Won\'t Back Down"', steps: [
        ['Interact with three red phones: table left of Quick Revive, desk in front of the power switch, table by a barrier in the Panic Room.', ['pictures/song_ee/phone_quick_revive.webp|By Quick Revive', 'pictures/song_ee/phone_power.webp|Power room desk', 'pictures/song_ee/phone_panic_room.webp|Panic Room']]
      ]},
      { h: 'Pentagon Thief → Bonfire Sale', steps: [
        ['The Thief replaces the dog round and steals your held weapon. Kill him before his last teleport to get your guns back plus a Max Ammo and Fire Sale.', ['pictures/thief_round/pentagon_thief.webp|Pentagon Thief']],
        ['Kill him before he steals anything for a Bonfire Sale: every teleporter goes to PaP and it costs 1,000.', ['pictures/thief_round/bonfire_sale_powerup.webp|Bonfire Sale']]
      ]}
    ]}
  ]
});

M({
  id: 'asc', name: 'Ascension', group: 'dlc', pack: 'DLC 1 · First Strike',
  main: 'Casimir Mechanism',
  blurb: 'Soviet cosmodrome. Lunar landers, the Gersh device and five nodes to free Dr. Gersh.',
  img: 'https://mmmrkennedy.com/games/BO1/ascension/',
  guide: 'https://mmmrkennedy.com/games/BO1/ascension/ascension_guide?version=bo1',
  wiki: 'https://callofduty.fandom.com/wiki/Ascension',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Needs 4 players — the button node can\'t be done with fewer. About 1.5 hours. Reward: a 90-second Death Machine.', steps: [
        ['Turn on the power at the top of the central building.', ['pictures/power/power_switch.webp|Power switch']],
        ['Open Pack-a-Punch: ride the lander from the PhD Flopper, Stamin-Up and Speed Cola stations back to spawn, then press the launch button by the power switch. PaP is in the room under the rocket.', ['pictures/pap/station_phd.webp|PhD station', 'pictures/pap/station_staminup.webp|Stamin-Up station', 'pictures/pap/station_speed_cola.webp|Speed Cola station', 'pictures/pap/rocket_launch_button.webp|Launch button']],
        ['Get an upgraded Ray Gun, upgraded Thundergun, Gersh Devices and Matryoshka Dolls from the box (spread them across players).']
      ]},
      { h: 'Node 1 — generator', steps: [
        ['Throw a Gersh Device at the sparking generator outside the map near the PhD Flopper lander.', ['pictures/main_ee/gersh_generator.webp|Generator']],
        ['Interact with the TV in the flooded area under the stairs at the Stamin-Up lander. The crashed module nearby shows one light per node.', ['pictures/main_ee/tv.webp|TV', 'pictures/main_ee/rocket_module.webp|Progress lights']]
      ]},
      { h: 'Node 2 — perk buttons', steps: [
        ['On the next space-monkey round (someone must own a perk), four buttons appear by Jug, PhD Flopper, Speed Cola and Stamin-Up. All four players press one at the same time.', ['pictures/main_ee/jug_button.webp|Jug', 'pictures/main_ee/phd_button.webp|PhD Flopper', 'pictures/main_ee/speed_cola_button.webp|Speed Cola', 'pictures/main_ee/staminup_button.webp|Stamin-Up']]
      ]},
      { h: 'Node 3 — pressure plate', steps: [
        ['Leave a crawler, then everyone stands on the round plate under the rocket\'s old spot by PaP for two straight minutes. The knife on the wall clock tracks progress; a Nuke drops when done.', ['pictures/main_ee/pressure_plate.webp|Plate', 'pictures/main_ee/clock.webp|Clock']]
      ]},
      { h: 'Node 4 — spell LUNA', steps: [
        ['While a lander is flying, letters appear in the sky. Fly through L, U, N, A in order and avoid the others.', ['pictures/main_ee/letter_in_sky.webp|Letters']],
        ['Fast route: Spawn→Stamin-Up (L), Stamin-Up→Spawn (U), Spawn→Speed Cola (N), Speed Cola→Stamin-Up (A).']
      ]},
      { h: 'Node 5 — free Gersh', steps: [
        ['Throw a Gersh Device onto the white orb in front of the crashed module by the Stamin-Up lander.', ['pictures/main_ee/white_orb.webp|White orb']],
        ['While it pulls, shoot it with the upgraded Thundergun and Ray Gun and throw a Matryoshka Doll at it until the orb rises and Gersh thanks you.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Abracadavre"', steps: [
        ['Interact with three teddy bears: spawn upper level left of the RK5, top of the wall at the Speed Cola station, behind the fence at the Stamin-Up station.', ['pictures/song_ee/bear_spawn.webp|Spawn', 'pictures/song_ee/bear_speed_cola.webp|Speed Cola', 'pictures/song_ee/bear_staminup.webp|Stamin-Up']]
      ]},
      { h: 'Ultimis Matryoshka dolls', steps: [
        ['Interact with four character dolls: Takeo by PhD Flopper, Richtofen on a desk above Jug, Nikolai left of Speed Cola, Dempsey by the trip mine wallbuy.', ['pictures/ultimis_dolls/takeo.webp|Takeo', 'pictures/ultimis_dolls/richtofen.webp|Richtofen', 'pictures/ultimis_dolls/nikolai.webp|Nikolai', 'pictures/ultimis_dolls/dempsey.webp|Dempsey']]
      ]}
    ]}
  ]
});

M({
  id: 'cotd', name: 'Call of the Dead', group: 'dlc', pack: 'DLC 2 · Escalation',
  main: 'Stand-In / Ensemble Cast',
  blurb: 'A frozen Siberian shipwreck with George A. Romero. Free the trapped Ultimis crew and win the Wunderwaffe DG-2.',
  img: 'https://mmmrkennedy.com/games/BO1/call_of_the_dead/',
  guide: 'https://mmmrkennedy.com/games/BO1/call_of_the_dead/call_of_the_dead_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Call_of_the_Dead',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo (Stand-In)'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Metal door & fuse', note: 'Solo earns "Stand-In", co-op earns "Ensemble Cast". About 25–45 minutes solo.', steps: [
        ['Turn on the power at the top of the broken ship.'],
        ['Knife the metal door in the room below PhD Flopper (bottom of the lighthouse) to hear the Ultimis crew.', ['pictures/main_ee/metal_door.webp|Metal door']],
        ['Find the fuse in the PhD room (desk left of PhD, left of the locker, or the table with car batteries) and put it in the box right of the door.', ['pictures/main_ee/fuse_desk.webp|Desk', 'pictures/main_ee/fuse_locker.webp|By locker', 'pictures/main_ee/fuse_table.webp|Battery table', 'pictures/main_ee/electrical_box.webp|Electrical box']]
      ]},
      { h: 'Generators & vodka', steps: [
        ['Destroy four red-lit generators with explosives (Semtex is above Jug at the bow): across from the metal door, in the water right of the MPL, in the ship-to-spawn shortcut, out the window left of Stamin-Up.', ['pictures/main_ee/gen_door.webp|By the door', 'pictures/main_ee/gen_mpl.webp|By the MPL', 'pictures/main_ee/gen_shortcut.webp|Shortcut', 'pictures/main_ee/gen_stamin_up.webp|Left of Stamin-Up']],
        ['Knife the metal door again.'],
        ['Find a frozen vodka bottle on a railing. Stand under it while someone knifes it, and catch it.', ['pictures/main_ee/bottle_example.webp|Bottle', 'pictures/main_ee/bottle_box.webp|By the box', 'pictures/main_ee/bottle_mpl.webp|By the MPL']],
        ['Solo: knife the bottle and step under it before it hits the ground.', null, { pl: ['1'] }],
        ['Put the bottle in the tube left of the door and knife the door.', ['pictures/main_ee/tube.webp|Tube']]
      ]},
      { h: 'Radios, ship & submarine', steps: [
        ['Use four radios in order: 1) computer by the box under the power room, 2) barrel in the Stamin-Up room, 3) cargo crate at the bow (bottom of the zipline), 4) cabinet under the stairs in the metal-door room.', ['pictures/main_ee/radio_power.webp|Radio 1', 'pictures/main_ee/radio_staminup.webp|Radio 2', 'pictures/main_ee/radio_crate.webp|Radio 3', 'pictures/main_ee/radio_door.webp|Radio 4']],
        ['On the ship\'s bridge, turn the wheel right twice (brown peg bottom-right), then pull the left lever once and the right lever three times. A submarine surfaces.', ['pictures/main_ee/wheel_post.webp|Wheel', 'pictures/main_ee/levers_post.webp|Levers', 'pictures/main_ee/sub.webp|Submarine']],
        ['While the sub is up, press four foghorns in order: 1) lighthouse base by the pool, 2) past the Speed Cola slide in the water, 3) lighthouse base left side, 4) behind the big rock past the slide. A wrong fourth press sinks it until next round.', ['pictures/main_ee/horn_lighthouse_1.webp|Horn 1', 'pictures/main_ee/horn_speed_cola_1.webp|Horn 2', 'pictures/main_ee/horn_lighthouse_2.webp|Horn 3', 'pictures/main_ee/horn_speed_cola_2.webp|Horn 4']]
      ]},
      { h: 'Lighthouse dials', steps: [
        ['Set the dials top to bottom to Yellow 2, Orange 7, Blue 4, Purple 6. Each turn also bumps the dials above and below. Easiest: fix Purple, then turn Orange until Blue is right, Yellow until Orange is right, Yellow + Purple together until Yellow is right, then Blue. <a href="https://mmmrkennedy.com/games/BO1/call_of_the_dead/call_of_the_dead_dial_solver" target="_blank" rel="noopener">Dial solver ↗</a>', ['pictures/main_ee/yellow.webp|Yellow', 'pictures/main_ee/orange.webp|Orange', 'pictures/main_ee/blue.webp|Blue', 'pictures/main_ee/purple.webp|Purple']]
      ], rec: [{ id: 'dials', at: 0, label: 'Current dial values (Yellow · Orange · Blue · Purple)', type: 'nums', n: 4 }] },
      { h: 'Golden Rod & Wunderwaffe', steps: [
        ['Get the V-R11 from the box and shoot a zombie on the lighthouse\'s bottom floor. It turns human and floats up the beam.', ['pictures/main_ee/beam_lighthouse_stairs.webp|Beam']],
        ['Shoot the floating human until it\'s downed before it reaches the top; the Golden Rod floats down.', ['pictures/main_ee/downed_human.webp|Downed human']],
        ['Put the Golden Rod in the tube left of the door. When the fuse box sparks, knife it — a Wunderwaffe DG-2 drops.', ['pictures/main_ee/golden_rod.webp|Golden Rod']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Not Ready to Die"', steps: [
        ['Interact with three red meteors: barrel by the water at spawn, under a small table in the PhD room, bench in the ship\'s dining area.', ['pictures/song_ee/rock_spawn.webp|Spawn', 'pictures/song_ee/rock_phd.webp|PhD room', 'pictures/song_ee/rock_cafeteria.webp|Dining area']]
      ]},
      { h: 'George A. Romero', steps: [
        ['Lead him into water to calm him; the V-R11 calms him briefly. Killing him drops a Death Machine and a random perk (a Wunderwaffe once the main quest is done).']
      ]},
      { h: 'Pack-a-Punch', steps: [
        ['After power, the lighthouse beam shows where PaP is: spawn, behind the lighthouse, or the ship\'s bow. It moves every few minutes.']
      ]}
    ]}
  ]
});

M({
  id: 'shang', name: 'Shangri-La', group: 'dlc', pack: 'DLC 3 · Annihilation',
  main: 'Time Travel Will Tell',
  blurb: 'Himalayan temple. Eclipse mode, six crystals, the Fractalizer and the Focusing Stone.',
  img: 'https://mmmrkennedy.com/games/BO1/shangri_la/',
  guide: 'https://mmmrkennedy.com/games/BO1/shangri_la/shangri_la_guide?version=bo1',
  wiki: 'https://callofduty.fandom.com/wiki/Shangri-La',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Needs 4 players — Eclipse mode takes four buttons at once. Each Eclipse lasts 5 minutes; a failed step just ends it. Reward: the picker gets all perks (repeatable once per player).', steps: [
        ['Turn on both power switches in the mine room under spawn.', ['pictures/power/power.webp|Power']],
        ['Open PaP: all players stand on the four statue plates at once (spawn by Quick Revive, bottom of the rope bridge, between the power switches, halfway down the tunnel).', ['pictures/pap/statue_spawn.webp|Spawn', 'pictures/pap/statue_rope_bridge.webp|Rope bridge', 'pictures/pap/statue_power.webp|Power', 'pictures/pap/statue_tunnel.webp|Tunnel']],
        ['Get the 31-79 JGb215 (shrink gun) from the box and keep it.'],
        ['Enter the Eclipse: all four players press the corner buttons around Quick Revive together.', ['pictures/main_ee/buttons_to_enter_eclipse.webp|Eclipse buttons']]
      ]},
      { h: 'Crystal 1 — symbol tiles', steps: [
        ['Press the button on the brick structure by the MPL wallbuy (mine cart side). 24 tiles rise.', ['pictures/main_ee/button_mpl.webp|Button']],
        ['Two players stand on tiles to reveal symbols; match all 12 pairs. A wrong match resets.', ['pictures/main_ee/shangri_la_symbols.webp|Symbol cheat sheet', 'pictures/main_ee/crystal_ball_1.webp|Crystal 1']]
      ]},
      { h: 'Crystal 2 — slide lever', steps: [
        ['Three players stand on the grate at the bottom of the water slide; the fourth slides down mashing interact on the right-side lever.', ['pictures/main_ee/slide_grate.webp|Grate', 'pictures/main_ee/water_slide_lever.webp|Lever', 'pictures/main_ee/crystal_ball_2.webp|Crystal 2']]
      ]},
      { h: 'Crystal 3 — shrink the ball', steps: [
        ['Knock the ball above the water slide down with an explosive, shrink it with the shrink gun, knife it down the slide, and stand on the geyser to launch it.', ['pictures/main_ee/ball_above_slide.webp|Ball', 'pictures/main_ee/ball_in_geyser.webp|In geyser', 'pictures/main_ee/crystal_ball_3.webp|Crystal 3']]
      ]},
      { h: 'Crystal 4 — ignite the gas', steps: [
        ['Turn the valve in the mine-cart tunnel four times. Lure a Napalm zombie past all three gas leaks without letting it explode on you, then pull the lever by the valve.', ['pictures/main_ee/valve.webp|Valve', 'pictures/main_ee/gas_pipe_mystery_box.webp|Leak', 'pictures/main_ee/gas_lever.webp|Lever', 'pictures/main_ee/crystal_ball_4.webp|Crystal 4']]
      ]},
      { h: 'Crystal 5 — plug the holes', steps: [
        ['Buy Spikemores in the power room. Set one off in front of each of the four holes on the left wall of the waterfall tunnel. Press the brick in the waterfall pool.', ['pictures/main_ee/hole.webp|Hole', 'pictures/main_ee/brick_to_push.webp|Brick', 'pictures/main_ee/crystal_ball_5.webp|Crystal 5']]
      ]},
      { h: 'Crystal 6 — tiles & dials', steps: [
        ['Melee all 12 wall symbol tiles so they glow (mine cart, spawn, mud room, waterfall, power room).', ['pictures/main_ee/tile_minecart_start.webp|Tile', 'pictures/main_ee/tile_power.webp|Tile']],
        ['Blow up the teepee outside the map near the mine-cart start (ends the Eclipse). Re-enter it.', ['pictures/main_ee/teepee.webp|Teepee']],
        ['Set the four mud room dials to 4, 3, 16, 1 (start left coming from spawn, go clockwise; " = 10, | = 5, • = 1).', ['pictures/main_ee/shang_dials_cheat_sheet.webp|Dial cheat sheet', 'pictures/main_ee/crystal_ball_6.webp|Crystal 6']]
      ]},
      { h: 'Dynamite & meteor', rec: [{ id: 'gongs', at: 1, label: 'Correct gongs (stay the same all game)', type: 'multi', opts: ['Rope bridge bottom', 'Rope bridge top, left of L-CAR', 'Rope bridge top, right of L-CAR', 'Mud room toward spawn', 'Spawn, left of Sheiva', 'Mine cart start', 'Down the mine-cart slope', 'Right of the tunnel'] }], steps: [
        ['Pack-a-Punch the shrink gun into the Fractalizer.'],
        ['Melee the four correct gongs out of eight (trial and error; correct ones stay the same). The crystals glow gold.', ['pictures/main_ee/gong_rope_bottom.webp|Gong', 'pictures/main_ee/glowing_crystals.webp|Gold crystals']],
        ['While they glow, stand under the crystal above the mine-cart geyser and shoot it with the Fractalizer to catch the dynamite.', ['pictures/main_ee/crystal_with_dynamite.webp|Dynamite crystal']],
        ['Still glowing, shoot the crystal above the mud room. The beam bounces through all six and shrinks the meteor above PaP.', ['pictures/main_ee/crystal_to_shoot.webp|Crystal to shoot', 'pictures/main_ee/big_meteor.webp|Meteor']],
        ['Raise the PaP stairs, let Brock and Gary talk, then give Brock the dynamite through the hole in the wall.', ['pictures/main_ee/wall_with_hole.webp|Wall']],
        ['Everyone runs down to end the Eclipse. Go back up and take the Focusing Stone from the altar.', ['pictures/main_ee/stone_on_altar.webp|Focusing Stone']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Pareidolia"', steps: [
        ['Interact with three red meteors: spawn right of the spikes to the mine carts, the mine-cart track room by the barbed wire, top of the rope bridge facing the waterfall.', ['pictures/song_ee/meteor_spawn.webp|Spawn', 'pictures/song_ee/meteor_underground.webp|Underground', 'pictures/song_ee/meteor_rope_bridge.webp|Rope bridge']]
      ]},
      { h: 'Explode all the monkeys', steps: [
        ['In spawn, stand on the slightly raised tile and look toward the PaP stairs. On a controller, quickly press D-pad Up, Up, Down, then A/Cross (0.6 s per press).', ['pictures/explode_monkeys/tile_to_stand_on.webp|Raised tile']]
      ]},
      { h: 'Free perk from a monkey', steps: [
        ['Let a Max Ammo sit until a monkey grabs it. As it cycles power-ups, a perk bottle flashes for a split second — kill the monkey right then and grab the perk.']
      ]}
    ]}
  ]
});

M({
  id: 'moon', name: 'Moon', group: 'dlc', pack: 'DLC 4 · Rezurrection',
  main: "Richtofen's Grand Scheme",
  blurb: 'Griffin Station on the Moon, via Area 51. Hacker, Wave Gun, the MPD — and Richtofen swaps places with Samantha.',
  img: '',
  guide: 'https://margwa.net/moon',
  wiki: 'https://callofduty.fandom.com/wiki/Moon',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'The first half ("Cryogenic Slumber Party") works solo. The second half ("Big Bang Theory") needs 2+ players, one playing Richtofen, and someone in the lobby must have finished the Call of the Dead and Shangri-La quests.', steps: [
        ['Turn on the power and grab the Hacker. Box for the Wave Gun, QEDs and Gersh Devices.'],
        ['Samantha Says: repeat the color sequence on the four terminals outside spawn. <a href="https://mmmrkennedy.com/games/BO1/moon/moon_simon_says" target="_blank" rel="noopener">Samantha Says helper ↗</a>']
      ]},
      { h: 'Cryogenic Slumber Party', steps: [
        ['On the labs\' 2nd floor, hack the wall panel, then hack four of the eight glowing access panels within two minutes.'],
        ['Press the four wall panels on the 2nd floor quickly, left to right.'],
        ['Let the excavator breach Tunnel 6, then hack the spawn terminal to restore it.'],
        ['Hit the Vril sphere in Tunnel 6 and follow it. When it sticks on the satellite on top of spawn, shoot it with the Wave Gun. Keep pushing it until it\'s in the MPD.'],
        ['Kill 25 zombies by the tube that appears, then flip the switch. Everyone gets a Death Machine.']
      ]},
      { h: 'Big Bang Theory', w: { pl: ['2', '3', '4'] }, steps: [
        ['At Area 51, grenade the shelf outside the map by the teleporter, then pull the tile in with a Gersh Device. Teleport back and throw a QED at the tiles near Quick Revive.'],
        ['Place the wire and the Vril device at the spawn computer. Richtofen interacts until the dialogue ends, then takes the device back.'],
        ['Get 25 kills at each of the four MPD tubes. Richtofen places the Vril device in the MPD — he gets all perks.'],
        ['Win Samantha Says three more times.'],
        ['Throw a QED at the front of the MPD until the Vril sphere moves to the Samantha Says computers, then throw a Gersh Device at it. Everyone gets all perks and Earth gets hit.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Coming Home"', steps: [
        ['Interact with three teddy bears: crates below the receiving area by the jump pad, behind a grate in the airlock between Tunnel 6 and the power room, behind a wall in the Tunnel 11 Stamin-Up room.']
      ]},
      { h: '8-bit songs', steps: [
        ['Computer by the MP5K: 8-bit "Damned". Equipment near Stamin-Up: 8-bit "Coming Home". Equipment across from Double Tap: 8-bit "Pareidolia".']
      ]}
    ]}
  ]
});

M({
  id: 'nacht', name: 'Nacht der Untoten', group: 'rez', pack: 'Rezurrection remaster',
  main: null,
  blurb: 'The original bunker, remastered. No main quest — a radio, a sniper cabinet and the "Undone" song.',
  img: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/',
  guide: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/nacht_der_untoten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Nacht_der_Untoten',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Undone"', steps: [
        ['Shoot three barrels outside the map: out the window beside the stairs, out the back-corner window diagonal from Mule Kick, and out the window closest to Mule Kick by the truck.', ['pictures/song_ee/barrel_stairs.webp|By the stairs', 'pictures/song_ee/barrel_back_corner.webp|Back corner', 'pictures/song_ee/barrel_mule_kick.webp|By the truck']]
      ]},
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
  id: 'verruckt', name: 'Verrückt', group: 'rez', pack: 'Rezurrection remaster',
  main: null,
  blurb: 'Wittenau asylum, remastered. No main quest — the toilet song and a song radio.',
  img: 'https://mmmrkennedy.com/games/WAW/verruckt/',
  guide: 'https://mmmrkennedy.com/games/WAW/verruckt/verruckt_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Verr%C3%BCckt',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Lullaby of a Dead Man"', steps: [
        ['In the bathroom near the power room (Double Tap side), flush the left-most toilet three times.', ['pictures/song_ee/toilet.webp|Left toilet']]
      ]},
      { h: 'Song radio', steps: [
        ['Shoot the radio on the desk in the zombie window on the balcony above the Mule Kick room.', ['pictures/radio/radio.webp|Radio', 'pictures/radio/radio_window.webp|Window']]
      ]}
    ]}
  ]
});

M({
  id: 'snn', name: 'Shi No Numa', group: 'rez', pack: 'Rezurrection remaster',
  main: null,
  blurb: 'The Japanese swamp, remastered. No main quest — just the phone song.',
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
  id: 'derriese', name: 'Der Riese', group: 'rez', pack: 'Rezurrection remaster',
  main: 'Fly Trap',
  blurb: 'The Giant factory, remastered. Link the teleporters and spring the Fly Trap (no reward in this version).',
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
      { h: 'Fly Trap', note: 'Works solo, about 5–20 minutes. No reward in WaW/BO1 — just Samantha.', steps: [
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
