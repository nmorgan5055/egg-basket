EB.register('bo3', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'soe', name: 'Shadows of Evil', group: 'base', pack: 'Base game',
  main: 'Apocalypse Averted',
  blurb: '1940s Morg City noir. Beast Mode, four district rituals, the Apothicon Sword and the Shadowman.',
  img: 'https://mmmrkennedy.com/games/BO3/shadows_of_evil/',
  guide: 'https://mmmrkennedy.com/games/BO3/shadows_of_evil/shadows_of_evil_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Shadows_of_Evil',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] },
    { id: 'chr', label: 'Your character (Keeper sword egg)', multi: true, opts: [['nero', 'Nero'], ['jack', 'Jack'], ['floyd', 'Floyd'], ['jess', 'Jessica']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'The full ending needs 4 players. Solo and 2–3 players can capture the Shadowman but get no cutscene. Roughly 1–2 hours.', steps: [
        ['Unlock Pack-a-Punch (all four district rituals + final ritual — see the Prep tab).', ['pictures/pap/pap.webp|PaP rift']],
        ['Every player builds the Apothicon Sword, then upgrades it to the Keeper sword (Prep tab).', ['pictures/apothicon_sword/stone_structure.webp|Sword structure']]
      ]},
      { h: 'Flag defense', steps: [
        ['Once everyone has an upgraded sword, interact with the open book in front of the bookshelf in Nero\'s room. It floats.', ['pictures/main_ee/book.webp|Book']],
        ['Pick up the flag that drops near Widow\'s Wine in the Underground. Normal zombies stop; only Meatballs and Parasites come. Bring PaP weapons.', ['pictures/main_ee/flag.webp|Flag']],
        ['Plant the flag at a lightning-marked spot in a district (2 per district). Kill the Meatballs before they reach it. Shoot the Shadowman if he shows up near it, or he spawns Parasites. If the flag breaks, end the round to retry.', ['pictures/main_ee/junction_spawn.webp|Junction (GobbleGum)', 'pictures/main_ee/junction_stamin.webp|Junction (Footlight door)', 'pictures/main_ee/footlight_entrance.webp|Footlight (Vesper)', 'pictures/main_ee/footlight_kn44.webp|Footlight (KN-44)', 'pictures/main_ee/waterfront_stairs.webp|Waterfront entrance', 'pictures/main_ee/waterfront_mystery_box.webp|Waterfront stairs', 'pictures/main_ee/canals_entrance.webp|Canals entrance', 'pictures/main_ee/canals_rabbit.webp|Across from Ruby Rabbit']],
        ['After 30 s the flag pulses red. Carry it to that district\'s Ghost Keeper at the ritual table.', ['pictures/main_ee/red_pulse.webp|Red pulse', 'pictures/main_ee/ghost_keeper.webp|Ghost Keeper']],
        ['End the round to respawn the flag and repeat until all four districts\' Keepers have flags.'],
        ['The four Keepers move next to the Gateworm pedestals in the PaP room. Each player gives their upgraded sword to a Keeper.', ['pictures/main_ee/keeper_pap_room.webp|Keepers in PaP room']]
      ]},
      { h: 'Boss: trap the Shadowman', steps: [
        ['The Keepers\' beam breaks his shield and stuns him.'],
        ['Shoot him to make him teleport around the arena until he is above the ritual table by the room entrance (within ~9 s).', ['pictures/main_ee/shadowman_above_table.webp|Above the table']],
        ['Interact with the table while he is above it to trap him in the Summoning Key.'],
        ['If you are too slow, reactivate all four Keepers and try again (each fail adds 2 s). If he raises the glowing key overhead, reactivate all four Keepers within ~8 s to cancel it.'],
        ['Fewer than 4 players: the quest ends here with no cutscene. You can still log it as done.', null, { pl: ['1', '2', '3'] }]
      ]},
      { h: 'Giant Gateworm (4 players)', w: { pl: ['4'] }, steps: [
        ['Everyone becomes corrupted (red mist) every 30–45 s. Walk into the white orb on the ritual table within 15 s or go down.', ['pictures/main_ee/white_orb.webp|White orb']],
        ['Kill purple Margwas to light up Beast chalices. Beast Mode lasts until you take enough damage.', ['pictures/main_ee/purple_margwa.webp|Purple Margwa']],
        ['A giant Gateworm and three Keepers appear where the tracks meet in the Junction. Hit the Gateworm with the train, then shock all three Keepers while the rails are electrified.', ['pictures/main_ee/keepers_and_big_gateworm.webp|Gateworm & Keepers']],
        ['Roles — P1 & P2: in Beast Mode at stations, shock the station power box once the train moves. P3: call the train, then Beast and shock your station\'s rails. P4: wait in the Canals under the Gateworm and shock the three Keepers.', ['pictures/main_ee/train_fuse_example.webp|Station power box', 'pictures/main_ee/electric_rails.webp|Electrified rails', 'pictures/main_ee/where_to_stand_junction.webp|P4 position']],
        ['When the Keepers fire their beam, the ending cutscene plays.']
      ]}
    ]},

    { id: 'prep', label: 'PaP & Sword', sections: [
      { h: 'Beast Mode basics', rec: [{ id: 'perkC', at: 1, label: 'Canals perk (bottle color)', type: 'select', opts: ['Juggernog (red)', 'Speed Cola (green)', 'Double Tap (orange)'] }, { id: 'perkW', at: 1, label: 'Waterfront perk', type: 'select', opts: ['Juggernog (red)', 'Speed Cola (green)', 'Double Tap (orange)'] }, { id: 'perkF', at: 1, label: 'Footlight perk', type: 'select', opts: ['Juggernog (red)', 'Speed Cola (green)', 'Double Tap (orange)'] }], steps: [
        ['Touch a flaming chalice to enter Beast Mode (25 s; 1 charge per round, 3 on solo). Shock fuse boxes, melee crates/doors, grapple to hooks.', ['pictures/beast_mode/beast_mode_chalice.webp|Chalice']],
        ['Shock the fuse box next to each perk or locked door to power it.', ['pictures/power/fuse_box.webp|Fuse box']]
      ]},
      { h: 'Pack-a-Punch rituals', steps: [
        ['In Beast Mode, melee the crate on the truck in spawn; take the Summoning Key.', ['pictures/pap/summoning_key_crate.webp|Truck crate']],
        ['Nero (Junction): shock the crane fuse, grapple to Nero\'s room via the fire escape, shock the outside fuse. Take the Lawyer\'s Pen from the crane box, place it on Nero\'s ritual table and survive.', ['pictures/pap/nero_spawn/crane_fuse.webp|Crane fuse', 'pictures/pap/nero_spawn/lawyers_pen.webp|Pen box', 'pictures/pap/nero_spawn/ritual_table.webp|Table']],
        ['Jack (Canals): shock the fuse through the ghostly wall at the far end, melee the box by the canal rift, grapple to the Ruby Rabbit roof and shock the fuse. Take the Detective\'s Badge to the Ruby Rabbit table.', ['pictures/pap/jack_canals/ethereal_wall.webp|Ghost wall', 'pictures/pap/jack_canals/badge_box.webp|Badge box', 'pictures/pap/jack_canals/ritual_table.webp|Table']],
        ['Floyd (Waterfront): grapple to the fire escape above the box spot and melee the box, then melee open the Boxing Gym door. Take the Championship Belt to the boxing ring table.', ['pictures/pap/floyd_waterfront/grapple.webp|Fire escape', 'pictures/pap/floyd_waterfront/gym_door.webp|Gym door', 'pictures/pap/floyd_waterfront/ritual_table.webp|Ring table']],
        ['Jessica (Footlight): grapple up near the entrance, jump to the ledge box and melee it, then grapple to the Black Lace sign and shock the fuse behind it. Take the Producer\'s Toupee to the stage table.', ['pictures/pap/jessica_footlight/box.webp|Ledge box', 'pictures/pap/jessica_footlight/black_lace_fuse_box.webp|Sign fuse', 'pictures/pap/jessica_footlight/ritual_table.webp|Stage table']],
        ['After each ritual, pick up the Gateworm.'],
        ['Take a rift to the Underground, walk up to the glowing symbol wall, place all four Gateworms on the pedestals (two repair wallrun walls, two repair the bridge), then do the final ritual. PaP appears as a blue rift.', ['pictures/pap/glowing_symbols.webp|Symbol wall', 'pictures/pap/gateworm_pedistals.webp|Pedestals', 'pictures/pap/ritual_table.webp|Final table']]
      ]},
      { h: 'Apothicon Sword', rec: [{ id: 'symC', at: [0, 1], label: 'Canals train symbol', type: 'text', ph: 'Describe the symbol' }, { id: 'symW', at: [0, 1], label: 'Waterfront train symbol', type: 'text', ph: 'Describe the symbol' }, { id: 'symF', at: [0, 1], label: 'Footlight train symbol', type: 'text', ph: 'Describe the symbol' }], steps: [
        ['Ride the train and note one symbol per district: Canals (left, round window), Waterfront (right, warehouse window), Footlight (left, apartment window).', ['pictures/apothicon_sword/symbol_canals.webp|Canals', 'pictures/apothicon_sword/symbol_waterfront.webp|Waterfront', 'pictures/apothicon_sword/symbol_footlight.webp|Footlight']],
        ['In the Underground, Beast Mode-shock those three symbols on the wall left of the GobbleGum machine. Take an egg from the stone structure.', ['pictures/apothicon_sword/wall_with_symbols.webp|Symbol wall', 'pictures/apothicon_sword/stone_structure.webp|Eggs & swords']],
        ['Break the tall wooden boxes in Beast Mode to reveal 4 statues (Underground, behind Ruby Rabbit, Waterfront ruined building, Footlight by Vesper). Place the egg on each and get ~12 kills.', ['pictures/apothicon_sword/wooden_box_underground.webp|Underground', 'pictures/apothicon_sword/wooden_box_canals.webp|Canals', 'pictures/apothicon_sword/wooden_box_waterfront.webp|Waterfront', 'pictures/apothicon_sword/wooden_box_footlight.webp|Footlight']],
        ['Place the charged egg in a sword at the stone structure and take the sword.']
      ]},
      { h: 'Keeper sword upgrade', steps: [
        ['Take a new egg from the Ghost Keeper at your character\'s ritual table.', ['pictures/apothicon_sword/keeper_sword/ghost_keeper.webp|Ghost Keeper']],
        ['Nero: Junction table.', ['pictures/apothicon_sword/keeper_sword/nero.webp|Nero'], { chr: ['nero'] }],
        ['Jack: Ruby Rabbit table.', ['pictures/apothicon_sword/keeper_sword/jack.webp|Jack'], { chr: ['jack'] }],
        ['Floyd: Boxing Gym table.', ['pictures/apothicon_sword/keeper_sword/floyd.webp|Floyd'], { chr: ['floyd'] }],
        ['Jessica: Burlesque stage table.', ['pictures/apothicon_sword/keeper_sword/jessica.webp|Jessica'], { chr: ['jess'] }],
        ['Place the egg on a district\'s ground symbol and kill the Margwa(s) it summons. One per round. Do all four districts.', ['pictures/apothicon_sword/keeper_sword/symbol_junction.webp|Junction', 'pictures/apothicon_sword/keeper_sword/symbol_canals.webp|Canals', 'pictures/apothicon_sword/keeper_sword/symbol_waterfront.webp|Waterfront', 'pictures/apothicon_sword/keeper_sword/symbol_footlight.webp|Footlight']],
        ['Give your sword to the Ghost Keeper and pick up the upgraded sword. Don\'t use its floating-sword ability in the PaP room (crash).']
      ]}
    ]},

    { id: 'build', label: 'Buildables', sections: [
      { h: 'Rift portals', steps: [
        ['Open the Beast-only door to each district\'s rift: Canals by the box spot, Waterfront down the alley right of the box, Footlight near where the toupee drops.', ['pictures/rift_portals/canals_rift.webp|Canals', 'pictures/rift_portals/waterfront_door.webp|Waterfront', 'pictures/rift_portals/footlight_door.webp|Footlight']]
      ]},
      { h: 'Apothicon Servant', steps: [
        ['Margwa Heart: first Margwa kill. Xenomatter: Parasite/Meatball drop (round 13+). Tentacle: purple pods (use a Fumigator).', ['pictures/apothicon_servant/margwa_heart.webp|Heart', 'pictures/apothicon_servant/xenomatter.webp|Xenomatter', 'pictures/apothicon_servant/tentacle.webp|Tentacle']],
        ['Build at a table: behind the Gym, in front of Ruby Rabbit, or below the Footlight station.', ['pictures/buildable_tables/canals.webp|Canals table']]
      ]},
      { h: 'Civil Protector', steps: [
        ['Find one fuse per district (Footlight, Canals, Waterfront — three possible spots each).', ['pictures/civil_protector/footlight_hvk.webp|Footlight', 'pictures/civil_protector/canals_kn44.webp|Canals', 'pictures/civil_protector/waterfront_box.webp|Waterfront']],
        ['Place all three in the fuse box right of the Footlight rift in the Underground.', ['pictures/civil_protector/fuse_box.webp|Fuse box']]
      ]},
      { h: 'Rocket Shield & Goddard upgrade', steps: [
        ['Window (Footlight), Base (Canals), Rockets (Waterfront). Each district\'s powered stairs must be open.', ['pictures/rocket_shield/window_bench.webp|Window', 'pictures/rocket_shield/base_bridge.webp|Base', 'pictures/rocket_shield/rocket_stairs.webp|Rockets']],
        ['Upgrade: get 10+ kills in a single shield charge 12 times (bowling-strike sound each set).']
      ]},
      { h: 'Upgraded Li\'l Arnies', steps: [
        ['Get 100 Arnie kills (team total), then throw Arnies at: top hat in Nero\'s room, cane on the Ruby Rabbit couch, bow tie in the Gym locker room.', ['pictures/upgraded_lil_arnies/arnie_nero.webp|Top hat', 'pictures/upgraded_lil_arnies/arnie_canals.webp|Cane', 'pictures/upgraded_lil_arnies/arnie_waterfront.webp|Bow tie']],
        ['Throw one at the Footlight ritual table for three upgraded Arnies.']
      ]},
      { h: 'Upgraded Trip Mines', rec: [{ id: 'tripside', at: 0, label: 'Side I picked (never hit this side\'s carts)', type: 'select', opts: ['Holly\'s Cream Cakes', 'Devil-O-Donuts'] }, { id: 'carts', at: 0, label: 'Enemy carts destroyed', type: 'multi', opts: ['Junction', 'Canals', 'Footlight', 'Waterfront'] }], steps: [
        ['Pick Holly\'s or Devil-O-Donuts and blow up all of the <b>other</b> side\'s carts with trip mines. Never hit your own side\'s cart.', ['pictures/upgraded_trip_mines/holly_cart.webp|Holly\'s cart', 'pictures/upgraded_trip_mines/devil_cart.webp|Devil cart']]
      ]}
    ]},

    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Snakeskin Boots"', steps: [
        ['Interact with three wooden clocks: Ruby Rabbit ground floor (left of entrance), Footlight station bench, Boxing Gym upper desk.', ['pictures/snakeskin_boots_song/clock_rabbit.webp|Ruby Rabbit', 'pictures/snakeskin_boots_song/clock_train.webp|Station bench', 'pictures/snakeskin_boots_song/clock_gym.webp|Gym desk']]
      ]},
      { h: 'Song: "Cold Hard Cash"', steps: [
        ['Collect the mic stand (Nero\'s room), wire (Canals, under stairs by Beast wall) and microphone (Underground, by the Waterfront rift).', ['pictures/cold_hard_cash_song/mic_stand.webp|Mic stand', 'pictures/cold_hard_cash_song/wire.webp|Wire', 'pictures/cold_hard_cash_song/mic.webp|Microphone']],
        ['Interact with the stand on the Footlight stage.', ['pictures/cold_hard_cash_song/mic_stand_stage.webp|Stage']]
      ]},
      { h: 'Margwa mask', steps: [
        ['Kill six Margwas.'],
        ['From the train, shoot six Margwa hearts on signs within two rides (Waterfront→Footlight, then Footlight→Canals).', ['pictures/margwa_mask/train_waterfront_m8a7.webp|Waterfront M8A7', 'pictures/margwa_mask/train_waterfront_champ_belt.webp|Belt building', 'pictures/margwa_mask/train_footlight_coffee.webp|Coffee sign', 'pictures/margwa_mask/train_footlight_theatre_sign.webp|Theater sign', 'pictures/margwa_mask/train_junction.webp|Devil-O-Donuts', 'pictures/margwa_mask/train_canals.webp|Ruby Rabbit Y']],
        ['Grab the flashing mask in one of the ritual rooms.', ['pictures/margwa_mask/mask_nero.webp|Nero\'s room']]
      ]},
      { h: 'Free Mega GobbleGum', steps: [
        ['Throw Widow\'s Wine grenades into the four lion mouths in the Canals stair room. Take the white gum.', ['pictures/free_gobblegum/lion_statues.webp|Lions', 'pictures/free_gobblegum/white_gobblegum.webp|White gum']],
        ['Put it on the plate in the Junction ice cream shop window, wait a full round, then collect it.', ['pictures/free_gobblegum/plate.webp|Plate']]
      ]},
      { h: 'Shadowman round skip', steps: [
        ['At game start, keep shooting the Shadowman on the fire escape above the Junction door. Rounds jump to 5, 10, 15 with bonus points. Stop for 5 s and he leaves.', ['pictures/shadowman_round_skip/shadowman_spawn.webp|Shadowman']]
      ]},
      { h: 'Sal\'s laundry ticket (500 pts)', steps: [
        ['Cook a grenade so it explodes by the ticket in Chang\'s Laundry outside spawn; pick it up off the box.', ['pictures/laundry_ticket/ticket.webp|Ticket']]
      ]},
      { h: 'Noir mode (black & white)', steps: [
        ['In the Boxing Gym upstairs, crouch at the front-right desk corner, hold reload looking at your feet, then drag your aim straight up to the picture left of the cipher. Can\'t be undone.', ['pictures/black_and_white_filter/desk.webp|Desk', 'pictures/black_and_white_filter/picture.webp|Picture']]
      ]},
      { h: 'Zombie Richtofen jump scare', steps: [
        ['After PaP, aim a scoped sniper at the glowing window on the ship in front of the Gym.', ['pictures/jumpscare/window_zoomed.webp|Window']]
      ]},
      { h: 'Mob of the Dead plane', steps: [
        ['After PaP opens, the first player to enter the Junction sees a plane fly over.']
      ]}
    ]}
  ]
});

