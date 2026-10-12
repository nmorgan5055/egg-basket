EB.register('bo2', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'tranzit', name: 'TranZit', group: 'base', pack: 'Base game',
  main: 'Tower of Babble',
  blurb: 'A bus ride through a fogged-in countryside. Build the Turbine, open Pack-a-Punch under the bank, then pick Maxis or Richtofen at the pylon.',
  img: '',
  guide: 'https://margwa.net/tranzit',
  wiki: 'https://callofduty.fandom.com/wiki/TranZit',
  settings: [
    { id: 'side', label: 'Side you are doing', opts: [['maxis', 'Maxis'], ['rich', 'Richtofen']] },
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Original difficulty only. Maxis needs 2+ players (4 is easiest). Richtofen needs 2+ players (solo is possible but very hard), and one player must be Stuhlinger — he is the only one who hears Richtofen.', steps: [
        ['Build the Turbine at the Bus Depot (all three parts are in the starting room). Each player should carry one for the Maxis side.'],
        ['Ride to the Power Station (4th stop), collect the zombie arm, lever and panel, build the switch and turn on the power.'],
        ['Find the pylon: the radio tower in the cornfield between the Farm and the Power Station. Both finales happen there.'],
        ['Get EMP grenades from the Mystery Box (at least one player for Maxis, at least two for Richtofen).']
      ]},
      { h: 'Maxis side', w: { side: ['maxis'] }, steps: [
        ['Wait for Maxis to ask you to turn the power off, then turn it off at the Power Station.'],
        ['Go to the pylon. When a thunderstorm round ends, the Avogadro spawns — lead him to the pylon.'],
        ['Place two Turbines under the pylon at the same time to heat it.'],
        ['When the Avogadro is under the pylon and Maxis says "Finish him now", hit him with an EMP.'],
        ['The pylon glows orange and the achievement pops. (Some guides add a final turbine placement at the Bus Depot and Diner lampposts — if nothing happens, try that with your other players.)']
      ]},
      { h: 'Richtofen side', w: { side: ['rich'] }, steps: [
        ['Keep the power on. Build the Jet Gun at the bar in Town (parts: engine in the tunnel between Bus Depot and Diner, gauge in the Cabin, wires in the Power Station, handbrake in the Nacht building).'],
        ['Stand under the pylon and fire the Jet Gun until Richtofen says the energy is channeled (it gets sucked in).'],
        ['Under the pylon, kill zombies with explosives only (the original Ray Gun counts) until Richtofen says the power is too high.'],
        ['EMP four glowing green lampposts at the same time (Bus Depot, Diner, Town, Power Station area). 4 players: one each on a countdown.', null, { pl: ['4'] }],
        ['With 2–3 players: activate Denizen teleporters under lampposts first. Throw an EMP at one lamp, jump through the teleporter, and throw the next EMP at the lamp you land at before the first wears off.', null, { pl: ['1', '2', '3'] }],
        ['Richtofen greets Stuhlinger, the pylon glows blue and the achievement pops.']
      ]}
    ]},
    { id: 'build', label: 'Buildables', sections: [
      { h: 'Power & Pack-a-Punch', steps: [
        ['Power switch parts (Power Station basement): zombie arm at the top of a staircase, lever by the boxes or on a bench, panel in the hallway or workbench room.'],
        ['Open the two bank vault doors in Town with explosive splash damage.'],
        ['Place a Turbine in front of the lightning-bolt panel behind the door next to the AK-74u in the Power Station. Hurry back to the bank — the door shuts when the Turbine dies.'],
        ['Build Pack-a-Punch in the vault from its three parts (machine body, battery, table).']
      ]},
      { h: 'Turbine', steps: [
        ['Mannequin, plane tail and fan are all in the Bus Depot start room. Build at the Bus Depot table.']
      ]},
      { h: 'Zombie Shield', steps: [
        ['Car door (repair shop by the Diner) + dolly (inside the Diner). Build in the repair shop.']
      ]},
      { h: 'Turret & Electric Trap', steps: [
        ['Turret: lawn mower, RPD and ammo pouch around the Farm. Build in the Farm\'s front room. Needs a Turbine to run.'],
        ['Electric Trap: car battery, metal rod and TV glass. Build upstairs in the Power Station brick building. Needs a Turbine.']
      ]},
      { h: 'Jet Gun', steps: [
        ['Engine (tunnel between Bus Depot and Diner), gauge (Cabin), wires (Power Station, after power), handbrake (Nacht building in the cornfield). Build at the Town bar.']
      ]},
      { h: 'Bus upgrades', steps: [
        ['Find the ladder, roof hatch and plow in powered rooms around the map and attach them to the bus.']
      ]},
      { h: 'Navcard table', note: 'Only needed for the BO2 super Easter egg (TranZit + Die Rise + Buried).', steps: [
        ['Parts: meteor (Bus Depot wall hole), radio (Nacht or the gas station garage), card reader (by the Farm fridge or the Town dumpster), board (tunnel walkway or Power Station). Build at the radio tower across from Nacht.'],
        ['Insert the Navcard picked up in Buried.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Carrion"', steps: [
        ['Hold interact on three teddy bears: bench outside the Bus Depot start room, upstairs bed in the Farm, chair by the pool table in the Town bar.']
      ]},
      { h: 'Bank & fridge', steps: [
        ['Bank (Town): blow open the vault, then deposit or withdraw points at the deposit box. Shared with Die Rise and Buried.'],
        ['Fridge (Farm, downstairs): store a weapon for future games.']
      ]},
      { h: 'Galvaknuckles & Bowie Knife', steps: [
        ['Galvaknuckles: on the Diner roof — climb up using the bus roof hatch.'],
        ['Bowie Knife: inside the Cabin by the back door.']
      ]},
      { h: 'Denizen teleporters', steps: [
        ['With a lamppost powered, lure a Denizen under it; it digs a hole you can jump in to teleport to another lamp.']
      ]},
      { h: 'Small extras', steps: [
        ['Knife T.E.D.D. the bus driver repeatedly until he kicks everyone off.'],
        ['Watch the Town traffic light for a Morse code message.'],
        ['Interact with the Farm TV for radio messages.']
      ]}
    ]}
  ]
});

