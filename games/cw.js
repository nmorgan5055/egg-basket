EB.register('cw', (function () {
  const MAPS = [];
  function M(m) { MAPS.push(m); }
M({
  id: 'dm', name: 'Die Maschine', group: 'base', pack: 'Base game',
  main: 'Seal the Deal',
  blurb: 'Nacht der Untoten\'s bunker, rebuilt above a particle accelerator. The D.I.E., the Dark Aether and Orlov.',
  img: 'https://mmmrkennedy.com/games/BO_CW/die_maschine/',
  guide: 'https://mmmrkennedy.com/games/BO_CW/die_maschine/die_maschine_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Die_Maschine',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'D.I.E. Shockwave', note: "Rated 4/10 solo, 40–60 minutes. Turn on power and Pack-a-Punch first.", steps: [
        ["Kill a Megaton for the Keycard and open the Weapons Lab locker for the D.I.E. Remote Control.", ['pictures/die/shockwave/keycard.webp|Keycard', 'pictures/die/shockwave/weapon_locker.webp|Weapon locker']],
        ["Activate the D.I.E. at the Living Room broken wall; when it's sucked in enough Zombies, use it again to blast the door. Take the Shockwave.", ['pictures/die/shockwave/brokenwall.webp|Broken wall', 'pictures/die/shockwave/pickup.webp|Pickup']]
      ]},
      { h: 'Der Wechsler\'s computer', steps: [
        ["In the Dark Aether, collect the three Aetherscope parts (Particle Accelerator, Yard stairs, Crash Site cockpit) and build it behind PaP.", ['pictures/main_ee/activate_the_der_wechslers_computer/scope_accelerator.webp|Part 1', 'pictures/main_ee/activate_the_der_wechslers_computer/scope_crashsite.webp|Part 3', 'pictures/main_ee/activate_the_der_wechslers_computer/scope_bench.webp|Workbench']],
        ["Enter the Medical Bay anomaly and take Dr. Vogel's Diary upstairs.", ['pictures/main_ee/activate_the_der_wechslers_computer/reflect_anomaly.webp|Anomaly', 'pictures/main_ee/activate_the_der_wechslers_computer/reflect_book.webp|Diary']],
        ["Activate and hand the book to the three Spectral Reflections in order: behind Speed Cola, Control Room podiums, in front of the Aetherscope bench. Then use the computer.", ['pictures/main_ee/activate_the_der_wechslers_computer/reflect_1.webp|Reflection 1', 'pictures/main_ee/activate_the_der_wechslers_computer/reflect_2.webp|Reflection 2', 'pictures/main_ee/activate_the_der_wechslers_computer/reflect_comp.webp|Computer']]
      ]},
      { h: 'D.I.E. upgrades', steps: [
        ["Nova-5: D.I.E.-pull the Mezzanine canister, put it in the Weapons Lab cleaning unit, kill a Plaguehound nearby, then take it to the Crash Site crate.", ['pictures/die/nova_5/canister.webp|Canister', 'pictures/die/nova_5/canisterunit.webp|Cleaning unit', 'pictures/die/nova_5/nova_crate.webp|Crate']],
        ["Cryo Emitter: shoot the Penthouse crate for the flask, get a Megaton to hit the Pond tree fungus, fill the flask under it (60 s), then the Medical Bay crate.", ['pictures/die/cryo_emitter/flaskbox_unbroken.webp|Crate', 'pictures/die/cryo_emitter/activated_fungus.webp|Purple fungus', 'pictures/die/cryo_emitter/cryo_crate.webp|Medical Bay crate']],
        ["Electrobolt (after the computer): enter the lowest Particle Accelerator anomaly. With base Shockwave alt-fire, carry energy from each glowing crystal (by Jug, Wunderfizz, Pond box) to the crate.", ['pictures/die/electrobolt/elec_portal.webp|Anomaly', 'pictures/die/electrobolt/elec_jug_rock.webp|Crystal', 'pictures/die/electrobolt/elec_crate.webp|Crate']],
        ["Thermophasic (after the computer): enter the Pond anomaly, take the fuse by the Crash Site portal, put it in the Weapons Lab plasma cutter, then the Pond crate.", ['pictures/die/thermophasic/fuse_crashsite.webp|Fuse box', 'pictures/die/thermophasic/plasmacutter.webp|Plasma cutter', 'pictures/die/thermophasic/firebox.webp|Pond crate']]
      ]},
      { h: 'Creating Orlov', steps: [
        ["Shoot each Medical Bay port with its colour: green Nova-5, blue Cryo, yellow Electrobolt, orange Thermophasic.", ['pictures/main_ee/creating_orlov/port_green.webp|Green', 'pictures/main_ee/creating_orlov/port_blue.webp|Blue', 'pictures/main_ee/creating_orlov/port_orange.webp|Orange']],
        ["Watch the reflection above Speed Cola in the Dark Aether, then grab the Dark Aether Wrench there.", ['pictures/main_ee/creating_orlov/wrench.webp|Wrench']],
        ["Interact with the Yard tank three times, kill the Zombie and throw an explosive into the hatch.", ['pictures/main_ee/creating_orlov/tank.webp|Tank']],
        ["Carry the Decontamination Agent from the Crash Site to the Medical Bay containment unit (no sprint, mantle or fast travel).", ['pictures/main_ee/creating_orlov/agent_floor.webp|Agent', 'pictures/main_ee/creating_orlov/containment_unit.webp|Containment unit']],
        ["Split a Megaton and lead both halves under the ceiling machine. Use the computer for the cutscene.", ['pictures/main_ee/creating_orlov/machine.webp|Machine']]
      ]},
      { h: 'Escape', steps: [
        ["Enter the Living Room anomaly, use the reflection by the M1911, then take the family photo to start the end.", ['pictures/main_ee/boss_fight/final_orlov_portal.webp|Anomaly']],
        ["Protect Orlov while he works. Then you have 90 s: Weapons Lab → Control Room → Tunnel → Crash Site → Pond chopper, avoiding the beams."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Alone"', steps: [
        ["Three tapes: Living Room fridge, Medical Bay shelf, Particle Accelerator machinery.", ['pictures/song_ee/tape1.webp|Tape 1', 'pictures/song_ee/tape2.webp|Tape 2', 'pictures/song_ee/tape3.webp|Tape 3']]
      ]},
      { h: 'Coffin Dance (free Jug + loot)', steps: [
        ["Shoot the five orbs in the Particle Accelerator.", ['pictures/free_jug/orb1.webp|Orb 1', 'pictures/free_jug/orb3.webp|Orb 3', 'pictures/free_jug/orb5.webp|Orb 5']]
      ]},
      { h: 'Free Legendary upgrade', steps: [
        ["In the Dark Aether, shoot the four red Medical Bay hallway buttons with a PaP'd gun, then the button by the green door. Let Orda's hand get 15 kills.", ['pictures/free_legendary_upgrade/hallway.webp|Hallway', 'pictures/free_legendary_upgrade/buttontorightofglowingdoor.webp|Button']]
      ]},
      { h: 'Free scorestreak / jumpscare', steps: [
        ["In the Dark Aether, shoot the floating Zombie at its random spot, then the one over the Pond (stand under it instead for the jumpscare).", ['pictures/free_scorestreak/pond_final.webp|Pond Zombie']]
      ]},
      { h: 'Free 1,500 Essence', steps: [
        ["With Dead Wire, turn the three satellite dishes toward the Penthouse antenna for essence canisters.", ['pictures/free_essence/penthouse.webp|Antenna', 'pictures/free_essence/essence_canisters.webp|Canisters']]
      ]}
    ]}
  ]
});