M({
  id: 'giant', name: 'The Giant', group: 'base', pack: 'Bonus map · Season Pass',
  main: 'Paradoxical Prologue',
  blurb: 'Remake of Der Riese. Short main quest: the Fly Trap rewards the Annihilator.',
  img: 'https://mmmrkennedy.com/games/WAW/der_riese/',
  guide: 'https://mmmrkennedy.com/games/WAW/der_riese/der_riese_guide?version=remake',
  wiki: 'https://callofduty.fandom.com/wiki/The_Giant',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Power & Pack-a-Punch', steps: [
        ['Turn on the power switch at the back middle of the map.', ['pictures/pap/power_switch.webp|Power switch|Original Der Riese']],
        ['Link each teleporter: activate it, then reach the mainframe in spawn within 30 s. Teleporter A is left of spawn, B is right of spawn, C is past the power switch.', ['pictures/pap/tele_a.webp|Teleporter A|Original Der Riese', 'pictures/pap/tele_b.webp|Teleporter B|Original Der Riese', 'pictures/pap/tele_c.webp|Teleporter C|Original Der Riese', 'pictures/pap/mainframe.webp|Mainframe|Original Der Riese', 'pictures/pap/clock.webp|30 s timer|Original Der Riese']],
        ['After the third link the mainframe door opens. Pack-a-Punch a bullet weapon.']
      ]},
      { h: 'Fly Trap → Annihilator', note: 'Takes 5–20 minutes. Works solo.', steps: [
        ['Facing right from PaP, shoot the control panel near the zombie spawn on that side with your PaP\'d weapon. Objects fly around it and float away.', ['pictures/main_ee/panel.webp|Panel|Original Der Riese', 'pictures/main_ee/panel_zoomed_out.webp|Panel (wide)|Original Der Riese']],
        ['Hit the three floating objects (shoot, melee or grenade). Maxis talks after each one: furnace left of the right-most stairs (Teleporter A side), fire escape left of the power switch near the roof, left water tank as you enter Teleporter B.', ['pictures/main_ee/toy_furnace_bo3.webp|Furnace (A)', 'pictures/main_ee/toy_power_bo3.webp|Fire escape (power)', 'pictures/main_ee/toy_tele_b_bo3.webp|Water tank (B)']],
        ['After the dialogue, take the Annihilator from the furnace in the garage below Teleporter B. Picking it up completes the quest.', ['pictures/main_ee/annihilator.webp|Annihilator']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Beauty of Annihilation" (remix)', steps: [
        ['Hold interact on three brain jars (no sound, the jar just goes quiet): Animal Testing shelf at the foot of the Jug stairs, right of the Jug stairs, and the table by the chalkboard in the Teleporter B side room.', ['pictures/song_ee/jar_shelf.webp|Shelf jar|Original Der Riese', 'pictures/song_ee/jar_stairs.webp|Stairs jar|Original Der Riese', 'pictures/song_ee/jar_tele_b.webp|Teleporter B jar|Original Der Riese']]
      ]},
      { h: 'Secret perk (Deadshot or Stamin-Up)', steps: [
        ['After PaP, get Monkey Bombs from the box.'],
        ['Throw a monkey onto a teleporter pad and teleport before it blows. A light by the mainframe turns green. Do it at all three teleporters.', ['pictures/new_perk/perk_panel.webp|Light panel']],
        ['Press the panel button. The Giant\'s eye beam melts the snow block in spawn and reveals the perk.', ['pictures/new_perk/new_perk.webp|Revealed perk']]
      ]},
      { h: 'Small details', steps: [
        ['Throw a Monkey Bomb into a furnace to hear it scream.'],
        ['Look for Icarus (the Mob of the Dead plane) on the building behind the power switch.']
      ]}
    ]}
  ]
});