M({
  id: 'nuketown', name: 'Nuketown Zombies', group: 'base', pack: 'Pre-order bonus',
  main: null,
  blurb: 'The Nuketown test site, mid-apocalypse. Perks fall from the sky; no main quest, but songs and Richtofen\'s takeover.',
  img: 'https://mmmrkennedy.com/games/BO2/nuketown/',
  guide: 'https://mmmrkennedy.com/games/BO2/nuketown/nuketown_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Nuketown_Zombies',
  settings: [],
  tabs: [
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Samantha\'s Lullaby"', steps: [
        ['Interact with three teddy bears: behind the fence in the Green House backyard, left window of the yellow bus, top bunk in the Yellow House bedroom.', ['pictures/samanthas_lullaby/teddy_backyard.webp|Backyard', 'pictures/samanthas_lullaby/teddy_bus.webp|Bus window', 'pictures/samanthas_lullaby/teddy_bed.webp|Top bunk']]
      ]},
      { h: 'Richtofen\'s transmissions (blue eyes)', steps: [
        ['Listen to the Green House living-room TV: transmissions play on round 3, then on random rounds through round 22.', ['pictures/richtofen_radios/tv.webp|Green House TV']],
        ['On round 25 the last one plays — zombie eyes turn blue and Richtofen becomes the announcer.']
      ]},
      { h: 'Song: 8-bit "Re-Damned"', steps: [
        ['When the population sign in the cul-de-sac reads exactly 15, grab the power-up in the shed behind the Yellow House.', ['pictures/8bit_mp_theme/pop_counter.webp|Population sign']]
      ]},
      { h: 'Song: 8-bit "Coming Home"', steps: [
        ['Shoot the heads off all 28 mannequins, including the hidden ones in the shed, on the couch behind the truck, and in the window of the locked house.', ['pictures/8bit_coming_home/mannequin_shed.webp|Shed', 'pictures/8bit_coming_home/mannequin_sofa.webp|Couch', 'pictures/8bit_coming_home/window.webp|Window']]
      ]},
      { h: 'Marlton\'s bunker', steps: [
        ['Melee the bunker door behind the Green House once per round to hear Marlton (14 quotes).', ['pictures/marlton_bunker/bunker.webp|Bunker door']]
      ]},
      { h: 'Small extras', steps: [
        ['Listen for a TranZit bus horn on a random round between 5 and 10.']
      ]}
    ]}
  ]
});