M({
  id: 'fbz', name: 'Firebase Z', group: 'dlc', pack: 'Season 1',
  main: 'Maxis Potential',
  blurb: 'A Vietnam-era Omega base. The RAI K-84, Mimics, Peck and Ravenov, and a fight with Orda.',
  img: 'https://mmmrkennedy.com/games/BO_CW/firebase_z/',
  guide: 'https://mmmrkennedy.com/games/BO_CW/firebase_z/firebase_z_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Firebase_Z',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'RAI K-84', note: "Rated 4/10 solo, 40–60 minutes. Unlock Pack-a-Punch first.", steps: [
        ["Take the blueprint in the Weapon Lab and the eye from the Scorched Defense tank corpse.", ['pictures/raik84/blueprint.webp|Blueprint', 'pictures/raik84/tank_body.webp|Tank corpse']],
        ["Use the retina scanner for the locker key and open Barracks lockers (kill the Mimics) for the Barrel Assembly.", ['pictures/raik84/scanner.webp|Scanner', 'pictures/raik84/mimic_locker.webp|Locker']],
        ["Kill Manglers for the power cell; charge it at the Weapon Lab computer for a full round.", ['pictures/raik84/power_cell.webp|Power cell']],
        ["Note the three numbers the computer's triangle stops on, shoot them on the Village dartboard, then the bullseye. Craft the gun where the blueprint was.", ['pictures/raik84/dartboard_ref_new_numbered.webp|Dartboard reference', 'pictures/raik84/aetherium_converter.webp|Converter']]
      ], rec: [{ id: 'dart', at: 3, label: 'Dartboard numbers', type: 'nums', n: 3 }] },
      { h: 'Creating the Serum', steps: [
        ["Talk to Ravenov (Atrium), Peck (Mission Control), then Ravenov for his ID badge.", ['pictures/main_ee/prerequisites/pecksroom.webp|Peck\'s room']],
        ["Open the three compound lockers: Equipment Storage, Engineering, Colonel's Office.", ['pictures/main_ee/creating_the_serum/chem_spawn.webp|Locker 1', 'pictures/main_ee/creating_the_serum/chem_eng.webp|Locker 2', 'pictures/main_ee/creating_the_serum/chem_office.webp|Locker 3']],
        ["Use the Field Hospital mixer (kill the hounds), take the Agent Delivery System and put it in the OPC air conditioner.", ['pictures/main_ee/creating_the_serum/chem_mixer.webp|Mixer', 'pictures/main_ee/creating_the_serum/chem_acunit.webp|AC unit']]
      ]},
      { h: 'Mimic memories', steps: [
        ["Keep talking to Peck until Weaver says \"Alright, Peck.\" Take an Essence Trap from the Data Center station.", ['pictures/main_ee/collect_the_mimic_memories/mimic_trapstation.webp|Trap station']],
        ["Find the hidden Mimic (Motor Pool, the Bridge above Jug, or Peck's Quarters), drop it to ~10% and trap it. Deposit within 3 minutes.", ['pictures/main_ee/collect_the_mimic_memories/mimic_motorpool.webp|Motor Pool', 'pictures/main_ee/collect_the_mimic_memories/mimic_jugroom.webp|Jug room', 'pictures/main_ee/collect_the_mimic_memories/mimic_spawnlocation.webp|Peck\'s Quarters']],
        ["Repeat until Brahms, Sokolov and Zhabin have all spoken; take the floppy disk."]
      ], rec: [{ id: 'voices', at: 2, label: 'Voices collected', type: 'multi', opts: ['Brahms', 'Sokolov', 'Zhabin'] }] },
      { h: 'Stabilize the Breach', steps: [
        ["Put the disk in the Planning Office computer and enter the OPC. When the PA warns, talk to Peck; Ravenov gives a code for the locker by Peck's room (Aethermeter).", ['pictures/main_ee/stabilize_the_breach/breach_floppyinsert.webp|Disk', 'pictures/main_ee/stabilize_the_breach/locker_peck.webp|Locker']],
        ["Take the shovel from the Scorched Defence bunker.", ['pictures/main_ee/stabilize_the_breach/shovel.webp|Shovel']],
        ["Open Lot: dig up the container, then pick the copy without black particles.", ['pictures/main_ee/stabilize_the_breach/container_noblack.webp|Correct container', 'pictures/main_ee/stabilize_the_breach/container_black.webp|Wrong container']],
        ["Jungle Defence: dig the middle-lane container during the defence and survive the dome.", ['pictures/main_ee/stabilize_the_breach/container_jungle.webp|Jungle container']],
        ["Barracks: dig by the Field Hospital door and pin the teleporting container with RAI K-84 alt fire.", ['pictures/main_ee/stabilize_the_breach/container_hospital.webp|Hospital container']],
        ["Put the crystals in the three reactors (Military Command, Mission Control, Data Center).", ['pictures/main_ee/stabilize_the_breach/container_militarycommand.webp|Military Command', 'pictures/main_ee/stabilize_the_breach/container_datacenter.webp|Data Center']],
        ["On the Planning Office computer pick the yellow question mark (not a flag), then use the OPC terminal.", ['pictures/main_ee/stabilize_the_breach/sat.webp|Satellite', 'pictures/main_ee/stabilize_the_breach/terminal.webp|Terminal']]
      ]},
      { h: 'Orda', steps: [
        ["Shoot Orda down; its mouth is a crit spot when it glows orange. Dodge the arm slam."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Lost"', steps: [
        ["Three tapes: Scientist Quarters bookshelf, Equipment Storage shelf, Motor Pool Office.", ['pictures/song_ee/tape1.webp|Tape 1', 'pictures/song_ee/tape2.webp|Tape 2', 'pictures/song_ee/tape3.webp|Tape 3']]
      ]},
      { h: 'Bunny (free loot)', steps: [
        ["Stare at the plush bunny above the Atrium Wunderfizz, then shoot the floating bunny three times in the Dark Aether.", ['pictures/loot_ee/bunny.webp|Bunny']]
      ]},
      { h: 'Free perk', steps: [
        ["Put a severed head on the Field Hospital charging plate, then a trapped Zombie beside it. Open the Colonel's Office floor safe.", ['pictures/free_perk/charging_plate.webp|Charging plate', 'pictures/free_perk/safe.webp|Safe']]
      ]},
      { h: 'Free jump pads', steps: [
        ["Use all six pads, then shoot the green-light pad and enter each arrow sequence (see the guide).", ['pictures/free_jump_pads/greenlight.webp|Green light']]
      ]},
      { h: 'Upgraded Monkey Bombs', steps: [
        ["Get 50 Monkey Bomb kills near any Aether Reactor."]
      ]}
    ]}
  ]
});