M({
  id: 'de', name: 'Der Eisendrache', group: 'dlc', pack: 'DLC 1 · Awakening',
  main: "My Brother's Keeper",
  blurb: 'Castle on an Austrian mountain. Four elemental bows, a Death Ray, time travel and the Keeper boss.',
  img: 'https://mmmrkennedy.com/games/BO3/der_eisendrache/',
  guide: 'https://mmmrkennedy.com/games/BO3/der_eisendrache/der_eisendrache_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Der_Eisendrache',
  settings: [
    { id: 'bow', label: 'Bows you are building', multi: true, opts: [['storm', 'Storm'], ['wolf', 'Wolf'], ['void', 'Void'], ['fire', 'Fire']] },
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Setup', note: 'Solo takes roughly 40–60 minutes. Everyone needs the Ragnarok DG-4 for the boss.', steps: [
        ['Turn on the power in the Armory (Stamin-Up room).', ['pictures/power/power.webp|Power switch']],
        ['Get the Wrath of the Ancients bow (see the Bows tab).', ['pictures/wrath_of_the_ancients/chest.webp|Bow chest behind the Knight\'s Tomb']],
        ['Build at least one upgraded bow. In co-op you need as many <b>different</b> upgraded bows as there are players (4 players = all four bows).'],
        ['Build the Ragnarok DG-4 for every player (see Buildables tab). Activate the Death Ray trap at least once.']
      ]},
      { h: 'Time Travel #1 — fuses & safe code', rec: [{ id: 'safe', at: 3, label: 'Safe code, top to bottom (changes every trip)', type: 'seq', n: 3, opts: ['Rocket', 'Circle', 'Lightning', 'D'] }], steps: [
        ['Hold the <b>base</b> Wrath of the Ancients and shoot all six prongs around the top of the Undercroft teleporter. Each glows when hit; a growl plays when all six are done.', ['pictures/main_ee/teleporter.webp|Teleporter prongs', 'pictures/main_ee/glowing_prong.webp|Lit prong']],
        ['Swap to your upgraded bow and shoot four wisps, one at a time, before the round ends. Each hit spawns the next one somewhere else. Shooting an empty wisp spot fails it — retry next round.', ['pictures/main_ee/wisp_church.webp|Church clock above dragon', 'pictures/main_ee/wisp_m8a7.webp|Church radio by M8A7', 'pictures/main_ee/wisp_clock_barracks.webp|Upper Courtyard clock', 'pictures/main_ee/wisp_power.webp|Power room telephone', 'pictures/main_ee/wisp_living_quarters.webp|Globe near Samantha\'s room', 'pictures/main_ee/wisp_gatehouse.webp|Boxes above Double Tap', 'pictures/main_ee/wisp_car.webp|Car near Double Tap', 'pictures/main_ee/wisp_spawn.webp|Next to Quick Revive']],
        ['When the teleporter glows purple, all players step in and activate it.', ['pictures/main_ee/purple_tele.webp|Purple teleporter']],
        ['In the past: grab the Death Ray fuses (left of the teleporter) and the soul canister (right). Watch Groph enter the safe code and write down the 3 symbols, top to bottom.', ['pictures/main_ee/fuses.webp|Fuses', 'pictures/main_ee/canister.webp|Canister', 'pictures/main_ee/safe_code.webp|Safe code screen']],
        ['A Panzer spawns when you return. Try not to end the round — you time travel again later.']
      ]},
      { h: 'Open the safe', rec: [{ id: 'safe', at: 2, label: 'Safe code to enter, top to bottom', type: 'seq', n: 3, opts: ['Rocket', 'Circle', 'Lightning', 'D'] }], steps: [
        ['Put the fuses into the side of the Death Ray console (they start sparking).', ['pictures/main_ee/death_ray_fuse.webp|Fuse slot', 'pictures/main_ee/death_ray_fuse_placed.webp|Fuses placed']],
        ['Flip the console switch from "Destroy" to "Protect".', ['pictures/main_ee/death_ray_switch.webp|Mode switch']],
        ['Enter the safe code at the terminal by the Clock Tower. A wrong code blows the fuses out and you must time travel again (the code changes).', ['pictures/main_ee/simon_says_clocktower.webp|Clock Tower terminal']],
        ['Open the safe in the Teleporter Room and take the coils.', ['pictures/main_ee/open_safe.webp|Open safe']]
      ]},
      { h: 'Simon Says & shoot down the rocket', rec: [{ id: 'simonct', at: 2, label: 'Clock Tower Simon Says, symbols in order', type: 'seq', n: 7, opts: ['Rocket', 'Circle', 'Lightning', 'D'] }, { id: 'simonrp', at: 3, label: 'Rocket Pad Simon Says, symbols in order', type: 'seq', n: 7, opts: ['Rocket', 'Circle', 'Lightning', 'D'] }], steps: [
        ['Put a coil in each pylon on either side of the Death Ray platform.', ['pictures/main_ee/pylon_1.webp|Pylon 1', 'pictures/main_ee/pylon_2.webp|Pylon 2']],
        ['Flip the Death Ray back to "Destroy".'],
        ['Play Simon Says at the Clock Tower terminal: match the symbol on the big screen by pressing the small screen with the same symbol (~7 rounds). Dogs spawn endlessly while it runs. A mistake resets both terminals.', ['pictures/main_ee/simon_says_clocktower.webp|Clock Tower terminal', 'pictures/main_ee/death_ray_orb_glow.webp|Orb lights up when done']],
        ['Do the same at the Rocket Pad terminal near the PaP spot. Wait for any rocket test to finish first.', ['pictures/main_ee/simon_says_rocket_pad.webp|Rocket Pad terminal']],
        ['Press the glowing green button on the back of the Death Ray console. The rocket is shot down and Dempsey\'s pod lands by the Electric Trap doorway.', ['pictures/main_ee/death_ray_button.webp|Green button', 'pictures/main_ee/dempsey_pod.webp|Dempsey\'s pod']]
      ]},
      { h: 'Time Travel #2 & charge the Keeper', steps: [
        ['Repeat the prongs + four wisps, then take the purple teleporter again (wisps come back each round).'],
        ['In the past, use the machine left of the Kronorium; a box opens by the entrance. Take the stone tablet.', ['pictures/main_ee/machine.webp|Machine', 'pictures/main_ee/stone_tablet.webp|Stone tablet']],
        ['Back in the present, take the Golden Rod from the rocket wreckage in the Upper Courtyard.', ['pictures/main_ee/golden_rod.webp|Golden Rod']],
        ['Insert the rod into the Knight\'s Tomb (in front of the bow chest). A ghost Keeper appears.', ['pictures/main_ee/knights_tomb.webp|Knight\'s Tomb', 'pictures/main_ee/ghost_keeper.webp|Ghost Keeper']],
        ['Follow the Keeper. At its Double Tap stop, place the stone tablet in the wall left of it.', ['pictures/main_ee/where_to_place_tablet.webp|Tablet spot']],
        ['At each of its four circles, stand inside and kill zombies with the bow shown by your screen tint: dark blue = Storm, purple = Void, orange = Fire, light blue = Wolf.', ['pictures/main_ee/keeper_courtyard.webp|Upper Courtyard', 'pictures/main_ee/keeper_mule_kick_tunnel.webp|Mule Kick tunnel', 'pictures/main_ee/keeper_gatehouse.webp|Gatehouse', 'pictures/main_ee/keeper_knights_hall.webp|Knight\'s Hall', 'pictures/main_ee/blue_hud.webp|Storm tint', 'pictures/main_ee/purple_hud.webp|Void tint', 'pictures/main_ee/orange_hud.webp|Fire tint', 'pictures/main_ee/light_blue_hud.webp|Wolf tint']],
        ['Solo: only the bow(s) you built are asked for, so one is enough.', null, { pl: ['1'] }],
        ['Co-op: you need at least as many different upgraded bows as players or this step stalls.', null, { pl: ['2', '3', '4'] }],
        ['After all four circles the Keeper becomes real and a larger pyramid rises in the Undercroft. Place your canister in the empty corner.', ['pictures/main_ee/real_keeper.webp|Real Keeper', 'pictures/main_ee/new_pyramid.webp|New pyramid', 'pictures/main_ee/lack_of_canister.webp|Empty corner']],
        ['Every player stands on a different blue floor panel around the pyramid and plants their Ragnarok at the same time to start the boss.', ['pictures/main_ee/where_to_plant_rags.webp|Blue panels']]
      ]},
      { h: 'Boss: the Keeper', steps: [
        ['Run laps around the arena. Avoid magma rocks and chasing skulls; skeleton zombies are the real threat.'],
        ['When the Keeper moves to the center and charges (white wisp under it), plant your Ragnarok directly under it — or hide behind a pillar. The wipe downs anyone exposed.', ['pictures/main_ee/boss_wisp.webp|Charge-up wisp']],
        ['While it is stunned, shoot the glowing symbol on its chest until the screen shakes and it recoils.', ['pictures/main_ee/keeper_crit.webp|Chest weak point']],
        ['Grab the Max Ammo and your Ragnaroks. Kill the Panzers to recharge (about 1/3 charge each).'],
        ['Repeat for three damage phases total.']
      ]},
      { h: 'Ending', steps: [
        ['Back in the Undercroft, take the Summoning Key from the front of the pyramid (interact again once it stops glowing).', ['pictures/main_ee/summoning_key_pyramid.webp|Summoning Key']],
        ['Place the key at the Clock Tower terminal to start the ending cutscene.', ['pictures/main_ee/final_computer.webp|Final terminal']]
      ]}
    ]},

    { id: 'bows', label: 'Bows', sections: [
      { h: 'Wrath of the Ancients (base bow)', steps: [
        ['Kill a zombie near each dragon head to wake it, then feed it 8 zombies. Wait for each body to be swallowed before the next kill. Any order.', ['pictures/wrath_of_the_ancients/dragon_statue_lower.webp|Lower Courtyard dragon', 'pictures/wrath_of_the_ancients/dragon_statue_church.webp|Church dragon', 'pictures/wrath_of_the_ancients/dragon_statue_undercroft.webp|Undercroft dragon']],
        ['When all three crumble, open the chest behind the Knight\'s Tomb (room between Undercroft and Church). Every player can take one.', ['pictures/wrath_of_the_ancients/chest.webp|Bow chest']]
      ]},
      { h: 'Storm Bow', w: { bow: ['storm'] }, steps: [
        ['On the Death Ray platform, hit the weather vane on the small tower with a charged shot. Pick up the broken arrow.', ['pictures/wrath_of_the_ancients/storm_bow/weather_vane.webp|Weather vane', 'pictures/wrath_of_the_ancients/storm_bow/storm_arrow_broken.webp|Broken arrow']],
        ['Light three bonfires with charged shots: behind the Clock Tower, the far mountain (seen from the Wunderfizz area), and the hill at the Rocket Pad.', ['pictures/wrath_of_the_ancients/storm_bow/bonfire_clocktower_line_up.webp|Clock Tower line-up', 'pictures/wrath_of_the_ancients/storm_bow/bonfire_mountain_line_up.webp|Mountain line-up', 'pictures/wrath_of_the_ancients/storm_bow/bonfire_rocket_pad_line_up.webp|Rocket Pad line-up']],
        ['Activate Undercroft low gravity, then wallrun over all five wind panels (progress saves per panel).', ['pictures/wrath_of_the_ancients/storm_bow/panel_tele.webp|By teleporter door', 'pictures/wrath_of_the_ancients/storm_bow/panel_pap.webp|Opposite PaP spot', 'pictures/wrath_of_the_ancients/storm_bow/panel_jug.webp|Above Jug door', 'pictures/wrath_of_the_ancients/storm_bow/panel_fast_travel.webp|Above spawn window', 'pictures/wrath_of_the_ancients/storm_bow/panel_workbench.webp|Right of workbench']],
        ['Get 5 kills by each of three urns to charge them. Hold a charged shot near the urn to electrify the arrow, then shoot that urn\'s bonfire. The mountain one must be shot from the zombie window in the L-CAR 9 room.', ['pictures/wrath_of_the_ancients/storm_bow/urn_clocktower.webp|Clock Tower urn', 'pictures/wrath_of_the_ancients/storm_bow/urn_lcar.webp|L-CAR urn', 'pictures/wrath_of_the_ancients/storm_bow/urn_rocket_pad.webp|Rocket Pad urn', 'pictures/wrath_of_the_ancients/storm_bow/bonfire_mountain_electric_line_up.webp|Mountain shot from L-CAR']],
        ['Interact with the wall under the weather vane to reforge the arrow.', ['pictures/wrath_of_the_ancients/storm_bow/where_to_put_arrow.webp|Wall spot']],
        ['Place it in the Storm box by the pyramid, kill zombies on the pyramid stairs until it glows, then trade in your base bow.', ['pictures/wrath_of_the_ancients/storm_bow/storm_bow_box.webp|Storm box', 'pictures/wrath_of_the_ancients/common/area_where_kills_count.webp|Kill zone']]
      ]},
      { h: 'Wolf Bow', w: { bow: ['wolf'] }, steps: [
        ['Interact with four paintings in story order (locations are random): king on throne → king riding → fighting Apothicons → king dead. A strum means correct; a buzzer resets.', ['pictures/wrath_of_the_ancients/wolf_bow/painting_king_throne.webp|1. Throne', 'pictures/wrath_of_the_ancients/wolf_bow/painting_king_riding.webp|2. Riding', 'pictures/wrath_of_the_ancients/wolf_bow/painting_apothicon.webp|3. Apothicons', 'pictures/wrath_of_the_ancients/wolf_bow/painting_king_dead.webp|4. Dead']],
        ['After the howl, take the broken arrow from the wall at the bottom of the Undercroft stairs.', ['pictures/wrath_of_the_ancients/wolf_bow/broken_wolf_arrow.webp|Broken arrow']],
        ['At the Rocket Pad, shoot the rock under the red banner on the cliff (above VMP). Grab the skull that rolls to the gate.', ['pictures/wrath_of_the_ancients/wolf_bow/cliff.webp|Cliff', 'pictures/wrath_of_the_ancients/wolf_bow/skull_near_gate.webp|Skull']],
        ['Put the skull on the headless skeleton by the Wolf box. Follow the ghost wolf; at each of its 3 dig spots get ~10 kills and take the bone.', ['pictures/wrath_of_the_ancients/wolf_bow/headless_skeleton.webp|Skeleton', 'pictures/wrath_of_the_ancients/wolf_bow/dig_1.webp|Dig 1', 'pictures/wrath_of_the_ancients/wolf_bow/dig_2.webp|Dig 2', 'pictures/wrath_of_the_ancients/wolf_bow/dig_3.webp|Dig 3']],
        ['The wolf sits facing a wall near Jug. During low gravity, wallrun that wall and shoot the glowing two-wolf symbol without touching the ground.', ['pictures/wrath_of_the_ancients/wolf_bow/dog_sitting.webp|Wolf sitting', 'pictures/wrath_of_the_ancients/wolf_bow/wolf_symbols.webp|Symbol']],
        ['Land on the platform that appears and deposit the bones; a skeleton hands you the reforged arrow.', ['pictures/wrath_of_the_ancients/wolf_bow/platform.webp|Platform']],
        ['Place it in the Wolf box, kill zombies on the pyramid stairs until it glows, then trade in your base bow.', ['pictures/wrath_of_the_ancients/wolf_bow/wolf_bow_box.webp|Wolf box']]
      ]},
      { h: 'Void Bow', rec: [{ id: 'voidnames', at: [4, 5], label: 'Names the urn says, in order', type: 'seq', n: 3, opts: ['Crown', 'Stag', 'Heart', 'Door', 'Griffin', 'Horn'] }], w: { bow: ['void'] }, steps: [
        ['Shoot the purple symbol above the gate by Double Tap. Pick up the broken arrow.', ['pictures/wrath_of_the_ancients/void_bow/purple_arrow_wall.webp|Symbol', 'pictures/wrath_of_the_ancients/void_bow/broken_arrow.webp|Broken arrow']],
        ['In the round room under the Clock Tower, melee a zombie standing on the purple tile using the bow (not the knife). Interact with the urn that appears.', ['pictures/wrath_of_the_ancients/void_bow/glowing_tile.webp|Purple tile', 'pictures/wrath_of_the_ancients/void_bow/urn.webp|Urn']],
        ['Interact with six skulls: Church stairs window sill, Mule Kick ledge, ledge by Double Tap, toy box in Samantha\'s room, sink in the Teleporter Room, back of the Rocket Pad truck.', ['pictures/wrath_of_the_ancients/void_bow/skull_upper_courtyard.webp|Church stairs', 'pictures/wrath_of_the_ancients/void_bow/skull_mule_kick.webp|Mule Kick', 'pictures/wrath_of_the_ancients/void_bow/skull_double_tap.webp|Double Tap', 'pictures/wrath_of_the_ancients/void_bow/skull_sams_room.webp|Samantha\'s room', 'pictures/wrath_of_the_ancients/void_bow/skull_sink.webp|Sink', 'pictures/wrath_of_the_ancients/void_bow/skull_truck.webp|Truck']],
        ['Lead six crawlers into the purple circle in the urn room so the skulls eat them.'],
        ['The urn says three names (turn on subtitles; shoot the urn to repeat). Find the matching symbols on the Knight statues in the Knight\'s Hall.', ['pictures/wrath_of_the_ancients/void_bow/knight_room.webp|Knight\'s Hall', 'pictures/wrath_of_the_ancients/void_bow/symbol_cheat_sheet.webp|Symbol cheat sheet']],
        ['Kill zombies until they drop purple symbols; grab the three that match. Back in the urn room, shoot the floor symbols in the order the names were spoken.', ['pictures/wrath_of_the_ancients/void_bow/symbol_drop.webp|Symbol drop', 'pictures/wrath_of_the_ancients/void_bow/floor_symbols.webp|Floor symbols']],
        ['Take the reforged arrow from the beam of light, place it in the Void box, charge it on the pyramid stairs, then trade in your base bow.', ['pictures/wrath_of_the_ancients/void_bow/beam_of_light.webp|Beam', 'pictures/wrath_of_the_ancients/void_bow/void_box.webp|Void box']]
      ]},
      { h: 'Fire Bow', rec: [{ id: 'fireplace', at: [3, 4], label: 'Fireplace with (or missing) the Keeper symbol', type: 'select', opts: ['Church', 'Richtofen\'s room', 'Lower Courtyard'] }], w: { bow: ['fire'] }, steps: [
        ['At the top of the Clock Tower, shoot the symbol on the wall and take the broken arrow.', ['pictures/wrath_of_the_ancients/fire_bow/arrow_wall.webp|Wall symbol', 'pictures/wrath_of_the_ancients/fire_bow/broken_arrow.webp|Broken arrow']],
        ['Wait out a rocket test in the Rocket Pad teleporter tunnel. When the doors open, shoot the glowing orange rock above VMP within ~7 seconds.', ['pictures/wrath_of_the_ancients/fire_bow/glowing_rock.webp|Glowing rock']],
        ['Fly on Wunderspheres and shoot three ritual circles (Gatehouse, Death Ray, Clock Tower). Then stand in each and get ~10 kills until fire shoots up.', ['pictures/wrath_of_the_ancients/fire_bow/circle_gatehouse.webp|Gatehouse circle', 'pictures/wrath_of_the_ancients/fire_bow/circle_death_ray.webp|Death Ray circle', 'pictures/wrath_of_the_ancients/fire_bow/circle_clocktower.webp|Clock Tower circle']],
        ['Use the clock mechanism at the top of the Clock Tower stairs. Find which of three fireplaces matches (or lacks) the Keeper symbol.', ['pictures/wrath_of_the_ancients/fire_bow/clock_mechanism.webp|Clock mechanism', 'pictures/wrath_of_the_ancients/fire_bow/fireplace_church.webp|Church fireplace', 'pictures/wrath_of_the_ancients/fire_bow/fireplace_richtofens_room.webp|Richtofen\'s room', 'pictures/wrath_of_the_ancients/fire_bow/fireplace_supply_depot.webp|Lower Courtyard']],
        ['From the circle that is still lit, fire charged shots toward that fireplace; stand on each magma rock and shoot again (max 4 shots) until it lands inside. Place the arrow in the pink fire.', ['pictures/wrath_of_the_ancients/fire_bow/magma_rock.webp|Magma rock', 'pictures/wrath_of_the_ancients/fire_bow/pink_fire.webp|Pink fire']],
        ['Interact with the lowered fireball at the Death Ray until it moves; take the reforged arrow.', ['pictures/wrath_of_the_ancients/fire_bow/ball_of_fire_lowered.webp|Fireball']],
        ['Place it in the Fire box, charge it on the pyramid stairs, then trade in your base bow.', ['pictures/wrath_of_the_ancients/fire_bow/fire_box.webp|Fire box']]
      ]}
    ]},

    { id: 'build', label: 'Buildables', sections: [
      { h: 'Pack-a-Punch', steps: [
        ['With power on, touch two of the three machine pieces (Death Ray area, Undercroft back wall, Rocket Pad platform). It forms at the third and moves every few rounds — check the lit sign.', ['pictures/pap/pap_bastion.webp|Death Ray piece', 'pictures/pap/pap_undercroft.webp|Undercroft piece', 'pictures/pap/pap_rocket_pad.webp|Rocket Pad piece', 'pictures/pap/pap_indicator.webp|Location sign']]
      ]},
      { h: 'Undercroft low gravity', steps: [
        ['Stand on each of the four platforms around the pyramid for 3 seconds. Low gravity lasts 50 s and recharges after 60 s.', ['pictures/undercroft_low_gravity/platform.webp|Platform', 'pictures/undercroft_low_gravity/glowing_platform.webp|Active platform']]
      ]},
      { h: 'Rocket Shield', steps: [
        ['Rockets (Lower Courtyard): boxes past the gate trap, foot of the small stairs, or top of the Death Ray stairs.', ['pictures/rocket_shield/rockets_boxes.webp|Boxes', 'pictures/rocket_shield/rockets_stairs.webp|Small stairs', 'pictures/rocket_shield/rockets_death_ray.webp|Death Ray stairs']],
        ['Base: Clock Tower desk, foot of the Wunderfizz stairs, or by the electric trap.', ['pictures/rocket_shield/base_clocktower.webp|Clock Tower', 'pictures/rocket_shield/base_wunderfizz_stairs.webp|Wunderfizz stairs', 'pictures/rocket_shield/base_electric_trap.webp|Electric trap']],
        ['Window (needs low gravity): above the Storm box, above the PaP spot, or above the teleporter doorway. Craft at any table.', ['pictures/rocket_shield/window_storm_box.webp|Above Storm box', 'pictures/rocket_shield/window_pap.webp|Above PaP', 'pictures/rocket_shield/window_teleporter.webp|Above teleporter door']]
      ]},
      { h: 'Ragnarok DG-4', steps: [
        ['Base: drops from the first Panzer you kill (around round 12).', ['pictures/ragnarok_dg4/panzer_part.webp|Panzer drop']],
        ['Handles: activate the Upper/Lower Courtyard landing pads, run the Death Ray trap, then fling yourself into the part with a Wundersphere — Upper Courtyard sphere if it floats over an orb, Gatehouse sphere if it is behind the Rocket Pad sphere.', ['pictures/ragnarok_dg4/handle_orb.webp|Over an orb', 'pictures/ragnarok_dg4/handle_wundersphere.webp|Behind sphere']],
        ['Spikes: when a rocket test starts, flip the switch by the PaP-platform stairs, run into the bunker, wait for three green lights on the panel left of the teleporter and pull its switch. Take the spikes from the teleporter.', ['pictures/ragnarok_dg4/switch.webp|Switch', 'pictures/ragnarok_dg4/tele_panel.webp|Bunker panel', 'pictures/ragnarok_dg4/spikes.webp|Spikes']],
        ['Craft at any table (Gatehouse, Church, Undercroft).', ['pictures/workbenchs/church.webp|Church table']]
      ]}
    ]},

    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Dead Again"', steps: [
        ['Hold interact on three teddy bears: chair in Samantha\'s room, Jug jail cell left of KN-44, truck passenger seat at the Rocket Pad.', ['pictures/song_ee/bear_sams_room.webp|Samantha\'s room', 'pictures/song_ee/bear_jug.webp|Jug cell', 'pictures/song_ee/bear_rocket_pad.webp|Rocket Pad truck']]
      ]},
      { h: 'Samantha\'s Lullaby & Dies Irae', steps: [
        ['Lullaby: hold interact on the music box beside the bed in Samantha\'s room.'],
        ['Dies Irae: hold interact on three gramophones — shelf in Samantha\'s room, a chair in the control room, and the pyramid room facing the crypt stairs.']
      ]},
      { h: 'BRM wallbuy & free Death Machine', steps: [
        ['During low gravity, wallrun the five blue tiles in the Undercroft (progress saves).', ['pictures/brm_wallbuy/panel_left_of_dragon.webp|Left of dragon', 'pictures/brm_wallbuy/panel_tele.webp|Above teleporter door', 'pictures/brm_wallbuy/panel_fast_travel_across.webp|Across from well', 'pictures/brm_wallbuy/panel_fast_travel_stairs.webp|Corner by well', 'pictures/brm_wallbuy/panel_workbench.webp|Left of workbench']],
        ['Hit the tile above the Jug room for a Death Machine (also starts a rocket test). The BRM wallbuy appears left of the workbench.', ['pictures/brm_wallbuy/panel_death_machine.webp|Jug tile', 'pictures/brm_wallbuy/brm_wallbuy.webp|BRM wallbuy']]
      ]},
      { h: 'Panzer Claw helmet', steps: [
        ['Shoot down three ceiling claws: Knight\'s Hall near HVK-30, Lower Courtyard walkway, Mule Kick tunnel rock.', ['pictures/panzer_claw_helmet/claw_hvk.webp|Knight\'s Hall', 'pictures/panzer_claw_helmet/claw_lower_courtyard.webp|Lower Courtyard', 'pictures/panzer_claw_helmet/claw_tunnel.webp|Tunnel']],
        ['When a Panzer walks in front of a claw, shoot or melee the claw to fire it. One try per claw. Three kills gives everyone the helmet.', ['pictures/panzer_claw_helmet/shadow.webp|Helmet shadow']]
      ]},
      { h: 'Plunger', steps: [
        ['Break the Fire arrow wall at the top of the Clock Tower and plant the Ragnarok in front of the gears.', ['pictures/wrath_of_the_ancients/fire_bow/clock_mechanism.webp|Gears']],
        ['Pull the lever on the computer by the exit to start the clock, then stop it at exactly 9:35. Wait for lightning.', ['pictures/plunger/lever.webp|Lever', 'pictures/plunger/clock.webp|Clock']],
        ['In the Undercroft during low gravity, wallrun the circle symbol right of the workbench. You go to the past — take the plunger from the table right of the teleporter.', ['pictures/plunger/wallrun_circle.webp|Circle symbol', 'pictures/plunger/plunger.webp|Plunger']],
        ['Kill a Panzer while holding it to set it on fire for 60 s (one-hit melee).']
      ]},
      { h: 'Skeleton zombies', steps: [
        ['With In Plain Sight active, shoot three hidden skulls with the Wrath bow: right of Mule Kick, above the electric trap doorway by the stained glass, ledge near Double Tap.', ['pictures/skeleton_zombies/skull_mule_kick.webp|Mule Kick', 'pictures/skeleton_zombies/skull_glass.webp|Stained glass', 'pictures/skeleton_zombies/skull_double_tap.webp|Double Tap']],
        ['New zombies spawn as skeletons. Undo it at the chair with skulls by the Church fireplace.', ['pictures/skeleton_zombies/skulls_chair.webp|Skull chair']]
      ]},
      { h: 'Disco control room', steps: [
        ['In the Church, shoot the small moon and the rocket orbiting the globe within ~3 s of each other while they are close together.', ['pictures/disco_room/rocket_and_moon.webp|Moon & rocket', 'pictures/disco_room/disco.webp|Disco']]
      ]},
      { h: 'Second gondola', steps: [
        ['Right at spawn, throw a grenade at the left gondola before it leaves (~12 s).', ['pictures/second_gondola/second_gondola.webp|Left gondola']],
        ['Your 5th tram fuse calls the left gondola with a reward: PaP Man-O-War, PaP Haymaker or Monkey Bombs.']
      ]},
      { h: 'Free Mega GobbleGum (online)', steps: [
        ['Take the potted plant from the cabinet right of the safe in the Teleporter Room.', ['pictures/free_mega_gobblegum/plant_small.webp|Plant']],
        ['Place it on the same cabinet during a main-quest time travel, then interact with the grown plant back in the present.', ['pictures/free_mega_gobblegum/plant_grown.webp|Grown plant']]
      ]},
      { h: 'Dempsey\'s rocket in the sky', steps: [
        ['Within the first 60 s of the game, look at the sky left of the moon to spawn the twinkling orb.', ['pictures/dempsey_sky_twinkle/where_to_look.webp|Where to look', 'pictures/dempsey_sky_twinkle/orb_in_sky.webp|Orb']]
      ]},
      { h: 'Drew Marlowe\'s family photo', note: 'Round 2 only. Any mistake ends the attempt for the game.', steps: [
        ['Let zombies tear down all boards on the five spawn windows. Rebuild 2 boards on each, buy the RK5.'],
        ['Rebuild to 4 boards each, swap the RK5 for the Sheiva. Rebuild to 5 each, buy the RK5 again.'],
        ['Immediately buy the right-hand door toward Double Tap and look at the map edge within ~5 s (Player 1 in co-op).', ['pictures/drew_marlowe_ee/door.webp|Door', 'pictures/drew_marlowe_ee/photo.webp|Photo']]
      ]}
    ]}
  ]
});