M({
  id: 'dierise', name: 'Die Rise', group: 'dlc', pack: 'DLC 1 · Revolution',
  main: 'High Maintenance',
  blurb: 'Collapsing skyscrapers in China. Elevators, Who\'s Who, the Sliquifier and a radio tower you punch in the right order.',
  img: '',
  guide: 'https://margwa.net/die-rise',
  wiki: 'https://callofduty.fandom.com/wiki/Die_Rise',
  settings: [
    { id: 'side', label: 'Side you are doing', opts: [['maxis', 'Maxis'], ['rich', 'Richtofen']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Shared steps', note: 'Needs exactly 4 players.', steps: [
        ['Turn on the power and build the Navcard table on the roof (dragon roof). Insert a Navcard if you have one.'],
        ['All four players stand on the golden symbols in four elevators at the same time (two in the Quick Revive building, two in the Sliquifier building). Which elevators light up is random.'],
        ['Stand on four golden floor symbols in the right order (trial and error; correct ones stay lit): by the M14 in spawn, by the AK-74u, by the Semtex on the roof, by the SVU-AS.'],
        ['From spawn, use a sniper to shoot the balls out of both dragons\' mouths on the opposite building. They land in the lion statue paws in spawn.']
      ], rec: [{ id: 'floorOrder', at: 2, label: 'Floor symbol order', type: 'seq', n: 4, opts: ['M14 (spawn)', 'AK-74u', 'Semtex (roof)', 'SVU-AS'] }] },
      { h: 'Maxis side', w: { side: ['maxis'] }, steps: [
        ['In the middle of the Buddha room, kill 15 zombies in a row until Maxis speaks.'],
        ['With a Pack-a-Punched Ballistic Knife, shoot the Krauss Refreeze devices in the Buddha room until Maxis speaks.'],
        ['Two players take the balls from the lion statues in spawn.'],
        ['Each player places a Trample Steam on a golden lion symbol facing the radio tower: roof by the single elevator, roof by the double elevators, left of the lion statue in spawn, bottom of the spawn escalator. The ball holders drop the balls on two Steam paths so they fling back and forth.']
      ]},
      { h: 'Richtofen side', w: { side: ['rich'] }, steps: [
        ['Build the Sliquifier (Buildables tab).'],
        ['In spawn, shoot both lion-paw balls with the Sliquifier until they spin.'],
        ['Each player places a Trample Steam on a golden zombie symbol facing the radio tower (by the M14 in spawn, left and right of the stairs entrance, by the Semtex on the roof) and gets at least one kill on each.']
      ]},
      { h: 'Final step — punch the tower', steps: [
        ['Get the Galvaknuckles (wallbuy in the shaft leading to the Buddha room).'],
        ['Find the eight mahjong tiles: four compass directions and four numbers 1–4. Match colors between a direction tile and a number tile to get the order.'],
        ['Melee the radio tower corners with Galvaknuckles in that order. The corner facing the Trample Steam table is North.']
      ], rec: [{ id: 'mahjong', at: [1, 2], label: 'Direction order from the tiles', type: 'seq', n: 4, opts: ['North', 'East', 'South', 'West'] }] }
    ]},
    { id: 'build', label: 'Buildables', sections: [
      { h: 'Trample Steam', steps: [
        ['Bellows, flag, motor and wire are around spawn (stairs and just outside the spawn door). Build at the table two rooms below spawn.']
      ]},
      { h: 'Sliquifier', steps: [
        ['Disc (barrel or shower-room table), gas can (cage by the table or by the power switch), handbrake (counter by a fridge or Power Room table), mannequin foot (upstairs by the TV). Build at the table below the Power Room.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "We All Fall Down"', steps: [
        ['Interact with three teddy bears: Power Room corner table, upper level of the Buddha room, shelf next to the SVU-AS wallbuy.']
      ]},
      { h: 'Free perk (Jumping Jacks)', steps: [
        ['Play a full round killing only Jumping Jacks without missing a shot (melee counts as a shot) for a free perk.']
      ]},
      { h: 'Bank & fridge', steps: [
        ['Take the elevator down from spawn and jump to the other building. The fridge is straight ahead; the shower stalls around the corner are the bank (left deposits, right withdraws).']
      ]}
    ]}
  ]
});