M({
  id: 'outbreak', name: 'Outbreak', group: 'dlc', pack: 'Season 2',
  main: 'Ravenov Implications / Operation Excision',
  blurb: 'Open-world regions linked by the Beacon. Two main quests, plus "The Pact" super egg.',
  img: 'https://mmmrkennedy.com/games/BO_CW/outbreak/',
  guide: 'https://mmmrkennedy.com/games/BO_CW/outbreak/outbreak_CW_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Outbreak_(Black_Ops_Cold_War)',
  settings: [
    { id: 'q', label: 'Quest', opts: [['rav', 'Ravenov Implications'], ['exc', 'Operation Excision']] }
  ],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Ravenov Implications', w: { q: ['rav'] }, note: "Rated 8/10 solo, 1–1.5 hours. An M16, Frenzied Guard and a Death Machine for the boss help.", steps: [
        ["Round 1: pick warp at the Beacon, then shoot/melee it until it leans over (skips to round 3). Skip Ruka if it's next."],
        ["Use the region's radio. Note the number in the subtitles and set the three nearby amplifiers to it. Use the radio again for the Listening Device.", ['pictures/main_quest_ravenov/radio.webp|Radio', 'pictures/main_quest_ravenov/amplifier.webp|Amplifier', 'pictures/main_quest_ravenov/obtain_listening_beacon/beacon_listening_device.webp|Listening Device']],
        ["Respond at the Beacon and warp. Shoot Stone Monkey statues (look by a wall with an M) for the microfilm, and play it at a projector three times.", ['pictures/main_quest_ravenov/obtain_microfilm/microfilm_slide.webp|Microfilm', 'pictures/main_quest_ravenov/obtain_microfilm/projector.webp|Projector']],
        ["In Ruka, go down Silo A and use \"Lift the Lockdown\".", []],
        ["Silo A key: Essence Trap from the dead-end tunnel; trap the Aether Monkey by the vent.", ['pictures/main_quest_ravenov/launch_keys/aether_monkey_vents.webp|Monkey vent']],
        ["Silo B key: shoot 20 Aetherium chunks off the walls, deposit them, survive. Use the canister as a field upgrade on the stairs by the big jellyfish to get its key.", ['pictures/main_quest_ravenov/launch_keys/aetherium_harvesting_unit.webp|Harvesting unit', 'pictures/main_quest_ravenov/launch_keys/large_jellyfish.webp|Jellyfish', 'pictures/main_quest_ravenov/launch_keys/stand_here.webp|Stand here']],
        ["Silo C key: kill the TV/plant Mimics, then the HVT Ruzarkon from the hallway corpse.", ['pictures/main_quest_ravenov/launch_keys/mimic_hallway.webp|Hallway']],
        ["Launch the missiles in the order the green lights under each keyhole show.", ['pictures/main_quest_ravenov/launch_keys/control_panel_three_lights.webp|Lights']],
        ["Legion (10 minutes): break its chest to stun it, then damage the three orbs evenly."]
      ], rec: [
        { id: 'amp', at: 1, label: 'Amplifier number', type: 'nums', n: 1 },
        { id: 'silo', at: 7, label: 'Launch order', type: 'seq', n: 3, opts: ['Silo A', 'Silo B', 'Silo C'] }
      ] },
      { h: 'Operation Excision', w: { q: ['exc'] }, note: "Rated 3/10 solo, 30–45 minutes.", steps: [
        ["Skip to round 3 with the Beacon (round 4 if round 3 is Sanatorium)."],
        ["Fly through the chain of red rifts and follow the light to the Listening Device. Respond and warp.", ['pictures/main_quest_operation/red_rift.webp|Red rift', 'pictures/main_quest_operation/beacon_listening_device.webp|Listening Device']],
        ["Sanatorium: clear the crashed helicopter and take the Omega recording.", ['pictures/main_quest_operation/crashed_heli.webp|Helicopter']],
        ["Shoot the red orb toward the Rover. Win the bunny at the broken Mystery Box and load it in the Rover.", ['pictures/main_quest_operation/red_orb.webp|Red orb', 'pictures/main_quest_operation/broken_box.webp|Broken box', 'pictures/main_quest_operation/rover.webp|Rover']],
        ["Escort the Rover to Monument Walk, use the rooftop recording, kill Orda within 5:20 and board the chopper.", ['pictures/main_quest_operation/monument_walk.webp|Monument Walk']]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'D.I.E. upgrade boxes', steps: [
        ["Electrobolt (Duga array), Nova-5 (Golova silo), Cryo (Alpine frozen pond), Thermophasic (Ruka Burnt Forest).", ['pictures/die/electro_box_map.webp|Duga', 'pictures/die/nova_box_map.webp|Golova', 'pictures/die/cryo_map.webp|Alpine']]
      ]},
      { h: '"The Pact" super egg', steps: [
        ["After two Easter eggs (any maps), use the region's mask to go to Zoo and use the Ritual Site. Your starting gun's rarity rises with eggs completed.", ['pictures/pact/ritual_site.webp|Ritual Site', 'pictures/pact/golova_mask.webp|Mask example']]
      ]}
    ]}
  ]
});