(function () {
  const S = 'https://images.steamusercontent.com/ugc/';
  M({
    id: 'zns', name: 'Zetsubou No Shima', group: 'dlc', pack: 'DLC 2 · Eclipse',
    main: 'Seeds of Doubt',
    blurb: 'Japanese island lab. Buckets of 115 water, plants, the KT-4 / Masamune and the Skull of Nan Sapwe.',
    img: '',
    guide: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2439851306',
    wiki: 'https://callofduty.fandom.com/wiki/Zetsubou_No_Shima',
    settings: [
      { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
    ],
    tabs: [
      { id: 'main', label: 'Main Quest', main: true, sections: [
        { h: 'Before you start', note: 'Equip the "Anywhere But Here!" GobbleGum in your pack — one gear needs it. Roughly 1–1.5 hours.', steps: [
          ['Turn on power, open Pack-a-Punch, build the Zombie Shield and Gas Mask (Prep tab).'],
          ['Build the KT-4 and get the Skull of Nan Sapwe (Prep tab).'],
          ['Finish all Trials of the Ancients for every player, then let lightning at the altar electrify a shield (Prep tab).'],
          ['Upgrade the KT-4 to the Masamune — at least one player needs it for the boss (Prep tab).']
        ]},
        { h: 'Reveal the elevator machinery', steps: [
          ['With the skull\'s mesmerize (aim) on the torn poster across from the purple water in the living quarters, make the missing half appear.', [S + '1814363346980797720/B633EF4068D177E2D1D65396F632A369537224CB/|Torn poster', S + '1814363346980798707/2F0B78B2BE0AAD9692F7D67387E69207E3E002A8/|Poster restored']],
          ['Mesmerize the wall left of the broken elevator at the bunker entrance to open a secret passage to the elevator machinery (3 gears missing).', [S + '1814363346980805639/DEFE187B70E0CEB89F4B9B16F1B6CD8BB0CB07DA/|Wall left of elevator', S + '1814363346980808273/68D5C7F616FEE0A1CC310227E6CEFB2DAEEB562D/|Secret passage']]
        ]},
        { h: 'Gear 1 — Anywhere But Here!', steps: [
          ['Use "Anywhere But Here!" to teleport into the hidden room above Lab A (broken dragon eggs inside). Grab the gear.', [S + '1814363346980826021/AD267FD51BEE4B52CB706531C5CB029628247F1A/|Gear above Lab A']]
        ]},
        { h: 'Gear 2 — shoot down the plane', rec: [{ id: 'gear2', at: 2, label: 'Where the gear landed', type: 'select', opts: ['By the meteor past Lab B', 'Stairs toward the Lab A zipline', 'Outside the bunker entrance'] }], steps: [
          ['Water seeds with blue water each round and shoot each watering with the KT-4. Grow several at once until a plant drops a Flak shell.', [S + '1814363346980831306/5FC59FEAA00BE71908AE2AD820397A986475A2EE/|KT-4 on seed', S + '1814363346980834907/DB6765D082EFB91EED50C442E9784C6B4AD7DAE3/|Flak shell plant']],
          ['Load the shell into the Flak 88 in the artillery room (first door on the right in the bunker). Fire when the plane lines up with the barrel.', [S + '1814363346980837356/831A6D6C5C5D0E71D8C438BD7E2D72D4F2409B4F/|Artillery room', S + '1814363346980850466/F549CCAFB1DC9274042C218B85B37C3BEA52BC14/|Load Flak 88']],
          ['Follow the black smoke: the gear lands by the meteor past Lab B, on the stairs toward the Lab A zipline, or outside the bunker entrance.', [S + '1814363346980864616/303492B13459B64CE6E8AFCBCFFAE76D5233BEDF/|Falling gear']]
        ]},
        { h: 'Gear 3 — zipline drop to the docks', steps: [
          ['Get an electrified shield from the lightning at the trials altar.', [S + '1814363346980867108/05EA4EBCBFB744489469FB903D3523055585B188/|Lightning']],
          ['Solo: melee the Lab A zipline panel with the electrified shield, ride the zipline, and melee to drop when you are directly above the out-of-bounds docks. Missing is instant death.', [S + '1814363346980869810/106C21A836501173453978A08AD97D6463BAB76B/|Zipline panel', S + '1814363346980871788/3E30CC6F13D26B3C75D82218ED3F6AC8B54506D7/|Drop point'], { pl: ['1'] }],
          ['Co-op: one player rides the zipline while the shield player stays at the panel and melees it when the rider calls "now" above the docks.', [S + '1814363346980888307/7328D46F5B7F49202E4137DF9B6764AF038906FF/|Co-op setup'], { pl: ['2', '3', '4'] }],
          ['Pick up the gear on the docks.', [S + '1814363346980878632/94C2740BC4593F1E2959167C578B5632D35FC339/|Gear on docks']]
        ]},
        { h: 'Elevator & boss', steps: [
          ['Place all three gears in the machinery behind the secret passage.', [S + '1814363346980891175/C5E3EFB05ED81D4379EC0B0A02CD1D88E55AC62B/|Gears placed']],
          ['Everyone wears a gas mask; someone has the Masamune. All get in the elevator and ride down. Burn the three vines in the corridor with Masamune shots.', [S + '1814363346980896920/0DB9F5B1073ED87737AB4081AE625BDDFC949128/|Vines']],
          ['Shoot the spore on one of the caged giant Thrasher\'s arms with the Masamune to start. Survive zombies, Thrashers and spiders; shoot each new spore as it appears until it dies.', [S + '1814363346980900495/D743F261CB41775204D3A72E85BA41992D2490F9/|Giant Thrasher']],
          ['Cutscene plays and everyone gets all perks.', [S + '1814363346980903443/CFF50936586CE5DAB579A68D33D6B5CF8FD36E0B/|Ending']]
        ]}
      ]},

      { id: 'prep', label: 'Prep', sections: [
        { h: 'Power', steps: [
          ['Grab a bucket, fill it at any water, and pour into the Lab A generator, then Lab B, then quickly reach the bunker.', [S + '495772992975905876/7030277D36D0B791603363C760F3BC13B2C44A28/|Lab A generator', S + '495772992975906864/CE84C4A60CB5B20BFFA24F8439A14F05195352B9/|Lab B generator']],
          ['In the bunker, dive and clear the web on the broken vent, survive the lockdown, then flip the power switch.', [S + '495772992980624981/A0AF69735AA35EBFAC1F09E961828BEA8A9063EA/|Vent web', S + '495772992980625366/7DE664716F74A91F06BA558BB660236C9B83C123/|Power switch']]
        ]},
        { h: 'Pack-a-Punch', steps: [
          ['Part 1: after the vent lockdown, it drops underwater. Part 2: knife the cocoons in the purple-water room. Part 3: valve wheel in the submerged caverns near the KT-4 flower.', [S + '495772992984476264/E26E5C04B4976F3CABDB4C87FBC3C2654099C996/|Part 1', S + '495772992984474095/F578A9EE68EE704131D9BC2F996040DC56679D78/|Part 2', S + '495772992984472884/858EF187E95F226DC09A6021FB1DE95CEE87CE9B/|Valve']],
          ['Use each part on a control panel around the PaP fence to drain it.', [S + '495772992984549730/B8CD332C66421924AB01B0E1163A695DE0AC0D1F/|Control panels']]
        ]},
        { h: 'Zombie Shield & Gas Mask', steps: [
          ['Shield: under Lab A by the Kuda, tree in the Lab B area, AA-gun balcony. Craft at a lab table.', [S + '495772992984429333/8EADCF2FAE386578D0C67BD5C6D1097AC7E4DEEE/|Piece 1', S + '495772992984431124/C84B0D10610062BF68592AD6F5EC0F2A7548EBED/|Piece 2', S + '495772992980631955/E8054B8C25BAED29B866B2D2AF877DC2E1B515AF/|Piece 3']],
          ['Gas Mask: cable at the plane crash, mask near the green water by Lab B, filter outside past the power room / zipline. Craft at a lab table.', [S + '495772992984443640/8CB1C04E50DEA2822ED51011DF3263EAFC7126EC/|Cable', S + '495772992984411769/EF62B5C067F69488E3EFEB66CBCBEFA986643B53/|Mask', S + '495772992984451559/FDCAA3F302F9B30F4D231A72F753B78AA40EDA3B/|Filter']]
        ]},
        { h: 'KT-4', steps: [
          ['Venom: use the Lab A panel to lower the cage, wait for a spider to walk in, then use the upstairs panel. Pick up the purple venom.', [S + '495772992975947470/ECD614C9A96D37FFE71C7482A734EA105B630CB0/|Lab A panel', S + '495772992980626099/9092FBB082C33682FE1ED22D3AB96217D05FFC4E/|Spider in cage']],
          ['Flask: kill the green-glowing zombie near Lab B.', [S + '495772992984402403/FF9BADDACF9B08BC9ECA72BB7199BF8956AB151B/|Green flask']],
          ['Flower: swim the underwater caverns past Mule Kick to the end of the blue tunnel. Shoot spores to breathe.', [S + '495772992980630778/0921BF83DCADCE2CA4C242ABD0A72B9C74A6F525/|Flower']],
          ['Craft at the table in the flooded bunker room.', [S + '495772992980628019/2B8D883338C453E9699C7FCE3F708A1C63DE4BA1/|KT-4 table']]
        ]},
        { h: 'Skull of Nan Sapwe', rec: [{ id: 'pedSpawn', at: 1, label: 'Spawn pedestal symbol', type: 'text', ph: 'e.g. 3 arrows' }, { id: 'pedPlane', at: 1, label: 'Crashed plane pedestal symbol', type: 'text', ph: '' }, { id: 'pedBunker', at: 1, label: 'KT-4 room pedestal symbol', type: 'text', ph: '' }, { id: 'pedOut', at: 1, label: 'Outside bunker pedestal symbol', type: 'text', ph: '' }, { id: 'skullsDone', at: 1, label: 'Skulls cleansed', type: 'multi', opts: ['Spawn', 'Plane', 'KT-4 room', 'Outside bunker'] }], steps: [
          ['At the altar court right of spawn, take a bloody skull from a pillar and note its symbol.', [S + '495772992975858553/87D9A92C0AB3316EEAAF889D0521483CDB0CED2E/|Altar court', S + '495772992975859506/B6BC24F992CEE92C582716530C2AF6D0B8B9D175/|Skulls']],
          ['Place it on the pedestal with the matching symbol (spawn, crashed plane, KT-4 room, outside bunker by zipline) and defend it. Return the clean skull. Do all four.', [S + '495772992980620308/6F8420CE59230D090F906F3C0A5E0E5C58C5B883/|Spawn', S + '495772992975866002/A5D29BCC51FAA8D2A56C4AF3810385303D850711/|Plane', S + '495772992975869671/D4D5996F26CC662C7F853C01B10A2B7BD3CA2F10/|Bunker', S + '495772992975875082/91467E3AF2ACE0C3B0E3C0CE56422091D04DCB7E/|Outside']],
          ['Enter the cave under the main altar, interact with the skull, kill the Keepers, and take the Skull.', [S + '495772992980636766/430F9035D86488071E6A0215810B784E3E8FB506/|Cave', S + '495772992980637900/7FC6BD38C88BFC1E88A00FAEE9DF1A053B81D9C5/|Skull']]
        ]},
        { h: 'Trials of the Ancients', rec: [{ id: 'trial1', at: 0, label: 'Trial 1 · easy (Max Ammo)', type: 'select', opts: ['Breathe underwater from a spore', 'Destroy 5 spores', 'Destroy 5 webs', 'Water 5 plants', 'Water one plant 3 times'] }, { id: 'trial2', at: 0, label: 'Trial 2 · medium (weapon)', type: 'select', opts: ['20 underwater kills', '15 kills by a purple-water plant', '10 headshots on spore zombies', 'Get a power-up from a blue plant', '20 kills with the fan trap', 'Kill a mutating zombie before it enrages'] }, { id: 'trial3', at: 0, label: 'Trial 3 · hard (perk slot)', type: 'select', opts: ['Kill 8 spiders with a spore', '5 headshots on mutated zombies', 'Eat a plant fruit', '30 kills with the plane trap', 'Kill 3 zombies while they mutate'] }], steps: [
          ['Walk up to the symbols on the four pillars by the altar to see your three challenges (yours are yellow). Complete and claim them all.', [S + '495772992980623006/1BF0E157A7AFF74E0EFAE9A8F665C95B8152486A/|Pillars']],
          ['Once every player is done, stand at the altar with a shield until lightning electrifies it.']
        ]},
        { h: 'Masamune', steps: [
          ['Spider fang: burn the web behind the blue water with the KT-4, kill the giant spider (shoot her glowing mouth), take a fang. Drink the purple pool on the way out for free Widow\'s Wine.', [S + '495772992980623991/5A883721464CA6943B3150E4B2032C184EC26766/|Web', S + '495772992980635857/F50AD7E877D0B46335F44102A4E53AC51C34CB73/|Fang']],
          ['Rainbow plant: in the sewer pipe fast travel, spam interact at the meteor to fill rainbow water. Mesmerize the wall facing the spore in the underwater flower tunnel to reveal a planter. Water a seed there with rainbow water 3 rounds in a row.', [S + '495772992980628994/77C86D361F22EF099853F8C1871C1EA7075B68AB/|Sewer', S + '495772992976048737/8BC9C23A04F3F74F5A2EA756B32C3E4464E322E6/|Meteor']],
          ['Vial: hit the Lab B cage console with the electrified shield, step inside, take the 115 flask.', [S + '495772992976098695/76AF59ADCB37A9C32340A4D0AF1B266F988B2C4A/|Console', S + '495772992980638393/133FE65FD3E8563BAD3C09077E51F27CA90A0F12/|Flask']],
          ['Craft at the second table in the KT-4 room.', [S + '495772992976094467/686D16D32B9FC72EA60BE7539664E1771AFFCC01/|Masamune table']]
        ]}
      ]},

      { id: 'side', label: 'Side Eggs', sections: [
        { h: 'Song: "Dead Flowers"', steps: [
          ['Hold interact on three sock monkeys: generator by a perk and the blue water, Lab B top floor table, table between the KT-4 and Masamune benches.', [S + '495772992980624473/8E39BBF397AFE6E4E09D6FBB8C627B678062B518/|Monkey 1', S + '495772992980642469/930222968215E0035440EA23D55C4D10D79632B7/|Monkey 2', S + '495772992980628570/1994158E10E536EDBF0C52EE69BA266C99AACC3D/|Monkey 3']]
        ]},
        { h: 'Samantha\'s Lullaby (water bulbs)', steps: [
          ['By the purple water, fill the wall bulbs left to right with purple water in thirds of a bucket: 1, 3, 5, 6, 7, 5. Knife a bulb to empty it.', [S + '495772992984544955/59DEADE3A2E50257BA82E2C4813FF7C2F9B30CF9/|Bulbs']],
          ['Interact with the seventh bulb to play.']
        ]},
        { h: 'Plant types & free perk fruit', steps: [
          ['Blue ×3 = loot plant, Green ×3 = spike plant, Purple ×3 = zombie-eating plant, Blue+Green+Purple = chance at perk fruit. Shooting each watering with the KT-4 can grow a clone plant (respawn with loadout).', [S + '495772992975822094/10AB09D277E012E08A29C1E8171EEECDE5E9F9C9/|Planting', S + '495772992975853194/8E5539A1E3DFE070EED5E5A317294BEFA4C07314/|Clone plant']]
        ]},
        { h: 'Become a spider', steps: [
          ['With skull, KT-4 and trials done: during a spider round, mesmerize the glowing red spider. Lead her to drink at each water color.', [S + '494652797711666339/30639B4FE5389AD2842134099377D1D9502794EE/|Spider drinking']],
          ['Lead her into the Lab A cage, raise it, shock the panel with the electrified shield, lower it. Survive the special spider round, then take the venom.', [S + '494652797711669897/B679146E065E6374E412B503E90BC0620D10AD6B/|Cage']]
        ]},
        { h: 'Golden bucket', steps: [
          ['Hatch one of every plant type, mesmerize the poster by the purple water, then mesmerize the roots under Lab B and put your bucket in that planter.', [S + '495772992984101404/6281512023DC8083D3C588C92CF6DF2400D8DACA/|Bucket spot']],
          ['Plant the three nearby spots with zombie-eating plants and feed them until your bucket turns gold (holds every water color).', [S + '494652797711663910/D681EA6D33D9ECB62F7154596E5F314D69904DFF/|Growing spots']]
        ]},
        { h: 'Small extras', steps: [
          ['"One Too Many": eat a plant fruit while holding 4+ perks.'],
          ['Aim a scoped sniper at the bunker test-subject tubes up close for a doppelganger jump scare.'],
          ['Reach round 50 and watch from Lab B to see the giant monster in the distance.']
        ]}
      ]}
    ]
  });
})();

(function () {
  const G = 'https://gameranx.com/wp-content/uploads/2016/07/Call-of-Duty%C2%AE_-Black-Ops-III_';
  M({
    id: 'gk', name: 'Gorod Krovi', group: 'dlc', pack: 'DLC 3 · Descent',
    main: 'Love and War',
    blurb: 'Dragon-ruled Stalingrad. Dragon Strike, Gauntlet of Siegfried, S.O.P.H.I.A. and Nikolai 1.0 in his mech.',
    img: '',
    guide: 'https://gameranx.com/features/id/64555/article/black-ops-3-gorod-krovi-love-and-war-full-easter-egg-guide/',
    wiki: 'https://callofduty.fandom.com/wiki/Gorod_Krovi',
    settings: [
      { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
    ],
    tabs: [
      { id: 'main', label: 'Main Quest', main: true, sections: [
        { h: 'Setup', note: 'Works solo. The valve puzzle is the hardest part — use the solver linked below.', steps: [
          ['Turn on power in Dragon Command (right of the interior stairs). Zombies now drop code cylinders.', [G + '20160712000657-1.jpg|Power']],
          ['Build the Guard of Fafnir shield (Buildables tab).'],
          ['Repair the dragon network: put a code cylinder in each Groph module (Dragon Command, Supply Depot, Tank Factory). Follow the marker to each pod that drops, kill zombies around it to fill it, and grab the network piece.', [G + '20160712000450-1.jpg|Groph module']],
          ['Summon a dragon from the U-shaped catwalk in Dragon Command (500) and ride it to the Hatchery (PaP) roof.']
        ]},
        { h: 'Dragon Strike & Gauntlet of Siegfried', steps: [
          ['Upstairs in the Hatchery, use the Dragon Strike console to start the lockdown. Survive it and take the Dragon Strike controller.', [G + '20160714162625.jpg|Hatchery']],
          ['Build the Gauntlet of Siegfried (Gauntlet tab).']
        ]},
        { h: 'Six trophies', note: 'Any order. They go in the six sockets under the map terminal in Dragon Command.', steps: [
          ['Statue: shoot the raised hand of the soldier statue across from Dragon Command; pick up the trophy that falls.'],
          ['Toilet: while sliding down the Hatchery sewer chute, shoot the red light; collect the trophy from the toilet next to Pack-a-Punch.'],
          ['Safe: send the Gauntlet whelp at the locked safe by the Operations Bunker workbench, then heavy-punch it open with the Gauntlet.', [G + '20160714161340.jpg|The safe']],
          ['Puddle: call a Dragon Strike on the dark puddle outside the Supply Depot (near Stamin-Up).'],
          ['Laser trap: fire the giant eye-beam trap in the Supply Depot; take the trophy from the hole it blasts.'],
          ['Tank Factory: shoot the window/pipe beside Double Tap with the shield\'s fireball; the trophy pops out next to the perk.']
        ]},
        { h: 'Valve puzzle & password', rec: [{ id: 'vStart', at: 1, label: 'Start chamber (green light)', type: 'select', opts: ['Dragon Command', 'Tank Factory', 'Infirmary', 'Department Store', 'Supply Depot', 'Armory'] }, { id: 'vEnd', at: 1, label: 'End chamber (purple cylinder)', type: 'select', opts: ['Dragon Command', 'Tank Factory', 'Infirmary', 'Department Store', 'Supply Depot', 'Armory'] }, { id: 'vRoute', at: 1, label: 'Route from the solver', type: 'text', ph: 'e.g. Armory → Infirmary → …' }], steps: [
          ['Kill a Valkyrie drone next to the green-tarp generator in the Hatchery basement. You now have ~5 minutes.'],
          ['Valve chambers: Dragon Command balcony, Tank Factory outside, Infirmary 2nd floor, Department Store 3rd floor, Supply Depot under Stamin-Up, Armory 3rd floor. Start at the one with the green light, end at the one with the purple cylinder, visiting each once. <a href="https://mmmrkennedy.com/games/BO3/gorod_krovi/gorod_krovi_solver" target="_blank" rel="noopener">Open the valve solver ↗</a>', [G + '20160714160726.jpg|A valve chamber']],
          ['Take the purple master cylinder to S.O.P.H.I.A. (right side of Dragon Command) and insert it.'],
          ['Shoot the letter wheel to spell KRONOS, then interact with S.O.P.H.I.A. A wrong entry locks you out until next round.', [G + '20160713214700.jpg|KRONOS']]
        ]},
        { h: 'S.O.P.H.I.A. trials', rec: [{ id: 'bombs', at: 4, label: 'Bomb order from the terminal', type: 'text', ph: 'e.g. Armory, Store, Depot…' }], note: 'Random order. Check the map terminal opposite her for the current trial.', steps: [
          ['Escort the green-eyed Valkyrie drone to the teleport pad opposite S.O.P.H.I.A.', [G + '20160714162715.jpg|Map terminal']],
          ['Escort the green-eyed Mangler from the Tank Factory to the pad.'],
          ['Defend a Groph pod, then send the Gauntlet\'s whelp to carry the cargo back to the pad.'],
          ['Shoot the yellow orb three times until it tells you to stop.'],
          ['Defuse six bombs in the order shown on the terminal within ~2 minutes.']
        ]},
        { h: 'Nikolai 1.0', steps: [
          ['Take the red keycard from the map terminal to the red-light computer in the Hatchery basement. Survive the Mangler lockdown and take the keycard back.'],
          ['Give the keycard to S.O.P.H.I.A. to get a power core. Send the whelp to deliver it to Nikolai\'s mech walking outside spawn.'],
          ['Interact with S.O.P.H.I.A. again. Drop into the red-star sewer grate in Dragon Command.'],
          ['Mother Dragon: shoot her glowing orange weak points (wings, chest, neck) until all are destroyed.'],
          ['Nikolai 1.0: shoot the glowing power cores on his mech, then the final orange core to win.', [G.replace(/Call-of-Duty%C2%AE_-Black-Ops-III_$/, '') + 'BO3-DLC8.jpg|Nikolai 1.0']]
        ]}
      ]},

      { id: 'gaunt', label: 'Gauntlet', sections: [
        { h: 'Gauntlet of Siegfried', steps: [
          ['In the Hatchery basement, lure a Valkyrie drone to the generator under the green tarp and kill it there to open the grate.'],
          ['Drop down the chute and shoot the green dragon egg on the broken floorboards above with an explosive (Ray Gun works). Pick it up downstairs.'],
          ['Carry it to the nest in Dragon Command (right of the signpost by the wrecked tank). Warm it with a Dragon Strike, then wait a round for it to cool.'],
          ['At the spawn challenge board, complete the three egg trials it shows (e.g. napalm kills, multi-kills, melee kills).'],
          ['Place the egg in the only intact incubator in the Hatchery basement, kill zombies to charge it, wait for it to cool, then take it back to the spawn board for the Gauntlet.', [G + '20160713211815.jpg|Incubator']]
        ]}
      ]},

      { id: 'build', label: 'Buildables', sections: [
        { h: 'Guard of Fafnir (shield)', steps: [
          ['Part 1: Armory lower floors or the room by the Infirmary drawbridge trap.', [G + '20160714160613-150x150.jpg|Part 1']],
          ['Part 2: Infirmary — street rubble between Armory/Infirmary and Dragon Command, or the upper hospital level.', [G + '20160714161352-150x150.jpg|Part 2']],
          ['Part 3: Operations Bunker — in the trucks outside or on the shelf opposite the workbench. Craft at the Operations Bunker table.', [G + '20160714161427-150x150.jpg|Part 3']]
        ]},
        { h: 'Tiamat\'s Maw (shield upgrade)', steps: [
          ['Get fire kills with the shield, burn the three purple symbols with its fireball, stand in dragon fire, then dip the shield in the dead dragon at Belinski Square.']
        ]},
        { h: 'Upgraded Dragon Strike', steps: [
          ['Get ~40 Dragon Strike kills, hit the flags around the map with strikes, and clear a Hatchery lockdown using Dragon Strike every wave.']
        ]}
      ]},

      { id: 'side', label: 'Side Eggs', sections: [
        { h: 'Song: "Dead Ended"', steps: [
          ['Hold interact on three vodka bottles: Department Store 1st-floor couch, Operations Bunker burning crates by the network machine, Supply Depot 1500-point room shelf.']
        ]},
        { h: 'Song: "Ace of Spades"', steps: [
          ['Interact with three playing cards: Tank Factory chalkboard by Double Tap, S.O.P.H.I.A.\'s desk in Dragon Command, next to Pack-a-Punch in the Hatchery.']
        ]},
        { h: 'Song: "Samantha\'s Sorrow"', steps: [
          ['Throw Monkey Bombs into the dragon fire at Dragon Command, Supply Depot and Tank Factory.'],
          ['Find the Samantha doll at spawn and shoot the five hiding dolls before time runs out.']
        ]},
        { h: 'Free Widow\'s Wine', steps: [
          ['Finish the tier-3 challenge on the right side of the spawn challenge board.']
        ]},
        { h: 'Dragon Wings', steps: [
          ['With the Gauntlet built, ride a dragon from all three stations, then take the wings from the top-floor mannequin in the Department Store.']
        ]},
        { h: 'Mangler & Valkyrie helmets', steps: [
          ['Meet each enemy\'s kill challenge, then claim the helmets from the Department Store mannequins.']
        ]},
        { h: 'Time-trial melee weapons', steps: [
          ['Round 5 under 5:00 = Wrench · Round 10 under 13:00 = Malice · Round 15 under 24:00 = Slash N\' Burn · Round 20 under 32:00 = Fury\'s Song.']
        ]},
        { h: 'Maelstrom of Eris', steps: [
          ['Get the GKZ-45 Mk3 from the box and PaP it for the Maelstrom of Eris. Shooting a yellow cloud with the right gun makes a black hole.']
        ]}
      ]}
    ]
  });
})();

M({
  id: 'rev', name: 'Revelations', group: 'dlc', pack: 'DLC 4 · Salvation',
  main: 'Revelations',
  blurb: 'Agartha\'s broken fragments of old maps. Corruption Engines, the Keeper Protector, gateworms and the final Shadowman fight.',
  img: '',
  guide: 'https://margwa.net/revelations',
  wiki: 'https://callofduty.fandom.com/wiki/Revelations_(map)',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Setup', note: 'Roughly 1–2 hours. Finishing this after the other five Primis quests unlocks the RK5 starting-weapon reward.', steps: [
        ['Override all four Corruption Engines (pay 500 at each and stay in the ring until it charges). This turns on power.'],
        ['Open Pack-a-Punch: ride the Apothicon to Nacht, shock it with the floor trap panel while it hovers above, then shoot its three glowing organs.'],
        ['Shoot the four graves left of spawn in this order: <b>Takeo, Richtofen, Dempsey, Nikolai</b>. Thunder confirms each one. A triangular stone appears on one jump pad.']
      ]},
      { h: 'Reel 1 — Keeper Protector', steps: [
        ['Collect the three altar parts. Flag: Origins wall across from Double Tap, top of the Mound, or Mob cafeteria near Mule Kick. Skull: Verrückt near Speed Cola (shelf or chairs). Stone: Der Eisendrache near the MPD or Primis statues, or Kino table by the Verrückt jump pad.', ['https://gameranx.com/wp-content/uploads/2016/09/Call-of-Duty%C2%AE_-Black-Ops-III_20160906150001-150x150.jpg|Altar part', 'https://gameranx.com/wp-content/uploads/2016/09/Call-of-Duty%C2%AE_-Black-Ops-III_20160906144711-150x150.jpg|Altar part', 'https://gameranx.com/wp-content/uploads/2016/09/Call-of-Duty%C2%AE_-Black-Ops-III_20160906143019-150x150.jpg|Altar part']],
        ['Build the altar at a symbol rock wall and summon the Keeper Protector.'],
        ['Lead the Keeper to the jump pad with the triangular stone and defend it for ~3 minutes. Kill Panzers fast — they go for the Keeper.'],
        ['Pick up the reel and play it in the audio player upstairs in Nacht (room with the control panel).']
      ]},
      { h: 'Reel 2 — Li\'l Arnie holes', steps: [
        ['Get Li\'l Arnies from the box and ride inside the Apothicon.', ['https://gameranx.com/wp-content/uploads/2016/09/BO3Revelations5.jpg|The Apothicon']],
        ['Throw an Arnie into each of the 9 holes inside it. Each finished group of 3 spawns Margwas to kill. Leaving resets an unfinished group.'],
        ['Take the reel from the bridge above Pack-a-Punch and play it in the Kino audio player near the box.']
      ]},
      { h: 'Reel 3 — Sophia\'s bones', steps: [
        ['Get the Apothicon Servant from the box. Shoot five glowing 115 cubes floating in the sky with it, then Pack-a-Punch it (Estulla Astoth).'],
        ['Reveal and shoot six bones with the upgraded Servant: Spawn church back wall · Origins past the flames over the robot-foot fence · Verrückt rock left of the waterfall · Der Eisendrache third wallrun wall · Shangri-La stone above Stamin-Up · Nacht ceiling above the stairs near the Der Eisendrache portal.'],
        ['Upstairs in Nacht, shoot the bone pile, then shoot Sophia\'s forming body. Play the reel at the Origins Mound.']
      ]},
      { h: 'Free Sophia & get the Kronorium', steps: [
        ['Mount each Corruption Engine as a turret and shoot the blue crystal above it toward Nacht. Each kicks you off when aligned.'],
        ['Interact with Sophia at the top of Nacht; she flies to Kino and powers the teleporter.'],
        ['All players enter the Kino teleporter to reach Samantha\'s room. Take the Kronorium from the bed.'],
        ['Back in Kino, place it on the stage podium.']
      ]},
      { h: 'Gateworms & runes', rec: [{ id: 'eggSpawn', at: 0, label: 'Egg — Spawn / Shangri-La', type: 'select', opts: ['Barrel by the Origins jump pad', 'Trash can by the Shangri-La jump pad', 'Barricade left of Stamin-Up', 'Fire pit at the bottom of the stairs'] }, { id: 'eggDE', at: 0, label: 'Egg — Der Eisendrache / Kino', type: 'select', opts: ['Primis statue room', 'Bucket right of the cave Wunderfizz', 'Seats between Bowie Knife and teddy bear', 'Ledge halfway down the stairs from DE'] }, { id: 'eggV', at: 0, label: 'Egg — Verrückt', type: 'select', opts: ['Plant on the fence by the portal', 'Mattress above Speed Cola', 'Between the green tubes upstairs', 'Small chairs by the Wunderfizz'] }, { id: 'eggO', at: 0, label: 'Egg — Origins / Mob', type: 'select', opts: ['Floor by the rocks to the Corruption Engine', 'Wooden wall by the KN-44 (Mound tunnel)', 'Snow pile left of the Mound Wunderfizz', 'Rocks by the robot footprint'] }, { id: 'runeSpawn', at: 2, label: 'Rune — Spawn', type: 'select', opts: ['Window with flower pots by the Origins pad', 'Left of Quick Revive', 'Rocks by the Shangri-La pad'] }, { id: 'runeDE', at: 2, label: 'Rune — Der Eisendrache / Kino', type: 'select', opts: ['In front of Stamin-Up', 'In front of the Primis statues', 'Anti-gravity plate by the MPD'] }, { id: 'runeV', at: 2, label: 'Rune — Verrückt', type: 'select', opts: ['Path to the Kino jump pad', 'Electro-Shock room metal', 'Right of the tubes upstairs'] }, { id: 'runeO', at: 2, label: 'Rune — Origins / Mob', type: 'select', opts: ['Right of the barricade by Mob GobbleGum', 'Under the lantern by the KN-44', 'Trench below the robot foot path'] }], steps: [
        ['Find one egg per area (carry one at a time). Spawn/Shangri-La, Der Eisendrache/Kino, Verrückt, and Origins/Mob each have one of four random spots.'],
        ['Place each egg in a slot in the green pool inside the Apothicon. The player who placed it gets kills nearby until it becomes a gateworm.'],
        ['Carry a gateworm to its area and follow the beeping (faster = closer) to an invisible rune spot. Interact to trade it for a rune. Do all four.']
      ]},
      { h: 'Rune boss waves → Summoning Key', rec: [{ id: 'runeOrder', at: 1, label: 'Rune order shown by the Kronorium', type: 'text', ph: 'Describe each rune in order' }], steps: [
        ['All players stand on a rune in the Kino projector room to teleport.'],
        ['Watch the Kronorium turn pages to show the rune order. Enter it on the runes at the back upper area.'],
        ['Survive four elemental waves in random order (Anti-gravity: stand on moving light spots · Fire: avoid fire walls, kill Fire Margwas · Lightning: walls block paths · Void: dodge tornadoes, kill Void Margwas).'],
        ['Pick up the Summoning Key from the middle of the arena.']
      ]},
      { h: 'Throw the Key', note: 'It bounces back after each throw. If it turns invisible, go through a portal or get downed to reset it.', steps: [
        ['Kino: chandelier.'],
        ['Der Eisendrache: clock above the Corruption Engine.'],
        ['Shangri-La: blue focusing stone above the stairs.'],
        ['Origins: tombstone outside the Mound.'],
        ['Mob of the Dead: poster in the cell block.'],
        ['Verrückt: fountain with the MG-42.'],
        ['Nacht: red barrel outside the barrier across from the stairs.']
      ]},
      { h: 'Boss: the Shadowman', steps: [
        ['Everyone enters the Kino teleporter.'],
        ['Place the Key on one of the four altars on the arena\'s upper edge and get kills nearby until it glows.'],
        ['Throw the charged Key at Sophia; her beam drops the Shadowman\'s shield.'],
        ['Shoot him until he is inside the Apothicon\'s mouth, then interact with the Kronorium quickly. Repeat if needed.']
      ]}
    ]},

    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "The Gift"', steps: [
        ['Hold interact on three teddy bears: front-row chair before the Kino stage, chair at the start of the Verrückt hallway toward the jump pad, stool near the Mob of the Dead tunnel entrance.']
      ]},
      { h: 'Free perk (wallrun)', steps: [
        ['In the Der Eisendrache pyramid room, stand on the four plates to start low gravity. Wallrun from the portal along the castle\'s outside path to a floating perk bottle.']
      ]},
      { h: 'Upgraded Li\'l Arnies', steps: [
        ['Get 150 Arnie kills (team total), then throw an Arnie through the bell tower window of the spawn church.']
      ]},
      { h: 'M1927 & weapon trading table', steps: [
        ['In the Der Eisendrache undercroft with low gravity, find the pink chalk on a narrow pillar between the VMP and the pyramid.'],
        ['Move each of the six chalk drawings to its correct spot, then go downstairs in Nacht to unlock the trading table and M1927 wallbuy.']
      ]},
      { h: 'Secret radio', steps: [
        ['Press four hidden buttons in Nacht within the time limit: right of the Der Eisendrache portal, corner by the tesla coil, upstairs corner near the shield, left of the L-CAR 9. Shoot the radio by the box to cycle songs.']
      ]},
      { h: 'Small extras', steps: [
        ['Look at the skull with a red glowing eye in the crypt right of the doorway toward Kino (Terminator nod).'],
        ['Buy perks and listen for Dr. Monty singing over the jingles.']
      ]}
    ]}
  ]
});