M({
  id: 'motd', name: 'Mob of the Dead', group: 'dlc', pack: 'DLC 2 · Uprising',
  main: 'Pop Goes the Weasel',
  blurb: 'Alcatraz, 1933. Afterlife mode, the plane to the Golden Gate Bridge, the Blundergat — and a final showdown with your crew.',
  img: 'https://mmmrkennedy.com/games/BO2/mob_of_the_dead/',
  guide: 'https://mmmrkennedy.com/games/BO2/mob_of_the_dead/mob_of_the_dead_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Mob_of_the_Dead',
  settings: [
    { id: 'pl', label: 'Players', opts: [['1', 'Solo'], ['2', '2'], ['3', '3'], ['4', '4']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Setup (any order)', note: 'The final step needs 2+ players and one of them must be Weasel (Albert Arlington). Everything before it works solo. Not available on Easy.', steps: [
        ['Get the Hell\'s Retriever (Weapons tab).'],
        ['Build the plane and fly to the bridge. Make three total trips (refuel with the gas cans that appear the round after you return).'],
        ['Get the Blundergat from the Warden\'s Office flames (box copies don\'t count).'],
        ['Get the spoon (Weapons tab).'],
        ['Don\'t start the number step until nobody needs the bridge again.']
      ], rec: [{ id: 'trips', at: 1, label: 'Bridge trips made', type: 'multi', opts: ['Trip 1', 'Trip 2', 'Trip 3'] }] },
      { h: 'Prisoner numbers', steps: [
        ['In Afterlife, shock 101, 872, 386 and 481 into the number panel at the bottom of the Citadel tunnels spiral stairs (any order, can take several Afterlifes).', ['pictures/number_pad.webp|Number panel']],
        ['Brutus speaks, the screen goes black and white, and Stanley Ferguson starts narrating.']
      ]},
      { h: 'Audio reels', steps: [
        ['Collect the headphones power-ups in order: Citadel tunnel stairs, room by Double Tap, walkway between Warden\'s Office and cafeteria, Infirmary entrance, stairs up to the roof.', ['pictures/main_ee/headphones_1.webp|1', 'pictures/main_ee/headphones_2.webp|2', 'pictures/main_ee/headphones_3.webp|3', 'pictures/main_ee/headphones_4.webp|4', 'pictures/main_ee/headphones_5.webp|5']]
      ]},
      { h: 'Final flight', steps: [
        ['Finish the round. One player uses the Afterlife box in the Infirmary and goes to the plane on the roof; interacting pulls everyone aboard.'],
        ['On the bridge, revive from the electric chair. Weasel now fights everyone else — if Weasel wins, the cycle is broken; if the others win, the cycle continues. Either ending pops the achievement.']
      ]}
    ]},
    { id: 'build', label: 'Plane & PaP', sections: [
      { h: 'Afterlife basics', steps: [
        ['Enter Afterlife at an electrical box (keeps perks) or by going down. Shock voltmeters to power things and ghostly doorways to open them.']
      ]},
      { h: 'Warden\'s key', steps: [
        ['The key hangs in the cell block above the Warden\'s Office or cafeteria entrance. Shock the nearby generator in Afterlife to lower it.']
      ]},
      { h: 'Plane parts', steps: [
        ['Get to the roof through the ghostly doorway in the Infirmary tiled hallway.'],
        ['Laundry: shock the shower voltmeter, run the laundry machine, survive the ~30 s lockdown.', ['pictures/pap/laundry/laundry_machine.webp|Laundry machine']],
        ['Tanks: open the Docks gate and shock the voltmeter behind it.'],
        ['Engines: shock three generator-room panels, then open the Warden\'s Office gate.'],
        ['Valves: open the locked cabinet in the Infirmary.'],
        ['Rigging: memorize the Afterlife numbers on the spiral stairs, enter them at the number pad, and grab the rope within 60 s.'],
        ['Board the plane together and fly to the bridge. Pack-a-Punch is there; come back via the electric chair.']
      ]},
      { h: 'Zombie Shield', steps: [
        ['Dolly (Docks), clamp (generator room), cell door (Citadel tunnels). Build at a table.']
      ]}
    ]},
    { id: 'weap', label: 'Weapons', sections: [
      { h: 'Hell\'s Retriever → Redeemer', steps: [
        ['Feed the three Cerberus heads (red dog paintings) six zombies each, then take the Retriever from the wall in the Citadel tunnels.'],
        ['Redeemer: get 15 Retriever kills, survive a round 10+ using only the Retriever, throw it into the lava pit by the first head, and pick it up the next round.']
      ]},
      { h: 'Blundergat → Acidgat', steps: [
        ['Throw the Retriever at five blue skulls (visible in Afterlife), then take the Blundergat from the Warden\'s Office flames.'],
        ['Acidgat: collect the motor, case and acid bottle, build the kit at a table, then insert the Blundergat.']
      ]},
      { h: 'Spoon → Golden Spork', steps: [
        ['Knock down the poster in the Warden\'s Office cells with the Retriever, shock the spoon behind it, then throw the Retriever at the spoon on the cafeteria table.'],
        ['Golden Spork: stir the Infirmary bathtub, get 50 Acidgat explosion kills in the showers, then use the bathtub again.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Rusty Cage"', steps: [
        ['Interact with three whiskey bottles: spawn bookshelf, Infirmary table, Docks corner.']
      ]},
      { h: 'Song: "Where Are We Going"', steps: [
        ['In Afterlife, shock 935 into the Citadel number pad.']
      ]},
      { h: 'Brutus 115 code', steps: [
        ['Shock 115 into the number pad in Afterlife.']
      ]},
      { h: 'Jump scare', steps: [
        ['On the roof, aim a scoped sniper at the fireworks on the left side.', ['pictures/jumpscare/fireworks.webp|Fireworks']]
      ]}
    ]}
  ]
});