M({
  id: 'mauer', name: 'Mauer der Toten', group: 'dlc', pack: 'Season 3',
  main: 'Tin Man Heart',
  blurb: 'Berlin by the Wall. Klaus the robot, the CRBR-S and Valentina.',
  img: 'https://mmmrkennedy.com/games/BO_CW/mauer_der_toten/',
  guide: 'https://mmmrkennedy.com/games/BO_CW/mauer_der_toten/mauer_der_toten_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Mauer_der_Toten',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Klaus', note: "Rated 5/10 solo, 40–60 minutes. Power and Pack-a-Punch first.", steps: [
        ["With Brain Rot, turn a Zombie by the Hotel Room 305 barricade; take the Robotic Hands from the bed corpse.", ['pictures/klaus_ee/barricadeddoor.webp|Barricade', 'pictures/klaus_ee/corpse.webp|Corpse']],
        ["Kill a Krasny Soldat (~round 10+) for the battery and install both on Klaus in the Safe House.", ['pictures/klaus_ee/battery.webp|Battery', 'pictures/klaus_ee/klaussitting.webp|Klaus']]
      ]},
      { h: 'CRBR-S', steps: [
        ["Send Klaus to open the Switch Control Room locker; take the Blacklight.", ['pictures/klaus_ee/locker.webp|Locker']],
        ["Find the blue numbers: Garment Factory (dial 1), Service Passage (dial 2), Grocery Store (dial 3).", ['pictures/cbrss/garment_chalkboard.webp|Garment', 'pictures/cbrss/passage_doorway.webp|Passage', 'pictures/cbrss/store_shelf.webp|Store']],
        ["Enter them on the Room 305 safe and take the CRBR-S.", ['pictures/cbrss/closedsafe.webp|Safe']]
      ], rec: [{ id: 'safe', at: [1, 2], label: 'Safe dials', type: 'nums', n: 3 }] },
      { h: 'Secret Lab', steps: [
        ["Shoot the three Hacking Helm parts with the CRBR-S: rooftop radio tower, Ghost Station box, Electronics Store boombox. Craft it on Klaus.", ['pictures/main_ee/helm_rooftop.webp|Rooftop', 'pictures/main_ee/helm_station.webp|Ghost Station', 'pictures/main_ee/helm_store_loc1.webp|Boombox']],
        ["Order Klaus to break the Sewer Access brick wall, then melt the metal wall with the Blazer variant.", ['pictures/main_ee/brickwall.webp|Brick wall']],
        ["Enter the lab (Tormentor round next) and take the three empty canisters from the Conversion Unit.", ['pictures/main_ee/conversionunit.webp|Conversion Unit']],
        ["CRBR-S the lure machine for the Endstation Lure.", ['pictures/main_ee/luremachine.webp|Lure machine']],
        ["For each canister: put it in a harvester (three of seven spawn), throw the lure, kill the Tempests nearby, and deposit it.", ['pictures/main_ee/harvesters_westberlin.webp|West Berlin', 'pictures/main_ee/harvesters_penthouse.webp|Penthouse', 'pictures/main_ee/harvesters_eastberlin.webp|East Berlin']]
      ], rec: [{ id: 'cans', at: 4, label: 'Canisters filled (of 3)', type: 'nums', n: 1 }] },
      { h: 'Upgrade Klaus', steps: [
        ["Dig the Microwave Dish out of the Death Strip debris and install it at the Garment Factory station. Let Klaus get ~45 kills, then defend him in the station.", ['pictures/klaus_ee/dish.webp|Dish', 'pictures/klaus_ee/upgradestation.webp|Station', 'pictures/klaus_ee/monitor.webp|Green monitor']],
        ["Get another Blacklight; find the two electrical boxes with the Klaus symbol and have him open them for floppies. Insert each at the station.", ['pictures/klaus_ee/apartments.webp|Box example', 'pictures/klaus_ee/ghoststation.webp|Box example']]
      ]},
      { h: 'Train & uranium', steps: [
        ["Flip the Switch Control Room railway switch and park upgraded Klaus on the track by the M16. Grab Rico's keycard and the bomb from the train.", ['pictures/main_ee/railwayswitch.webp|Switch', 'pictures/main_ee/klaus_on_tracks.webp|Klaus on tracks', 'pictures/main_ee/train_bomb.webp|Bomb']],
        ["Put the bomb in the Conversion Unit and use the Safe House computer. Kill the HVT Megaton for two uranium rocks.", ['pictures/main_ee/safehouse_computer.webp|Computer']],
        ["Craft a device at a workbench and hang it on the Penthouse zipline; the other goes on the Korber zipline. Return the Cleansed Uranium.", ['pictures/main_ee/penthouse_zipline.webp|Penthouse zipline', 'pictures/main_ee/korber_zipline.webp|Korber zipline']]
      ]},
      { h: 'Valentina', steps: [
        ["Damage her until immune; she moves through four areas. Hide from her blue wipe, outrun the orange crystals and kill the healing floaters."],
        ["At zero health, protect Klaus as he walks the bomb into the portal."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Song: "Amoeba"', steps: [
        ["Three tapes: Garment Factory mannequin, Electronics Store shelf, Blasted Suite vase.", ['pictures/song_ee/tape1.webp|Tape 1', 'pictures/song_ee/tape2.webp|Tape 2', 'pictures/song_ee/tape3.webp|Tape 3']]
      ]},
      { h: 'Free Aether Tool', steps: [
        ["On the Apartment Rooftop use the folder, then shoot: Königshaus sign, its windows, Korber sign, Der Dozent windows, Der Dozent sign.", ['pictures/aether_tool_ee/folder.webp|Folder', 'pictures/aether_tool_ee/target1_zoomout.webp|Targets']]
      ]},
      { h: "Mister Peeks' nightclub", steps: [
        ["Collect the six bunny pieces and survive three waves in the nightclub for a reward door.", ['pictures/nightclub_ee/sewer.webp|Piece', 'pictures/nightclub_ee/bunny_window.webp|Return window']]
      ]},
      { h: 'Free loot', steps: [
        ["Throw explosives into the East Berlin sewer hole (three times a game).", ['pictures/gersh_device_ee/hole.webp|Hole']]
      ]}
    ]}
  ]
});