M({
  id: 'nacht', name: 'Nacht der Untoten', group: 'chron', pack: 'Zombies Chronicles',
  main: null,
  blurb: 'The original bunker. No main quest — two songs and a free Max Ammo.',
  img: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/',
  guide: 'https://mmmrkennedy.com/games/WAW/nacht_der_untoten/nacht_der_untoten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Nacht_der_Untoten',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', steps: [
        ['Interact with four hidden buttons: pillar left of Mule Kick, under the shelf at the foot of the box-room stairs, upstairs on the wall across from the zombie window (Wunderfizz room), and the ceiling above the spawn stairs.', ['pictures/free_max_ammo/button_mule.webp|By Mule Kick', 'pictures/free_max_ammo/button_shelf.webp|Under shelf', 'pictures/free_max_ammo/button_cabinet.webp|Wunderfizz room', 'pictures/free_max_ammo/button_stairs.webp|Above stairs']],
        ['Interact with the Samantha doll that appears in front of the RK5 wallbuy.', ['pictures/free_max_ammo/sam_doll_rk5.webp|Doll by RK5']],
        ['Shoot the five dolls that appear one at a time (each hums so you can find it). Possible spots: fence post, pond, generator, truck roof, tank barrel, telephone pole, ceiling holes by Wunderfizz and Mule Kick.', ['pictures/free_max_ammo/doll_fence.webp|Fence', 'pictures/free_max_ammo/doll_pond.webp|Pond', 'pictures/free_max_ammo/doll_generator.webp|Generator', 'pictures/free_max_ammo/doll_truck.webp|Truck', 'pictures/free_max_ammo/doll_tank.webp|Tank', 'pictures/free_max_ammo/doll_telephone_pole.webp|Pole', 'pictures/free_max_ammo/doll_wunderfizz.webp|By Wunderfizz', 'pictures/free_max_ammo/doll_mule.webp|By Mule Kick']],
        ['Interact with the standing doll by the RK5 for the song and a Max Ammo.']
      ]},
      { h: 'Song: "Undone"', steps: [
        ['Shoot all thirty explosive barrels outside the map. <a href="https://youtu.be/ETCTukd0O-c" target="_blank" rel="noopener">Barrel locations video ↗</a>']
      ]},
      { h: 'Song radio', steps: [
        ['Shoot or melee the radio on the table right of the Mystery Box. Shoot it again to skip songs.', ['pictures/radio.webp|Radio|World at War / BO1']]
      ]}
    ]}
  ]
});