M({
  id: 'buried', name: 'Buried', group: 'dlc', pack: 'DLC 3 · Vengeance',
  main: 'Mined Games',
  blurb: 'An old western town underground. Leroy the giant, the Paralyzer, Time Bombs and a haunted mansion.',
  img: '',
  guide: 'https://margwa.net/buried',
  wiki: 'https://callofduty.fandom.com/wiki/Buried',
  settings: [
    { id: 'side', label: 'Side you are doing', opts: [['maxis', 'Maxis'], ['rich', 'Richtofen']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Before you start', note: 'Needs 4 players. Have Galvaknuckles and Time Bombs handy; Vulture Aid makes the wisp visible.', steps: [
        ['Free Leroy (the giant) and feed him candy at a workbench to help build items; booze makes him break barricades.']
      ]},
      { h: 'Maxis side', w: { side: ['maxis'] }, steps: [
        ['Build the Gallows by the Courthouse from its parts.'],
        ['Build a Turbine and the Subsurface Resonator and destroy the four red orbs: between the saloon and candy shop, left side outside the church, in the caves, back right of the mansion.'],
        ['Throw a grenade at the floating purple lantern in town and pick it up.'],
        ['Feed Leroy candy so he kills zombies near the lantern holder until Maxis speaks again.'],
        ['Long-jump from the saloon balcony to the Gunsmith roof and place the lantern in the glowing slot.'],
        ['Plant a Time Bomb first, then melee three cave signs with Galvaknuckles in the order the lantern\'s code gives.'],
        ['Kill zombies near the purple wisp to grow it and lead it to the Gallows. If it dies, rewind with the Time Bomb and redo the signs.'],
        ['Bells: one player watches the mansion switchboard (upstairs, by the couch); the others stand at the bells (candy shop upstairs, Courthouse desks, Barn loft) and ring when their light shows. Light all nine.'],
        ['Make a wish at the fountain, then all four shoot the targets at the mansion, Courthouse, saloon upstairs and jail at the same time.']
      ], rec: [{ id: 'signsM', at: 5, label: 'Cave sign order', type: 'text', ph: 'e.g. Dry Gulcher Shaft, Consumption Cross, Bone Orchard Vein' }] },
      { h: 'Richtofen side', w: { side: ['rich'] }, steps: [
        ['Build the Guillotine by the saloon (crystal in the caves, satellite on the saloon balcony, wire in the Gunsmith, antenna in the stables hay).'],
        ['Turn the four red orbs with the Paralyzer (same spots as Maxis).'],
        ['Knock down the lantern; the holder kills 10 ghosts in the mansion. Place it on the Gunsmith roof.'],
        ['Melee the cave signs with Galvaknuckles in the lantern\'s order.'],
        ['With Vulture Aid, walk into the wisp to push it toward the Guillotine (15 s to catch it after each move).'],
        ['Kill five glowing zombies near the Guillotine.'],
        ['Throw a Time Bomb on the Guillotine and trigger it with everyone nearby to enter round ∞. Search the four player bodies for the switch, then place it on the Guillotine.'],
        ['Find which of the four maze door switches are correct (they spark only after the last one). Everyone leaves the maze to reset a wrong attempt.'],
        ['Make a wish at the fountain and shoot the targets together.']
      ], rec: [
        { id: 'signsR', at: 3, label: 'Cave sign order', type: 'text', ph: 'Signs in order' },
        { id: 'switchBody', at: 6, label: 'Body that had the switch', type: 'text', ph: 'Where it was' },
        { id: 'mazeLevers', at: 7, label: 'Maze switches that worked', type: 'multi', opts: ['Switch 1', 'Switch 2', 'Switch 3', 'Switch 4'] }
      ] },
      { h: 'Super Easter egg', steps: [
        ['Finish the same side on TranZit, Die Rise and Buried, insert all three Navcards, then use the box behind the Courthouse.']
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Always Running"', steps: [
        ['Interact with three teddy bears: on hay by Quick Revive at the mine entrance, in a candy barrel in the candy shop, in the mansion\'s Double Tap room.']
      ]},
      { h: 'Piano ghost (free perk)', steps: [
        ['Hit a bullseye on the saloon dartboard with a Ballistic Knife. Go out the back of the mansion to find the ghost playing, and tip him 10 points.']
      ]},
      { h: 'Mansion ghosts (free perks)', steps: [
        ['Clear all mansion ghosts when the windows are lit (every 5 rounds) for a perk bottle. A Time Bomb can rewind for a second bottle.']
      ]},
      { h: 'Custom wallbuys', steps: [
        ['Place weapon chalk on the marked wall spots for points (1,000 each, 2,000 for the last).']
      ]},
      { h: 'Bank & locker', steps: [
        ['The bank and weapon locker are shared with TranZit and Die Rise.']
      ]}
    ]}
  ]
});

M({
  id: 'origins', name: 'Origins', group: 'dlc', pack: 'DLC 4 · Apocalypse',
  main: 'Little Lost Girl',
  blurb: 'The original 2013 release. WWI France with giant robots. Four elemental staffs, generators, the Maxis drone and Samantha.',
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