M({
  id: 'forsaken', name: 'Forsaken', group: 'dlc', pack: 'Season 5',
  main: 'Pyrrhic Victory',
  blurb: 'Anytown, USA. The Chrysalax, the Aetherium Neutralizer and the end of the Dark Aether story.',
  img: 'https://mmmrkennedy.com/games/BO_CW/forsaken/',
  guide: 'https://mmmrkennedy.com/games/BO_CW/forsaken/forsaken_guide',
  wiki: 'https://callofduty.fandom.com/wiki/Forsaken',
  settings: [],
  tabs: [
    { id: 'main', label: 'Main Quest', main: true, sections: [
      { h: 'Chrysalax', note: "Rated 5/10 solo, 20–40 minutes. Unlock Pack-a-Punch and press the Observation Tower button first.", steps: [
        ["Press the Observation Tower button.", ['pictures/main_ee/button.webp|Button']],
        ["Tempered Crystal Heart: kill a Tormentor with the Flamethrower scorestreak.", ['pictures/chrysalax/heart.webp|Heart']],
        ["Energetic Geode: bait an Abomination's lightning (or a Tormentor) into a Dark Aether crystal.", ['pictures/chrysalax/dark_aether_crystal.webp|Crystal', 'pictures/chrysalax/geode.webp|Geode']],
        ["Polymorphic Core: two rounds after the button, clear three special waves at Jim's Donuts.", ['pictures/chrysalax/jimsdonuts_crystal.webp|Donut shop crystal']],
        ["Put them in the Particle Accelerator tub and get 10 melee kills nearby.", ['pictures/chrysalax/tub.webp|Tub', 'pictures/chrysalax/chrysalax.webp|Chrysalax']]
      ]},
      { h: 'Fuel Tank', steps: [
        ["Everyone uses the Fuel Processing tanks and survives the lockdown.", ['pictures/main_ee/processing_tanks.webp|Processing tanks', 'pictures/main_ee/fuel_tank.webp|Fuel Tank']],
        ["At each large crystal (Zone 5 rooftops, The Amplifier, Staging Area), shoot the three orbiting orbs and melee it with the Chrysalax.", ['pictures/main_ee/largecrystal_zone5.webp|Zone 5', 'pictures/main_ee/largecrystal_theamplifier.webp|Amplifier', 'pictures/main_ee/largecrystal_spawn.webp|Staging Area']],
        ["Throw the shard into the Abomination's mouth; kill it when its tail goes red. Three times.", ['pictures/main_ee/red_tail_abomination.webp|Red tail', 'pictures/main_ee/red_crystal_shard.webp|Catalyzed shard']]
      ]},
      { h: 'Monitoring Device & Housing Unit', steps: [
        ["With Dead Wire, shock a Zombie by the Grand Prix arcade machine and use a token. Drive the ARC-XD into the TV Store vent, park it between shelf and wall and detonate.", ['pictures/main_ee/grandprix_machine.webp|Arcade machine', 'pictures/main_ee/vent.webp|Vent', 'pictures/main_ee/monitoring_device.webp|Device']],
        ["In the Board Room, bait an Abomination to charge the wall under the ceiling Housing Unit.", ['pictures/main_ee/housingunit_celling.webp|Ceiling', 'pictures/main_ee/housing_unit_wall.webp|Wall']]
      ]},
      { h: 'Neutralizer & the Forsaken', steps: [
        ["Craft the Neutralizer on Main Street (by Tombstone). Escort it, fuelling it with shards from orange crystals, to the Containment Door.", ['pictures/main_ee/workbench.webp|Workbench', 'pictures/main_ee/orange_dark_aether_crystal.webp|Orange crystal']],
        ["Break the armour: a shoulder, the other shoulder, lower torso, head. Charge the cannons with kills in Sam's circle and fire at each weak spot."],
        ["Survive until the cutscene."]
      ]}
    ]},
    { id: 'side', label: 'Side Eggs', sections: [
      { h: 'Free Perkaholic', steps: [
        ["Blow the VHS off the Video Store shelf, play it in the TV Store and win Simon Says (4, 8, 12).", ['pictures/perkaholic/vhs_location.webp|VHS', 'pictures/perkaholic/vhs_four_tvs.webp|TVs']],
        ["Buy Tombstone, use the green TV, Tombstone Shadow in the Amplifier, shoot the glowing-eyed copies of the entity, then revive.", ['pictures/perkaholic/entity.webp|Entity']]
      ]},
      { h: 'Song: "Samantha\'s Ballad"', steps: [
        ["PhD Slider across the three scorched floors for the Aether Bunny, put it in Bubby and defend.", ['pictures/song_ee/bubby.webp|Bubby', 'pictures/song_ee/cassette_tape.webp|Tape']]
      ]},
      { h: 'Rarity upgrades & extras', steps: [
        ["Pistol (Records store, 18 targets), sniper (Video Store roof, 15), SMG (Beach Pizza and Storage Zone 10, 16).", ['pictures/free_legendary/pistol_blueprint.webp|Pistol blueprint', 'pictures/free_legendary/sniper_blueprint.webp|Sniper blueprint']],
        ["Pizza delivery for Ronald Raygun (Aether Shroud).", ['pictures/free_ray_gun/stack_of_boxes.webp|Pizza boxes']],
        ["Anytown Grand Prix with PhD Slider and a token.", ['pictures/grand_prix/grandprix_arcade_machine_bar.webp|Bar machine']]
      ]}
    ]}
  ]
});

  return { maps: MAPS };
})());