M({
  id: 'verruckt', name: 'Verrückt', group: 'chron', pack: 'Zombies Chronicles',
  main: null,
  blurb: 'Wittenau asylum. No main quest — a toilet song and a free Max Ammo.',
  img: 'https://mmmrkennedy.com/games/WAW/verruckt/',
  guide: 'https://mmmrkennedy.com/games/WAW/verruckt/verruckt_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Verr%C3%BCckt',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Lullaby of a Dead Man"', steps: [
        ['In the bathroom near the power room (Double Tap side), flush the left-most toilet three times.', ['pictures/song_ee/toilet.webp|Left toilet|World at War / BO1']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', steps: [
        ['In the same bathroom, flush the right toilet 9 times, the middle 3 times, then the left 5 times. Listen for a scream.'],
        ['Interact with the doll left of the Wunderfizz.', ['pictures/free_max_ammo/sam_doll.webp|Starting doll']],
        ['Shoot the five dolls that appear one at a time. Spots include the courtyard fountain, a kitchen pot, the Speed Cola railing, Mule Kick ceiling, Quick Revive mortuary cabinet, Jug dentist chair, Double Tap mannequin, a Wunderfizz-room toilet, and the power room barrier.', ['pictures/free_max_ammo/fountain.webp|Fountain', 'pictures/free_max_ammo/kitchen.webp|Kitchen pot', 'pictures/free_max_ammo/speed_cola.webp|Speed Cola', 'pictures/free_max_ammo/flaming.webp|Mule ceiling', 'pictures/free_max_ammo/mule_hanging_barrier.webp|Mule barrier', 'pictures/free_max_ammo/quick_room.webp|Mortuary', 'pictures/free_max_ammo/dentist.webp|Dentist chair', 'pictures/free_max_ammo/double_tap.webp|Mannequin', 'pictures/free_max_ammo/toilet_doll.webp|Toilet', 'pictures/free_max_ammo/power_room.webp|Power room']],
        ['Interact with the standing doll by the Wunderfizz for the song and a Max Ammo.']
      ]}
    ]}
  ]
});

M({
  id: 'snn', name: 'Shi No Numa', group: 'chron', pack: 'Zombies Chronicles',
  main: null,
  blurb: 'Japanese swamp outpost. No main quest — a phone song and a free Max Ammo.',
  img: 'https://mmmrkennedy.com/games/WAW/shi_no_numa/',
  guide: 'https://mmmrkennedy.com/games/WAW/shi_no_numa/shi_no_numa_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Shi_No_Numa',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "The One"', steps: [
        ['In the Comms Room, interact with the phone three times.', ['pictures/song_ee/phone.webp|Phone|World at War / BO1']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', steps: [
        ['With the starting 1911, quickly shoot the four silver pans hanging in the Fishing Hut. A scream confirms it.', ['pictures/free_max_ammo/plate_1.webp|Pan 1', 'pictures/free_max_ammo/plate_2.webp|Pan 2', 'pictures/free_max_ammo/plate_3.webp|Pan 3', 'pictures/free_max_ammo/plate_4.webp|Pan 4']],
        ['Interact with the doll on the floor in the hut\'s side room.', ['pictures/free_max_ammo/doll.webp|Doll']],
        ['Shoot the dolls that appear one at a time on the bridge outside the hut.', ['pictures/free_max_ammo/doll_bridge.webp|Bridge dolls']],
        ['Interact with the floor doll again for the song and a Max Ammo.']
      ]}
    ]}
  ]
});

M({
  id: 'kino', name: 'Kino der Toten', group: 'chron', pack: 'Zombies Chronicles',
  main: null,
  blurb: 'Abandoned Berlin theater. No main quest — teleporter, film reels, a rocket and two songs.',
  img: 'https://mmmrkennedy.com/games/BO1/kino_der_toten/',
  guide: 'https://mmmrkennedy.com/games/BO1/kino_der_toten/kino_der_toten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Kino_der_Toten',
  settings: [],
  tabs: [
    { id: 'basics', label: 'Power & PaP', sections: [
      { h: 'Power & teleporter', steps: [
        ['Turn on the power switch on the stage.', ['pictures/power/power.webp|Power switch|Black Ops 1']],
        ['Use the mainframe on the stage, then the pad in the spawn room to link. Take the stage teleporter to PaP — you have 30 s before you are sent back.', ['pictures/pap/mainframe.webp|Mainframe|Black Ops 1', 'pictures/pap/teleporter_pad.webp|Spawn pad|Black Ops 1']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "115"', steps: [
        ['Interact with three meteor rocks: in a jar under the stairs near Quick Revive, on a stand by the mannequins behind the dressing-room wallbuy, and on the letter shelf in the upstairs alley room.', ['pictures/song_ee/rock_spawn.webp|Spawn jar|Black Ops 1', 'pictures/song_ee/rock_dressing_room.webp|Dressing room|Black Ops 1', 'pictures/song_ee/rock_alley.webp|Alley room|Black Ops 1']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', rec: [{ id: 'knock1', at: 0, label: 'Knock pattern 1', type: 'nums', n: 3 }, { id: 'knock2', at: 0, label: 'Knock pattern 2', type: 'nums', n: 3 }, { id: 'knock3', at: 0, label: 'Knock pattern 3', type: 'nums', n: 3 }], steps: [
        ['Stand by the blue door in the alley and count the three knock patterns. Melee the door with the same counts, pausing between groups.', ['pictures/free_max_ammo/blue_door.webp|Blue door']],
        ['Interact with the doll that appears in front of the stage.', ['pictures/free_max_ammo/doll_init_loc.webp|First doll']],
        ['Shoot the five dolls that spawn one at a time around the theater (seats, projector window, chandelier orb, balcony, stage platform and more).', ['pictures/free_max_ammo/doll_theatre_jug.webp|Seat by Jug', 'pictures/free_max_ammo/doll_projector_room.webp|Projector window', 'pictures/free_max_ammo/doll_chandelier.webp|Chandelier', 'pictures/free_max_ammo/doll_balcony_above_init.webp|Balcony', 'pictures/free_max_ammo/doll_stage_metal_platform.webp|Stage platform', 'pictures/free_max_ammo/doll_fake_wall.webp|Fake wall']],
        ['Interact with the standing doll by the stage for the song and a Max Ammo.']
      ]},
      { h: 'Film reels', steps: [
        ['After a PaP trip you land in one of four random rooms; some have a film reel. Grab it.'],
        ['Play it in the projector in the PaP room. There are three reels.', ['pictures/film_reels/projector.webp|Projector|Black Ops 1']]
      ]},
      { h: 'Model rocket launch', steps: [
        ['With power on, jump 5 times in front of the left mannequin by the Speed Cola door in the dressing room.', ['pictures/rocket_launch/mannequins.webp|Mannequins|Black Ops 1']],
        ['Teleport until you land in the Pentagon-style room and interact with the rocket model.', ['pictures/rocket_launch/rocket.webp|Rocket|Black Ops 1']]
      ]}
    ]}
  ]
});

M({
  id: 'asc', name: 'Ascension', group: 'chron', pack: 'Zombies Chronicles',
  main: 'Casimir Mechanism',
  blurb: 'Soviet cosmodrome. Lunar landers, the Gersh device and five nodes to free Dr. Gersh.',
  img: 'https://mmmrkennedy.com/games/BO1/ascension/',
  guide: 'https://mmmrkennedy.com/games/BO1/ascension/ascension_guide?version=bo3',
  wiki: 'https://callofduty.fandom.com/wiki/Ascension',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Needs 4 players — the button node can\'t be done with fewer. About 1.5 hours. Reward: Death Machine and all perks.', steps: [
        ['Turn on the power at the top of the central building.', ['pictures/power/power_switch.webp|Power switch|Black Ops 1']],
        ['Open Pack-a-Punch: ride the lander from the PhD/Widow\'s, Stamin-Up and Speed Cola stations back to spawn, then press the launch button by the power switch. PaP is in the room under the rocket.', ['pictures/pap/station_phd.webp|PhD station|Black Ops 1', 'pictures/pap/station_staminup.webp|Stamin-Up station|Black Ops 1', 'pictures/pap/station_speed_cola.webp|Speed Cola station|Black Ops 1', 'pictures/pap/rocket_launch_button.webp|Launch button|Black Ops 1']],
        ['Get an upgraded Ray Gun Mk2, upgraded Thundergun, Gersh Devices and Matryoshka Dolls from the box (spread them across players).']
      ]},
      { h: 'Node 1 — generator', steps: [
        ['Throw a Gersh Device at the sparking generator outside the map near the PhD/Widow\'s lander.', ['pictures/main_ee/gersh_generator.webp|Generator|Black Ops 1']],
        ['Interact with the TV in the flooded area under the stairs at the Stamin-Up lander. The crashed module nearby shows one light per node.', ['pictures/main_ee/tv.webp|TV|Black Ops 1', 'pictures/main_ee/rocket_module.webp|Progress lights|Black Ops 1']]
      ]},
      { h: 'Node 2 — perk buttons', steps: [
        ['On the next space-monkey round (someone must own a perk), four buttons appear by Jug, PhD/Widow\'s, Speed Cola and Stamin-Up. All four players press one at the same time.', ['pictures/main_ee/jug_button.webp|Jug|Black Ops 1', 'pictures/main_ee/phd_button.webp|PhD/Widow\'s|Black Ops 1', 'pictures/main_ee/speed_cola_button.webp|Speed Cola|Black Ops 1', 'pictures/main_ee/staminup_button.webp|Stamin-Up|Black Ops 1']]
      ]},
      { h: 'Node 3 — pressure plate', steps: [
        ['Leave a crawler, then everyone stands on the round plate under the rocket\'s old spot by PaP for two straight minutes. The knife on the wall clock tracks progress; a Nuke drops when done.', ['pictures/main_ee/pressure_plate.webp|Plate|Black Ops 1', 'pictures/main_ee/clock.webp|Clock|Black Ops 1']]
      ]},
      { h: 'Node 4 — spell LUNA', steps: [
        ['While a lander is flying, letters appear in the sky. Fly through L, U, N, A in order and avoid the others.', ['pictures/main_ee/letter_in_sky.webp|Letters|Black Ops 1']],
        ['Fast route: Spawn→Stamin-Up (L), Stamin-Up→Spawn (U), Spawn→Speed Cola (N), Speed Cola→Stamin-Up (A).']
      ]},
      { h: 'Node 5 — free Gersh', steps: [
        ['Throw a Gersh Device onto the white orb in front of the crashed module by the Stamin-Up lander.', ['pictures/main_ee/white_orb.webp|White orb|Black Ops 1']],
        ['While it pulls, shoot it with the upgraded Thundergun and Ray Gun Mk2 and throw a Matryoshka Doll at it until the orb rises and Gersh thanks you.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Abracadavre"', steps: [
        ['Interact with three teddy bears: spawn upper level left of the RK5, top of the wall at the Speed Cola station, behind the fence at the Stamin-Up station.', ['pictures/song_ee/bear_spawn.webp|Spawn|Black Ops 1', 'pictures/song_ee/bear_speed_cola.webp|Speed Cola|Black Ops 1', 'pictures/song_ee/bear_staminup.webp|Stamin-Up|Black Ops 1']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', steps: [
        ['After PaP, throw Gersh Devices at three dolls: on a pipe under the PaP walkway, on the railing at the Widow\'s lander, on the beam above Stamin-Up.', ['pictures/free_max_ammo/doll_pap.webp|PaP doll', 'pictures/free_max_ammo/doll_widows_wine_zoomed.webp|Widow\'s doll', 'pictures/free_max_ammo/doll_stamin_up.webp|Stamin-Up doll']],
        ['Interact with the doll in the bush behind the PaP-area box.', ['pictures/free_max_ammo/doll_bush.webp|Bush doll']],
        ['Shoot five dolls in order: debris right of Kuda, barrel by Wunderfizz, beam above GobbleGum near Stamin-Up, ground in front of the crashed module, directly above that.', ['pictures/free_max_ammo/doll_1.webp|1', 'pictures/free_max_ammo/doll_2.webp|2', 'pictures/free_max_ammo/doll_3.webp|3', 'pictures/free_max_ammo/doll_4.webp|4', 'pictures/free_max_ammo/doll_5.webp|5']],
        ['Interact with the bush doll again for the song and a Max Ammo.']
      ]},
      { h: 'Ultimis Matryoshka dolls', steps: [
        ['Interact with four character dolls: Takeo by PhD/Widow\'s, Richtofen on a desk above Jug, Nikolai left of Speed Cola, Dempsey by the trip mine wallbuy.', ['pictures/ultimis_dolls/takeo.webp|Takeo|Black Ops 1', 'pictures/ultimis_dolls/richtofen.webp|Richtofen|Black Ops 1', 'pictures/ultimis_dolls/nikolai.webp|Nikolai|Black Ops 1', 'pictures/ultimis_dolls/dempsey.webp|Dempsey|Black Ops 1']]
      ]}
    ]}
  ]
});

M({
  id: 'shang', name: 'Shangri-La', group: 'chron', pack: 'Zombies Chronicles',
  main: 'Time Travel Will Tell',
  blurb: 'Himalayan temple. Eclipse mode, six crystals, the Fractalizer and the Focusing Stone.',
  img: 'https://mmmrkennedy.com/games/BO1/shangri_la/',
  guide: 'https://mmmrkennedy.com/games/BO1/shangri_la/shangri_la_guide?version=bo3',
  wiki: 'https://callofduty.fandom.com/wiki/Shangri-La',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Needs 4 players — Eclipse mode takes four buttons at once. Each Eclipse lasts 5 minutes; a failed step just ends it. Reward: the picker gets all perks (repeatable once per player).', steps: [
        ['Turn on both power switches in the mine room under spawn.', ['pictures/power/power.webp|Power|Black Ops 1']],
        ['Open PaP: all players stand on the four statue plates at once (spawn by Quick Revive, bottom of the rope bridge, between the power switches, halfway down the tunnel).', ['pictures/pap/statue_spawn.webp|Spawn|Black Ops 1', 'pictures/pap/statue_rope_bridge.webp|Rope bridge|Black Ops 1', 'pictures/pap/statue_power.webp|Power|Black Ops 1', 'pictures/pap/statue_tunnel.webp|Tunnel|Black Ops 1']],
        ['Get the 31-79 JGb215 (shrink gun) from the box and keep it.'],
        ['Enter the Eclipse: all four players press the corner buttons around Quick Revive together.', ['pictures/main_ee/buttons_to_enter_eclipse.webp|Eclipse buttons|Black Ops 1']]
      ]},
      { h: 'Crystal 1 — symbol tiles', steps: [
        ['Press the button on the brick structure by the MPL wallbuy (mine cart side). 24 tiles rise.', ['pictures/main_ee/button_mpl.webp|Button|Black Ops 1']],
        ['Two players stand on tiles to reveal symbols; match all 12 pairs. A wrong match resets.', ['pictures/main_ee/shangri_la_symbols.webp|Symbol cheat sheet|Black Ops 1', 'pictures/main_ee/crystal_ball_1.webp|Crystal 1|Black Ops 1']]
      ]},
      { h: 'Crystal 2 — slide lever', steps: [
        ['Three players stand on the grate at the bottom of the water slide; the fourth slides down mashing interact on the right-side lever.', ['pictures/main_ee/slide_grate.webp|Grate|Black Ops 1', 'pictures/main_ee/water_slide_lever.webp|Lever|Black Ops 1', 'pictures/main_ee/crystal_ball_2.webp|Crystal 2|Black Ops 1']]
      ]},
      { h: 'Crystal 3 — shrink the ball', steps: [
        ['Knock the ball above the water slide down with an explosive, shrink it with the shrink gun, knife it down the slide, and stand on the geyser to launch it.', ['pictures/main_ee/ball_above_slide.webp|Ball|Black Ops 1', 'pictures/main_ee/ball_in_geyser.webp|In geyser|Black Ops 1', 'pictures/main_ee/crystal_ball_3.webp|Crystal 3|Black Ops 1']]
      ]},
      { h: 'Crystal 4 — ignite the gas', steps: [
        ['Turn the valve in the mine-cart tunnel four times. Lure a Napalm zombie past all three gas leaks without letting it explode on you, then pull the lever by the valve.', ['pictures/main_ee/valve.webp|Valve|Black Ops 1', 'pictures/main_ee/gas_pipe_mystery_box.webp|Leak|Black Ops 1', 'pictures/main_ee/gas_lever.webp|Lever|Black Ops 1', 'pictures/main_ee/crystal_ball_4.webp|Crystal 4|Black Ops 1']]
      ]},
      { h: 'Crystal 5 — plug the holes', steps: [
        ['Buy trip mines in the power room. Set one off in front of each of the four holes on the left wall of the waterfall tunnel. Press the brick in the waterfall pool.', ['pictures/main_ee/hole.webp|Hole|Black Ops 1', 'pictures/main_ee/brick_to_push.webp|Brick|Black Ops 1', 'pictures/main_ee/crystal_ball_5.webp|Crystal 5|Black Ops 1']]
      ]},
      { h: 'Crystal 6 — tiles & dials', steps: [
        ['Melee all 12 wall symbol tiles so they glow (mine cart, spawn, mud room, waterfall, power room).', ['pictures/main_ee/tile_minecart_start.webp|Tile|Black Ops 1', 'pictures/main_ee/tile_power.webp|Tile|Black Ops 1']],
        ['Blow up the teepee outside the map near the mine-cart start (ends the Eclipse). Re-enter it.', ['pictures/main_ee/teepee.webp|Teepee|Black Ops 1']],
        ['Set the four mud room dials to 4, 3, 16, 1 (start left coming from spawn, go clockwise; " = 10, | = 5, • = 1).', ['pictures/main_ee/shang_dials_cheat_sheet.webp|Dial cheat sheet|Black Ops 1', 'pictures/main_ee/crystal_ball_6.webp|Crystal 6|Black Ops 1']]
      ]},
      { h: 'Dynamite & meteor', rec: [{ id: 'gongs', at: 1, label: 'Correct gongs (stay the same all game)', type: 'multi', opts: ['Rope bridge bottom', 'Rope bridge top, left of L-CAR', 'Rope bridge top, right of L-CAR', 'Mud room toward spawn', 'Spawn, left of Sheiva', 'Mine cart start', 'Down the mine-cart slope', 'Right of the tunnel'] }], steps: [
        ['Pack-a-Punch the shrink gun into the Fractalizer.'],
        ['Melee the four correct gongs out of eight (trial and error; correct ones stay the same). The crystals glow gold.', ['pictures/main_ee/gong_rope_bottom.webp|Gong|Black Ops 1', 'pictures/main_ee/glowing_crystals.webp|Gold crystals|Black Ops 1']],
        ['While they glow, stand under the crystal above the mine-cart geyser and shoot it with the Fractalizer to catch the dynamite.', ['pictures/main_ee/crystal_with_dynamite.webp|Dynamite crystal|Black Ops 1']],
        ['Still glowing, shoot the crystal above the mud room. The beam bounces through all six and shrinks the meteor above PaP.', ['pictures/main_ee/crystal_to_shoot.webp|Crystal to shoot|Black Ops 1', 'pictures/main_ee/big_meteor.webp|Meteor|Black Ops 1']],
        ['Raise the PaP stairs, let Brock and Gary talk, then give Brock the dynamite through the hole in the wall.', ['pictures/main_ee/wall_with_hole.webp|Wall|Black Ops 1']],
        ['Everyone runs down to end the Eclipse. Go back up and take the Focusing Stone from the altar.', ['pictures/main_ee/stone_on_altar.webp|Focusing Stone|Black Ops 1']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Pareidolia"', steps: [
        ['Interact with three red meteors: spawn right of the spikes to the mine carts, the mine-cart track room by the barbed wire, top of the rope bridge facing the waterfall.', ['pictures/song_ee/meteor_spawn_bo3.webp|Spawn', 'pictures/song_ee/meteor_underground.webp|Underground|Black Ops 1', 'pictures/song_ee/meteor_rope_bridge.webp|Rope bridge|Black Ops 1']]
      ]},
      { h: 'Song: "Samantha\'s Sorrow" + free Max Ammo', rec: [{ id: 'gongs', at: 0, label: 'Correct gongs (same as the main quest)', type: 'multi', opts: ['Rope bridge bottom', 'Rope bridge top, left of L-CAR', 'Rope bridge top, right of L-CAR', 'Mud room toward spawn', 'Spawn, left of Sheiva', 'Mine cart start', 'Down the mine-cart slope', 'Right of the tunnel'] }], steps: [
        ['Keep your starting 1911. Melee the four correct gongs within a minute.', ['pictures/free_max_ammo/gong_shieva.webp|Gong']],
        ['Within 60 s, at the bottom of the slide, shoot the first pan from the left twice, then the fifth once.', ['pictures/free_max_ammo/wall_with_pans.webp|Pans']],
        ['Interact with the doll by the danger sign near the mine-cart start, then shoot five dolls along the mine-cart route in order.', ['pictures/free_max_ammo/doll_laying_down.webp|Doll', 'pictures/free_max_ammo/doll_1.webp|1', 'pictures/free_max_ammo/doll_2.webp|2', 'pictures/free_max_ammo/doll_3.webp|3', 'pictures/free_max_ammo/doll_4.webp|4', 'pictures/free_max_ammo/doll_5.webp|5']],
        ['Interact with the standing doll for the song and a Max Ammo.']
      ]},
      { h: 'Free perk from a monkey', steps: [
        ['Let a Max Ammo sit until a monkey grabs it. As it cycles power-ups, a perk bottle flashes for a split second — kill the monkey right then and grab the perk.']
      ]}
    ]}
  ]
});

M({
  id: 'moon', name: 'Moon', group: 'chron', pack: 'Zombies Chronicles',
  main: "Richtofen's Grand Scheme",
  blurb: 'Griffin Station on the moon. Hacker, Wave Gun, the MPD and destroying the Earth.',
  img: '',
  guide: 'https://www.accelerated-ideas.com/news/moon-easter-egg-steps-zombies-chronicles-dlc-5.aspx',
  wiki: 'https://callofduty.fandom.com/wiki/Moon',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'In Chronicles the whole quest works solo. Someone must play Richtofen for the second half.', steps: [
        ['Turn on the power and get the Hacker (small lab rooms; a yellow leaflet hints where). Box for the Wave Gun, QEDs and Gersh Devices.'],
        ['Samantha Says: at the four terminals outside, repeat the color sequence (red, green, blue, yellow from left to right). <a href="https://mmmrkennedy.com/games/BO1/moon/moon_simon_says" target="_blank" rel="noopener">Samantha Says helper ↗</a>']
      ]},
      { h: 'Cryogenic Slumber Party', rec: [{ id: 'hacker', at: 0, label: 'Where the Hacker spawned', type: 'text', ph: 'Lab room' }], steps: [
        ['On the labs\' 2nd floor, hack the wall panel (500), then quickly hack the four green terminals across the three floors.'],
        ['Press the four black buttons on the 2nd-floor wall, left to right; their lights stay on.'],
        ['Wait for the Pi excavator to breach Tunnel 6, then hack the control-room terminal to raise it.'],
        ['Shoot or melee the Vril sphere in Tunnel 6 and keep pushing it. When it sticks on the satellite on top of spawn, hit it with the Wave Gun. Guide it to the base of the MPD (pyramid).'],
        ['Kill 25 zombies by the canister that rises, then flip the switch opposite it. Everyone gets a Death Machine.']
      ]},
      { h: 'Big Bang Theory', rec: [{ id: 'wire', at: 2, label: 'Where the wire was', type: 'select', opts: ['Hacking rooms', 'Stairwell', 'Cabinets', 'Outside near Mule Kick'] }], steps: [
        ['In Area 51, knock the plates off the racks behind Speed Cola with grenades, then pull them to the teleporter with a Gersh Device.'],
        ['On the moon, throw a QED at the plates near Quick Revive to carry them to the computer across the room.'],
        ['Find the wire (hacking rooms, stairwell, cabinets or outside near Mule Kick) and place it at that computer.'],
        ['As Richtofen, put the Golden Rod between the plates and keep pressing the button through the dialogue. Pick the rod back up.'],
        ['Fill four new canisters at the MPD with ~25 kills each, then Richtofen places the rod in the MPD. Richtofen gets all perks.'],
        ['Win Samantha Says three more times.'],
        ['Throw a QED at the MPD to send the Vril sphere to the Samantha Says terminals, then throw a Gersh Device at it. Rockets hit Earth and everyone gets all perks.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Coming Home"', steps: [
        ['Interact with three teddy bears: crates below the receiving area by the jump pad, behind a grate in the airlock between Tunnel 6 and the power room, behind a wall in the Tunnel 11 Stamin-Up room.']
      ]},
      { h: '8-bit songs', steps: [
        ['Press the computer button next to the MP5K/wallbuy for 8-bit "Damned".'],
        ['Press the equipment button near Stamin-Up for 8-bit "Coming Home", and the one across from Double Tap for 8-bit "Pareidolia".']
      ]},
      { h: 'Radios & reels', steps: [
        ['Find the five radios (rocks by the starting wallbuy, pipe past the MPL room, window by Double Tap, crane near Mule Kick, dome across from PhD) and six audio reels; play reels in the labs between Double Tap and Deadshot.']
      ]}
    ]}
  ]
});

M({
  id: 'origins', name: 'Origins', group: 'chron', pack: 'Zombies Chronicles',
  main: 'Little Lost Girl',
  blurb: 'WWI France with giant robots. Four elemental staffs, generators, the Maxis drone and Samantha.',
  img: '',
  guide: 'https://margwa.net/origins-zc',
  wiki: 'https://callofduty.fandom.com/wiki/Origins',
  settings: [
    { id: 'staff', label: 'Staffs you are building', multi: true, opts: [['fire', 'Fire'], ['ice', 'Ice'], ['wind', 'Wind'], ['light', 'Lightning']] },
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Works solo. About 1.5–2 hours.', steps: [
        ['Turn on all six generators.'],
        ['Build and upgrade all four staffs (Staffs tab).'],
        ['Get the One Inch Punch (Thunder Fists), the G-Strikes and the Maxis Drone (Items tab).']
      ]},
      { h: 'Robots & rubble', steps: [
        ['Place each upgraded staff in its robot pedestal: Fire at the excavation site, Lightning in Thor, Wind in Odin, Ice in Freya.'],
        ['Co-op: one player enters a robot and presses the head button while another immediately throws a G-Strike at the rubble outside the map right of Generator 5.', null, { pl: ['2', '3', '4'] }],
        ['Solo: enter Odin through its first left foot, press the button just before you\'re ejected, then run to the spot right of Generator 5 and throw a G-Strike at the rubble.', null, { pl: ['1'] }]
      ]},
      { h: 'Panzers & the glowing plane', steps: [
        ['Release the Maxis Drone by the rubble and kill the 10 Panzers it summons.'],
        ['Get Zombie Blood (drop, or freeze the three chariots at the excavation site). Shoot the glowing plane above the excavation site.'],
        ['A zombie falls out and runs clockwise around the site. Kill it, then pick up the Maxis Drone it drops.']
      ]},
      { h: 'Upgrade the fists', steps: [
        ['Every player with the One Inch Punch goes to the bottom of the excavation site and melee-kills 20 templar zombies with glowing hands, then picks up a tablet.']
      ]},
      { h: 'Ending', steps: [
        ['In the Crazy Place, holster all four staffs and get 100 total kills.'],
        ['When the sky opens, release the Maxis Drone. Interact with the beam it creates to finish.']
      ]}
    ]},

    { id: 'staffs', label: 'Staffs', sections: [
      { h: 'Gramophone', steps: [
        ['Take the gramophone from the ground by a table at the excavation site, find a black record (by a generator near the excavation sign, on the excavation wall by the church, or in a wheelbarrow near PaP), and place the gramophone on the table to open the underground.'],
        ['For each staff: collect its 3 pieces and its record, play the gramophone in that staff\'s tunnel to enter the Crazy Place, take the element shard, and build the staff at the bottom of the excavation site.']
      ]},
      { h: 'Fire Staff', rec: [{ id: 'torches', at: 3, label: 'Torch numbers from the church symbols', type: 'nums', n: 4 }], w: { staff: ['fire'] }, steps: [
        ['Pieces: Generator 6 reward chest; shoot the red plane over No Man\'s Land (part lands by the excavation soul box); Panzer drop.'],
        ['Record: in the church. Tunnel: between spawn and Generator 3.'],
        ['Upgrade 1: in the Crazy Place, kill 30 zombies on the grates in the fire area.'],
        ['Upgrade 2: read the four symbols upstairs in the church, then downstairs quickly shoot the matching numbered torches (the "4" torch has a bloodstain).'],
        ['Upgrade 3: at the excavation bottom, turn the four switches until the ring is all red, then shoot the red orb.'],
        ['Upgrade 4: place the staff in its Crazy Place pedestal, get 20 kills to feed it souls, take the upgraded staff.']
      ]},
      { h: 'Ice Staff', w: { staff: ['ice'] }, steps: [
        ['Pieces: dig while it is snowing — church side, No Man\'s Land, spawn side.'],
        ['Record: Tank Station. Tunnel: behind the church.'],
        ['Upgrade 1: in the Crazy Place, find the ceiling symbol matching the one on the right and shoot it with the Ice Staff to flip it. Repeat until done.'],
        ['Upgrade 2: freeze, then shoot with a bullet weapon (not Ray Guns), three graves: behind Jug at Gen 4, above the robot footprint near the excavation, behind the Tank Station on the tank path.'],
        ['Upgrade 3: turn the four excavation switches until the ring is all blue, then shoot the blue orb.'],
        ['Upgrade 4: pedestal in the Crazy Place, 20 soul kills, pick up.']
      ]},
      { h: 'Wind Staff', w: { staff: ['wind'] }, steps: [
        ['Pieces: shoot each robot\'s lit foot and step inside — Odin (No Man\'s Land), Thor (Gen 2/3), Freya (church).'],
        ['Record: near Generator 5. Tunnel: next to Generator 4.'],
        ['Upgrade 1: in the Crazy Place, shoot the symbols above the wind area so they match the reference.'],
        ['Upgrade 2: shoot three smoking balls (Gen 4, Gen 5, tank path between church and Gen 5) so the smoke points toward the excavation mound.'],
        ['Upgrade 3: turn the four excavation switches until the ring is all yellow, then shoot the yellow orb.'],
        ['Upgrade 4: pedestal in the Crazy Place, 20 soul kills, pick up.']
      ]},
      { h: 'Lightning Staff', w: { staff: ['light'] }, steps: [
        ['Pieces: jump off the tank — church→Tank Station: right onto a platform past Gen 4; Tank Station→church: left onto a platform by the excavation, and right onto the mud path near the church.'],
        ['Record: near Generator 4. Tunnel: next to Generator 5.'],
        ['Upgrade 1: in the Crazy Place, shoot the bottom row of purple triangles in order: 1,3,6 then 3,5,7 then 2,4,6.'],
        ['Upgrade 2: turn seven dials until they stop sparking: spawn (left), Tank Station back exit (down), Gen 4 footprint path (up), Gen 5 (down), excavation by church (up), church downstairs (right), church upstairs (up).'],
        ['Upgrade 3: turn the four excavation switches until the ring is all purple, then shoot the purple orb.'],
        ['Upgrade 4: pedestal in the Crazy Place, 20 soul kills, pick up.']
      ]}
    ]},

    { id: 'items', label: 'Items', sections: [
      { h: 'One Inch Punch', steps: [
        ['Fill the four soul boxes with 20 kills each (excavation, Gen 4, Gen 5, church). A robot stepping on a box resets it.'],
        ['Claim the punch from a reward chest in spawn or at Gen 6.']
      ]},
      { h: 'G-Strikes', steps: [
        ['Take the stone from the table by the Tank Station back exit and place it in the upstairs church fountain. Get 20 melee kills nearby.'],
        ['Carry it back to the table without touching mud, get 20 more melee kills there, then take the G-Strikes.']
      ]},
      { h: 'Maxis Drone', steps: [
        ['Brain on the spawn table, rotors near the gramophone table/scaffolding/AK74u, body on a church tank path or in the Ice tunnel. Build at a table.']
      ]}
    ]},

    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Archangel"', steps: [
        ['Interact with three glowing green 115 pieces: spawn behind the bunk bed by the challenge chest, upstairs under a bed in the workshop, on the excavation scaffolding near the entrance.']
      ]},
      { h: 'Song: "Shepherd of Fire"', steps: [
        ['Activate three radios: excavation scaffolding, inside Freya near the head, and the Crazy Place fire area.']
      ]},
      { h: 'Song: "Aether" (1-1-5)', steps: [
        ['At Generator 1, go prone and interact with the first "1", then the second. At Generator 5, go prone and interact with the large "5".']
      ]},
      { h: 'Golden Shovel & Golden Helmet', steps: [
        ['Grab a shovel in spawn and dig ~30 dig sites for the Golden Shovel. Keep digging for the Golden Helmet (stops robot stomps).']
      ]},
      { h: 'Extra perk slots', steps: [
        ['With the Golden Shovel and Zombie Blood, dig the glowing dig sites around the map for empty perk bottles (up to 4).'],
        ['Save the 30,000-points challenge reward (Double Tap) until after the bottles for a 9th perk.']
      ]},
      { h: 'Free Zombie Blood', steps: [
        ['Shoot out the three flaming carts around the excavation mound with the Ice Staff; Zombie Blood appears near the top of the excavation.']
      ]},
      { h: 'Rituals of the Ancients', steps: [
        ['Complete the challenge boards near Gen 1 and Gen 6: 115 headshots, all 6 generators, spend 30,000 points, fill the soul chests.']
      ]},
      { h: 'Skull jump scare', steps: [
        ['From the PaP area, zoom a sniper toward the burning upper church.']
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
